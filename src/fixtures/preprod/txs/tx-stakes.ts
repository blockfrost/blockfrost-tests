export default [
  {
    id: 'txs-tx-generic-shelley-with-multiple-delegation-stake-certs-and-pool-updates_f6410b7c4366',
    testName: 'txs/:tx - generic shelley with MULTIPLE delegation, stake certs and pool updates',
    endpoints: ['txs/a3d6f2627a56fe7921eeda546abfe164321881d41549b7f2fbf09ea0b718d758/stakes'],
    response: [
      {
        cert_index: 0,
        address: 'stake_test1uztg6yppa0t30rslkrneva5c9qju40rhndjnuy356kxw83s6n95nu',
        registration: true,
      },
      {
        cert_index: 3,
        address: 'stake_test1urcnqgzt2x8hpsvej4zfudehahknm8lux894pmqwg5qshgcrn346q',
        registration: true,
      },
      {
        cert_index: 6,
        address: 'stake_test1uquj460qdrj4az6uy7kvtzct4w8226xq4t30dlzfhc360tgegny4m',
        registration: true,
      },
    ],
  },
  {
    id: 'txs-tx-stakes-generic-shelley-with-delegations-and-stake-certs_731c25d23b7d',
    testName: 'txs/:tx/stakes - generic shelley with delegations and stake certs',
    endpoints: ['txs/22db777567c1896a508298ac56df753968cd17b5e32f28d903e87963d9ee1e7f/stakes'],
    response: [
      {
        cert_index: 0,
        address: 'stake_test1urengakx0m9rnzxmep53vt5kzjvwk9phqryea4rc2ftuxnc449lnj',
        registration: true,
      },
    ],
  },
];
