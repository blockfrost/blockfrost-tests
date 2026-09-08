import openApiJsonSchema from '@blockfrost/openapi/json-schema.json' with { type: 'json' };
import { isUrlMatch } from '../src/index.js';
import { registerMatchers } from '../src/register-matchers.js';
import { normalizePath } from '../src/utils.js';
import type { Fixture } from '../src/types/index.js';

const NETWORKS = ['mainnet', 'preprod', 'preview'] as const;

type Network = (typeof NETWORKS)[number];
type FixtureGroups = Record<string, Fixture[]>;

const SKIPPED_ROUTES = new Set(
  [
    '/ipfs/add',
    '/ipfs/gateway/{IPFS_path}',
    '/ipfs/pin/add/{IPFS_path}',
    '/ipfs/pin/list',
    '/ipfs/pin/list/{IPFS_path}',
    '/ipfs/pin/remove/{IPFS_path}',
    '/metrics',
    '/metrics/endpoints',
    '/mempool',
    '/mempool/{hash}',
    '/mempool/addresses/{address}',
    '/nutlink/{address}',
    '/nutlink/{address}/tickers',
    '/nutlink/{address}/tickers/{ticker}',
    '/nutlink/tickers/{ticker}',
  ].map(normalizePath),
);

const ROUTES = Object.keys(openApiJsonSchema)
  .map(normalizePath)
  .filter(route => !SKIPPED_ROUTES.has(route));

const resolvedRoutes = new Map<string, string | null>();

const resolveRoute = (endpoint: string): string | null => {
  const cached = resolvedRoutes.get(endpoint);

  if (cached !== undefined) return cached;

  const route = ROUTES.find(candidate => isUrlMatch(endpoint, candidate)) ?? null;

  resolvedRoutes.set(endpoint, route);

  return route;
};

interface NetworkReport {
  network: Network;
  fixturesPerRoute: Map<string, number>;
  gaps: string[];
}

const countFixtures = (groups: FixtureGroups, report: NetworkReport) => {
  for (const fixtures of Object.values(groups)) {
    for (const fixture of fixtures) {
      const routesHit = new Set<string>();

      for (const endpoint of fixture.endpoints) {
        const route = resolveRoute(endpoint);

        if (route !== null) routesHit.add(route);
      }

      for (const route of routesHit) {
        report.fixturesPerRoute.set(route, (report.fixturesPerRoute.get(route) ?? 0) + 1);
      }
    }
  }
};

const auditNetwork = async (network: Network, common: FixtureGroups): Promise<NetworkReport> => {
  const module: Record<string, FixtureGroups> = await import(`../src/fixtures/${network}/index.js`);
  const networkFixtures = module[`${network}Fixtures`];

  if (!networkFixtures) {
    throw new Error(`src/fixtures/${network}/index.ts does not export ${network}Fixtures`);
  }

  const report: NetworkReport = {
    network,
    fixturesPerRoute: new Map(ROUTES.map(route => [route, 0])),
    gaps: [],
  };

  countFixtures(common, report);
  countFixtures(networkFixtures, report);

  for (const [route, count] of report.fixturesPerRoute) {
    if (count === 0) report.gaps.push(route);
  }

  return report;
};

const printTable = (reports: NetworkReport[]) => {
  const header = ['route', ...reports.map(report => report.network)];
  const width = Math.max(...ROUTES.map(route => route.length));

  console.log('');
  console.log([header[0].padEnd(width), ...header.slice(1).map(h => h.padStart(8))].join('  '));

  for (const route of ROUTES) {
    const cells = reports.map(report =>
      String(report.fixturesPerRoute.get(route) ?? 0).padStart(8),
    );

    console.log([route.padEnd(width), ...cells].join('  '));
  }
};

async function main(): Promise<void> {
  const showTable = process.argv.includes('--table');

  registerMatchers();

  const { commonFixtures } = (await import('../src/fixtures/common/index.js')) as {
    commonFixtures: FixtureGroups;
  };

  const reports: NetworkReport[] = [];

  for (const network of NETWORKS) {
    reports.push(await auditNetwork(network, commonFixtures));
  }

  if (showTable) printTable(reports);

  let hasProblem = false;

  for (const report of reports) {
    const covered = ROUTES.length - report.gaps.length;

    console.log(
      `${report.gaps.length === 0 ? 'OK  ' : 'FAIL'} ${report.network}: ${covered}/${ROUTES.length} routes covered`,
    );

    if (report.gaps.length > 0) {
      hasProblem = true;
      console.log('  Routes without a fixture:');
      for (const route of report.gaps) console.log(`    - ${route}`);
    }
  }

  if (hasProblem) {
    console.log('\nEndpoint coverage check failed.');
    process.exit(1);
  }

  console.log('\nAll networks OK.');
}

await main();
