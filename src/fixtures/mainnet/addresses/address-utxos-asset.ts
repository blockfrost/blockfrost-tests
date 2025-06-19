import {
  error_404,
  error_400_assets,
  error_400_addresses,
  error_invalid_path,
} from '../../errors/index.js';
import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'addresses/addr1qxcdc0jacmjcvz8rzc26ppntl03mdqtav6qa749d6wczckmswj8ngt9puck7f0cqxzsfe62un6ln88yy8c8tguz8twmq64snl8/utxos/asset1stonks',
);

export default [
  ...paginationFixtures,
  {
    testName: 'addresses/:address/utxos/:asset - valid on-chain address, invalid asset',
    endpoints: [
      'addresses/addr1qxcdc0jacmjcvz8rzc26ppntl03mdqtav6qa749d6wczckmswj8ngt9puck7f0cqxzsfe62un6ln88yy8c8tguz8twmq64snl8/utxos/asset1stonks',
    ],

    response: error_400_assets,
  },
  {
    testName: 'addresses/:address/utxos/:asset - invalid address, invalid asset',

    endpoints: ['addresses/addr1stonks/utxos/asset1stonks'],

    response: error_400_addresses,
  },
  {
    testName:
      'addresses/:address/utxos/:asset - valid not on-chain address with valid not on-chain asset ',

    response: error_404,
    endpoints: [
      'addresses/addr1q9y2gschak8ny3cet4dymth3xtq8fycnzpzg4svvvmdy7vnhxc96x8daz6yw33kxv07qqpxyn6w9e2ydcfhqk85ckehqrgssre/utxos/f4988f549728dcc6b58d7677849443caf6e5385dc67e6c25f6aa901e506978656c54696c653234',
    ],
  },
  {
    testName:
      'addresses/:address/utxos/:asset  - valid on-chain address with some txs, 0 utxos (and therefore also 0 for specified asset)',

    endpoints: [
      'addresses/addr1qyptln5t5s0mastzc9rksn6wdqp9ynt67ahw0nhzukar5keu7yzv8ay6qvmlywtgvt7exaxt783dxuzv03qal7muda5sl42hg6/utxos/f4988f549728dc76b58d7677849443caf6e5385dc67e6c25f6aa901e506978656c54696c653235',
    ],
    response: [],
  },
  {
    testName:
      'addresses/:address/utxos/:asset  - valid on-chain address with some txs, some utxos without tokens (therefore also 0 for specified asset)',

    endpoints: [
      'addresses/addr1q8zsjx7vxkl4esfejafhxthyew8c54c9ch95gkv3nz37sxrc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq3jd3w2/utxos/f4988f549728dc76b58d7677849443caf6e5385dc67e6c25f6aa901e506978656c54696c653235',
    ],
    response: [],
  },
  {
    testName:
      'addresses/:address/utxos/:asset - valid on-chain address with some txs, some utxos with tokens, but 0 for specified asset',

    endpoints: [
      'addresses/addr1qx59tsna9g8gmlr57y342900ffxuc66asrugca9detrzg7medw45r6kf23ktzztc6n8jud9j0nm3qq5sjpmmgalu7jssjmpj2d/utxos/f4988f549728dc76b58d7677849443caf6e5385dc67e6c25f6aa901e506978656c54696c653235',
    ],
    response: [],
  },
  {
    testName:
      'addresses/:address/utxos/:asset  - valid on-chain paymentCred with some txs,  0 utxos (and therefore also 0 for specified asset)',

    endpoints: [
      'addresses/addr_vkh1ch9vxc3z2s6k6gynwj7xnpj2sfc7xr2d363xvw0z6hrdjxyfmju/utxos/f4988f549728dc76b58d7677849443caf6e5385dc67e6c25f6aa901e506978656c54696c653235',
    ],
    response: [],
  },
  {
    testName:
      'addresses/:address/utxos/:asset - valid on-chain address with valid not on-chain asset',

    endpoints: [
      'addresses/addr1qx59tsna9g8gmlr57y342900ffxuc66asrugca9detrzg7medw45r6kf23ktzztc6n8jud9j0nm3qq5sjpmmgalu7jssjmpj2d/utxos/f4988f549728dc76b58d7677849943cafee5385dc67e6c25f6aa901e506978656c54696c653235',
    ],

    response: error_404,
  },
  {
    testName: 'addresses/:address/utxos/:asset - valid not on-chain address ',

    endpoints: [
      'addresses/addr1q9y2gschak8ny3cet4dymth3xtq8fycnzpzg4svvvmdy7vnhxc96x8daz6yw33kxv07qqpxyn6w9e2ydcfhqk85ckehqrgssre/utxos/f4988f549728dc76b58d7677849443caf6e5385dc67e6c25f6aa901e506978656c54696c653235',
    ],

    response: error_404,
  },
  {
    testName: 'addresses/:address/utxos/:asset - [object%20Object]',

    endpoints: [
      'addresses/addr1q8zsjx7vxkl4esfejafhxthyew8c54c9ch95gkv3nz37sxrc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq3jd3w2/utxos/[object%20Object]',
    ],
    response: error_invalid_path,
  },
];
