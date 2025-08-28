import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'assets/00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae6e7574636f696e/history',
);

export default [
  ...paginationFixtures,
  {
    id: 'assets-asset-history-all-hail-nutcoin_71954f0b61a8',
    testName: 'assets/:asset/history - all hail nutcoin!',
    endpoints: [
      'assets/00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae6e7574636f696e/history',
    ],
    response: [
      {
        tx_hash: 'e252be4c7e40d35919f741c9649ff207c3e49d53bb819e5c1cb458055fd363ed',
        action: 'minted',
        amount: '1',
      },
    ],
  },
  {
    id: 'assets-asset-history-queryparams-general-asset_2f81c15377ab',
    testName: 'assets/:asset/history?queryparams - general asset',
    endpoints: [
      'assets/12e65fa3585d80cba39dcf4f59363bb68b77f9d3c0784734427b1517414441/history?count=1',
      'assets/12e65fa3585d80cba39dcf4f59363bb68b77f9d3c0784734427b1517414441/history?count=1&page=1',
    ],
    response: [
      {
        tx_hash: '2a3202c2c1f10edbe8df77fa872603055d62e5aee5e2c8f671f58791bcbf436a',
        action: 'minted',
        amount: '45000000000',
      },
    ],
  },
];
