export default [
  {
    id: 'pools-pool-id-updates-generic-pool-updates_05dabb09ea48',
    testName: 'pools/:pool_id/updates - generic pool updates',
    endpoints: [
      'pools/094dc39da2d8434f9ddb93749a1930288e5dd89ae04fa5914e157bd6/updates?page=1&count=2',
      'pools/pool1p9xu88dzmpp5l8wmjd6f5xfs9z89mky6up86ty2wz4aavmm8f3m/updates?page=1&count=2',
    ],
    response: [
      {
        tx_hash: '80089c8bfe5abfe5cb337012feb88dd256558cc31dd72553064bf7074b72033c',
        cert_index: 0,
        action: 'registered',
      },
      {
        tx_hash: '193bb24be236f9e0355f2da70b694ee622b46e4026752812e1fe0f8061895acb',
        cert_index: 0,
        action: 'registered',
      },
    ],
  },
  {
    id: 'pools-pool-id-updates_c9471229e0da',
    testName: 'pools/:pool_id/updates',
    endpoints: [
      'pools/pool1p9xu88dzmpp5l8wmjd6f5xfs9z89mky6up86ty2wz4aavmm8f3m/updates?count=1&page=1',
      'pools/094dc39da2d8434f9ddb93749a1930288e5dd89ae04fa5914e157bd6/updates?count=1&page=1',
    ],
    response: [
      {
        tx_hash: '80089c8bfe5abfe5cb337012feb88dd256558cc31dd72553064bf7074b72033c',
        cert_index: 0,
        action: 'registered',
      },
    ],
  },
];
