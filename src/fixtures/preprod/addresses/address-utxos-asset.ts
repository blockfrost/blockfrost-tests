import {
  error_404,
  error_400_assets,
  error_400_addresses,
  error_invalid_path,
} from '../../errors/index.js';
import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'addresses/addr_test1qpxghn6cjkmawmxnufpvvc5kempxumyt9xv2tvzyswarmhenpjux68s5nrdttupgzq6wwg8m84kre34tlq8t2n2nxwqsxgf4vp/utxos/asset1stonks',
);

export default [
  ...paginationFixtures,
  {
    testName: 'addresses/:address/utxos/:asset - valid on-chain address, invalid asset',

    endpoints: [
      'addresses/addr_test1qpxghn6cjkmawmxnufpvvc5kempxumyt9xv2tvzyswarmhenpjux68s5nrdttupgzq6wwg8m84kre34tlq8t2n2nxwqsxgf4vp/utxos/asset1stonks',
    ],

    response: error_400_assets,
  },
  {
    testName: 'addresses/:address/utxos/:asset - invalid address, invalid asset',

    endpoints: ['addresses/add_testr1stonks/utxos/asset1stonks'],

    response: error_400_addresses,
  },
  {
    testName:
      'addresses/:address/utxos/:asset - valid not on-chain address with valid not on-chain asset ',

    endpoints: [
      'addresses/addr_test1qre63def8pypvq95cw07lwy4hge4dl8e2nl36sa7h4amx56ycdz9a0l0yxcy9pe2sddxaym9hwy7wdzdu6mhwjattgms2p6puw/utxos/f4988f549728dcc6b58d7677849443caf6e5385dc67e6c25f6aa901e506978656c54696c653234',
    ],
    response: error_404,
  },
  {
    testName:
      'addresses/:address/utxos/:asset  - valid on-chain address with some txs, 0 utxos (and therefore also 0 for specified asset)',

    endpoints: [
      'addresses/addr_test1qrujnahmnm29rwj0x4u8lk6n748zrqwh6yg9gwmx9ddvrpa7t52n6f4qn453yelcangcspz3j5lywvllj7huzl34srgqg3ldgw/utxos/e68f1cea19752d1292b4be71b7f5d2b3219a15859c028f7454f66cdf74544555524f',
    ],

    response: [],
  },
  {
    testName:
      'addresses/:address/utxos/:asset  - valid on-chain address with some txs, some utxos without tokens (therefore also 0 for specified asset)',

    endpoints: [
      'addresses/addr_test1qpxghn6cjkmawmxnufpvvc5kempxumyt9xv2tvzyswarmhenpjux68s5nrdttupgzq6wwg8m84kre34tlq8t2n2nxwqsxgf4vp/utxos/e68f1cea19752d1292b4be71b7f5d2b3219a15859c028f7454f66cdf74544555524f',
    ],

    response: [],
  },
  {
    testName:
      'addresses/:address/utxos/:asset - valid on-chain address with some txs, some utxos with tokens, but 0 for specified asset',

    endpoints: [
      'addresses/addr_test1qzttn9qfcwzd0c7whqv3p2ryynkktj9c45cgnjkq9n6tc9v6y6m63pymrzuxl6k0tq4tce9avm04wxvj6ayzs6nvx0mshk6rzv/utxos/e68f1cea19752d1292b4be71b7f5d2b3219a15859c028f7454f66cdf74544555524f',
    ],

    response: [],
  },
  {
    testName:
      'addresses/:address/utxos/:asset  - valid on-chain paymentCred with some txs,  0 utxos (and therefore also 0 for specified asset)',

    endpoints: [
      'addresses/addr_vkh1ly5ld7u763gm5ne40plak5l4fcscr473zp2rke3tttqcwlapwdq/utxos/e68f1cea19752d1292b4be71b7f5d2b3219a15859c028f7454f66cdf74544555524f',
    ],

    response: [],
  },
  {
    testName:
      'addresses/:address/utxos/:asset - valid on-chain address with valid not on-chain asset',

    endpoints: [
      'addresses/addr_test1qzttn9qfcwzd0c7whqv3p2ryynkktj9c45cgnjkq9n6tc9v6y6m63pymrzuxl6k0tq4tce9avm04wxvj6ayzs6nvx0mshk6rzv/utxos/f4988f549728dc76b58d7677849943cafee5385dc67e6c25f6aa901e506978656c54696c653235',
    ],

    response: error_404,
  },
  {
    testName: 'addresses/:address/utxos/:asset - valid not on-chain address ',

    response: error_404,
    endpoints: [
      'addresses/addr_test1qre63def8pypvq95cw07lwy4hge4dl8e2nl36sa7h4amx56ycdz9a0l0yxcy9pe2sddxaym9hwy7wdzdu6mhwjattgms2p6puw/utxos/e68f1cea19752d1292b4be71b7f5d2b3219a15859c028f7454f66cdf74544555524f',
    ],
  },
  {
    testName: 'addresses/:address/utxos/:asset - [object%20Object]',

    endpoints: [
      'addresses/addr_test1qpxghn6cjkmawmxnufpvvc5kempxumyt9xv2tvzyswarmhenpjux68s5nrdttupgzq6wwg8m84kre34tlq8t2n2nxwqsxgf4vp/utxos/[object%20Object]',
    ],
    response: error_invalid_path,
  },
];
