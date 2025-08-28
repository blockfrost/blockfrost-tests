export default [
  {
    id: 'pools-pool-id-updates-generic-pool-updates_179c9e8760a1',
    testName: 'pools/:pool_id/updates - generic pool updates',

    endpoints: [
      'pools/pool13m26ky08vz205232k20u8ft5nrg8u68klhn0xfsk9m4gsqsc44v/updates?count=1',
      'pools/8ed5ab11e76094fa2a2ab29fc3a57498d07e68f6fde6f326162eea88/updates?count=1',
    ],
    response: [
      {
        tx_hash: '42daac95b5e6d333fd0b04ff4bef1f5c813b37df780265fabd6c5025008f8816',
        cert_index: 0,
        action: 'registered',
      },
    ],
  },
  {
    id: 'pools-pool-id-updates-best-pool_8c82774df084',
    testName: 'pools/:pool_id/updates - best pool',

    endpoints: [
      'pools/pool13la5erny3srx9u4fz9tujtl2490350f89r4w4qjhk0vdjmuv78v/updates?count=1&page=1',
      'pools/8ffb4c8e648c0662f2a91157c92feaa95f1a3d2728eaea8257b3d8d9/updates?count=1&page=1',
    ],
    response: [
      {
        tx_hash: 'e6e7e7e137744d01d3e5a9ab2df3bd31dbc5720d5565e37dd0ef7b3ace486672',
        cert_index: 0,
        action: 'registered',
      },
    ],
  },
];
