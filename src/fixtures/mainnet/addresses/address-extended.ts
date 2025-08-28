export default [
  {
    id: 'addresses-address-extended-bf-address-without-tokens_4a6bee23b980',
    testName: 'addresses/:address/extended BF address without tokens',
    endpoints: [
      'addresses/addr1qxlem7879m2ly03ljqldhz9jxtlkurc465hqysxr33z2a4ee3t4rc98rhcg4n0a3g60nd9f865gpy4unflgak3we53psrrk85u/extended',
    ],
    response: {
      address:
        'addr1qxlem7879m2ly03ljqldhz9jxtlkurc465hqysxr33z2a4ee3t4rc98rhcg4n0a3g60nd9f865gpy4unflgak3we53psrrk85u',
      amount: [
        { unit: 'lovelace', quantity: '2000000', decimals: 6, has_nft_onchain_metadata: false },
      ],
      stake_address: 'stake1uyuc463uzn3muy2eh7c5d8ekj5na2yqj27f5l5wmghv6gsc0smjnc',
      type: 'shelley',
      script: false,
    },
  },
  {
    id: 'addresses-address-extended-address-with-nutcoin_2a2d82cf0f7b',
    testName: 'addresses/:address/extended address with nutcoin',
    endpoints: [
      'addresses/addr1qxxfwz7n3lnduxxgff6smhwlxkcw3gcax3q39363cpq4axnntgjccmteyrsldd67rxv2yq6ew2a7t48q34p9j7nf0kjq4rdx3w/extended',
    ],
    response: {
      address:
        'addr1qxxfwz7n3lnduxxgff6smhwlxkcw3gcax3q39363cpq4axnntgjccmteyrsldd67rxv2yq6ew2a7t48q34p9j7nf0kjq4rdx3w',
      amount: [
        { unit: 'lovelace', quantity: '6514602', decimals: 6, has_nft_onchain_metadata: false },
        {
          unit: '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae6e7574636f696e',
          quantity: '1',
          decimals: null,
          has_nft_onchain_metadata: false,
        },
        {
          decimals: 0,
          has_nft_onchain_metadata: true,
          quantity: '21531',
          unit: '27fa5cc3d1c2ed825f799ee41c04621d8b6703d86e66390748e7b2484255445a',
        },
        {
          unit: '432749982ba3bd2d969715860bb27f9efab8ab6ba7bd1e94a1a2982950414e4441',
          quantity: '1000000',
          decimals: null,
          has_nft_onchain_metadata: true,
        },
        {
          unit: 'aa1b03c6a49951282e9a68b17133a814f4c603f85be469e22869ecb4726561646d65',
          quantity: '1',
          decimals: null,
          has_nft_onchain_metadata: true,
        },
        {
          unit: 'b43131f2c82825ee3d81705de0896c611f35ed38e48e33a3bdf298dc43727970746f4d6167653033373930',
          quantity: '1',
          decimals: null,
          has_nft_onchain_metadata: true,
        },
        {
          unit: 'd5e6bf0500378d4f0da4e8dde6becec7621cd8cbf5cbb9b87013d4cc537061636542756431303433',
          quantity: '1',
          decimals: null,
          has_nft_onchain_metadata: true,
        },
      ],
      stake_address: 'stake1u9e45fvvd4ujpc0kka0pnx9zqdvh9wl96nsg6sje0f5hmfq45lrja',
      type: 'shelley',
      script: false,
    },
  },
  {
    id: 'addresses-address-extended-address-with-nutcoin-payment-cred_5dbf85b29fac',
    testName: 'addresses/:address/extended address with nutcoin (payment cred)',
    endpoints: ['addresses/addr_vkh13jtsh5u0um0p3jz2w5xamhe4kr52x8f5gyfvw5wqg90f57gkgmc/extended'],
    response: {
      address: 'addr_vkh13jtsh5u0um0p3jz2w5xamhe4kr52x8f5gyfvw5wqg90f57gkgmc',
      amount: [
        { unit: 'lovelace', quantity: '6514602', decimals: 6, has_nft_onchain_metadata: false },
        {
          unit: '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae6e7574636f696e',
          quantity: '1',
          decimals: null,
          has_nft_onchain_metadata: false,
        },
        {
          decimals: 0,
          has_nft_onchain_metadata: true,
          quantity: '21531',
          unit: '27fa5cc3d1c2ed825f799ee41c04621d8b6703d86e66390748e7b2484255445a',
        },
        {
          unit: '432749982ba3bd2d969715860bb27f9efab8ab6ba7bd1e94a1a2982950414e4441',
          quantity: '1000000',
          decimals: null,
          has_nft_onchain_metadata: true,
        },
        {
          unit: 'aa1b03c6a49951282e9a68b17133a814f4c603f85be469e22869ecb4726561646d65',
          quantity: '1',
          decimals: null,
          has_nft_onchain_metadata: true,
        },
        {
          unit: 'b43131f2c82825ee3d81705de0896c611f35ed38e48e33a3bdf298dc43727970746f4d6167653033373930',
          quantity: '1',
          decimals: null,
          has_nft_onchain_metadata: true,
        },
        {
          unit: 'd5e6bf0500378d4f0da4e8dde6becec7621cd8cbf5cbb9b87013d4cc537061636542756431303433',
          quantity: '1',
          decimals: null,
          has_nft_onchain_metadata: true,
        },
      ],
      stake_address: null,
      type: 'shelley',
      script: false,
    },
  },
  {
    id: 'addresses-address-extended-blockfrost-nft-asset-with-cip-68-metadata_40285289ec52',
    testName: 'addresses/:address/extended Blockfrost NFT asset with CIP68 metadata',
    endpoints: [
      'addresses/addr1qxttn9qfcwzd0c7whqv3p2ryynkktj9c45cgnjkq9n6tc9v6y6m63pymrzuxl6k0tq4tce9avm04wxvj6ayzs6nvx0ms5q8rwn/extended',
    ],
    response: {
      address:
        'addr1qxttn9qfcwzd0c7whqv3p2ryynkktj9c45cgnjkq9n6tc9v6y6m63pymrzuxl6k0tq4tce9avm04wxvj6ayzs6nvx0ms5q8rwn',
      amount: [
        { unit: 'lovelace', quantity: '2604819', decimals: 6, has_nft_onchain_metadata: false },
        {
          unit: 'fbbd966dcd5587510aa81863f53a1bb1d4ddd3d61cfa2041598e7fcd000de140426c6f636b66726f7374',
          quantity: '1',
          decimals: null,
          has_nft_onchain_metadata: true,
        },
      ],
      stake_address: 'stake1uxdzddagsjd33wr0at84s24uvj7kdh6hrxfdwjpgdfkr8acsmkrf5',
      type: 'shelley',
      script: false,
    },
  },
  {
    id: 'addresses-address-extended-blockfrost-ft-asset-with-cip-68-metadata_9ec1da485a7c',
    testName: 'addresses/:address/extended Blockfrost FT asset with CIP68 metadata',
    endpoints: [
      'addresses/addr1qx9z8azrqnzyu085vwz7lxr3vslplrfv3uwetp9zvfcws3zdfd60xmfdzz6sq83fvjd9fhvktzlruzwvfaqzrmwgg7msgqwkum/extended',
    ],
    response: {
      address:
        'addr1qx9z8azrqnzyu085vwz7lxr3vslplrfv3uwetp9zvfcws3zdfd60xmfdzz6sq83fvjd9fhvktzlruzwvfaqzrmwgg7msgqwkum',
      amount: [
        { unit: 'lovelace', quantity: '2597299', decimals: 6, has_nft_onchain_metadata: false },
        {
          unit: 'b038f29b249f42d870f8e5dd698c6020cf6fcbcbe620819771a4926f0014df10426c6f636b66726f73744654',
          quantity: '10000000',
          decimals: 6,
          has_nft_onchain_metadata: true,
        },
      ],
      stake_address: 'stake1u9x5ka8nd5k3pdgqrc5kfxj5mkt93037p8xy7sppahyy0dc44jtzm',
      type: 'shelley',
      script: false,
    },
  },
  {
    id: 'addresses-address-extended-blockfrost-rft-asset-with-cip-68v2-metadata-decimals_6b3ed7c6c55a',
    testName: 'addresses/:address/extended Blockfrost RFT asset with CIP68v2 metadata (decimals)',
    endpoints: [
      'addresses/addr1qyy86uaj7pv57c6jdg6d9m3rvu7r5pzay8dguayveaacmntxnerm95lm9pazslgsw04q73akal6pscheqhrxmsjcn4eq58xze0/extended',
    ],
    response: {
      address:
        'addr1qyy86uaj7pv57c6jdg6d9m3rvu7r5pzay8dguayveaacmntxnerm95lm9pazslgsw04q73akal6pscheqhrxmsjcn4eq58xze0',
      amount: [
        { unit: 'lovelace', quantity: '3144270', decimals: 6, has_nft_onchain_metadata: false },
        {
          unit: 'a6c7a3a79c686320e4becc8831a90781c79c13dd32a72b03a96724ee000de140426c6f636b66726f737423303131',
          quantity: '1',
          decimals: null,
          has_nft_onchain_metadata: true,
        },
        {
          unit: 'a6c7a3a79c686320e4becc8831a90781c79c13dd32a72b03a96724ee001bc280426c6f636b66726f737423303130',
          quantity: '1',
          decimals: 8,
          has_nft_onchain_metadata: true,
        },
      ],
      stake_address: 'stake1u9nfu3aj60ajs73g05g886s0g7mwlaqcvtust3ndcfvf6uspqcftm',
      type: 'shelley',
      script: false,
    },
  },
];
