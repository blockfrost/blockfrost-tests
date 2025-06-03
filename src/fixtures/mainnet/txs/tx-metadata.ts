export default [
  {
    testName: 'txs/:tx - generic shelley with metadata',
    endpoints: ['txs/e641005803337a553a03cf3c11a1819491a629bd7d0a3c39e4866a01b5dac36d/metadata'],
    response: [
      {
        label: '1968',
        json_metadata: {
          TSLA: [{ value: '865.85', source: 'investorsExchange' }],
          DRAND: {
            round: 492_700,
            randomness: '22966996b523a4726c3df9d7b8bae50230ef08a7452c53d64eacc2dad632afc5',
          },
          ADABTC: [{ value: '7.96e-06', source: 'coinGecko' }],
          ADAEUR: [{ value: '0.260806', source: 'coinGecko' }],
          ADAUSD: [
            { value: '0.318835', source: 'coinGecko' },
            { value: '0.32190816861292343', source: 'ergoOracles' },
          ],
          AGIBTC: [{ value: '0.077643', source: 'coinGecko' }],
          BTCUSD: [{ value: '40088', source: 'coinGecko' }],
          ERGUSD: [
            { value: '0.573205', source: 'coinGecko' },
            { value: '0.5728722202262749', source: 'ergoOracles' },
          ],
          BTCDIFF: [{ value: '20607418304385.63', source: 'blockBook' }],
        },
      },
    ],
  },
];
