import { error_400 } from '../../errors/index.js';

export default [
  {
    testName: 'utils/txs/evaluate invalid GET request',
    endpoints: ['utils/txs/evaluate'],
    headers: { 'Content-Type': 'application/cbor' },
    response: error_400,
  },
];
