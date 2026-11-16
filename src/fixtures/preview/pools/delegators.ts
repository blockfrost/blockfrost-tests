import { expect } from 'vitest';

export default [
  {
    id: 'pools-delegators-active-pool_1d4d5c5954e9',
    testName: 'pools delegators - active pool',
    endpoints: ['pools/pool1p9xu88dzmpp5l8wmjd6f5xfs9z89mky6up86ty2wz4aavmm8f3m/delegators'],
    response: expect.arrayContaining([
      {
        address: expect.toBeStakeAddress(),
        live_stake: expect.toBeInRange('1', '45000000000000000'),
      },
    ]),
  },
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
