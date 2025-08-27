export default [
  {
    id: 'txs-tx-metadata-cbor-generic-shelley-with-metadata-cbor_8d05dcc044ac',
    testName: 'txs/:tx/metadata/cbor - generic shelley with metadata cbor',

    endpoints: [
      'txs/0acadcce0e878b088bb7b856db7da4ef1fcd4505a5008becc13208440b3a601f/metadata/cbor',
    ],

    response: [
      {
        label: '6862',
        cbor_metadata:
          '\\xa1191acea165706f6f6c7381a262696478383861613436393038386561663563333863336434666166306433353136636136373063643664663535343566616665613266373032353862667765696768741864',
        metadata:
          'a1191acea165706f6f6c7381a262696478383861613436393038386561663563333863336434666166306433353136636136373063643664663535343566616665613266373032353862667765696768741864',
      },
    ],
  },
  {
    id: 'txs-tx-all-generic-shelley-with-no-data-blanks_348ab6ce2829',
    testName: 'txs/:tx/all - generic shelley with no data - blanks',

    endpoints: [
      'txs/6e6262f2a05490b2bb97bbec222e83960d1c0fe6d310e634617324e392ecb760/withdrawals',
      'txs/6e6262f2a05490b2bb97bbec222e83960d1c0fe6d310e634617324e392ecb760/mirs',
      'txs/6e6262f2a05490b2bb97bbec222e83960d1c0fe6d310e634617324e392ecb760/stakes',
      'txs/6e6262f2a05490b2bb97bbec222e83960d1c0fe6d310e634617324e392ecb760/delegations',
      'txs/6e6262f2a05490b2bb97bbec222e83960d1c0fe6d310e634617324e392ecb760/pool_retires',
      'txs/6e6262f2a05490b2bb97bbec222e83960d1c0fe6d310e634617324e392ecb760/pool_updates',
    ],

    response: [],
  },
];
