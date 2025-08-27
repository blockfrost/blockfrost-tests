import { error_400_blocks, error_400, error_400_blocks_out_of_range } from '../../errors/index.js';

export default [
  {
    id: 'missing-or-malformed-block-hash_a1111dbe73e5',
    testName: 'Missing or malformed block hash.',

    endpoints: [
      'blocks//next',
      'blocks//previous',
      'blocks//txs',
      'blocks//addresses',
      'blocks/c6e3901b2cd95598b0bf5dc55cb62d682ea369298be9825b4b58d891b844b32X',
      'blocks/c6e3901b2cd95598b0bf5dc55cb62d682ea369298be9825b4b58d891b844b3200',
      'blocks/69nice',
      'blocks/stonks',
      'blocks/c6e3901b2cd95598b0bf5dc55cb62d682ea369298be9825b4b58d891b844b32X/next',
      'blocks/c6e3901b2cd95598b0bf5dc55cb62d682ea369298be9825b4b58d891b844b3200/next',
      'blocks/69nice/next',
      'blocks/stonks/next',
      'blocks/c6e3901b2cd95598b0bf5dc55cb62d682ea369298be9825b4b58d891b844b32X/previous',
      'blocks/c6e3901b2cd95598b0bf5dc55cb62d682ea369298be9825b4b58d891b844b3200/previous',
      'blocks/69nice/previous',
      'blocks/stonks/previous',
      'blocks/c6e3901b2cd95598b0bf5dc55cb62d682ea369298be9825b4b58d891b844b32X/txs',
      'blocks/c6e3901b2cd95598b0bf5dc55cb62d682ea369298be9825b4b58d891b844b3200/txs',
      'blocks/69nice/txs',
      'blocks/stonks/txs',
      'blocks/c6e3901b2cd95598b0bf5dc55cb62d682ea369298be9825b4b58d891b844b32X/addresses',
      'blocks/c6e3901b2cd95598b0bf5dc55cb62d682ea369298be9825b4b58d891b844b3200/addresses',
      'blocks/69nice/addresses',
      'blocks/stonks/addresses',
    ],

    response: error_400_blocks,
  },
  {
    id: 'invalid-path_cebd2cd0b59b',
    testName: 'Invalid path',
    endpoints: ['blocks/'],
    response: error_400,
  },
  {
    id: 'blocks-missing-out-of-range-or-malformed-block-number_777d029a5853',
    testName: 'blocks - Missing, out of range or malformed block number.',

    endpoints: [
      'blocks/53604351654465',
      'blocks/-5',
      'blocks/53604351654465/next',
      'blocks/-5/next',
      'blocks/53604351654465/previous',
      'blocks/-5/previous',
      'blocks/53604351654465/txs',
      'blocks/-5/txs',
      'blocks/53604351654465/addresses',
      'blocks/-5/addresses',
    ],

    response: error_400_blocks_out_of_range,
  },
];
