import { error_400 } from '../../errors/index.js';

export default [
  {
    id: 'utils-txs-evaluate-utxos-invalid-get-request_f9b2e7c14cae',
    testName: 'utils/txs/evaluate/utxos invalid GET request',
    endpoints: ['utils/txs/evaluate/utxos'],
    response: error_400,
  },
];
