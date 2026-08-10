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
    id: 'epochs-number-stakes-queryparams-epochs-w-out-stakes_9cd57f6507b5',
    testName: 'epochs/:number/stakes?queryparams epochs w/out stakes',
    endpoints: ['epochs/0/stakes', 'epochs/1/stakes'],
    response: [],
  },
  {
    // the complete (immutable) row set of the epoch — membership is
    // replica-stable, order is not, so compare as same-members
    id: 'epochs-number-stakes-queryparams-first-epoch-with-stakes_d1a4ffd14bfe',
    testName: 'epochs/:number/stakes?queryparams first epoch with stakes',
    endpoints: ['epochs/2/stakes'],
    response: expect.toIncludeSameMembers([
      {
        stake_address: 'stake_test1upugeuz3jdy0a7hncusutadavzcetdzylgxcldz39hp9n0s0xy0n5',
        pool_id: 'pool18r62tz408lkgfu6pq5svwzkh2vslkeg6mf72qf3h8njgvzhx9ce',
        amount: '100000000000000',
      },
      {
        stake_address: 'stake_test1uzapf83wydusjln97rqr7fen6vgrz5087yqdxm0akqdqkgstjz8g4',
        pool_id: 'pool16h8ugt8k0a4kxa5g6x062zjrgfjc7cehpw0ze8374axlul76932',
        amount: '100000000000000',
      },
      {
        stake_address: 'stake_test1urmrzdcvepug9067zj4hy56v4un9t59z559f4z3cyzak7js3z5t2t',
        pool_id: 'pool1grvqd4eu354qervmr62uew0nsrjqedx5kglldeqr4c29vv59rku',
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
    id: 'epochs-number-stakes-queryparams-generic-epoch-with-stakes-last-page_5d5e44eb6900',
    testName: 'epochs/:number/stakes?queryparams generic epoch with stakes, last page',
    endpoints: ['epochs/118/stakes?page=5'],
    response: epochStakeRows(100),
  },
];
