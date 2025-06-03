import { expect } from 'vitest';
import { getPaginationFixtures } from '../../../utils.js';

const paginationFixtures = getPaginationFixtures(
  'nutlink/addr1q85yx2w7ragn5sx6umgmtjpc3865s9sg59sz4rrh6f90kgwfwlzu3w8ttacqg89mkdgwshwnplj5c5n9f8dhp0h55q2q7qm63t/tickers',
);

export default [
  ...paginationFixtures,
  {
    testName: 'nutlink/:address/tickers nut.link oracle address',
    endpoints: [
      'nutlink/addr1q85yx2w7ragn5sx6umgmtjpc3865s9sg59sz4rrh6f90kgwfwlzu3w8ttacqg89mkdgwshwnplj5c5n9f8dhp0h55q2q7qm63t/tickers?count=3',
      'nutlink/addr1q85yx2w7ragn5sx6umgmtjpc3865s9sg59sz4rrh6f90kgwfwlzu3w8ttacqg89mkdgwshwnplj5c5n9f8dhp0h55q2q7qm63t/tickers?count=3&page=1&order=asc',
    ],
    response: [
      {
        name: 'ADABTC',
        count: expect.any(Number),
        latest_block: expect.any(Number),
      },
      {
        name: 'ADACAD',
        count: expect.any(Number),
        latest_block: expect.any(Number),
      },
      {
        name: 'ADAEUR',
        count: expect.any(Number),
        latest_block: expect.any(Number),
      },
    ],
  },
];
