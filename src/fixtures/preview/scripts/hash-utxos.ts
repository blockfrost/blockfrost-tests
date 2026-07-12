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
    // Multiple stable UTxOs (deployed 2022-11) hold the same script as a
    // reference script; both sit at the same script address and are unspent.
    id: 'scripts-script-hash-utxos-multiple-utxos-hold-the-same-reference-script_d53b9c8ddd91',
    testName: 'scripts/:script_hash/utxos - multiple utxos hold the same reference script',
    endpoints: ['scripts/4cb17f742d599acb0ad1df2f1cbc282f6e3e6d8506142e6cf8824846/utxos'],
    response: [
      {
        address: 'addr_test1wrpn0ad8rj3pgfpzae5tghpf325nyvh94zfkj3kzgvxzvcc2zuac6',
        tx_hash: '34c49e3f641e5ab53efb6bf5f23a914c7bace7625af8c0cf8560b53a9acfc7c2',
        output_index: 0,
        amount: [{ unit: 'lovelace', quantity: '49659820' }],
        block: 'e8ad910d114206163b5c7277110f32e169ce1b4079b1b853a32ebbdc30bb3965',
        data_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        inline_datum: null,
        reference_script_hash: '4cb17f742d599acb0ad1df2f1cbc282f6e3e6d8506142e6cf8824846',
      },
      {
        address: 'addr_test1wrpn0ad8rj3pgfpzae5tghpf325nyvh94zfkj3kzgvxzvcc2zuac6',
        tx_hash: '300fdcf1a58ba86f688ab7319d61a219d23bc2f01ad5fce56130ba78222ff1f7',
        output_index: 0,
        amount: [{ unit: 'lovelace', quantity: '49659820' }],
        block: '35b0e7818bbb42e282580c405e58479866d70fbc0123fc2120466f06260f3694',
        data_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        inline_datum: null,
        reference_script_hash: '4cb17f742d599acb0ad1df2f1cbc282f6e3e6d8506142e6cf8824846',
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
    id: 'scripts-script-hash-utxos-unknown-script-hash_eb91e5f42089',
    testName: 'scripts/:script_hash/utxos - unknown script hash',
    endpoints: ['scripts/0000000000000000000000000000000000000000000000000000dead/utxos'],
    response: error_404,
  },
];
