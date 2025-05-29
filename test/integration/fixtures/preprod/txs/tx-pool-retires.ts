export default [
  {
    testName: "txs/:tx/pool_retires - generic shelley with pool retirements",
    endpoints: ["txs/823048cecd15e2be0025e46dade7fc4b8de6e7f741f9416be17befff3c697605/pool_retires"],
    response: [
      {
        cert_index: 0,
        pool_id: "pool1a4rwdu0rykl0e48pcve7jyk02u96hm3h8lv2xf6t6vvdwngx4uk",
        retiring_epoch: 122,
      },
    ],
  },
];
