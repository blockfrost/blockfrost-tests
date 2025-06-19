import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'scripts/168376d9c3f792610e5ecbfd2895de76f52d6ba06842e24d03814535/redeemers',
);

export default [
  ...paginationFixtures,
  {
    testName: 'scripts/:hash/redeemers',
    endpoints: ['scripts/168376d9c3f792610e5ecbfd2895de76f52d6ba06842e24d03814535/redeemers'],
    response: [
      {
        tx_hash: 'aa80303b33aeb356d7df1355fee6af948be362b4220a0d5ad5e96ae73d9560ba',
        tx_index: 0,
        purpose: 'spend',
        redeemer_data_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        datum_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        unit_mem: '993418',
        unit_steps: '444912439',
        fee: '89399',
      },
      {
        tx_hash: '007f4409f067fc58c3c3cd1d44f7a9e418e5080e73173cc7db701cfb90c5f031',
        tx_index: 2,
        purpose: 'spend',
        redeemer_data_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        datum_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        unit_mem: '1801746',
        unit_steps: '807371536',
        fee: '162173',
      },
    ],
  },
];
