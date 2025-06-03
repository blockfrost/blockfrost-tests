export default [
  {
    testName:
      "accounts/:stake_address?queryparams generic stake address withdrawals",
    endpoints: [
      "accounts/stake_test1uz55sf04mkd29tehvf4pu95vjhd6e72a50tcycje88jgcysxnh7d8/withdrawals?count=2&page=2",
      "accounts/stake_test1uz55sf04mkd29tehvf4pu95vjhd6e72a50tcycje88jgcysxnh7d8/withdrawals?count=2&page=2&order=asc",
    ],

    response: [
      {
        tx_hash:
          "d48d4bcf8fb9b67ffe7bf3e39e3b277638912f7b92c1a50bbf64ffc1a8625d00",
        amount: "37650818105",
      },
      {
        tx_hash:
          "efbdd5d7f8dca6b1312bd54b123b5d940795c09472d656bec20f1be3be6cd7c9",
        amount: "10498486219",
      },
    ],
  },
];
