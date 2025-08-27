import { expect } from 'vitest';

export default [
  {
    id: 'assets-asset-general-asset_d9c01851fda8',
    testName: 'assets/:asset - general asset',
    endpoints: ['assets/e16c2dc8ae937e8d3790c7fd7168d7b994621ba14ca11415f39fed72534b594c4552'],

    response: {
      asset: 'e16c2dc8ae937e8d3790c7fd7168d7b994621ba14ca11415f39fed72534b594c4552',
      policy_id: 'e16c2dc8ae937e8d3790c7fd7168d7b994621ba14ca11415f39fed72',
      asset_name: '534b594c4552',
      fingerprint: 'asset12z63e43tmwfc9pr8uem3jmny4yqq2mmgt28297',
      quantity: expect.toBeAssetQuantity(),
      initial_mint_tx_hash: '88546f4fc5bee21f291f96ad2a51e3222d4378eefe7cd2351a69f6e6201d0442',
      mint_or_burn_count: expect.toBeGreaterThanOrEqual(0),
      onchain_metadata: null,
      onchain_metadata_standard: null,
      onchain_metadata_extra: null,
      metadata: expect.any(Object),
    },
  },
  {
    id: 'assets-asset-asset-without-metadata_ea1d1beab6cb',
    testName: 'assets/:asset - asset without metadata',

    endpoints: [
      'assets/44a874107aa506188c6e83e51c0d3e0d77da1c6cb786d85f150c70586c705659464944454d4f',
    ],

    response: {
      asset: '44a874107aa506188c6e83e51c0d3e0d77da1c6cb786d85f150c70586c705659464944454d4f',
      policy_id: '44a874107aa506188c6e83e51c0d3e0d77da1c6cb786d85f150c7058',
      asset_name: '6c705659464944454d4f',
      fingerprint: 'asset1kcyg9mkxvskeh7uhc0zn09qnzp4sjrt50qhy5t',
      quantity: '1224744871',
      initial_mint_tx_hash: '97348b452efc7183bf219416902a55e95ae835ccdb2cdd6ac6cddee5efd91241',
      mint_or_burn_count: 1,
      onchain_metadata: null,
      onchain_metadata_standard: null,
      onchain_metadata_extra: null,
      metadata: null,
    },
  },
  {
    id: 'assets-asset-ft-asset-with-off-chain-metadata_35fcc353a606',
    testName: 'assets/:asset - FT asset with off-chain metadata',

    endpoints: [
      'assets/7ec46775633de62f167a4290cce196a3778971159df7bacd0067044754657374546f6b656e50726570726f64',
    ],

    response: {
      asset:
        '7ec46775633de62f167a4290cce196a3778971159df7bacd0067044754657374546f6b656e50726570726f64',
      policy_id: '7ec46775633de62f167a4290cce196a3778971159df7bacd00670447',
      asset_name: '54657374546f6b656e50726570726f64',
      fingerprint: 'asset1l8g7sx4jptx7zf74lcwkqxv43fegrqaqdjn9z8',
      quantity: '1010010011010',
      initial_mint_tx_hash: 'a1a98b98b571ce7b79ce3e639f766e76901d99ef7aabd7e01624f584b4f4b264',
      mint_or_burn_count: 6,
      onchain_metadata: null,
      onchain_metadata_standard: null,
      onchain_metadata_extra: null,
      metadata: {
        name: 'TestTokenPreprod',
        description: 'JustAnotherToken2',
        ticker: 'Test2',
        url: null,
        logo: null,
        decimals: 3,
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
      initial_mint_tx_hash: '6954ea6e0dc9c1520dbfddcbeb56e42b93c62526c91012d93006f6f8e354e394',
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
      quantity: '1',
      initial_mint_tx_hash: 'd714b17463879b3c861529d3d2f70a1b04158c36f7c60a6bcf7be5e173861313',
      mint_or_burn_count: 1,
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
      initial_mint_tx_hash: '280261d5cbbae398c6154f4d215d36e18aa28c63d426dac853ba66ba16d15e29',
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
      initial_mint_tx_hash: 'e90cb1095ef7d65c4031c0ca0feecb246bd52fef110ceb8329e8862d14c5d353',
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
    id: 'assets-asset-blockfrost-cip-68v2-rft-asset-with-extra-data_1f80799b62e1',
    testName: 'assets/:asset - Blockfrost CIP68v2 RFT asset with extra data',

    endpoints: [
      'assets/d4f3126e7fbb4421673d28b20580c5166f2c12658e73ab1c318531e4001bc280426c6f636b66726f737423303038',
    ],

    response: {
      asset:
        'd4f3126e7fbb4421673d28b20580c5166f2c12658e73ab1c318531e4001bc280426c6f636b66726f737423303038',
      policy_id: 'd4f3126e7fbb4421673d28b20580c5166f2c12658e73ab1c318531e4',
      asset_name: '001bc280426c6f636b66726f737423303038',
      fingerprint: 'asset1ec2608fmgqf7y6xyzkg4mjyu8gcf7ff3prwsu8',
      quantity: '1',
      initial_mint_tx_hash: 'f84c53e7ac1ba02a79ace538f1463990277ca8f71e96d88483a737fa9d7d67c2',
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
      initial_mint_tx_hash: 'd3e366d3a42bfee060374206344e5cbc43aa3ebfec1a887f402738d03bc85c10',
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
    id: 'assets-asset-blockfrost-cip-68v2-nft-asset-with-unknown-fields-utf8-and-non-utf8-multiple-metadata-updates_042b17f6c1fe',

    testName:
      'assets/:asset - Blockfrost CIP68v2 NFT asset with unknown fields (utf8 and non-utf8) (+multiple metadata updates)',

    endpoints: [
      'assets/d207b461ecbdd1756277bd99a232558f077ed6e3cdc2712dad9a44fb000de140426c6f636b66726f737423303136',
    ],

    response: {
      asset:
        'd207b461ecbdd1756277bd99a232558f077ed6e3cdc2712dad9a44fb000de140426c6f636b66726f737423303136',
      policy_id: 'd207b461ecbdd1756277bd99a232558f077ed6e3cdc2712dad9a44fb',
      asset_name: '000de140426c6f636b66726f737423303136',
      fingerprint: 'asset1rqntwtp5t7mspe8mpjvgskj9lvykdg7750qagt',
      quantity: '2',
      initial_mint_tx_hash: 'fea05092472d9845fe10d082413da158c3b0962be677bdb8887b430e187f36d4',
      mint_or_burn_count: 2,
      onchain_metadata: {
        name: 'Blockfrost NFT v2 testing token',
        description: 'Blockfrost NFT v2 testing token',
        image: 'ipfs://QmUCXMTcvuJpwHF3gABRr69ceQR2uEG2Fsik9CyWh8MUoQ',
        // valid utf8 bytes
        // unknownProp: 'very much utf8 string',
        unknownProp: '5576657279206d756368207574663820737472696e67',
        // invalid utf8 bytes
        unknownBytesProp: '4aaca8129ef33d442b0cb7',
        // nested is an object containing two props: unknownProp and unknownBytesProp
        nested:
          'a24b756e6b6e6f776e50726f705576657279206d756368207574663820737472696e6750756e6b6e6f776e427974657350726f704aaca8129ef33d442b0cb7',
      },
      onchain_metadata_standard: 'CIP68v2',
      onchain_metadata_extra:
        'ac44666f6e74582754696c7420507269736d2c68747470733a2f2f74696e7975726c2e636f6d2f32616e357062356145707269636518324a666f6e745f636f6c6f7243ff61304671725f646f744f726f756e6465642c236666363133304c71725f696e6e65725f6579654e7371756172652c236632663238354c71725f6f757465725f6579654f726f756e6465642c236632663238354d626f726465725f636f6c6f72739f441254629443797986ff517066705f626f726465725f636f6c6f72739f4412546294ff52666f6e745f736861646f775f636f6c6f72739f430a1fd34322d1af4331bc23ff52746578745f726962626f6e5f636f6c6f72739f430000004412546294ff4b71725f62675f636f6c6f72440000000054746578745f726962626f6e5f6772616469656e744672616469616c',
      metadata: null,
    },
  },
  {
    id: 'assets-asset-blockfrost-cip-68v2-nft-asset-with-big-number_4b037c7a9fcb',
    testName: 'assets/:asset - Blockfrost CIP68v2 NFT asset with big number',

    endpoints: [
      'assets/d207b461ecbdd1756277bd99a232558f077ed6e3cdc2712dad9a44fb000de140426c6f636b66726f737423303137',
    ],

    response: {
      asset:
        'd207b461ecbdd1756277bd99a232558f077ed6e3cdc2712dad9a44fb000de140426c6f636b66726f737423303137',
      policy_id: 'd207b461ecbdd1756277bd99a232558f077ed6e3cdc2712dad9a44fb',
      asset_name: '000de140426c6f636b66726f737423303137',
      fingerprint: 'asset12ztdm2z8g3ttcawmsgvg5esz6dae6rv22suwtu',
      quantity: '1',
      initial_mint_tx_hash: '1fbb6e24b3c11de7d43efb13a1f115fb20fa421a39aecbbd12a79023ba9228d2',
      mint_or_burn_count: 1,
      onchain_metadata: {
        name: 'Blockfrost NFT v2 testing token',
        description: 'Blockfrost NFT v2 testing token',
        image: 'ipfs://QmUCXMTcvuJpwHF3gABRr69ceQR2uEG2Fsik9CyWh8MUoQ',
        bignum: 'c24b01056e0f36a6443de2df79',
      },
      onchain_metadata_standard: 'CIP68v2',
      onchain_metadata_extra:
        'ac44666f6e74582754696c7420507269736d2c68747470733a2f2f74696e7975726c2e636f6d2f32616e357062356145707269636518324a666f6e745f636f6c6f7243ff61304671725f646f744f726f756e6465642c236666363133304c71725f696e6e65725f6579654e7371756172652c236632663238354c71725f6f757465725f6579654f726f756e6465642c236632663238354d626f726465725f636f6c6f72739f441254629443797986ff517066705f626f726465725f636f6c6f72739f4412546294ff52666f6e745f736861646f775f636f6c6f72739f430a1fd34322d1af4331bc23ff52746578745f726962626f6e5f636f6c6f72739f430000004412546294ff4b71725f62675f636f6c6f72440000000054746578745f726962626f6e5f6772616469656e744672616469616c',
      metadata: null,
    },
  },
  {
    id: 'assets-asset-blockfrost-cip-68v2-nft-asset-non-utf8-prop-0xdeadbeef-and-utf8-prop-deadbeef_8c823949a7f8',

    testName:
      'assets/:asset - Blockfrost CIP68v2 NFT asset non-utf8 prop (0xdeadbeef) and utf8 prop ("deadbeef")',

    endpoints: [
      'assets/7badd4d46fea0f78c6ab10268083023c665c7119f7b8a6da08366264000de140426c6f636b66726f737423303139',
    ],

    response: {
      asset:
        '7badd4d46fea0f78c6ab10268083023c665c7119f7b8a6da08366264000de140426c6f636b66726f737423303139',
      policy_id: '7badd4d46fea0f78c6ab10268083023c665c7119f7b8a6da08366264',
      asset_name: '000de140426c6f636b66726f737423303139',
      fingerprint: 'asset16etf0pl0ssyk6t9dmxsm5r9yycpd7f5e534c9u',
      quantity: '2',
      initial_mint_tx_hash: '2749ee4e2321a9f4f1232a69cbbdb05a450602b9e0a8d1c653ce79c37d437e43',
      mint_or_burn_count: 2,
      onchain_metadata: {
        name: 'Blockfrost NFT v2 testing token',
        description: 'Blockfrost NFT v2 testing token',
        image: 'ipfs://QmUCXMTcvuJpwHF3gABRr69ceQR2uEG2Fsik9CyWh8MUoQ',
        deadbeef: '426e65',
        '[object ArrayBuffer]': 'c24b01056e0f36a6443de2df79',
      },
      onchain_metadata_standard: 'CIP68v2',
      onchain_metadata_extra:
        'ac44666f6e74582754696c7420507269736d2c68747470733a2f2f74696e7975726c2e636f6d2f32616e357062356145707269636518324a666f6e745f636f6c6f7243ff61304671725f646f744f726f756e6465642c236666363133304c71725f696e6e65725f6579654e7371756172652c236632663238354c71725f6f757465725f6579654f726f756e6465642c236632663238354d626f726465725f636f6c6f72739f441254629443797986ff517066705f626f726465725f636f6c6f72739f4412546294ff52666f6e745f736861646f775f636f6c6f72739f430a1fd34322d1af4331bc23ff52746578745f726962626f6e5f636f6c6f72739f430000004412546294ff4b71725f62675f636f6c6f72440000000054746578745f726962626f6e5f6772616469656e744672616469616c',
      metadata: null,
    },
  },
];
