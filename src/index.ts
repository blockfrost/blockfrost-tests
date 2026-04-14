import 'dotenv/config';
import openApiJsonSchema from '@blockfrost/openapi/json-schema.json' with { type: 'json' };
import { test, describe, expect, onTestFailed } from 'vitest';
import { noCase } from 'change-case';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import got, { ExtendOptions, Got } from 'got';
import { Fixture } from './types/index.js';
import { createRouter } from 'radix3';
import { normalizePath } from './utils.js';
import { getConfig } from './config.js';

const apiEndpointsKeys = Object.keys(openApiJsonSchema);
const router = createRouter<{ pattern: string }>();

apiEndpointsKeys.map(path => {
  const normalizedPath = normalizePath(path);

  router.insert(normalizedPath, { pattern: normalizedPath });
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.resolve(__dirname, '../endpoints-allowlist.json');
const ignorelistFilePath = path.resolve(__dirname, '../endpoints-ignorelist.json');

export const DEFAULT_TEST_TIMEOUT = 15_000;

const envConfig = getConfig();

let endpointsAllowlist: string[] | undefined;

try {
  const rawData = fs.readFileSync(filePath, 'utf8');
  let parsed: string[];

  try {
    parsed = JSON.parse(rawData);
  } catch (parseError: unknown) {
    const message = parseError instanceof Error ? parseError.message : String(parseError);

    throw new Error(`endpoints-allowlist.json is not a valid json: ${message}`);
  }

  endpointsAllowlist = parsed.map(endpoint => {
    return endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  });
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);

  throw new Error(`Error loading endpoints-allowlist.json: ${message}`);
}

export type IgnoreRule = {
  id?: string;
};

const loadIgnorelist = (filePath: string): IgnoreRule[] => {
  if (!fs.existsSync(filePath)) {
    return [];
  }

  const network = envConfig.network;

  try {
    const rawData = fs.readFileSync(filePath, 'utf8');
    const parsed: unknown = JSON.parse(rawData);

    if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
      throw new Error(`Expected ${path.basename(filePath)} to be a JSON object keyed by network.`);
    }

    if (!network) {
      return [];
    }

    const entries = (parsed as Record<string, IgnoreRule[]>)[network];

    if (!entries) {
      return [];
    }

    if (!Array.isArray(entries)) {
      throw new Error(`Expected ${path.basename(filePath)}["${network}"] to be an array.`);
    }

    return entries;
  } catch (parseError: unknown) {
    const message = parseError instanceof Error ? parseError.message : String(parseError);

    throw new Error(`${path.basename(filePath)} is not a valid json: ${message}`);
  }
};

const ignorelist = loadIgnorelist(ignorelistFilePath);

export const isUrlMatch = (urlParameter: string, allowlistPattern: string) => {
  try {
    const normalizedUrl = normalizePath(urlParameter);
    const matchedRoute = router.lookup(normalizedUrl);

    if (!matchedRoute) return false;

    const normalizedPattern = normalizePath(allowlistPattern);

    if (normalizedUrl === normalizedPattern) return true;

    return matchedRoute.pattern === normalizedPattern;
  } catch {
    return false;
  }
};

export const getInstance = (clientOptions?: ExtendOptions): Got => {
  const DEFAULT_HEADERS = envConfig.projectId ? { project_id: envConfig.projectId } : {};

  return got.extend({
    responseType: 'json',
    prefixUrl: envConfig.serverUrl,
    https: { rejectUnauthorized: false },
    ...clientOptions,
    headers: { ...DEFAULT_HEADERS, ...clientOptions?.headers },
  });
};

const skippedTests: { id: string; testName: string; endpoint: string; reason: string }[] = [];

export const matchesIgnoreRule = (fixture: Fixture, rule: IgnoreRule) => {
  if (rule.id !== undefined) return rule.id === fixture.id;

  return false;
};

export const isTestIgnored = (fixture: Fixture, ignorelist: IgnoreRule[]) =>
  ignorelist.some(rule => matchesIgnoreRule(fixture, rule));

