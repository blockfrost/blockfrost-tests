import { error_404 } from '../../errors/index.js';
import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'scripts/12108f654f8a58118e06fa8cccf5b6def94b07eab73f03ae0dbf8e3d/utxos',
);

export default [
  ...paginationFixtures,
  {
    // Stable, long-lived reference script (CIP-33) deployed at its own script
    // address since 2024-02; the single UTxO is never spent.
    id: 'scripts-script-hash-utxos-script-held-as-a-reference-script_ea6abbff237b',
    testName: 'scripts/:script_hash/utxos - script held as a reference script',
    endpoints: ['scripts/12108f654f8a58118e06fa8cccf5b6def94b07eab73f03ae0dbf8e3d/utxos'],
    response: [
      {
        address:
          'addr_test1zqfpprm9f799syvwqmagen84km00jjc8a2mn7qawpklcu0gk5syjxqa7fzmywlp2qkf63n2g8jsy22z9sh45s5lggunqwjqqvk',
        tx_hash: 'a84b6cbbfa86cd0fe4997b0b3c2bc26cdb647f2c99902895c321dd5b125ba027',
        output_index: 0,
        amount: [{ unit: 'lovelace', quantity: '22166330' }],
        block: 'b90a16462631b335301bbb0514435c6a615db5a8de8bd38ce683ed1fdd9e5d68',
        data_hash: null,
        inline_datum: null,
        reference_script_hash: '12108f654f8a58118e06fa8cccf5b6def94b07eab73f03ae0dbf8e3d',
      },
    ],
  },
  {
    // Multiple stable UTxOs (deployed 2023-04) hold the same script as a
    // reference script; both sit at the same script address and are unspent.
    id: 'scripts-script-hash-utxos-multiple-utxos-hold-the-same-reference-script_471d8725760e',
    testName: 'scripts/:script_hash/utxos - multiple utxos hold the same reference script',
    endpoints: ['scripts/8404e49607680e3cd6f24029a697cc8a8c32cf340c5b9ef155fee363/utxos'],
    response: [
      {
        address: 'addr_test1wzzqfeykqa5qu0xk7fqznf5hej9gcvk0xsx9h8h32hlwxccqxy5ad',
        tx_hash: '171de32825c7ec95095d8d2cace20e4a246fb68dafb970e08e7b2a68bca1790e',
        output_index: 0,
        amount: [{ unit: 'lovelace', quantity: '28148610' }],
        block: '61ee967c3079c1e31d1ccf25d787ea028540a31626c1dd9e9234c00c847071e5',
        data_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        inline_datum: null,
        reference_script_hash: '8404e49607680e3cd6f24029a697cc8a8c32cf340c5b9ef155fee363',
      },
      {
        address: 'addr_test1wzzqfeykqa5qu0xk7fqznf5hej9gcvk0xsx9h8h32hlwxccqxy5ad',
        tx_hash: '1e491f556a3afbcb669fc4b0ce1a3fdb541613b3641fb7ac1d2dfd6484a09585',
        output_index: 0,
        amount: [{ unit: 'lovelace', quantity: '28148610' }],
        block: 'fdd8e3b31b71f9963136408b75e3bc291f88968290add0d80e1515f15990cb79',
        data_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        inline_datum: null,
        reference_script_hash: '8404e49607680e3cd6f24029a697cc8a8c32cf340c5b9ef155fee363',
      },
    ],
  },
  {
    // Valid on-chain script that is not used as a reference script anywhere.
    id: 'scripts-script-hash-utxos-script-not-held-as-a-reference-script-empty_1ad16c27d255',
    testName: 'scripts/:script_hash/utxos - script not held as a reference script (empty)',
    endpoints: ['scripts/be349fa49a9ce173a999e4229efbb3983c86c8183d75305728d7d9ff/utxos'],
    response: [],
  },
  {
    id: 'scripts-script-hash-utxos-unknown-script-hash_505d3ff4142c',
    testName: 'scripts/:script_hash/utxos - unknown script hash',
    endpoints: ['scripts/0000000000000000000000000000000000000000000000000000dead/utxos'],
    response: error_404,
  },
];
