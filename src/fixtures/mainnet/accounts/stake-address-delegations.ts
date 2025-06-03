export default [
  {
    testName: 'accounts/:stake_address?queryparams generic stake address delegations',
    endpoints: [
      'accounts/stake1u9fzg77vrgfqlplkjqe9hntdcvsurpvxd60yp2fhn73002qsv9pdk/delegations?count=2&page=1',
      'accounts/stake1u9fzg77vrgfqlplkjqe9hntdcvsurpvxd60yp2fhn73002qsv9pdk/delegations?count=2&page=1&order=asc',
    ],
    response: [
      {
        active_epoch: 226,
        tx_hash: 'c9c0cb115394364b3370deb3788e4a76ed3c842d801b03608c74bad069114e35',
        amount: '218597075764',
        pool_id: 'pool1vx9tzlkgafernd9vpjpxkenutx2gncj4yn88fpq69823qlwcqrt',
      },
      {
        active_epoch: 230,
        tx_hash: '67fc467494a403b6cd862987ac2b85d1f7cfd6ca25a99f13a5ce0d19c3b7851c',
        amount: '218593734378',
        pool_id: 'pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
      },
    ],
  },
];
