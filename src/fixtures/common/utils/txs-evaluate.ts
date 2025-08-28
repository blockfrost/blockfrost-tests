import { error_400 } from '../../errors/index.js';

export default [
  {
    id: 'utils-txs-evaluate-invalid-get-request_a6cb628e30af',
    testName: 'utils/txs/evaluate invalid GET request',
    endpoints: ['utils/txs/evaluate'],
    headers: { 'Content-Type': 'application/cbor' },
    response: error_400,
  },
];
