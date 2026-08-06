import { expect } from 'vitest';
import { getPaginationFixtures } from '../../../index.js';
import { epochStakeRows } from '../../../matchers.js';

const paginationFixtures = getPaginationFixtures('epochs/121/stakes').filter(
  ({ type }) => type !== 'order',
);

// Each replica can return these rows in a slightly different order — an
// ordering bug fixed by https://github.com/blockfrost/blockfrost-backend-ryo/pull/338
// (not deployed yet), so fixtures don't assert row order.
export default [
  ...paginationFixtures,
  {
    id: 'epochs-number-stakes-generic-shelley-epoch_705e2cf91d90',
    testName: 'epochs/:number/stakes generic shelley epoch',
    endpoints: ['epochs/121/stakes'],
    response: epochStakeRows(100),
  },
  {
    id: 'epochs-number-stakes-queryparams-epochs-w-out-stakes_81899c7cc179',
    testName: 'epochs/:number/stakes?queryparams epochs w/out stakes',
    endpoints: ['epochs/3/stakes', 'epochs/4/stakes', 'epochs/5/stakes'],
    response: [],
  },
  {
    // the complete (immutable) row set of the epoch — membership is
    // replica-stable, order is not, so compare as same-members
    id: 'epochs-number-stakes-queryparams-first-epoch-with-stakes_d638c2d533c8',
    testName: 'epochs/:number/stakes?queryparams first epoch with stakes',
    endpoints: ['epochs/6/stakes'],
    response: expect.toIncludeSameMembers([
      {
        stake_address: 'stake_test1uquj460qdrj4az6uy7kvtzct4w8226xq4t30dlzfhc360tgegny4m',
        pool_id: 'pool1z22x50lqsrwent6en0llzzs9e577rx7n3mv9kfw7udwa2rf42fa',
        amount: '100000000000000',
      },
      {
        stake_address: 'stake_test1uztg6yppa0t30rslkrneva5c9qju40rhndjnuy356kxw83s6n95nu',
        pool_id: 'pool1547tew8vmuj0g6vj3k5jfddudextcw6hsk2hwgg6pkhk7lwphe6',
        amount: '100000000000000',
      },
      {
        stake_address: 'stake_test1urcnqgzt2x8hpsvej4zfudehahknm8lux894pmqwg5qshgcrn346q',
        pool_id: 'pool174mw7e20768e8vj4fn8y6p536n8rkzswsapwtwn354dckpjqzr8',
        amount: '100000000000000',
      },
    ]),
  },
  {
    id: 'epochs-number-stakes-queryparams-generic-epoch-with-stakes-middle-page_b0c9edb4b95c',
    testName: 'epochs/:number/stakes?queryparams generic epoch with stakes, middle page',
    endpoints: ['epochs/121/stakes?page=100&count=2'],
    response: epochStakeRows(2),
  },
  {
    // the last-page length also pins the epoch's total row count (75 * 100 + 80)
    id: 'epochs-number-stakes-queryparams-generic-epoch-with-stakes-last-page_9464408b7992',
    testName: 'epochs/:number/stakes?queryparams generic epoch with stakes, last page',
    endpoints: ['epochs/118/stakes?page=76'],
    response: epochStakeRows(80),
  },
];
