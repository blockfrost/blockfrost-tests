export default [
  {
    testName: 'txs/:tx/redeemers',
    endpoints: ['txs/7ec5dd9f2fdd33b73786106b95be7737f6de5d53bb5e7b0610d1b9e947474d3c/redeemers'],
    response: [
      {
        tx_index: 1,
        purpose: 'spend',
        script_hash: 'e24268acb75d8613becf77027b810028d17c776fbdb8ec97b0a69b8e',
        redeemer_data_hash: 'e6238ac7da2575a8f266afbecd5fe0471b9e9aa4ae5697a938321b52cf4889fb',
        datum_hash: 'e6238ac7da2575a8f266afbecd5fe0471b9e9aa4ae5697a938321b52cf4889fb',
        unit_mem: '1426968',
        unit_steps: '512081024',
        fee: '119258',
      },
    ],
  },
];
