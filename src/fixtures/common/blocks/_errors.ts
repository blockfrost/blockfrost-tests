import {
  error_400_blocks,
  error_400_blocks_out_of_range,
  error_400_epochs,
  error_400_integer_param,
  error_400_slot,
  error_404,
} from '../../errors/index.js';

// Network-independent error paths of /blocks/*.
// 2147483647 is the largest block number / slot the backend accepts; no chain is that long yet.
export default [
  {
    id: 'blocks-hash-or-number-txs-cbor-malformed-block-hash_dd94df2ff45f',
    testName: 'blocks/:hash_or_number/txs/cbor - malformed block hash',
    endpoints: [
      'blocks/stonks/txs/cbor',
      'blocks/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf0/txs/cbor',
    ],
    response: error_400_blocks,
  },
  {
    id: 'blocks-hash-or-number-negative-or-out-of-range-block-number_58be3e65195f',
    testName: 'blocks/:hash_or_number/* - negative or out of range block number',
    endpoints: [
      'blocks/-1',
      'blocks/-1/next',
      'blocks/-1/previous',
      'blocks/-1/txs',
      'blocks/-1/txs/cbor',
      'blocks/-1/addresses',
      'blocks/2147483648/txs/cbor',
    ],
    response: error_400_blocks_out_of_range,
  },
  {
    id: 'blocks-hash-or-number-block-hash-not-on-chain_6c0216dbd332',
    testName: 'blocks/:hash_or_number/* - block hash not on-chain',
    endpoints: [
      'blocks/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057',
      'blocks/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/next',
      'blocks/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/previous',
      'blocks/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/txs',
      'blocks/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/txs/cbor',
      'blocks/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/addresses',
    ],
    response: error_404,
  },
  {
    id: 'blocks-hash-or-number-block-number-not-on-chain_9d10d2292027',
    testName: 'blocks/:hash_or_number/* - block number not on-chain',
    endpoints: [
      'blocks/2147483647',
      'blocks/2147483647/next',
      'blocks/2147483647/previous',
      'blocks/2147483647/txs',
      'blocks/2147483647/txs/cbor',
      'blocks/2147483647/addresses',
    ],
    response: error_404,
  },
  {
    id: 'blocks-slot-slot-number-negative-or-out-of-range-slot_040fed231e00',
    testName: 'blocks/slot/:slot_number - negative or out of range slot',
    endpoints: ['blocks/slot/-1', 'blocks/slot/2147483648'],
    response: error_400_slot,
  },
  {
    id: 'blocks-slot-slot-number-non-integer-slot_77d7aeabb5ec',
    testName: 'blocks/slot/:slot_number - non-integer slot',
    endpoints: ['blocks/slot/stonks'],
    response: error_400_integer_param('slot_number'),
  },
  {
    id: 'blocks-slot-slot-number-slot-without-a-block_72dd8dada893',
    testName: 'blocks/slot/:slot_number - slot without a block',
    endpoints: ['blocks/slot/2147483647'],
    response: error_404,
  },
  {
    id: 'blocks-epoch-epoch-number-slot-slot-number-negative-or-out-of-range-epoch_33c985a5d64a',
    testName: 'blocks/epoch/:epoch_number/slot/:slot_number - negative or out of range epoch',
    endpoints: ['blocks/epoch/-1/slot/0', 'blocks/epoch/2147483648/slot/0'],
    response: error_400_epochs,
  },
  {
    id: 'blocks-epoch-epoch-number-slot-slot-number-negative-or-out-of-range-slot_7ba86c4b4866',
    testName: 'blocks/epoch/:epoch_number/slot/:slot_number - negative or out of range slot',
    endpoints: ['blocks/epoch/1/slot/-1', 'blocks/epoch/1/slot/2147483648'],
    response: error_400_slot,
  },
  {
    id: 'blocks-epoch-epoch-number-slot-slot-number-non-integer-epoch_212c450ab738',
    testName: 'blocks/epoch/:epoch_number/slot/:slot_number - non-integer epoch',
    endpoints: ['blocks/epoch/stonks/slot/0'],
    response: error_400_integer_param('epoch_number'),
  },
  {
    id: 'blocks-epoch-epoch-number-slot-slot-number-non-integer-slot_50591abaa7c9',
    testName: 'blocks/epoch/:epoch_number/slot/:slot_number - non-integer slot',
    endpoints: ['blocks/epoch/1/slot/stonks'],
    response: error_400_integer_param('slot_number'),
  },
  {
    id: 'blocks-epoch-epoch-number-slot-slot-number-slot-without-a-block_ab39461c070f',
    testName: 'blocks/epoch/:epoch_number/slot/:slot_number - slot without a block',
    endpoints: ['blocks/epoch/1/slot/2147483647', 'blocks/epoch/69696969/slot/0'],
    response: error_404,
  },
];
