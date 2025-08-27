import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'assets/7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d4144415f555344435f4c50/history',
);

export default [
  ...paginationFixtures,
  {
    id: 'assets-asset-history-ada-usdc-lp_0fd327366960',
    testName: 'assets/:asset/history - ADA_USDC_LP',

    endpoints: [
      'assets/7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d4144415f555344435f4c50/history',
    ],

    response: [
      {
        tx_hash: '0afe98cc104c3a70d23489ecd91be9574864f85e7cb0b8b84cd48fe887256227',
        action: 'minted',
        amount: '9223372036854775807',
      },
      {
        tx_hash: '42f89fcf7fcb38ada861a71d6784ba17779e27ca2146301f6b1bf8246076560b',
        action: 'burned',
        amount: '-9223372036854775807',
      },
      {
        tx_hash: '1f181fe04ab8efc2e577caea982681e2c55c51e7267ff7a7e1064345799ec127',
        action: 'minted',
        amount: '9223372036854775807',
      },
      {
        tx_hash: '12518eaa6c8c0efc00bf930a8f565e61abaab18de4e0f76055c9f4270b6a47d0',
        action: 'burned',
        amount: '-9223372036854775807',
      },
      {
        tx_hash: 'd747b5c2241d17bef93ef4a92f73e2a03985d4e07136d0d7f9d7affacc9bb65b',
        action: 'minted',
        amount: '9223372036854775807',
      },
      {
        tx_hash: '9b150c7cd4eae21f50e2f12d9efe1470263507e906514e72a2b2d8199175e838',
        action: 'burned',
        amount: '-9223372036854775807',
      },
      {
        tx_hash: 'e5788540ae13bb20286c0b5ffd283d5f8517d080f0666e4621ebed58e29de952',
        action: 'minted',
        amount: '9223372036854775807',
      },
      {
        tx_hash: '3aa29e70568d140fe1071315aa721cd038a24004648f956a9583da00cdba548b',
        action: 'burned',
        amount: '-9223372036854775807',
      },
      {
        tx_hash: 'd101bd29a83284a9e9fcc6cb4495e144b48797c9916dda0474d53f3c769d88f4',
        action: 'minted',
        amount: '9223372036854775807',
      },
      {
        tx_hash: '669460d387215880c4a5a78311a0f54ca0b6463b898267269292bf96accf5439',
        action: 'burned',
        amount: '-9223372036854775807',
      },
      {
        tx_hash: '10521624441a495bfdf403528277ba5f961687999ddbf7d47d26ffa7223d3468',
        action: 'minted',
        amount: '9223372036854775807',
      },
      {
        tx_hash: '901d297b9c56b2e8efd273c3778c90636d62a304e4f291029dc271e1ce5f00ce',
        action: 'minted',
        amount: '9223372036854775807',
      },
      {
        tx_hash: '0d0df4e574c90c92f9ef7e7ddf9eea86e7cbc964185a5a12a334bccc7cf3282a',
        action: 'minted',
        amount: '9223372036854775807',
      },
      {
        tx_hash: '7e314c87d85199e925bf3cdd2ce711488d85ff17202e3299630ee8dde60915be',
        action: 'minted',
        amount: '9223372036854775807',
      },
      {
        tx_hash: '3fd28a87810b5f74c6ca10092f85a615b252085be2342bdfe6d63cea63a9c45b',
        action: 'minted',
        amount: '9223372036854775807',
      },
      {
        tx_hash: '75d7d0e397550e0c8829fd8f865eb75d24a1754b4617fc0d4a1cff0ba7cafb5c',
        action: 'minted',
        amount: '9223372036854775807',
      },
    ],
  },
  {
    id: 'assets-asset-history-queryparams-ada-tedy-lp_4ced556ebe3b',
    testName: 'assets/:asset/history?queryparams - ADA_TEDY_LP',

    endpoints: [
      'assets/7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d4144415f544544595f4c50/history?count=1',
      'assets/7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d4144415f544544595f4c50/history?count=1&page=1',
    ],

    response: [
      {
        tx_hash: '179e86521fda21983e7fae36efa23759735ee2d54196c047a4d7bf07c0bc0efc',
        action: 'minted',
        amount: '9223372036854775807',
      },
    ],
  },
];
