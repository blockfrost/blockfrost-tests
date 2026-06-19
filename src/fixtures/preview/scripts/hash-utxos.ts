import { error_404 } from '../../errors/index.js';
import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'scripts/5e26aa4b932d656580a16e1002425b3a9485cdf2f71fc303c955e119/utxos',
);

export default [
  ...paginationFixtures,
  {
    // Stable, long-lived reference script (CIP-33) deployed at its own script
    // address since 2023-06; the single UTxO is never spent.
    id: 'scripts-script-hash-utxos-script-held-as-a-reference-script_e71fcec273ed',
    testName: 'scripts/:script_hash/utxos - script held as a reference script',
    endpoints: ['scripts/5e26aa4b932d656580a16e1002425b3a9485cdf2f71fc303c955e119/utxos'],
    response: [
      {
        address: 'addr_test1wzjwvgn5k3m9ekmrceh6c0azywhh3d8l5jq09tpm7cwp0es5ksry9',
        tx_hash: 'a3839e95369a0440cef381078e7d28238ae0766b479623450220365866229466',
        output_index: 0,
        amount: [{ unit: 'lovelace', quantity: '14102320' }],
        block: '16469d4585be8dc45d87f6c1bf17ee42426d68225eebbd263c97cc4debab1f0e',
        data_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        inline_datum: null,
        reference_script_hash: '5e26aa4b932d656580a16e1002425b3a9485cdf2f71fc303c955e119',
      },
    ],
  },
  {
    // Valid on-chain script that is not used as a reference script anywhere.
    id: 'scripts-script-hash-utxos-script-not-held-as-a-reference-script-empty_10ef6940dc10',
    testName: 'scripts/:script_hash/utxos - script not held as a reference script (empty)',
    endpoints: ['scripts/c22560ac64be051102d6d1cfe5b9b82eb6af4f00dd3806e5cd82e837/utxos'],
    response: [],
  },
  {
    id: 'scripts-script-hash-utxos-unknown-script-hash_5ff58ba04810',
    testName: 'scripts/:script_hash/utxos - unknown script hash',
    endpoints: ['scripts/0000000000000000000000000000000000000000000000000000dead/utxos'],
    response: error_404,
  },
];
