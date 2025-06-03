export default [
  {
    testName: 'accounts/:stake_address?queryparams generic stake address history',
    endpoints: [
      'accounts/stake_test1uzg6rdrt4nes96g63jaygvrn777gfnr5wqdr8rq3r6xxtygj4m03u/history?count=3&page=2',
      'accounts/stake_test1uzg6rdrt4nes96g63jaygvrn777gfnr5wqdr8rq3r6xxtygj4m03u/history?count=3&page=2&order=asc',
    ],

    response: [
      {
        active_epoch: 35,
        amount: '9996641718',
        pool_id: 'pool1z9nsz7wyyxc5r8zf8pf774p9gry09yxtrlqlg5tsnjndv5xupu3',
      },
      {
        active_epoch: 36,
        amount: '9996641718',
        pool_id: 'pool1z9nsz7wyyxc5r8zf8pf774p9gry09yxtrlqlg5tsnjndv5xupu3',
      },
      {
        active_epoch: 37,
        amount: '9996641718',
        pool_id: 'pool1z9nsz7wyyxc5r8zf8pf774p9gry09yxtrlqlg5tsnjndv5xupu3',
      },
    ],
  },
];
