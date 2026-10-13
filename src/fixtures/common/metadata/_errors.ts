import { error_400_label, error_404 } from '../../errors/index.js';

// Network-independent error paths of /metadata/txs/labels/{label}/*.
// 31415926535 is not used on mainnet, preprod or preview (checked against Koios tx_metalabels).
export default [
  {
    id: 'metadata-txs-labels-label-malformed-or-out-of-range-label_623f91167689',
    testName: 'metadata/txs/labels/:label/* - malformed or out of range label',
    endpoints: [
      'metadata/txs/labels/stonks',
      'metadata/txs/labels/stonks/cbor',
      'metadata/txs/labels/-1',
      'metadata/txs/labels/-1/cbor',
      'metadata/txs/labels/9223372036854775808',
      'metadata/txs/labels/9223372036854775808/cbor',
    ],
    response: error_400_label,
  },
  {
    id: 'metadata-txs-labels-label-label-never-used_065aea85a02f',
    testName: 'metadata/txs/labels/:label/* - label never used',
    endpoints: ['metadata/txs/labels/31415926535', 'metadata/txs/labels/31415926535/cbor'],
    response: error_404,
  },
];
