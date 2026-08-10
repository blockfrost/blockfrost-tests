import { expect } from 'vitest';
import { getPaginationFixtures } from '../../../index.js';
import { epochPoolStakeRows } from '../../../matchers.js';

const paginationFixtures = getPaginationFixtures(
  'epochs/242/stakes/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
).filter(({ type }) => type !== 'order');

// Each replica can return these rows in a slightly different order — an
// ordering bug fixed by https://github.com/blockfrost/blockfrost-backend-ryo/pull/338
// (not deployed yet), so fixtures don't assert row order.
export default [
  ...paginationFixtures,
  {
    id: 'epochs-number-stakes-pool-queryparams-generic-pool_696869b293ec',
    testName: 'epochs/:number/stakes/pool?queryparams generic pool',
    endpoints: [
      'epochs/520/stakes/bfb0a90221db27149e575d79fba2fd8df4fb6a04e446ed077648ee08',
      'epochs/520/stakes/bfb0a90221db27149e575d79fba2fd8df4fb6a04e446ed077648ee08?page=1',
      'epochs/520/stakes/bfb0a90221db27149e575d79fba2fd8df4fb6a04e446ed077648ee08?page=1&count=100',
    ],
    response: epochPoolStakeRows(100),
  },
  {
    // the pool's complete (immutable) delegator set for the epoch fits on one
    // page — membership is replica-stable, order is not, so compare as same-members
    id: 'epochs-number-stakes-pool-queryparams-page-1-best-pool-ever_96402ffaf0f0',
    testName: 'epochs/:number/stakes/pool?queryparams page 1 best pool ever',
    endpoints: [
      'epochs/520/stakes/cbb2d3a93e5b7fc422d250203ec892ed840cba51cc7c15530d6f06b7?page=1',
    ],
    response: expect.toIncludeSameMembers([
      {
        stake_address: 'stake_test1upd2sewkr6j8ggj7yna82c5kj768a05285ymnqp8j82ferg7xqhcs',
        amount: '27126614',
      },
      {
        stake_address: 'stake_test1uzn99jy8eud3f4jp7pg6natdt3mn76mn33fx5na0a9utk7q03ttkv',
        amount: '198461261169',
      },
      {
        stake_address: 'stake_test1uzhvwv5u722n0rwpeke2rppdklkwfapj3v45tdhesg8yrmgtgfqhm',
        amount: '27595719',
      },
    ]),
  },
  {
    id: 'epochs-number-stakes-pool-queryparams-page-2-best-pool-ever_c6eb1468b29c',
    testName: 'epochs/:number/stakes/pool?queryparams page 2 best pool ever',
    endpoints: [
      'epochs/510/stakes/4bbc44d779ba790105a9521fcf291c3b4b5383bb77174c6a5b8b63fb?page=2&count=2',
    ],
    response: epochPoolStakeRows(2),
  },
  {
    id: 'epochs-number-stakes-pool-queryparams-generic-new-old-and-expired-pools-without-active-delegators-for-that-epoch_763d761eda2b',

    testName:
      'epochs/:number/stakes/pool?queryparams generic new, old and expired pools without active delegators for that epoch',
    endpoints: [
      'epochs/10/stakes/bfb0a90221db27149e575d79fba2fd8df4fb6a04e446ed077648ee08',
      'epochs/5/stakes/bfb0a90221db27149e575d79fba2fd8df4fb6a04e446ed077648ee08',
      'epochs/50/stakes/4bbc44d779ba790105a9521fcf291c3b4b5383bb77174c6a5b8b63fb',
      'epochs/80/stakes/4bbc44d779ba790105a9521fcf291c3b4b5383bb77174c6a5b8b63fb',
    ],
    response: [],
  },
];
