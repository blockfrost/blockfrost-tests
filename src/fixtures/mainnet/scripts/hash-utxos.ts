import { error_404 } from '../../errors/index.js';
import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'scripts/ea153b5d4864af15a1079a94a0e2486d6376fa28aafad272d15b243a/utxos',
);

export default [
  ...paginationFixtures,
  {
    // Stable, long-lived reference script (CIP-33) deployed at its own script
    // address since 2023-08; the single UTxO is never spent.
    id: 'scripts-script-hash-utxos-script-held-as-a-reference-script_47a0a932d5c3',
    testName: 'scripts/:script_hash/utxos - script held as a reference script',
    endpoints: ['scripts/ea153b5d4864af15a1079a94a0e2486d6376fa28aafad272d15b243a/utxos'],
    response: [
      {
        address:
          'addr1z84p2w6afpj279dpq7dffg8zfpkkxah69z4045nj69djgwj75jq4yvpskgayj55xegdp30g5rfynax66r8vgn9fldnds7gwhs9',
        tx_hash: '83ad75f5f4c1077b8df49cd3c780f51e66355ba7e6a9f27b1d9150cba00bfedd',
        output_index: 0,
        amount: [{ unit: 'lovelace', quantity: '11593900' }],
        block: 'b0648534f7b795ea193278c3a96c9957c78837acfe9877960c82791b9361766a',
        data_hash: null,
        inline_datum: null,
        reference_script_hash: 'ea153b5d4864af15a1079a94a0e2486d6376fa28aafad272d15b243a',
      },
    ],
  },
  {
    // Valid on-chain script that is not used as a reference script anywhere.
    id: 'scripts-script-hash-utxos-script-not-held-as-a-reference-script-empty_48b3edda3508',
    testName: 'scripts/:script_hash/utxos - script not held as a reference script (empty)',
    endpoints: ['scripts/4f590a3d80ae0312bad0b64d540c3ff5080e77250e9dbf5011630016/utxos'],
    response: [],
  },
  {
    id: 'scripts-script-hash-utxos-unknown-script-hash_5ff58ba04810',
    testName: 'scripts/:script_hash/utxos - unknown script hash',
    endpoints: ['scripts/0000000000000000000000000000000000000000000000000000dead/utxos'],
    response: error_404,
  },
];
