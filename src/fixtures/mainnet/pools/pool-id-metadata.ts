import { expect } from 'vitest';

export default [
  {
    id: 'pools-pool-id-metadata-pool-with-multiple-metadata-updates-in-one-update_f1a8a7164c97',
    testName: 'pools/:pool_id/metadata - pool with multiple metadata updates in one update',
    endpoints: [
      'pools/pool1zmfpd5r5vfwjmwm4cgy53exe58h7plnecny3t4948yw7zumzp4c/metadata',
      'pools/16d216d074625d2dbb75c20948e4d9a1efe0fe79c4c915d4b5391de1/metadata',
    ],
    response: {
      hex: '16d216d074625d2dbb75c20948e4d9a1efe0fe79c4c915d4b5391de1',
      pool_id: 'pool1zmfpd5r5vfwjmwm4cgy53exe58h7plnecny3t4948yw7zumzp4c',
      url: expect.any(String),
      hash: expect.any(String),
      ticker: 'ALPS',
      name: expect.any(String),
      description: expect.any(String),
      homepage: expect.any(String),
    },
  },
  {
    id: 'pools-pool-id-metadata-pool-with-multiple-metadata-updates-in-one-update_edbde8d94192',
    testName: 'pools/:pool_id/metadata - pool with multiple metadata updates in one update',
    endpoints: [
      'pools/pool1yhd6a8vvp0r0ads36j4zjwx7juztf6cgpa2fqm9dm0st790ptf2/metadata',
      'pools/25dbae9d8c0bc6feb611d4aa2938de9704b4eb080f54906caddbe0bf/metadata',
    ],
    response: {
      hex: '25dbae9d8c0bc6feb611d4aa2938de9704b4eb080f54906caddbe0bf',
      pool_id: 'pool1yhd6a8vvp0r0ads36j4zjwx7juztf6cgpa2fqm9dm0st790ptf2',
      url: expect.any(String),
      hash: expect.any(String),
      ticker: null,
      name: null,
      description: null,
      homepage: null,
    },
  },
  {
    id: 'pools-pool-id-metadata-best-pool_30f92c6687d2',
    testName: 'pools/pool_id/metadata - best pool',
    endpoints: [
      'pools/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy/metadata',
      'pools/0f292fcaa02b8b2f9b3c8f9fd8e0bb21abedb692a6d5058df3ef2735/metadata',
    ],
    response: {
      hex: '0f292fcaa02b8b2f9b3c8f9fd8e0bb21abedb692a6d5058df3ef2735',
      pool_id: 'pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
      url: 'https://stakenuts.com/mainnet.json',
      hash: '47c0c68cb57f4a5b4a87bad896fc274678e7aea98e200fa14a1cb40c0cab1d8c',
      ticker: 'NUTS',
      name: 'StakeNuts',
      description: 'StakeNuts.com',
      homepage: 'https://stakenuts.com/',
    },
  },
];
