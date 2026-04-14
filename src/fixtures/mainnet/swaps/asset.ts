import { getPaginationFixtures } from '../../../index.js';

// HOSKY — most heavily distributed asset on mainnet, generic token test
const HOSKY_TOKEN = 'a0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235484f534b59';

const paginationFixtures = getPaginationFixtures(`swaps/${HOSKY_TOKEN}`, {
  fromToPagination: { format: 'height' },
});

export default [
  ...paginationFixtures,

  // Generic token (not a swap beacon) - verifies endpoint works for any asset
  {
    id: 'swaps-asset-hosky-asc_1a2b3c4d5e6f',
    testName: 'swaps/:asset - HOSKY generic token asc',
    endpoints: [`swaps/${HOSKY_TOKEN}?order_by=price&order=asc&count=2`],
    response: [],
  },
];
