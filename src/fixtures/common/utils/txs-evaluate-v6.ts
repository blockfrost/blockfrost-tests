import { error_400 } from '../../errors/index.js';

export default [
  {
    id: 'utils-txs-evaluate-v6-invalid-get-request_c8f5a92b1d3e',
    testName: 'utils/txs/evaluate invalid GET request (v6)',
    endpoints: ['utils/txs/evaluate?version=6'],
    headers: { 'Content-Type': 'application/cbor' },
    response: error_400,
  },
];
