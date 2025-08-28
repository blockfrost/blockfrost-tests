export default [
  {
    id: 'txs-tx-delegations-shelley-delegations_25bb811a6871',
    testName: 'txs/:tx/delegations - shelley delegations',
    endpoints: ['txs/6091f714ccbb720fcb7db72fad984afe94095f7a5aa9a03879b60fbc35740a97/delegations'],
    response: [
      {
        index: 1,
        cert_index: 1,
        address: 'stake_test1uppctwdc07j7aeut3kzwkxddtarc8s5znulauvcp8snl6wsx8ttpx',
        pool_id: 'pool1xg80gqxp89sllgk6xs6ajwjxkjntwjc2wzc9mjsnzchkgm4z2se',
        active_epoch: 349,
      },
    ],
  },
  {
    id: 'txs-tx-delegations-generic-shelley-with-multiple-delegation-stake-certs-and-pool-updates_5a1bbbcfa271',
    testName:
      'txs/:tx/delegations - generic shelley with MULTIPLE delegation, stake certs and pool updates',
    endpoints: ['txs/e3ca57e8f323265742a8f4e79ff9af884c9ff8719bd4f7788adaea4c33ba07b6/delegations'],
    response: [
      {
        index: 2,
        cert_index: 2,
        address: 'stake_test1uzapf83wydusjln97rqr7fen6vgrz5087yqdxm0akqdqkgstjz8g4',
        pool_id: 'pool16h8ugt8k0a4kxa5g6x062zjrgfjc7cehpw0ze8374axlul76932',
        active_epoch: 2,
      },
      {
        index: 5,
        cert_index: 5,
        address: 'stake_test1upugeuz3jdy0a7hncusutadavzcetdzylgxcldz39hp9n0s0xy0n5',
        pool_id: 'pool18r62tz408lkgfu6pq5svwzkh2vslkeg6mf72qf3h8njgvzhx9ce',
        active_epoch: 2,
      },
      {
        index: 8,
        cert_index: 8,
        address: 'stake_test1urmrzdcvepug9067zj4hy56v4un9t59z559f4z3cyzak7js3z5t2t',
        pool_id: 'pool1grvqd4eu354qervmr62uew0nsrjqedx5kglldeqr4c29vv59rku',
        active_epoch: 2,
      },
    ],
  },
  {
    id: 'txs-tx-generic-shelley-with-delegations-and-stake-certs_5e4617aa4a90',
    testName: 'txs/:tx - generic shelley with delegations and stake certs',
    endpoints: ['txs/869e0eaeb990d2e4d5b9472f51c46ae114867c72c3526f655a7695a0580b2c12/delegations'],
    response: [
      {
        index: 1,
        cert_index: 1,
        address: 'stake_test17q5derx9asrr5u4j7x27tfdt7w8dcupnuh2rl8ewklrqjggtss9z5',
        pool_id: 'pool1rk2y9gx6vll8lawzdqlky5p2a3ypzsxg07arg8gmhkjj2905035',
        active_epoch: 44,
      },
    ],
  },
];
