export default [
  {
    testName:
      "accounts/:stake_address?queryparams generic stake address delegations",
    endpoints: [
      "accounts/stake_test1uzg6rdrt4nes96g63jaygvrn777gfnr5wqdr8rq3r6xxtygj4m03u/delegations?count=10&page=1",
      "accounts/stake_test1uzg6rdrt4nes96g63jaygvrn777gfnr5wqdr8rq3r6xxtygj4m03u/delegations?count=5&page=1&order=asc",
    ],

    response: [
      {
        active_epoch: 32,
        tx_hash:
          "e0b1422f63e8bc87db4575a93318da00d5ecd04382e741826205a0083bb1cccd",
        amount: "9997816943",
        pool_id: "pool1k4rdvvuhy7h927psyew9syupwddy77t4j8lc74hpgzpvv7yklwg",
      },
      {
        active_epoch: 32,
        tx_hash:
          "40df2c50979970a1a883f6d2087f346ed68b18b0d937865768309bf9194ae84e",
        amount: "4996135558",
        pool_id: "pool1vevw38yxlyaxke29d40ace7jzz7d38qtcmd5kk36chf3shh02ek",
      },
      {
        active_epoch: 32,
        tx_hash:
          "dad259530e6d780cf51556d96fa7af841963b6003f51bff4eb4967770a930ca2",
        amount: "4993318615",
        pool_id: "pool1z9nsz7wyyxc5r8zf8pf774p9gry09yxtrlqlg5tsnjndv5xupu3",
      },
      {
        active_epoch: 40,
        tx_hash:
          "0d4b8be2249c12c42aa85e8a5b740cb26e4472f5e2fc14f20ec576007cf02073",
        amount: "2496568615",
        pool_id: "pool1a7h89sr6ymj9g2a9tm6e6dddghl64tp39pj78f6cah5ewgd4px0",
      },
      {
        active_epoch: 116,
        tx_hash:
          "f2a4081a9c57c514f1c4b391d0fb21bf086d8de5e025c7f2869885e10108de79",
        amount: "229894694280",
        pool_id: "pool1vzqtn3mtfvvuy8ghksy34gs9g97tszj5f8mr3sn7asy5vk577ec",
      },
    ],
  },
];
