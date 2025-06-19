export default [
  {
    testName: 'accounts/:stake_address?queryparams generic stake address history',
    endpoints: [
      'accounts/stake_test1uz55sf04mkd29tehvf4pu95vjhd6e72a50tcycje88jgcysxnh7d8/history?count=3&page=2',
      'accounts/stake_test1uz55sf04mkd29tehvf4pu95vjhd6e72a50tcycje88jgcysxnh7d8/history?count=3&page=2&order=asc',
    ],

    response: [
      {
        active_epoch: 42,
        amount: '478880198371',
        pool_id: 'pool1kzfkwxsw2f68gk0pp4cc5r3sfejxgpnp9tcygtxqnm0lgnyv0ea',
      },
      {
        active_epoch: 43,
        amount: '619521460463',
        pool_id: 'pool1kzfkwxsw2f68gk0pp4cc5r3sfejxgpnp9tcygtxqnm0lgnyv0ea',
      },
      {
        active_epoch: 44,
        amount: '660119149575',
        pool_id: 'pool1kzfkwxsw2f68gk0pp4cc5r3sfejxgpnp9tcygtxqnm0lgnyv0ea',
      },
    ],
  },
];
