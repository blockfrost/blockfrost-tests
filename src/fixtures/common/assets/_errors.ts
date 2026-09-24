import { error_400_assets, error_400_assets_policy, error_404 } from '../../errors/index.js';

// Network-independent error paths of /assets/*.
export default [
  {
    id: 'assets-asset-malformed-asset_8559208dfd37',
    testName: 'assets/:asset/* - malformed asset',
    endpoints: [
      'assets/stonks',
      'assets/stonks/history',
      'assets/stonks/txs',
      'assets/stonks/transactions',
    ],
    response: error_400_assets,
  },
  {
    id: 'assets-asset-asset-longer-than-policy-id-32-bytes-name_3a4ff79980a5',
    testName: 'assets/:asset/* - asset longer than policy id + 32 bytes name',
    endpoints: [
      'assets/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b1',
      'assets/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b1/history',
      'assets/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b1/txs',
      'assets/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b1/transactions',
      'assets/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b1/addresses',
    ],
    response: error_400_assets,
  },
  {
    id: 'assets-asset-lovelace-is-not-an-asset_5b6ebc3f3226',
    testName: 'assets/:asset/* - lovelace is not an asset',
    endpoints: [
      'assets/lovelace',
      'assets/lovelace/history',
      'assets/lovelace/txs',
      'assets/lovelace/transactions',
      'assets/lovelace/addresses',
    ],
    response: error_400_assets,
  },
  {
    id: 'assets-asset-asset-not-on-chain_47fc8cc28fa8',
    testName: 'assets/:asset/* - asset not on-chain',
    endpoints: [
      'assets/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057',
      'assets/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/history',
      'assets/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/txs',
      'assets/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/transactions',
    ],
    response: error_404,
  },
  {
    id: 'assets-asset-policy-id-only-not-on-chain_98eaaba697a1',
    testName: 'assets/:asset/* - policy id only, not on-chain',
    endpoints: [
      'assets/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057',
      'assets/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/addresses',
    ],
    response: error_404,
  },
  {
    id: 'assets-policy-policy-id-malformed-policy_94c2ca111c52',
    testName: 'assets/policy/:policy_id - malformed policy',
    endpoints: [
      'assets/policy/stonks',
      'assets/policy/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf0',
      'assets/policy/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057',
    ],
    response: error_400_assets_policy,
  },
  {
    id: 'assets-policy-policy-id-policy-not-on-chain_a06b8d2ad3be',
    testName: 'assets/policy/:policy_id - policy not on-chain',
    endpoints: ['assets/policy/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057'],
    response: error_404,
  },
];
