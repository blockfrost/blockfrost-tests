import { error_400, error_400_addresses, error_404 } from '../../errors/index.js';
import { expect } from 'vitest';

export default [
  {
    id: 'addresses-address-bf-address-without-tokens-payment-cred_3ee01c47d2d1',
    testName: 'addresses/:address BF address without tokens (payment cred)',
    endpoints: ['addresses/addr_vkh1fj9u7ky4kltke5lzgtrx99kwcfhxezefnzjmq3yrhg7a7u20s6n'],
    response: {
      address: 'addr_vkh1fj9u7ky4kltke5lzgtrx99kwcfhxezefnzjmq3yrhg7a7u20s6n',
      amount: [{ unit: 'lovelace', quantity: '10000000' }],
      stake_address: null,
      type: 'shelley',
      script: false,
    },
  },
  {
    id: 'addresses-address-big-address-with-few-assets-no-stake-address-no-script_aa42d5d743e6',
    testName: 'addresses/:address - big address with few assets, no stake address, no script',
    endpoints: ['addresses/addr_test1vzpwq95z3xyum8vqndgdd9mdnmafh3djcxnc6jemlgdmswcve6tkw'],
    response: {
      address: 'addr_test1vzpwq95z3xyum8vqndgdd9mdnmafh3djcxnc6jemlgdmswcve6tkw',
      amount: expect.arrayContaining([
        { quantity: expect.toBeAssetQuantity(), unit: expect.toBeAssetUnit() },
      ]),
      stake_address: null,
      type: 'shelley',
      script: false,
    },
  },
  {
    id: 'addresses-address-big-address-with-0-assets-inactive-stake-address-no-script_71185e57f6c7',
    testName: 'addresses/:address - big address with 0 assets, inactive stake address, no script',
    endpoints: [
      'addresses/addr_test1qzmph7666hj5yadja34pdlm8n5un0fhc9p0hv2g9ask7m49n3kr657fpa3q8mzwmjqvl9lqdn9g2pm3ejhlgwpprwy2srzd2xd',
    ],
    response: {
      address:
        'addr_test1qzmph7666hj5yadja34pdlm8n5un0fhc9p0hv2g9ask7m49n3kr657fpa3q8mzwmjqvl9lqdn9g2pm3ejhlgwpprwy2srzd2xd',
      amount: expect.arrayContaining([
        { quantity: expect.toBeAssetQuantity(), unit: expect.toBeAssetUnit() },
      ]),
      stake_address: 'stake_test1uzecmpa20ys7csra38deqx0jlsxej59qacuetl58qs3hz9glyc2we',
      type: 'shelley',
      script: false,
    },
  },
  {
    id: 'addresses-address-large-address-with-few-assets-no-stake-address-script_cb3ef844b1ca',
    testName: 'addresses/:address - large address with few assets, no stake address, script',
    endpoints: ['addresses/addr_test1wryc5pv80l9n5kvp27w3rjyq7t7hv0n75wwuny5w40zdqhc2pe2cm'],
    response: {
      address: 'addr_test1wryc5pv80l9n5kvp27w3rjyq7t7hv0n75wwuny5w40zdqhc2pe2cm',
      amount: expect.arrayContaining([
        { quantity: expect.toBeAssetQuantity(), unit: expect.toBeAssetUnit() },
      ]),
      stake_address: null,
      type: 'shelley',
      script: true,
    },
  },
  {
    id: 'addresses-address-humongous-address-with-many-assets_9d53ab8090c7',
    testName: 'addresses/:address - humongous address with many assets',
    endpoints: [
      'addresses/addr_test1qqj3jkhct3qmnkta5l60y9wnuaxfemmlq3ee66aywwa89g343f8yzpwq3av7gauswp5ec7nj2e5fxve0nptaknn5904sj9ysa3',
    ],
    response: {
      address:
        'addr_test1qqj3jkhct3qmnkta5l60y9wnuaxfemmlq3ee66aywwa89g343f8yzpwq3av7gauswp5ec7nj2e5fxve0nptaknn5904sj9ysa3',
      amount: expect.arrayContaining([
        { quantity: expect.toBeAssetQuantity(), unit: expect.toBeAssetUnit() },
      ]),
      stake_address: 'stake_test1uq6c5njpqhqg7k0yw7g8q6vu0fe9v6ynxvhes47mfe6zh6cn9uh8x',
      type: 'shelley',
      script: false,
    },
  },
  {
    id: 'addresses-address-payment-cred-address-with-many-assets_12d7577a3b78',
    testName: 'addresses/:address - payment cred address with many assets',
    endpoints: ['addresses/addr_vkh1l3j42hfp24eycj7ju4gjy3pcfuq668rs3ux0vqngarjq5me9rqj'],
    response: {
      address: 'addr_vkh1l3j42hfp24eycj7ju4gjy3pcfuq668rs3ux0vqngarjq5me9rqj',
      amount: expect.arrayContaining([
        { quantity: expect.toBeAssetQuantity(), unit: expect.toBeAssetUnit() },
      ]),
      stake_address: null,
      type: 'shelley',
      script: false,
    },
  },
  {
    id: 'addresses-address-biggest-address-with-most-assets_8944a451de44',
    testName: 'addresses/:address - biggest address with most assets',
    endpoints: [
      'addresses/addr_test1qqr585tvlc7ylnqvz8pyqwauzrdu0mxag3m7q56grgmgu7sxu2hyfhlkwuxupa9d5085eunq2qywy7hvmvej456flknswgndm3',
    ],
    response: {
      address:
        'addr_test1qqr585tvlc7ylnqvz8pyqwauzrdu0mxag3m7q56grgmgu7sxu2hyfhlkwuxupa9d5085eunq2qywy7hvmvej456flknswgndm3',
      amount: expect.arrayContaining([
        { quantity: expect.toBeAssetQuantity(), unit: expect.toBeAssetUnit() },
      ]),
      stake_address: expect.toBeOneOf([expect.toBeStakeAddress(), null]),
      type: 'shelley',
      script: false,
    },
  },
  {
    id: 'addresses-address-generic-shelley-address_c907db750351',
    testName: 'addresses/:address generic shelley address',
    endpoints: ['addresses/addr_test1vpwr5sge69n04y5wzm33wc886tta29m24p5420atx6sgf0qrgt5y9'],
    response: {
      address: 'addr_test1vpwr5sge69n04y5wzm33wc886tta29m24p5420atx6sgf0qrgt5y9',
      amount: expect.arrayContaining([
        { quantity: expect.toBeAssetQuantity(), unit: expect.toBeAssetUnit() },
      ]),
      stake_address: expect.toBeOneOf([expect.toBeStakeAddress(), null]),
      type: 'shelley',
      script: false,
    },
  },
  {
    id: 'addresses-address-generic-shelley-address-payment-cred_7273e722839c',
    testName: 'addresses/:address generic shelley address payment cred',
    endpoints: ['addresses/addr_vkh1tsayzxw3vmaf9rskuvtkpe7j6l23w64gd92nl2ek5zztctwelcp'],
    response: {
      address: 'addr_vkh1tsayzxw3vmaf9rskuvtkpe7j6l23w64gd92nl2ek5zztctwelcp',
      amount: expect.arrayContaining([
        { quantity: expect.toBeAssetQuantity(), unit: expect.toBeAssetUnit() },
      ]),
      stake_address: expect.toBeOneOf([expect.toBeStakeAddress(), null]),
      type: 'shelley',
      script: false,
    },
  },
  {
    id: 'addresses-address-bf-address-used-but-now-empty_8dd32f84a8c0',
    testName: 'addresses/:address BF address - used but now empty',
    endpoints: [
      'addresses/addr_test1qrujnahmnm29rwj0x4u8lk6n748zrqwh6yg9gwmx9ddvrpa7t52n6f4qn453yelcangcspz3j5lywvllj7huzl34srgqg3ldgw',
    ],
    response: {
      address:
        'addr_test1qrujnahmnm29rwj0x4u8lk6n748zrqwh6yg9gwmx9ddvrpa7t52n6f4qn453yelcangcspz3j5lywvllj7huzl34srgqg3ldgw',
      amount: [{ unit: 'lovelace', quantity: '0' }],
      stake_address: 'stake_test1uzl969fay6sf66gjvluwe5vgq3ge20j8x0le0t7p0c6cp5qz4hevm',
      type: 'shelley',
      script: false,
    },
  },
  {
    id: 'addresses-address-bf-address-with-some-token_9d52d1afa0b1',
    testName: 'addresses/:address BF address with some token',
    endpoints: [
      'addresses/addr_test1qzttn9qfcwzd0c7whqv3p2ryynkktj9c45cgnjkq9n6tc9v6y6m63pymrzuxl6k0tq4tce9avm04wxvj6ayzs6nvx0mshk6rzv',
    ],
    response: {
      address:
        'addr_test1qzttn9qfcwzd0c7whqv3p2ryynkktj9c45cgnjkq9n6tc9v6y6m63pymrzuxl6k0tq4tce9avm04wxvj6ayzs6nvx0mshk6rzv',
      amount: [
        { unit: 'lovelace', quantity: '98604819' },
        {
          unit: 'fbbd966dcd5587510aa81863f53a1bb1d4ddd3d61cfa2041598e7fcd000de140426c6f636b66726f7374',
          quantity: '1',
        },
      ],
      stake_address: 'stake_test1uzdzddagsjd33wr0at84s24uvj7kdh6hrxfdwjpgdfkr8ach3updf',
      type: 'shelley',
      script: false,
    },
  },
  {
    id: 'addresses-address-bf-address-with-some-token-payment-cred_9542b40a06f2',
    testName: 'addresses/:address BF address with some token (payment cred)',
    endpoints: ['addresses/addr_vkh1j6uegzwrsnt78n4cryg2sepya4ju3w9dxzyu4spv7j7p2ax4w2q'],
    response: {
      address: 'addr_vkh1j6uegzwrsnt78n4cryg2sepya4ju3w9dxzyu4spv7j7p2ax4w2q',
      amount: [
        { unit: 'lovelace', quantity: '98604819' },
        {
          unit: 'fbbd966dcd5587510aa81863f53a1bb1d4ddd3d61cfa2041598e7fcd000de140426c6f636b66726f7374',
          quantity: '1',
        },
      ],
      stake_address: null,
      type: 'shelley',
      script: false,
    },
  },
  {
    id: 'addresses-address-bf-address-without-tokens_76bcc30d2521',
    testName: 'addresses/:address BF address without tokens',
    endpoints: [
      'addresses/addr_test1qpxghn6cjkmawmxnufpvvc5kempxumyt9xv2tvzyswarmhenpjux68s5nrdttupgzq6wwg8m84kre34tlq8t2n2nxwqsxgf4vp',
    ],
    response: {
      address:
        'addr_test1qpxghn6cjkmawmxnufpvvc5kempxumyt9xv2tvzyswarmhenpjux68s5nrdttupgzq6wwg8m84kre34tlq8t2n2nxwqsxgf4vp',
      amount: [{ unit: 'lovelace', quantity: '10000000' }],
      stake_address: 'stake_test1uqesewrdrc2f3k447q5pqd88yran6mpuc64lsr44f4fn8qgawfk0n',
      type: 'shelley',
      script: false,
    },
  },

  // errors

  {
    id: 'addresses-address-invalid-address_d52e2854f62d',
    testName: 'addresses/:address - invalid address',
    endpoints: ['addresses/addr1stonks'],
    response: error_400_addresses,
  },
  {
    id: 'addresses-address-valid-address-not-on-chain_4522081f4300',
    testName: 'addresses/:address - valid address not on-chain',
    endpoints: [
      'addresses/addr_test1qre63def8pypvq95cw07lwy4hge4dl8e2nl36sa7h4amx56ycdz9a0l0yxcy9pe2sddxaym9hwy7wdzdu6mhwjattgms2p6puw',
    ],
    response: error_404,
  },
  {
    id: 'addresses-address-valid-address-not-on-chain-valid-not-on-chain-asset_157c9a43dd50',
    testName: 'addresses/:address - valid address not on-chain, valid not on-chain asset',
    endpoints: [
      'addresses/addr_test1qre63def8pypvq95cw07lwy4hge4dl8e2nl36sa7h4amx56ycdz9a0l0yxcy9pe2sddxaym9hwy7wdzdu6mhwjattgms2p6puw/utxos/f4988f549728dc76b58d7677849943cafee5385dc67e6c25f6aa901e506978656c54696c653235',
    ],
    response: error_404,
  },
  {
    id: 'addresses-address-valid-address-not-on-chain-valid-on-chain-asset_58262ec3c5af',
    testName: 'addresses/:address - valid address not on-chain, valid on-chain asset',
    endpoints: [
      'addresses/addr_test1qre63def8pypvq95cw07lwy4hge4dl8e2nl36sa7h4amx56ycdz9a0l0yxcy9pe2sddxaym9hwy7wdzdu6mhwjattgms2p6puw/utxos/e68f1cea19752d1292b4be71b7f5d2b3219a15859c028f7454f66cdf74544555524f',
    ],
    response: error_404,
  },
  {
    id: 'addresses-address-valid-on-chain-address-valid-not-on-chain-asset_283d93124563',
    testName: 'addresses/:address - valid on-chain address, valid not on-chain asset',
    endpoints: [
      'addresses/addr_test1qpxghn6cjkmawmxnufpvvc5kempxumyt9xv2tvzyswarmhenpjux68s5nrdttupgzq6wwg8m84kre34tlq8t2n2nxwqsxgf4vp/utxos/f4988f549728dc76b58d7677849943cafee5385dc67e6c25f6aa901e506978656c54696c653235',
    ],
    response: error_404,
  },
  {
    id: 'invalid-path_56f50b52924c',
    testName: 'Invalid path',
    endpoints: ['addresses/'],
    response: error_400,
  },
  {
    id: 'addresses-address-invalid-address_4ccd274cc3b4',
    testName: 'addresses/:address - invalid address ',
    response: error_400_addresses,
    endpoints: ['addresses/addr_test1uwu'],
  },
  {
    id: 'addresses-address-invalid-payment-cred-address_fd2643492764',
    testName: 'addresses/:address - invalid paymentCred address ',
    response: error_400_addresses,
    endpoints: ['addresses/addr_vkh1uwu'],
  },
];
