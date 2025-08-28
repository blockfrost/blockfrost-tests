export default [
  {
    id: 'addresses-address-extended-bf-address-without-tokens_0edcbea7649f',
    testName: 'addresses/:address/extended BF address without tokens',
    endpoints: [
      'addresses/addr_test1qpxghn6cjkmawmxnufpvvc5kempxumyt9xv2tvzyswarmhenpjux68s5nrdttupgzq6wwg8m84kre34tlq8t2n2nxwqsxgf4vp/extended',
    ],
    response: {
      address:
        'addr_test1qpxghn6cjkmawmxnufpvvc5kempxumyt9xv2tvzyswarmhenpjux68s5nrdttupgzq6wwg8m84kre34tlq8t2n2nxwqsxgf4vp',
      amount: [
        { unit: 'lovelace', quantity: '10000000', decimals: 6, has_nft_onchain_metadata: false },
      ],
      stake_address: 'stake_test1uqesewrdrc2f3k447q5pqd88yran6mpuc64lsr44f4fn8qgawfk0n',
      type: 'shelley',
      script: false,
    },
  },
  {
    id: 'addresses-address-extended-bf-address-without-tokens-payment-cred_8c1427be1ebf',
    testName: 'addresses/:address/extended BF address without tokens (payment cred)',
    endpoints: ['addresses/addr_vkh1fj9u7ky4kltke5lzgtrx99kwcfhxezefnzjmq3yrhg7a7u20s6n/extended'],
    response: {
      address: 'addr_vkh1fj9u7ky4kltke5lzgtrx99kwcfhxezefnzjmq3yrhg7a7u20s6n',
      amount: [
        { unit: 'lovelace', quantity: '10000000', decimals: 6, has_nft_onchain_metadata: false },
      ],
      stake_address: null,
      type: 'shelley',
      script: false,
    },
  },
  {
    id: 'addresses-address-extended-blockfrost-nft-asset-with-cip-68-metadata_a5ea59275fe7',
    testName: 'addresses/:address/extended Blockfrost NFT asset with CIP68 metadata',
    endpoints: [
      'addresses/addr_test1qzttn9qfcwzd0c7whqv3p2ryynkktj9c45cgnjkq9n6tc9v6y6m63pymrzuxl6k0tq4tce9avm04wxvj6ayzs6nvx0mshk6rzv/extended',
    ],
    response: {
      address:
        'addr_test1qzttn9qfcwzd0c7whqv3p2ryynkktj9c45cgnjkq9n6tc9v6y6m63pymrzuxl6k0tq4tce9avm04wxvj6ayzs6nvx0mshk6rzv',
      amount: [
        { unit: 'lovelace', quantity: '98604819', decimals: 6, has_nft_onchain_metadata: false },
        {
          unit: 'fbbd966dcd5587510aa81863f53a1bb1d4ddd3d61cfa2041598e7fcd000de140426c6f636b66726f7374',
          quantity: '1',
          decimals: null,
          has_nft_onchain_metadata: true,
        },
      ],
      stake_address: 'stake_test1uzdzddagsjd33wr0at84s24uvj7kdh6hrxfdwjpgdfkr8ach3updf',
      type: 'shelley',
      script: false,
    },
  },
  {
    id: 'addresses-address-extended-blockfrost-ft-asset-with-cip-68-metadata_6d0b7703d90b',
    testName: 'addresses/:address/extended Blockfrost FT asset with CIP68 metadata',
    endpoints: [
      'addresses/addr_test1qz9z8azrqnzyu085vwz7lxr3vslplrfv3uwetp9zvfcws3zdfd60xmfdzz6sq83fvjd9fhvktzlruzwvfaqzrmwgg7mstknksy/extended',
    ],
    response: {
      address:
        'addr_test1qz9z8azrqnzyu085vwz7lxr3vslplrfv3uwetp9zvfcws3zdfd60xmfdzz6sq83fvjd9fhvktzlruzwvfaqzrmwgg7mstknksy',
      amount: [
        { unit: 'lovelace', quantity: '98597299', decimals: 6, has_nft_onchain_metadata: false },
        {
          unit: 'b038f29b249f42d870f8e5dd698c6020cf6fcbcbe620819771a4926f0014df10426c6f636b66726f73744654',
          quantity: '10000000',
          decimals: 6,
          has_nft_onchain_metadata: true,
        },
      ],
      stake_address: 'stake_test1upx5ka8nd5k3pdgqrc5kfxj5mkt93037p8xy7sppahyy0dcjlcfxx',
      type: 'shelley',
      script: false,
    },
  },
  {
    id: 'addresses-address-extended-blockfrost-rft-asset-v1-with-cip-68-metadata_341f512b7c6a',
    testName: 'addresses/:address/extended Blockfrost RFT asset (v1) with CIP68 metadata',
    endpoints: [
      'addresses/addr_test1qq7pesxs3qcaaqtm5xr25ysuw80sp3jmnh9u6zachwgt9awvvfg9vnfl2r7ps946qefx3w9wshszx0phrzq848mltwjq2ge3xr/extended',
    ],
    response: {
      address:
        'addr_test1qq7pesxs3qcaaqtm5xr25ysuw80sp3jmnh9u6zachwgt9awvvfg9vnfl2r7ps946qefx3w9wshszx0phrzq848mltwjq2ge3xr',
      amount: [
        { unit: 'lovelace', quantity: '10028573103', decimals: 6, has_nft_onchain_metadata: false },
        {
          unit: 'd4f3126e7fbb4421673d28b20580c5166f2c12658e73ab1c318531e4001bc280426c6f636b66726f737423303038',
          quantity: '1',
          decimals: 8,
          has_nft_onchain_metadata: true,
        },
      ],
      stake_address: 'stake_test1urxxy5zkf5l4plqcz6aqv5nghzhgtcpr8sm33qr6nal4hfqgxqlrt',
      type: 'shelley',
      script: false,
    },
  },
];
