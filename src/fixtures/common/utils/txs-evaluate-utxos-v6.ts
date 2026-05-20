import { error_400 } from '../../errors/index.js';

export default [
  {
    id: 'utils-txs-evaluate-utxos-v6-invalid-get-request_d9a6b03c2e4f',
    testName: 'utils/txs/evaluate/utxos invalid GET request (v6)',
    endpoints: ['utils/txs/evaluate/utxos?version=6'],
    response: error_400,
  },
];
