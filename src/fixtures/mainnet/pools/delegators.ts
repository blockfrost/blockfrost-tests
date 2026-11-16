import { expect } from 'vitest';

export default [
  {
    id: 'pools-delegators_7cd369c71ad9',
    testName: 'pools delegators',
    endpoints: ['pools/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy/delegators'],
    response: expect.arrayContaining([
      {
        address: expect.toBeStakeAddress(),
        live_stake: expect.toBeInRange('1', '45000000000000000'),
      },
    ]),
  },
  {
    id: 'pools-delegators-of-retired-pools-with-mirs_5ea2d463a728',
    testName: 'pools delegators of retired pools with MIRs',
    endpoints: ['pools/pool1n2yl5u5ycyp07aj6np7clwhwdh7v734swrrpy2hcvmhhj953awm/delegators'],
    // the pool retired at epoch 242, which removed its delegations
    response: [],
  },
];
