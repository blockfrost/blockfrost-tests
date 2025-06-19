export default [
  {
    testName: 'accounts/:stake_address?queryparams generic stake address delegations',
    endpoints: [
      'accounts/stake_test1urmus498k7r299azjvhh50c9044zwqxgqfuqqrj3m46y8ucef0hex/delegations?count=2&page=1',
      'accounts/stake_test1urmus498k7r299azjvhh50c9044zwqxgqfuqqrj3m46y8ucef0hex/delegations?count=2&page=1&order=asc',
    ],

    response: [
      {
        active_epoch: 166,
        tx_hash: 'c36ae087092753189197d2c0768950781e8f96ce1eb1e409a8c53fe72b795967',
        amount: '9993621852',
        pool_id: 'pool13la5erny3srx9u4fz9tujtl2490350f89r4w4qjhk0vdjmuv78v',
      },
    ],
  },
];