export const shouldRunTest = (fixture: Fixture, ignorelist: IgnoreRule[]) => {
  if (isTestIgnored(fixture, ignorelist)) {
    return false;
  }

  if (!endpointsAllowlist || endpointsAllowlist.length === 0) {
    return true;
  }

  return fixture.endpoints.some(endpoint =>
    endpointsAllowlist.some(pattern => isUrlMatch(endpoint, pattern)),
  );
};

const generateTestFromFixture = (fixture: Fixture, endpoint: string, ignorelist: IgnoreRule[]) => {
  const ignored = isTestIgnored(fixture, ignorelist);

  // In IGNORELIST_ONLY mode, only run tests that are on the ignorelist.
  // This is used by CI to verify tests on the ignorelist still fail.
  const shouldGenerate = envConfig.ignorelistOnly
    ? ignored
    : !ignored && shouldRunTest(fixture, ignorelist);

  if (shouldGenerate) {
    generateTest(fixture, endpoint);
  } else {
    const reason = envConfig.ignorelistOnly
      ? `Not on the ignorelist (IGNORELIST_ONLY mode)`
      : ignored
        ? `On the ignorelist (id: "${fixture.id}")`
        : `Not in allowlist`;

    skippedTests.push({ id: fixture.id, testName: fixture.testName, endpoint, reason });
  }
};

export const getClientForFixture = (fixture: Pick<Fixture, 'clientOptions' | 'headers'>) => {
  return getInstance({
    ...fixture.clientOptions,
    ...(fixture.headers ? { headers: fixture.headers } : {}),
  });
};

const makeRequest = async (
  fixture: Pick<Fixture, 'postBody' | 'clientOptions' | 'headers'>,
  endpoint: string,
): Promise<{
  data: unknown;
  headers: Record<string, string | string[] | undefined>;
  time_elapsed: number;
}> => {
  const start = performance.now();
  const client = getClientForFixture(fixture);
  const request = fixture.postBody
    ? client.post(endpoint, { body: fixture.postBody })
    : client.get(endpoint);

  const [data, response] = await Promise.all([request.json(), request]);
  const end = performance.now();

  return { data, headers: response.headers, time_elapsed: end - start };
};

