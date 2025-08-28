export default [
  {
    id: 'blocks-hash-or-number-txs-queryparams-generic-shelley-desc_4f5c9f304918',
    testName: 'blocks/:hash_or_number/txs?queryparams - generic shelley desc',

    endpoints: [
      'blocks/d452532fd3bfb678548f00c210b639d31cecc7d5d3b3b7d8151ce7cc25dfbb15/txs?order=desc&count=2&page=2',
      'blocks/1846333/txs?order=desc&count=2&page=2',
    ],
    response: [
      '789569936efd4a8aa367a73bee9a511f732f8079d05566d7451f95a893c93b3f',
      '7f1cc8b7195d40faf032ebbace56d6bd9e46ec9846725677f1bf99294bc86172',
    ],
  },
  {
    id: 'blocks-hash-or-number-txs-queryparams-generic-shelley_e464ab26b689',
    testName: 'blocks/:hash_or_number/txs?queryparams - generic shelley',

    endpoints: [
      'blocks/d452532fd3bfb678548f00c210b639d31cecc7d5d3b3b7d8151ce7cc25dfbb15/txs?order=asc&count=2&page=2',
      'blocks/1846333/txs?order=asc&count=2&page=2',
      'blocks/d452532fd3bfb678548f00c210b639d31cecc7d5d3b3b7d8151ce7cc25dfbb15/txs?count=2&page=2',
      'blocks/1846333/txs?count=2&page=2',
    ],
    response: [
      '1822701a8edd2bce097fa874703a1ea0b4eb28303bfd9d5d6cb79b70d52fca48',
      '1cb2d4f2f8f870d2c9fe293bdbde1dc8d800d688d008f2671def10099cccf741',
    ],
  },
  {
    id: 'blocks-hash-or-number-txs-generic-shelley_e9621942a54b',
    testName: 'blocks/:hash_or_number/txs - generic shelley',

    endpoints: [
      'blocks/d452532fd3bfb678548f00c210b639d31cecc7d5d3b3b7d8151ce7cc25dfbb15/txs',
      'blocks/1846333/txs',
    ],
    response: [
      '199f119a7fd0463c5cda3a89b990985fd3ce380e2f6c28ef7e36971bb776bc92',
      '8b67b493c112ff92e22716130300f3d49958d6e13322c16ef13f5cbcf3475924',
      '1822701a8edd2bce097fa874703a1ea0b4eb28303bfd9d5d6cb79b70d52fca48',
      '1cb2d4f2f8f870d2c9fe293bdbde1dc8d800d688d008f2671def10099cccf741',
      '7f1cc8b7195d40faf032ebbace56d6bd9e46ec9846725677f1bf99294bc86172',
      '789569936efd4a8aa367a73bee9a511f732f8079d05566d7451f95a893c93b3f',
      '7285d7a1dea1618bd59bf88d64d16b6f8d28fe45669399683aeb5bae24da0a60',
      '837b03bb863a822fd8d0a995a27be445f749fe9b29aab22ac976d3fbe7e7bc06',
    ],
  },
];
