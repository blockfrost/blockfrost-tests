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
    // Valid on-chain script that is not used as a reference script anywhere.
    id: 'scripts-script-hash-utxos-script-not-held-as-a-reference-script-empty_1ad16c27d255',
    testName: 'scripts/:script_hash/utxos - script not held as a reference script (empty)',
    endpoints: ['scripts/be349fa49a9ce173a999e4229efbb3983c86c8183d75305728d7d9ff/utxos'],
    response: [],
  },
  {
    id: 'scripts-script-hash-utxos-unknown-script-hash_5ff58ba04810',
    testName: 'scripts/:script_hash/utxos - unknown script hash',
    endpoints: ['scripts/0000000000000000000000000000000000000000000000000000dead/utxos'],
    response: error_404,
  },
];
