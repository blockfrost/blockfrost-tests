export default [
  {
    testName: 'accounts/:stake_address?queryparams generic stake address history',
    endpoints: [
      'accounts/stake1u9fzg77vrgfqlplkjqe9hntdcvsurpvxd60yp2fhn73002qsv9pdk/history?count=3&page=2',
      'accounts/stake1u9fzg77vrgfqlplkjqe9hntdcvsurpvxd60yp2fhn73002qsv9pdk/history?count=3&page=2&order=asc',
    ],
    response: [
      {
        active_epoch: 229,
        amount: '220098162468',
        pool_id: 'pool1vx9tzlkgafernd9vpjpxkenutx2gncj4yn88fpq69823qlwcqrt',
      },
      {
        active_epoch: 230,
        amount: '220268640006',
        pool_id: 'pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
      },
      {
        active_epoch: 231,
        amount: '220428767042',
        pool_id: 'pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
      },
    ],
  },
];
