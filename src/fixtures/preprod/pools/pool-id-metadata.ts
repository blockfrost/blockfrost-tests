import { expect } from 'vitest';

export default [
  {
    id: 'pools-pool-id-metadata-pool-with-multiple-metadata-updates-in-one-update-alfa_f165f370df7b',
    testName: 'pools/:pool_id/metadata - pool with multiple metadata updates in one update (ALFA)',
    endpoints: [
      'pools/pool13la5erny3srx9u4fz9tujtl2490350f89r4w4qjhk0vdjmuv78v/metadata',
      'pools/8ffb4c8e648c0662f2a91157c92feaa95f1a3d2728eaea8257b3d8d9/metadata',
    ],
    response: {
      hex: '8ffb4c8e648c0662f2a91157c92feaa95f1a3d2728eaea8257b3d8d9',
      pool_id: 'pool13la5erny3srx9u4fz9tujtl2490350f89r4w4qjhk0vdjmuv78v',
      url: expect.any(String),
      hash: expect.any(String),
      ticker: 'ALFA',
      name: expect.any(String),
      description: expect.any(String),
      homepage: expect.any(String),
    },
  },
  {
    id: 'pools-pool-id-metadata-best-pool_ae3b6de78fea',
    testName: 'pools/pool_id/metadata - best pool',
    endpoints: [
      'pools/pool13m26ky08vz205232k20u8ft5nrg8u68klhn0xfsk9m4gsqsc44v/metadata',
      'pools/8ed5ab11e76094fa2a2ab29fc3a57498d07e68f6fde6f326162eea88/metadata',
    ],
    response: {
      pool_id: 'pool13m26ky08vz205232k20u8ft5nrg8u68klhn0xfsk9m4gsqsc44v',
      hex: '8ed5ab11e76094fa2a2ab29fc3a57498d07e68f6fde6f326162eea88',
      url: 'https://assets.staging.wingriders.com/spo_1_metadata.json',
      hash: '368fe1c5487d8fe293b970667f4af75f354285348abd96583ff9477d73d4cc6e',
      ticker: 'WRP01',
      name: 'Wingriders - 1 [Preprod]',
      description: 'Wingriders Stake Pool - 1 [Preprod]',
      homepage: 'https://app.preprod.wingriders.com/',
    },
  },
];
