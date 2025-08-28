export default [
  {
    id: 'txs-tx-pool-retires-generic-shelley-with-pool-retirements_ff617f00b592',
    testName: 'txs/:tx/pool_retires - generic shelley with pool retirements',
    endpoints: [
      'txs/0bbb9b5c706a310d2d23ea1aa17e2eb4a54002ea9d5e891228c05fd9ab6b51c8/pool_retires',
    ],
    response: [
      {
        cert_index: 0,
        pool_id: 'pool13q0eh32ptwmns8wyket34dnzal6jwltc6audq4s5ehcdg9e7xvs',
        retiring_epoch: 512,
      },
    ],
  },
];
