export default [
  {
    id: 'accounts-stake-address-queryparams-generic-stake-address-rewards_9c342ba4f123',
    testName: 'accounts/:stake_address?queryparams generic stake address rewards',
    endpoints: [
      'accounts/stake1u9fzg77vrgfqlplkjqe9hntdcvsurpvxd60yp2fhn73002qsv9pdk/rewards?count=3&page=2',
      'accounts/stake1u9fzg77vrgfqlplkjqe9hntdcvsurpvxd60yp2fhn73002qsv9pdk/rewards?count=3&page=2&order=asc',
    ],
    response: [
      {
        epoch: 229,
        amount: '171419599',
        pool_id: 'pool1vx9tzlkgafernd9vpjpxkenutx2gncj4yn88fpq69823qlwcqrt',
        type: 'member',
      },
      {
        epoch: 230,
        amount: '160736772',
        pool_id: 'pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
        type: 'member',
      },
      {
        epoch: 231,
        amount: '210662173',
        pool_id: 'pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
        type: 'member',
      },
    ],
  },
  {
    id: 'accounts-stake-address-queryparams-generic-stake-address-rewards-with-multiple-types_4eadb68291e0',
    testName:
      'accounts/:stake_address?queryparams generic stake address rewards with multiple types',
    endpoints: [
      'accounts/stake1uxa6lm0x9ezhywczl8rs048mmvn396qtk0w4z2tzu2cytuqs0e38d/rewards?count=4&page=38',
      'accounts/stake1uxa6lm0x9ezhywczl8rs048mmvn396qtk0w4z2tzu2cytuqs0e38d/rewards?count=4&page=38&order=asc',
    ],
    response: [
      {
        epoch: 325,
        amount: '672136648',
        pool_id: 'pool15yyxtkhz64p7a8cnax9l7u82s9t9hdhyxsa3tdm977qhgpnsuhq',
        type: 'leader',
      },
      {
        epoch: 325,
        amount: '2859721',
        pool_id: 'pool15yyxtkhz64p7a8cnax9l7u82s9t9hdhyxsa3tdm977qhgpnsuhq',
        type: 'member',
      },
      {
        epoch: 326,
        amount: '622247570',
        pool_id: 'pool15yyxtkhz64p7a8cnax9l7u82s9t9hdhyxsa3tdm977qhgpnsuhq',
        type: 'leader',
      },
      {
        epoch: 326,
        amount: '2526902',
        pool_id: 'pool15yyxtkhz64p7a8cnax9l7u82s9t9hdhyxsa3tdm977qhgpnsuhq',
        type: 'member',
      },
    ],
  },
  {
    id: 'accounts-stake-address-queryparams-generic-stake-address-rewards-with-multiple-types_e2c9b60009fd',
    testName:
      'accounts/:stake_address?queryparams generic stake address rewards with multiple types',
    endpoints: [
      'accounts/stake1uyr7kdys3kmruysratwqzjpx0ya8rjsh8t68d2573yp3g0cr05y2r/rewards?count=1&page=11',
      'accounts/stake1uyr7kdys3kmruysratwqzjpx0ya8rjsh8t68d2573yp3g0cr05y2r/rewards?count=1&page=11&order=asc',
    ],
    response: [
      {
        epoch: 320,
        amount: '500000000',
        pool_id: 'pool1wym4qkxsvqejxqn4l55y9z708mkxc36qge28qevrvp056fe7dxg',
        type: 'pool_deposit_refund',
      },
    ],
  },
  {
    id: 'accounts-stake-address-generic-empty-list_a365df596c9e',
    testName: 'accounts/:stake_address generic empty list',
    endpoints: ['accounts/stake1u8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkgs46q0w/rewards'],
    response: [],
  },
];
