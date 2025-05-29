export default [
  {
    testName:
      "accounts/:stake_address?queryparams generic stake address withdrawals",
    endpoints: [
      "accounts/stake_test17qtu26mrza0nea07a58w0t8kvxjs9e4xgtr3x490322s9ecuysch4/withdrawals?count=2&page=2",
      "accounts/stake_test17qtu26mrza0nea07a58w0t8kvxjs9e4xgtr3x490322s9ecuysch4/withdrawals?count=2&page=2&order=asc",
    ],

    response: [
      {
        tx_hash:
          "5b75b84367bb406dcc7e404847f8c5e0c22fb5a7bae97128157fc13b458162e0",
        amount: "126321622",
      },
      {
        tx_hash:
          "eede3559e71c26d0ef7e01d896f631c6c714d419a83d0271a41d5abb54bda191",
        amount: "514812352",
      },
    ],
  },
];
