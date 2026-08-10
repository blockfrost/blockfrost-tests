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
    id: 'epochs-number-stakes-pool-queryparams-generic-pool_66516d7917cf',
    testName: 'epochs/:number/stakes/pool?queryparams generic pool',
    endpoints: [
      'epochs/121/stakes/pool13m26ky08vz205232k20u8ft5nrg8u68klhn0xfsk9m4gsqsc44v',
      'epochs/121/stakes/pool13m26ky08vz205232k20u8ft5nrg8u68klhn0xfsk9m4gsqsc44v?page=1',
      'epochs/121/stakes/pool13m26ky08vz205232k20u8ft5nrg8u68klhn0xfsk9m4gsqsc44v?page=1&count=100',
    ],
    response: epochPoolStakeRows(100),
  },
  {
    id: 'epochs-number-stakes-pool-queryparams-page-1-best-pool-ever_236a8c875e08',
    testName: 'epochs/:number/stakes/pool?queryparams page 1 best pool ever',
    endpoints: [
      'epochs/71/stakes/pool13m26ky08vz205232k20u8ft5nrg8u68klhn0xfsk9m4gsqsc44v?page=1&count=2',
    ],
    response: epochPoolStakeRows(2),
  },
  {
    // the pool had 3 delegators in epoch 71, so page 2 (count=2) holds exactly one row
    id: 'epochs-number-stakes-pool-queryparams-page-2-best-pool-ever_165bc9d8f176',
    testName: 'epochs/:number/stakes/pool?queryparams page 2 best pool ever',
    endpoints: [
      'epochs/71/stakes/pool13m26ky08vz205232k20u8ft5nrg8u68klhn0xfsk9m4gsqsc44v?page=2&count=2',
    ],
    response: epochPoolStakeRows(1),
  },
  {
    id: 'epochs-number-stakes-pool-queryparams-generic-new-old-and-expired-pools-without-active-delegators-for-that-epoch_eaad20357f6b',

    testName:
      'epochs/:number/stakes/pool?queryparams generic new, old and expired pools without active delegators for that epoch',
    endpoints: [
      'epochs/10/stakes/pool13m26ky08vz205232k20u8ft5nrg8u68klhn0xfsk9m4gsqsc44v',
      'epochs/82/stakes/pool1dt5t2upg4mppj9y9trh6huq2qm8rcl86pqk6dmk04kfjg4e8ga6',
      'epochs/10/stakes/pool1z063uemr7k9zzg95ymz0gfqnfv5k58et8xrnk6ynfyqdgjjw0e7',
      'epochs/74/stakes/pool16lk5fgc4zfthjza8fardhmj4jn2tcuzc2558pterlw4gykhsnep',
    ],
    response: [],
  },
];
