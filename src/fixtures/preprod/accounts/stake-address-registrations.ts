export default [
  {
    testName: 'accounts/:stake_address?queryparams generic stake address registrations',
    endpoints: [
      'accounts/stake_test1urvp7670m5ec50fz5dekdu5e8pycx62ys2fkuu80m5v823q59qmel/registrations?count=2&page=1',
      'accounts/stake_test1urvp7670m5ec50fz5dekdu5e8pycx62ys2fkuu80m5v823q59qmel/registrations?count=2&page=1&order=asc',
    ],

    response: [
      {
        tx_hash: '1362badd13dd77c70416ac2c7ae6cb815944335d16bcadf4ac94e7cfaa382d00',
        action: 'registered',
      },
      {
        tx_hash: '8c6db967792ae28f8702254797a5aa99445900def7e09c2f3f82bda3854f35ab',
        action: 'deregistered',
      },
    ],
  },
];
