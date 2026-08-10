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
    id: 'epochs-number-stakes-pool-queryparams-generic-pool_0c869a37cba6',
    testName: 'epochs/:number/stakes/pool?queryparams generic pool',
    endpoints: [
      'epochs/242/stakes/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
      'epochs/242/stakes/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy?page=1',
      'epochs/242/stakes/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy?page=1&count=100',
    ],
    response: epochPoolStakeRows(100),
  },
  {
    id: 'epochs-number-stakes-pool-queryparams-page-1-best-pool-ever_34eb1a7fbe26',
    testName: 'epochs/:number/stakes/pool?queryparams page 1 best pool ever',
    endpoints: [
      'epochs/242/stakes/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy?page=1&count=2',
    ],
    response: epochPoolStakeRows(2),
  },
  {
    id: 'epochs-number-stakes-pool-queryparams-page-2-best-pool-ever_573eb49e78f2',
    testName: 'epochs/:number/stakes/pool?queryparams page 2 best pool ever',
    endpoints: [
      'epochs/242/stakes/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy?page=2&count=2',
    ],
    response: epochPoolStakeRows(2),
  },
  {
    id: 'epochs-number-stakes-pool-queryparams-generic-new-old-and-expired-pools-without-active-delegators-for-that-epoch_436885b96a7f',

    testName:
      'epochs/:number/stakes/pool?queryparams generic new, old and expired pools without active delegators for that epoch',
    endpoints: [
      'epochs/224/stakes/pool1ezskfrplms9h6hxcw7adqghmfrtpn6cy7ax8ajrm5kn0crvl6sn',
      'epochs/242/stakes/pool14qacykhn8lzvltxrntkfvzakdn3acyj2m28lfc8q02gzylu8l9a',
      'epochs/247/stakes/pool105y08fgl97g255q7v9nk0x7aqyxaqcluve2jxhgwemkaxkeyd82',
      'epochs/200/stakes/pool105y08fgl97g255q7v9nk0x7aqyxaqcluve2jxhgwemkaxkeyd82',
    ],
    response: [],
  },
];
