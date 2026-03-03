export default [
  {
    id: 'accounts-stake-address-queryparams-generic-stake-address-withdrawals_c6384545a57a',
    testName: 'accounts/:stake_address?queryparams generic stake address withdrawals',
    endpoints: [
      'accounts/stake1u88xakeptjw9jwsytkjal76d07an4thvvrfx3w2kt77pw4sc5rr8k/withdrawals?count=4&page=2',
      'accounts/stake1u88xakeptjw9jwsytkjal76d07an4thvvrfx3w2kt77pw4sc5rr8k/withdrawals?count=4&page=2&order=asc',
    ],
    response: [
      {
        tx_hash: '4c8f16ba4730fe0e84d1d79b38a6198b0283b0b87e36388cb3e6c5f07f99bfb0',
        amount: '1862857028',
        tx_slot: 10293574,
        block_height: 4776923,
        block_time: 1601859865,
      },
      {
        tx_hash: '6072dc5a1688418f0da70427b32c49fb6c494170c7988a105ccc33a95a1b0370',
        amount: '1779916664',
        tx_slot: 10827266,
        block_height: 4803501,
        block_time: 1602393557,
      },
      {
        tx_hash: '3926bcc6b726394dee99c681d0768849214ca0b02f728690fcafba6c22c3e19c',
        amount: '821097437',
        tx_slot: 11041345,
        block_height: 4814151,
        block_time: 1602607636,
      },
      {
        tx_hash: '3a277898a5789c433f556672903b3bf260d074efadaf1f0128c4de663a501192',
        amount: '3602325039',
        tx_slot: 11866207,
        block_height: 4854936,
        block_time: 1603432498,
      },
    ],
  },
];
