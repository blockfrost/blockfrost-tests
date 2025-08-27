import { expect } from 'vitest';

export default [
  {
    id: 'assets-asset-general-asset_d4709f84b630',
    testName: 'assets/:asset - general asset',

    endpoints: [
      'assets/7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d4144415f555344435f4c50',
    ],

    response: {
      asset: '7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d4144415f555344435f4c50',
      policy_id: '7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d',
      asset_name: '4144415f555344435f4c50',
      fingerprint: 'asset1up032cdhr8e6xj63uqgys3pcygj0sr9l7wludw',
      quantity: expect.toBeAssetQuantity(),
      initial_mint_tx_hash: '0afe98cc104c3a70d23489ecd91be9574864f85e7cb0b8b84cd48fe887256227',
      mint_or_burn_count: expect.toBeGreaterThanOrEqual(0),
      onchain_metadata: null,
      onchain_metadata_standard: null,
      onchain_metadata_extra: null,
      metadata: expect.any(Object),
    },
  },
  {
    id: 'assets-asset-asset-without-metadata_fec6bae7a0b7',
    testName: 'assets/:asset - asset without metadata',

    endpoints: [
      'assets/f3b07511d0882696143a41c3cfccc70e9e532de535629ba2c6146792446a6564546573744d6963726f555344',
    ],

    response: {
      asset:
        'f3b07511d0882696143a41c3cfccc70e9e532de535629ba2c6146792446a6564546573744d6963726f555344',
      policy_id: 'f3b07511d0882696143a41c3cfccc70e9e532de535629ba2c6146792',
      asset_name: '446a6564546573744d6963726f555344',
      fingerprint: 'asset1wj3ex4f853prw5q3c53x7zk33y20399wmeskzr',
      quantity: '1000000000000000000',
      initial_mint_tx_hash: '4462328b6b606c5f478a656efb6926078d7109699c0387e1d573fa9448d6e459',
      mint_or_burn_count: 1,
      onchain_metadata: null,
      onchain_metadata_standard: null,
      onchain_metadata_extra: null,
      metadata: null,
    },
  },
  {
    id: 'assets-asset-ft-asset-with-off-chain-metadata_f56c85a15bd1',
    testName: 'assets/:asset - FT asset with off-chain metadata',
    endpoints: ['assets/f6f49b186751e61f1fb8c64e7504e771f968cea9f4d11f5222b169e3744d494e'],

    response: {
      asset: 'f6f49b186751e61f1fb8c64e7504e771f968cea9f4d11f5222b169e3744d494e',
      policy_id: 'f6f49b186751e61f1fb8c64e7504e771f968cea9f4d11f5222b169e3',
      asset_name: '744d494e',
      fingerprint: 'asset1dcspl93vqst7k7fcz2vx4mu6jvq7hsrse7zlpv',
      quantity: expect.toBeAssetQuantity(),
      initial_mint_tx_hash: '6d8548ba5e135c8fdcbce16d0814bb6d2e10b80559cdc7ade67d7067c1c1784d',
      mint_or_burn_count: expect.toBePositive(),
      onchain_metadata: null,
      onchain_metadata_standard: null,
      onchain_metadata_extra: null,
      metadata: {
        name: 'tMIN',
        description: 'The test MIN token of MELD protocol.',
        ticker: 'tMIN',
        url: 'https://meld.com',
        logo: 'iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAB11BMVEUAAAAxScIzR8IxRcQvQsYuScgsRsEzRMQwSMctRsQvRsYuRsMuRcQwRsYuRMUwRsUwRcYvRMQvRMUuRsUuRcYvRcUvRcQvRMUwRcUvRcYvRcUvRcUvRcUuRcUwRcYvRsQvRcUvRcUvRMUvRcUvRcUvRcUvRMUvRcUvRcQvRcUvRcUvRcUvRcUwRsUxRsUzScY0ScY2S8c2TMc5Tsg6T8g7UMg8UclAVMpBVcpHWsxLXs1MX81NTU1PYc5QY85UVFRZatFZa9FcXFxcbdJeb9JjY2NmdtRnd9VsbGxxcXFzgth2hNl4eHh4h9l5h9p/jNuBjtyBj9yIld6Njo6OmuCPm+CRkpKRneCWoeGWoeKZpOKapOKbpuKdnp6gquSkpaWmr+Woseaqq6urrKyrtOe1vOq2tra5wevAwMDBwcHCye3ExMTIyMjKz+/Q0NDS0tLU2fLY3PTc4PTe4fPg4ODh4eHh5Pbi4uLk5/fl5/bo6Ojo6vjp6enp6/jq6urr7fns7Ozt7Ozt7/nu7u7u7/nw8PDx8fHy8/vz8/Pz9Prz9Pv08/T09fj19PT19fX29vb29/z39/f3+Pz4+Pj4+fz5+fn6+v37+/38/Pz8/f79/f3+/v7///+3CVNNAAAALHRSTlMAFRkaGxwdHiBJTE1OUGlqa2xtbm+RmJmbnJ6iqrW2t7jX2Nnb8fLz9Pv8/R/3l70AAAABYktHRJxxvMInAAABbUlEQVQYGVXBiT+TcRwH8G/yEKbYJGHZxvbw/D5UstxXuUO5dVG6ELmvx5GIdCAN1b7/rO/m4TXvN1li7S5Pbq7HlRxDkaJvGLCozCt0LlFHBJ+NLCkKFygHhSUqAPltZRBVDRDKRkLTIZ7w70qg9sdhOYTvMhGlQ/i/MvejeJX5OULSiGINiH7+1t34eHz+2UAPQgyNHBB3Nxa7p5g58OvVfYQlURbEI/7MYbtbS6UIcVIOxDs+s/NluhDCQzrEMp/5Z/7shNBJB3DnPzN/5PU55qH39TMQXsoGUMJisKl1bfjlRNcnLgLgpiwAt//wqTcVm+Ya+wE4KRlilEVwu7n3QbW5OQ9xlWIMAA//MvORuTAyNmsedQDI04huQrQfMwfXTdNc2f+QDyCViKJ9EHWTzMHA3sH3pwUAvFEk4gyE1PS9fvui5R6ESqAwh8IFyk4Wmw8RvPF07tL1PFhURhRF0pJuuXXd7bym0akT8JCFuvOPqIIAAAAASUVORK5CYII=',
        decimals: 6,
      },
    },
  },
  {
    id: 'assets-asset-nft-asset-with-on-chain-cip-25v1_2e4ee2e9d6c1',
    testName: 'assets/:asset - NFT asset with on-chain CIP25v1',
    endpoints: ['assets/f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a6a616d6573'],

    response: {
      asset: 'f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a6a616d6573',
      policy_id: 'f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a',
      asset_name: '6a616d6573',
      fingerprint: 'asset1qzwrkwq8dx48c49c09xfkrs9nwrj5wa5lcl3xr',
      quantity: '0',
      initial_mint_tx_hash: '10514977f67b5bbd07062abd56ac69308764e77f1eabce4b5447febb2f9c059d',
      mint_or_burn_count: 2,
      onchain_metadata: {
        core: {
          og: 0,
          prefix: '$',
          version: 0,
          termsofuse: 'https://adahandle.com/tou',
          handleEncoding: 'utf-8',
        },
        name: '$james',
        image: 'ipfs://QmVGYrE4NTqsGmkMNxEG1mQio1hhBj4oBZMCEbM1VQxHQk',
        website: 'https://adahandle.com',
        description: 'The Handle Standard',
        augmentations: [],
      },
      onchain_metadata_standard: 'CIP25v1',
      onchain_metadata_extra: null,
      metadata: null,
    },
  },
  {
    id: 'assets-asset-asset-with-on-chain-cip-25v2_88ee6fb75b12',
    testName: 'assets/:asset - asset with on-chain CIP25v2',

    endpoints: [
      'assets/add8604a36a46446dd22281473614c5b390afbc064ff1338516b19f58424fcf2617ba79f8089f860c2ce679d14345c9b153d0c14ea0481eaa0624751',
    ],

    response: {
      asset:
        'add8604a36a46446dd22281473614c5b390afbc064ff1338516b19f58424fcf2617ba79f8089f860c2ce679d14345c9b153d0c14ea0481eaa0624751',
      policy_id: 'add8604a36a46446dd22281473614c5b390afbc064ff1338516b19f5',
      asset_name: '8424fcf2617ba79f8089f860c2ce679d14345c9b153d0c14ea0481eaa0624751',
      fingerprint: 'asset10m8zhjspkwczmmx86hq9m6gdqclzxjc494wm95',
      quantity: '10',
      initial_mint_tx_hash: '4cddc91fdfea357aa81f50be0c2d0cc839124eb9f664e8490eaa04ff9dc387a4',
      mint_or_burn_count: 1,
      onchain_metadata: {
        image: ['ipfs://bafkreif5iapksurpzoegyxl7jybdlxbqsz2upsagu2dmbygj4qbf6cfc', 'di'],
        name: 'Optim EQT',
      },
      onchain_metadata_standard: 'CIP25v2',
      onchain_metadata_extra: null,
      metadata: null,
    },
  },
  {
    id: 'assets-asset-asset-with-on-chain-cip-25v2-no-asset-name_6f827e4eaf1f',
    testName: 'assets/:asset - asset with on-chain CIP25v2 (no assetName)',
    endpoints: ['assets/1b6ed7ba4c9671b8b798af6eff7146396c7b04dc12a6463c6a29be85'],

    response: {
      asset: '1b6ed7ba4c9671b8b798af6eff7146396c7b04dc12a6463c6a29be85',
      policy_id: '1b6ed7ba4c9671b8b798af6eff7146396c7b04dc12a6463c6a29be85',
      asset_name: null,
      fingerprint: 'asset1q5luj5axz3m2wx3pt9mkpfnqcyhz7evnj445te',
      quantity: '1000000',
      initial_mint_tx_hash: 'ce471569a87aedcdc51f84e98c008bf6851d0dbe760ededaaea7f017ac67b9e1',
      mint_or_burn_count: 1,
      onchain_metadata: {
        name: '',
        image: 'ipfs://todo',
        description: 'Change the world with FinanceBinaries!',
      },
      metadata: null,
      onchain_metadata_extra: null,
      onchain_metadata_standard: 'CIP25v2',
    },
  },
  {
    id: 'assets-asset-blockfrost-nft-asset-with-cip-68-metadata_4fd6c7c79a3b',
    testName: 'assets/:asset - Blockfrost NFT asset with CIP68 metadata',

    endpoints: [
      'assets/fbbd966dcd5587510aa81863f53a1bb1d4ddd3d61cfa2041598e7fcd000de140426c6f636b66726f7374',
    ],

    response: {
      asset: 'fbbd966dcd5587510aa81863f53a1bb1d4ddd3d61cfa2041598e7fcd000de140426c6f636b66726f7374',
      policy_id: 'fbbd966dcd5587510aa81863f53a1bb1d4ddd3d61cfa2041598e7fcd',
      asset_name: '000de140426c6f636b66726f7374',
      fingerprint: 'asset1ea9l08umyfec7x748xew4ltfz9rrnmcm7p3z7s',
      quantity: '3',
      initial_mint_tx_hash: 'efcce10745fae7a206e4958a18c73f28613945ba2901b23296e48b7fee6d5d59',
      mint_or_burn_count: 3,
      onchain_metadata: {
        description: 'Blockfrost testing token',
        image: 'ipfs://QmUCXMTcvuJpwHF3gABRr69ceQR2uEG2Fsik9CyWh8MUoQ',
        imageHash: '46736861323536',
        name: 'Blockfrost testing token',
      },
      onchain_metadata_standard: 'CIP68v1',
      onchain_metadata_extra: null,
      metadata: null,
    },
  },
  {
    id: 'assets-asset-nft-asset-with-cip-68-metadata_1f5d9541c1a1',
    testName: 'assets/:asset - NFT asset with CIP68 metadata',

    endpoints: [
      'assets/9fd4b32460b3f63e22e1f0c4eaaf9371e5f202902e213770126b4fcb000de1406f766f3738',
    ],

    response: {
      asset: '9fd4b32460b3f63e22e1f0c4eaaf9371e5f202902e213770126b4fcb000de1406f766f3738',
      policy_id: '9fd4b32460b3f63e22e1f0c4eaaf9371e5f202902e213770126b4fcb',
      asset_name: '000de1406f766f3738',
      fingerprint: 'asset1zfn8zelp9mj4k3w8nsfr02srqxxcswj6eysh9d',
      quantity: '1',
      initial_mint_tx_hash: 'cc97a4e226e0dd3b7f01e9010feb5e30d743f15c761f49405b4d9bb60dbc19a3',
      mint_or_burn_count: 1,
      onchain_metadata: {
        CHA: '4139',
        CON: '4138',
        DEX: '4136',
        INT: '4138',
        STR: '4136',
        TYPE: '4133',
        WIS: '4132',
        creator: '49456c5261756c69746f',
        image: 'ipfs://QmP7Em1bqYqc1LPcRrxEYzQaTWJ8CoCwT8i31fWFfguDJQ',
        mediaType: 'image/gif',
        name: 'OVO 78',
      },
      onchain_metadata_standard: 'CIP68v1',
      onchain_metadata_extra: null,
      metadata: null,
    },
  },
  {
    id: 'assets-asset-blockfrost-ft-asset-with-cip-68-metadata_a57b57dd91c6',
    testName: 'assets/:asset - Blockfrost FT asset with CIP68 metadata',

    endpoints: [
      'assets/b038f29b249f42d870f8e5dd698c6020cf6fcbcbe620819771a4926f0014df10426c6f636b66726f73744654',
    ],

    response: {
      asset:
        'b038f29b249f42d870f8e5dd698c6020cf6fcbcbe620819771a4926f0014df10426c6f636b66726f73744654',
      policy_id: 'b038f29b249f42d870f8e5dd698c6020cf6fcbcbe620819771a4926f',
      asset_name: '0014df10426c6f636b66726f73744654',
      fingerprint: 'asset1na8yrk6eht9n33yutfr7ff7m6jh2g2zr7lnx9j',
      quantity: '10000000',
      initial_mint_tx_hash: '98f3e407154633eef7ca2052eaa23e76c1bb7374dc771b9005eb478051203e5d',
      mint_or_burn_count: 1,
      onchain_metadata: {
        decimals: 6,
        description: 'Blockfrost testing token',
        name: 'Blockfrost testing token',
        url: 'https://blockfrost.io/',
      },
      onchain_metadata_standard: 'CIP68v1',
      onchain_metadata_extra: null,
      metadata: null,
    },
  },
  {
    id: 'assets-asset-blockfrost-cip-68v1-rft-asset-with-extra-data_1aed5dda47e8',
    testName: 'assets/:asset - Blockfrost CIP68v1 RFT asset with extra data',

    endpoints: [
      'assets/ef29efa6742926e4e9810b3544c2b21c6d8b3f92cd85afb8618ff06a001bc280426c6f636b66726f737423303037',
    ],

    response: {
      asset:
        'ef29efa6742926e4e9810b3544c2b21c6d8b3f92cd85afb8618ff06a001bc280426c6f636b66726f737423303037',
      policy_id: 'ef29efa6742926e4e9810b3544c2b21c6d8b3f92cd85afb8618ff06a',
      asset_name: '001bc280426c6f636b66726f737423303037',
      fingerprint: 'asset1hevgevdj2huxvsm4a2clmc5u7uagrtqzn6j0q2',
      quantity: '1',
      initial_mint_tx_hash: 'e09bb9bb5068539f19ba63c3d2ebb350016fd608314be342c2084aecc03af438',
      mint_or_burn_count: 1,
      onchain_metadata: {
        name: 'Blockfrost RFT testing token',
        description: 'Blockfrost RFT testing token',
        image: 'ipfs://QmUCXMTcvuJpwHF3gABRr69ceQR2uEG2Fsik9CyWh8MUoQ',
        decimals: 8,
      },
      onchain_metadata_standard: 'CIP68v1',
      onchain_metadata_extra:
        'ac44666f6e74582754696c7420507269736d2c68747470733a2f2f74696e7975726c2e636f6d2f32616e357062356145707269636518324a666f6e745f636f6c6f7243ff61304671725f646f744f726f756e6465642c236666363133304c71725f696e6e65725f6579654e7371756172652c236632663238354c71725f6f757465725f6579654f726f756e6465642c236632663238354d626f726465725f636f6c6f72739f441254629443797986ff517066705f626f726465725f636f6c6f72739f4412546294ff52666f6e745f736861646f775f636f6c6f72739f430a1fd34322d1af4331bc23ff52746578745f726962626f6e5f636f6c6f72739f430000004412546294ff4b71725f62675f636f6c6f72440000000054746578745f726962626f6e5f6772616469656e744672616469616c',
      metadata: null,
    },
  },
  {
    id: 'assets-asset-blockfrost-cip-68v2-nft-asset-with-extra-data_8827f709cfa5',
    testName: 'assets/:asset - Blockfrost CIP68v2 NFT asset with extra data',

    endpoints: [
      'assets/a6c7a3a79c686320e4becc8831a90781c79c13dd32a72b03a96724ee000de140426c6f636b66726f737423303039',
    ],

    response: {
      asset:
        'a6c7a3a79c686320e4becc8831a90781c79c13dd32a72b03a96724ee000de140426c6f636b66726f737423303039',
      policy_id: 'a6c7a3a79c686320e4becc8831a90781c79c13dd32a72b03a96724ee',
      asset_name: '000de140426c6f636b66726f737423303039',
      fingerprint: 'asset1awvymmat55yay0wnhsl5r4a55nwx038lp6f2a7',
      quantity: '1',
      initial_mint_tx_hash: '3def183ee2051bcd01664b451e51eddb36e673e5074d8685fbaa7924e2f45358',
      mint_or_burn_count: 1,
      onchain_metadata: {
        name: 'Blockfrost NFT v2 testing token',
        description: 'Blockfrost NFT v2 testing token',
        image: 'ipfs://QmUCXMTcvuJpwHF3gABRr69ceQR2uEG2Fsik9CyWh8MUoQ',
      },
      onchain_metadata_standard: 'CIP68v2',
      onchain_metadata_extra:
        'ac44666f6e74582754696c7420507269736d2c68747470733a2f2f74696e7975726c2e636f6d2f32616e357062356145707269636518324a666f6e745f636f6c6f7243ff61304671725f646f744f726f756e6465642c236666363133304c71725f696e6e65725f6579654e7371756172652c236632663238354c71725f6f757465725f6579654f726f756e6465642c236632663238354d626f726465725f636f6c6f72739f441254629443797986ff517066705f626f726465725f636f6c6f72739f4412546294ff52666f6e745f736861646f775f636f6c6f72739f430a1fd34322d1af4331bc23ff52746578745f726962626f6e5f636f6c6f72739f430000004412546294ff4b71725f62675f636f6c6f72440000000054746578745f726962626f6e5f6772616469656e744672616469616c',
      metadata: null,
    },
  },
  {
    id: 'assets-asset-blockfrost-cip-68v2-rft-asset-with-extra-data_92370feaf511',
    testName: 'assets/:asset - Blockfrost CIP68v2 RFT asset with extra data',

    endpoints: [
      'assets/a6c7a3a79c686320e4becc8831a90781c79c13dd32a72b03a96724ee001bc280426c6f636b66726f737423303130',
    ],

    response: {
      asset:
        'a6c7a3a79c686320e4becc8831a90781c79c13dd32a72b03a96724ee001bc280426c6f636b66726f737423303130',
      policy_id: 'a6c7a3a79c686320e4becc8831a90781c79c13dd32a72b03a96724ee',
      asset_name: '001bc280426c6f636b66726f737423303130',
      fingerprint: 'asset1njceutc6km9697kaq4yyscerffuq6h7000ynj7',
      quantity: '1',
      initial_mint_tx_hash: '095c07f446e716a4ba9cacb54574a2cee259c3ce5f34f340c17aedc657b86012',
      mint_or_burn_count: 1,
      onchain_metadata: {
        name: 'Blockfrost RFT testing token',
        description: 'Blockfrost RFT testing token',
        image: 'ipfs://QmUCXMTcvuJpwHF3gABRr69ceQR2uEG2Fsik9CyWh8MUoQ',
        decimals: 8,
      },
      onchain_metadata_standard: 'CIP68v2',
      onchain_metadata_extra:
        'ac44666f6e74582754696c7420507269736d2c68747470733a2f2f74696e7975726c2e636f6d2f32616e357062356145707269636518324a666f6e745f636f6c6f7243ff61304671725f646f744f726f756e6465642c236666363133304c71725f696e6e65725f6579654e7371756172652c236632663238354c71725f6f757465725f6579654f726f756e6465642c236632663238354d626f726465725f636f6c6f72739f441254629443797986ff517066705f626f726465725f636f6c6f72739f4412546294ff52666f6e745f736861646f775f636f6c6f72739f430a1fd34322d1af4331bc23ff52746578745f726962626f6e5f636f6c6f72739f430000004412546294ff4b71725f62675f636f6c6f72440000000054746578745f726962626f6e5f6772616469656e744672616469616c',
      metadata: null,
    },
  },
];
