import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'scripts/4f590a3d80ae0312bad0b64d540c3ff5080e77250e9dbf5011630016/redeemers',
);

export default [
  ...paginationFixtures,
  {
    id: 'scripts-hash-redeemers_479c4b472ee2',
    testName: 'scripts/:hash/redeemers',
    endpoints: ['scripts/4f590a3d80ae0312bad0b64d540c3ff5080e77250e9dbf5011630016/redeemers'],

    response: [
      {
        tx_hash: 'a95d16e891e51f98a3b1d3fe862ed355ebc8abffb7a7269d86f775553d9e653f',
        tx_index: 0,
        purpose: 'spend',
        redeemer_data_hash: '5a595ce795815e81d22a1a522cf3987d546dc5bb016de61b002edd63a5413ec4',
        datum_hash: '5a595ce795815e81d22a1a522cf3987d546dc5bb016de61b002edd63a5413ec4',
        unit_mem: '520448',
        unit_steps: '211535239',
        fee: '45282',
      },
    ],
  },
];
