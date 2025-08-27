export default [
  {
    id: 'accounts-stake-address-addresses-total-big-stake-address_03f53746eab6',
    testName: 'accounts/:stake_address/addresses/total big stake address',

    endpoints: [
      'accounts/stake_test1urmus498k7r299azjvhh50c9044zwqxgqfuqqrj3m46y8ucef0hex/addresses/total',
    ],

    response: {
      stake_address: 'stake_test1urmus498k7r299azjvhh50c9044zwqxgqfuqqrj3m46y8ucef0hex',
      received_sum: [
        {
          unit: 'lovelace',
          quantity: '49986389606',
        },
        {
          unit: '1a7b9a6264eba2e1f053624ae3740ab29fcf89d6b297e9c60aa6f8d333',
          quantity: '1000000000',
        },
        {
          unit: '1a7b9a6264eba2e1f053624ae3740ab29fcf89d6b297e9c60aa6f8d3465432',
          quantity: '100',
        },
        {
          unit: '1a7b9a6264eba2e1f053624ae3740ab29fcf89d6b297e9c60aa6f8d348656c6c6f4e4654',
          quantity: '1',
        },
        {
          unit: '1a7b9a6264eba2e1f053624ae3740ab29fcf89d6b297e9c60aa6f8d3777577',
          quantity: '1000000001',
        },
        {
          unit: '1a7b9a6264eba2e1f053624ae3740ab29fcf89d6b297e9c60aa6f8d377757732',
          quantity: '1000000002',
        },
      ],
      sent_sum: [
        {
          unit: 'lovelace',
          quantity: '39991474754',
        },
      ],
      tx_count: 5,
    },
  },
];
