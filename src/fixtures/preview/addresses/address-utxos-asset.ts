import { error_404, error_400_assets, error_400_addresses } from '../../errors/index.js';
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
      'addresses/addr_test1qqg6a630r8lugmtha5ygvnngsatxpa4t7g8wqma9vc767lwerv4zq00vx9tyeee3wc73729qj7mmwm9dxm7r0v025qkskvnajp/utxos/fa3eff2047fdf9293c5feef4dc85ce58097ea1c6da4845a35153518374494e4459',
    ],

    response: [],
  },
  {
    testName:
      'addresses/:address/utxos/:asset  - valid on-chain address with some txs, some utxos without tokens (therefore also 0 for specified asset)',
    endpoints: [
      'addresses/addr_test1qzhzquh95ux8s6c3crhmcnuhwycpmcgpmrj7dkna2g7e8yk0s2v84majm9we4n4gzjarlg7watg6au09eq22q5nfjrgs06d9x5/utxos/fa3eff2047fdf9293c5feef4dc85ce58097ea1c6da4845a35153518374494e4459',
    ],

    response: [],
  },
  {
    testName:
      'addresses/:address/utxos/:asset - valid on-chain address with some txs, some utxos with tokens, but 0 for specified asset',
    endpoints: [
      'addresses/addr_test1qzttn9qfcwzd0c7whqv3p2ryynkktj9c45cgnjkq9n6tc9v6y6m63pymrzuxl6k0tq4tce9avm04wxvj6ayzs6nvx0mshk6rzv/utxos/2fe3c3364b443194b10954771c95819b8d6ed464033c21f03f8facb569555344',
    ],

    response: [],
  },
  {
    testName:
      'addresses/:address/utxos/:asset  - valid on-chain paymentCred with some txs,  0 utxos (and therefore also 0 for specified asset)',
    endpoints: [
      'addresses/addr_vkh14cs89ed8p3uxkywqa77yl9m3xqw7zqwcuhnd5l2j8kfeyc07wlg/utxos/2fe3c3364b443194b10954771c95819b8d6ed464033c21f03f8facb569555344',
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
];
