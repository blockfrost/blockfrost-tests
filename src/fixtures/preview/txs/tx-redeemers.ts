export default [
  {
    id: 'txs-tx-redeemers_4159b667f762',
    testName: 'txs/:tx/redeemers',
    endpoints: ['txs/ecc0420f2f5d02d9200dd9e008dfe612e82e46eb036b8287e95d1a0249ea040e/redeemers'],

    response: [
      {
        tx_index: 0,
        purpose: 'spend',
        script_hash: 'eb8a0f8c99610a0eadeb0173cd25d57075aafcf5be7c03665d5576b8',
        redeemer_data_hash: '58973384df665c05b152ac081652b8b0aa697d8310893855170361163ff59dbb',
        datum_hash: '58973384df665c05b152ac081652b8b0aa697d8310893855170361163ff59dbb',
        unit_mem: '3138824',
        unit_steps: '1369417919',
        fee: '279846',
      },
      {
        tx_index: 1,
        purpose: 'spend',
        script_hash: '04e0f7205915547a3898757f008cde8f7bae8d341819c3907ac23655',
        redeemer_data_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        datum_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        unit_mem: '23776',
        unit_steps: '8949203',
        fee: '2018',
      },
    ],
  },
];
