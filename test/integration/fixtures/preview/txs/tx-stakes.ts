export default [
  {
    testName: 'txs/:tx/stakes - generic shelley with delegations and stake certs',
    endpoints: ['txs/e3ca57e8f323265742a8f4e79ff9af884c9ff8719bd4f7788adaea4c33ba07b6/stakes'],
    response: [
      {
        cert_index: 0,
        address: 'stake_test1uzapf83wydusjln97rqr7fen6vgrz5087yqdxm0akqdqkgstjz8g4',
        registration: true,
      },
      {
        cert_index: 3,
        address: 'stake_test1upugeuz3jdy0a7hncusutadavzcetdzylgxcldz39hp9n0s0xy0n5',
        registration: true,
      },
      {
        cert_index: 6,
        address: 'stake_test1urmrzdcvepug9067zj4hy56v4un9t59z559f4z3cyzak7js3z5t2t',
        registration: true,
      },
    ],
  },
  {
    testName: 'txs/:tx - generic shelley with MULTIPLE delegation, stake certs and pool updates',
    endpoints: ['txs/e3ca57e8f323265742a8f4e79ff9af884c9ff8719bd4f7788adaea4c33ba07b6/stakes'],
    response: [
      {
        cert_index: +0,
        address: 'stake_test1uzapf83wydusjln97rqr7fen6vgrz5087yqdxm0akqdqkgstjz8g4',
        registration: true,
      },
      {
        cert_index: 3,
        address: 'stake_test1upugeuz3jdy0a7hncusutadavzcetdzylgxcldz39hp9n0s0xy0n5',
        registration: true,
      },
      {
        cert_index: 6,
        address: 'stake_test1urmrzdcvepug9067zj4hy56v4un9t59z559f4z3cyzak7js3z5t2t',
        registration: true,
      },
    ],
  },
];
