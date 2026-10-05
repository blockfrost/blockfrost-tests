import { error_400_pools, error_404 } from '../../errors/index.js';

// Network-independent error paths of /pools/{pool_id}/*.
export default [
  {
    id: 'pools-pool-id-malformed-pool-id_b9e7f720fed5',
    testName: 'pools/:pool_id/* - malformed pool id',
    endpoints: [
      'pools/pool1kek/history',
      'pools/pool1kek/metadata',
      'pools/pool1kek/relays',
      'pools/pool1kek/delegators',
      'pools/pool1kek/blocks',
      'pools/pool1kek/updates',
    ],
    response: error_400_pools,
  },
  {
    id: 'pools-pool-id-bech32-with-a-non-pool-prefix_9cfcd7c69e85',
    testName: 'pools/:pool_id/* - bech32 with a non-pool prefix',
    endpoints: [
      'pools/drep1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wm4n5fs',
      'pools/drep1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wm4n5fs/history',
      'pools/drep1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wm4n5fs/metadata',
      'pools/drep1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wm4n5fs/relays',
      'pools/drep1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wm4n5fs/delegators',
      'pools/drep1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wm4n5fs/blocks',
      'pools/drep1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wm4n5fs/updates',
      'pools/drep1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wm4n5fs/votes',
    ],
    response: error_400_pools,
  },
  {
    id: 'pools-pool-id-pool-not-on-chain_48d5e4a5307a',
    testName: 'pools/:pool_id/* - pool not on-chain',
    endpoints: [
      'pools/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2/history',
      'pools/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2/metadata',
      'pools/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2/relays',
      'pools/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2/delegators',
      'pools/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2/blocks',
      'pools/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2/updates',
    ],
    response: error_404,
  },
  {
    id: 'pools-pool-id-hex-pool-id-not-on-chain_453f69fdc80d',
    testName: 'pools/:pool_id/* - hex pool id not on-chain',
    endpoints: [
      'pools/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057',
      'pools/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/history',
      'pools/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/metadata',
      'pools/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/relays',
      'pools/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/delegators',
      'pools/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/blocks',
      'pools/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/updates',
      'pools/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/votes',
    ],
    response: error_404,
  },
];
