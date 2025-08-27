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

    response: [
      {
        address: 'stake1uyawuee026v7q8vdswnvk9hxtkg3l3zcgx07myj37ac304gntna04',
        live_stake: '0',
      },
      {
        address: 'stake1u9t5d9449yupx2wtrqwmzl3d6x3rkway0sjqp6fsccef5esx5262v',
        live_stake: '5282806',
      },
    ],
  },
];
