import { getPaginationFixtures } from '../../../index.js';
import { epochStakeRows } from '../../../matchers.js';

const paginationFixtures = getPaginationFixtures('epochs/242/stakes').filter(
  ({ type }) => type !== 'order',
);

// Each replica can return these rows in a slightly different order — an
// ordering bug fixed by https://github.com/blockfrost/blockfrost-backend-ryo/pull/338
// (not deployed yet), so fixtures don't assert row order.
export default [
  ...paginationFixtures,
  {
    id: 'epochs-number-stakes-generic-shelley-epoch_c1b766ad325c',
    testName: 'epochs/:number/stakes generic shelley epoch',
    endpoints: ['epochs/242/stakes'],
    response: epochStakeRows(100),
  },
  {
    id: 'epochs-number-stakes-queryparams-epochs-w-out-stakes_9f26f0b9454d',
    testName: 'epochs/:number/stakes?queryparams epochs w/out stakes',
    endpoints: ['epochs/207/stakes', 'epochs/208/stakes', 'epochs/209/stakes'],
    response: [],
  },
  {
    id: 'epochs-number-stakes-queryparams-first-epoch-with-stakes-middle-page_a6f353b554fc',
    testName: 'epochs/:number/stakes?queryparams first epoch with stakes, middle page',
    endpoints: ['epochs/210/stakes?page=100&count=2'],
    response: epochStakeRows(2),
  },
  {
    // the last-page length also pins the epoch's total row count (171 * 100 + 83)
    id: 'epochs-number-stakes-queryparams-first-epoch-with-stakes-last-page_588e7033234f',
    testName: 'epochs/:number/stakes?queryparams first epoch with stakes, last page',
    endpoints: ['epochs/210/stakes?page=172'],
    response: epochStakeRows(83),
  },
];
