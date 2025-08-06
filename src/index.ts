import 'dotenv/config';
import { match } from 'node-match-path';
import { test, describe, expect } from 'vitest';
import { noCase } from 'change-case';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import got, { ExtendOptions, Got } from 'got';
import { Fixture } from './types/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.resolve(__dirname, '../endpoints-allowlist.json');

export const DEFAULT_TEST_TIMEOUT = 15_000;

const projectId = process.env.PROJECT_ID;
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

export const isUrlMatch = (urlParameter: string, _pattern: string) => {
  let url = urlParameter;

  try {
    if (url.includes('?')) {
      url = url.split('?')[0];
    }

    if (!url.startsWith('/')) url = '/' + url;

    let pattern = _pattern.split('?')[0];

    if (!pattern.startsWith('/')) pattern = '/' + pattern;

    const adjustedPattern = pattern.replaceAll('{', ':').replaceAll('}', '');

    if (url === '/pools/retired' && adjustedPattern === '/pools/:pool_id') {
      return false;
    }

    if (url === '/pools/retiring' && adjustedPattern === '/pools/:pool_id') {
      return false;
    }

    const urlMatch = match(adjustedPattern, url);

    return urlMatch.matches;
  } catch {
    return false;
  }
};

const prefixUrl = process.env.SERVER_URL || 'http://localhost:3000';
const DEFAULT_HEADERS = projectId ? { project_id: projectId } : {};

export const getInstance = (clientOptions?: ExtendOptions): Got => {
  return got.extend({
    responseType: 'json',
    prefixUrl,
    https: {
      rejectUnauthorized: false,
    },
    ...clientOptions,
    headers: { ...DEFAULT_HEADERS, ...clientOptions?.headers },
  });
};

export const getInitInstance = (): Got => {
  let initPrefixUrl;

  if (!projectId) {
    throw new Error('projectId is required');
  }

  if (projectId.startsWith('preview')) {
    initPrefixUrl = 'https://cardano-preview.blockfrost.io/api/v0';
  } else if (projectId.startsWith('preprod')) {
    initPrefixUrl = 'https://cardano-preprod.blockfrost.io/api/v0';
  } else if (projectId.startsWith('mainnet')) {
    initPrefixUrl = 'https://cardano-mainnet.blockfrost.io/api/v0';
  } else {
    throw new Error(`Unsupported projectId prefix: ${projectId}`);
  }

  return got.extend({
    responseType: 'json',
    prefixUrl: initPrefixUrl,
    https: {
      rejectUnauthorized: false,
    },
    headers: { project_id: projectId },
  });
};

const skippedTests: { endpoint: string; reason: string }[] = [];

export const shouldRunTest = (fixture: Fixture) => {
  if (!endpointsAllowlist || endpointsAllowlist.length === 0) {
    return true;
  }

  return fixture.endpoints.some(endpoint =>
    endpointsAllowlist.some(pattern => isUrlMatch(endpoint, pattern)),
  );
};

export const generateTestFromFixture = (fixture: Fixture, endpoint: string) => {
  if (shouldRunTest(fixture)) {
    generateTest(fixture, endpoint);
  } else {
    console.log(`Skipped [${fixture.testName}] - ${endpoint}.`);
    skippedTests.push({
      endpoint,
      reason: `Test is not defined for ${endpoint}`,
    });
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

  return {
    data,
    headers: response.headers,
    time_elapsed: end - start,
  };
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
          generateTestFromFixture(fixture, endpoint);
        }
      }
    });
  }

  if (skippedTests.length > 0) {
    console.log('Skipped tests:');
    console.table(skippedTests);
  }
};

export const getPaginationFixtures = (url: string) =>
  [
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
  ] as const;

export const generateTest = (fixture: Fixture, endpoint: string) => {
  const timeout = fixture.customTimeout || DEFAULT_TEST_TIMEOUT;

  test(
    `[${fixture.testName}] - ${endpoint}`,
    async () => {
      if (fixture.customTest) {
        // custom assertion defined within fixture
        const gotClient = getClientForFixture(fixture);

        await fixture.customTest(endpoint, gotClient);
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
          // console.log('Thrown unexpected error', error);
          // throw error;
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
    },
    { timeout, retry: fixture.retry },
  );
};

export const sleep = (delayMs: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, delayMs);
  });
};
