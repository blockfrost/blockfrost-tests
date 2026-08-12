import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'scripts/168376d9c3f792610e5ecbfd2895de76f52d6ba06842e24d03814535/redeemers',
);

export default [
  ...paginationFixtures,
  {
    id: 'scripts-hash-redeemers_76afee61364c',
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
  {
    // a script used both as a payment credential and as a DRep credential:
    // its redeemers mix spend and cert purposes across txs. the script is
    // still active, so pin the first rows of its history with
    // order=asc&count — those never change. row order is total here (r.id),
    // unlike txs/:tx/redeemers.
    id: 'scripts-hash-redeemers-cert-purpose_8a41f0b2c55d',
    testName: 'scripts/:hash/redeemers cert purpose',
    endpoints: [
      'scripts/04dbc20a40869ad86a89996e61bf0bed551b361f99cbe76ecd6dfc2d/redeemers?order=asc&count=4',
    ],
    response: [
      {
        tx_hash: '0114f2cc5f2766fb7c1bd98b23a0a04be43a2b0e0017ef56ef058ce97c47c403',
        tx_index: 0,
        purpose: 'spend',
        redeemer_data_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        datum_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        unit_mem: '88091',
        unit_steps: '26419576',
        fee: '6988',
      },
      {
        tx_hash: '7b1fa6b65f0e175114cdecb011f34ed7a9bce875007db2b934e7a47d0435642f',
        tx_index: 0,
        purpose: 'cert',
        redeemer_data_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        datum_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        unit_mem: '66968',
        unit_steps: '20020457',
        fee: '5308',
      },
      {
        tx_hash: 'cde6e9a5808cbce0a17d788234a4f1006f001aefedc7263217755fb5d77274e6',
        tx_index: 0,
        purpose: 'cert',
        redeemer_data_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        datum_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        unit_mem: '66968',
        unit_steps: '20020457',
        fee: '5308',
      },
      {
        tx_hash: 'dca40b34c3f556177e26dcbbe69999652d28591051f971e052074cb764c09894',
        tx_index: 1,
        purpose: 'spend',
        redeemer_data_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        datum_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        unit_mem: '81404',
        unit_steps: '24578388',
        fee: '6470',
      },
    ],
  },
  {
    // a withdraw-zero batcher stake script: every execution is a reward
    // redeemer. the script is still active, so pin the first rows of its
    // history with order=asc&count — those never change.
    id: 'scripts-hash-redeemers-reward-purpose_c3de19b8407a',
    testName: 'scripts/:hash/redeemers reward purpose',
    endpoints: [
      'scripts/80a867770caabaa845cd7616038f39ab5a9659dc57db0b4e1c64fcd6/redeemers?order=asc&count=3',
    ],
    response: [
      {
        tx_hash: 'a82e594b84d9231932647d34b59e830c2477c1acf103c57f0a2aca19d9fba454',
        tx_index: 0,
        purpose: 'reward',
        redeemer_data_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        datum_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        unit_mem: '32915',
        unit_steps: '10159844',
        fee: '2632',
      },
      {
        tx_hash: '0ba048a6022a2ec3771d02e546433a29ed86a343dffa26f0994c5d6f5418f597',
        tx_index: 0,
        purpose: 'reward',
        redeemer_data_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        datum_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        unit_mem: '32915',
        unit_steps: '10159844',
        fee: '2632',
      },
      {
        tx_hash: 'a679e08f81f193a7c000320a832f9fff9f1001c443a0040c9916d42ca7e2fe47',
        tx_index: 0,
        purpose: 'reward',
        redeemer_data_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        datum_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        unit_mem: '32915',
        unit_steps: '10159844',
        fee: '2632',
      },
    ],
  },
];
