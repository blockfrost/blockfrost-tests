export default [
  {
    id: 'pools-delegators_f2d665309ca1',
    testName: 'pools delegators',
    endpoints: ['pools/d5cfc42cf67f6b637688d19fa50a4342658f63370b9e2c9e3eaf4dfe/delegators'],
    // the pool retired at epoch 365, which removed its only delegation
    response: [],
  },
  {
    id: 'pools-delegators-retired-pool_c5177282bb25',
    testName: 'pools delegators - retired pool',
    endpoints: ['pools/pool1p835jxsj8py5n34lrgk6fvpgpxxvh585qm8dzvp7ups37vdet5a/delegators'],
    // the pool retired at epoch 611, which removed all its delegations
    response: [],
  },
];