const printIgnoredTests = () => {
  if (skippedTests.length === 0) return;

  const ignored = skippedTests.filter(t => t.reason.startsWith('On the ignorelist'));
  const notInAllowlist = skippedTests.filter(t => !t.reason.startsWith('On the ignorelist'));

  const lines: string[] = [];

  lines.push('');
  lines.push(`  Skipped tests: ${skippedTests.length} total`);
  lines.push('  ' + '─'.repeat(60));

  if (ignored.length > 0) {
    lines.push('');
    lines.push(`  Ignored (${ignored.length}):`);

    for (const t of ignored) {
      lines.push(`    ⊘ [${t.id}] ${t.testName} — ${t.endpoint}`);
    }
  }

  if (notInAllowlist.length > 0) {
    lines.push('');
    lines.push(`  Not in allowlist (${notInAllowlist.length}):`);

    for (const t of notInAllowlist) {
      lines.push(`    ⊘ [${t.id}] ${t.testName} — ${t.endpoint}`);
    }
  }

  lines.push('  ' + '─'.repeat(60));
  lines.push('');

  console.log(lines.join('\n'));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const generateTestSuite = (fixtures: any) => {
  for (const fixtureName of Object.keys(fixtures)) {
    const f = fixtures[fixtureName];

    describe(`${noCase(fixtureName)} endpoints`, () => {
      if (!f || f.length === 0) {
        // dummy test if tests are ignored
        test('should have at least one endpoint', () => {
          expect(1).toBe(1);
        });
      }

      for (const fixture of f) {
        for (const endpoint of fixture.endpoints) {
          generateTestFromFixture(fixture, endpoint, ignorelist);
        }
      }
    });
  }

  printIgnoredTests();
};

export const getPaginationFixtures = (
  url: string,
  options?: { fromToPagination?: { format: 'height' | 'height:index' } },
) => {
  const fromToFixtures = options?.fromToPagination
    ? [
        // from/to - invalid range
        {
          testName: `${url} pagination from/to range error`,
          type: 'from_to',
          endpoints:
            options.fromToPagination.format === 'height:index'
              ? [`${url}?from=999999999:0&to=1:0`]
              : [`${url}?from=999999999&to=1`],
          response: {
            status_code: 400,
            error: 'Bad Request',
            message: 'Invalid (malformed or out of range) from/to parameter(s).',
          },
        },
        // from/to - not integer
        {
          testName: `${url} pagination from/to format error`,
          type: 'from_to',
          endpoints: [`${url}?from=abc`],
          response: {
            status_code: 400,
            error: 'Bad Request',
            message: 'Invalid (malformed or out of range) from/to parameter(s).',
          },
        },
      ]
    : [];

  return [
    // order
    {
      testName: `${url} pagination order error`,
      type: 'order',
      endpoints: [`${url}?order=a`],
      response: {
        status_code: 400,
        error: 'Bad Request',
        message: 'querystring/order must be equal to one of the allowed values',
      },
    },
    // page
    {
      testName: `${url} pagination page error`,
      endpoints: [`${url}?page=x`],
      type: 'page',
      response: {
        status_code: 400,
        error: 'Bad Request',
        message: 'querystring/page must be integer',
      },
    },
    {
      testName: `${url}  pagination page error`,
      endpoints: [`${url}?page=0`],
      type: 'page',
      response: {
        status_code: 400,
        error: 'Bad Request',
        message: 'querystring/page must be >= 1',
      },
    },
    {
      testName: `${url} pagination page error`,
      endpoints: [`${url}?page=99999999999999`],
      type: 'page',
      response: {
        status_code: 400,
        error: 'Bad Request',
        message: 'querystring/page must be <= 21474836',
      },
    },
    // count
    {
      testName: `${url} pagination count error`,
      endpoints: [`${url}?count=x`],
      type: 'count',
      response: {
        status_code: 400,
        error: 'Bad Request',
        message: 'querystring/count must be integer',
      },
    },
    {
      testName: `${url} pagination count error`,
      endpoints: [`${url}?count=999999999999999`],
      type: 'count',
      response: {
        status_code: 400,
        error: 'Bad Request',
        message: 'querystring/count must be <= 100',
      },
    },
    {
      testName: `${url} pagination count error`,
      type: 'count',
      endpoints: [`${url}?count=0`],
      response: {
        status_code: 400,
        error: 'Bad Request',
        message: 'querystring/count must be >= 1',
      },
    },
    // from/to (optional)
    ...fromToFixtures,
  ] as const;
};

export const generateTest = (fixture: Fixture, endpoint: string) => {
  const timeout = fixture.customTimeout || DEFAULT_TEST_TIMEOUT;

  test(`[${fixture.testName}] - ${endpoint}`, { timeout, retry: fixture.retry }, async () => {
    onTestFailed(() => {
      console.log(`Failed fixture ID: ${fixture.id}`);
    });

    if (fixture.customTest) {
      // custom assertion defined within fixture
      const gotClient = getClientForFixture(fixture);

      await fixture.customTest(endpoint, gotClient, fixture.customTestParams);
      return;
    }

    let response: unknown;

    try {
      const { data } = await makeRequest(fixture, endpoint);

      response = data;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (!error.response) {
        // non backend error
        console.log('Thrown unexpected error', error);
        throw error;
      }

      if (fixture.customExpect) {
        await fixture.customExpect(error.response.body);
      } else {
        if (!('error' in fixture.response)) {
          // fixture did not expect an error, rethrow
          // uncomment this line to see the huge error
          // throw error;
        }

        expect(error.response.body).toStrictEqual(fixture.response);
      }

      return;
    }

    // Request-did-not-throw branch
    if (fixture.customExpect) {
      await fixture.customExpect(response);
    } else {
      expect(response).toStrictEqual(fixture.response);
    }
  });
};

export const sleep = (delayMs: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, delayMs);
  });
};
