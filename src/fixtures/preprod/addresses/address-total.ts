import { expect } from 'vitest';

export default [
  {
    id: 'addresses-address-total-generic-shelley-address_5cdee01828e2',
    testName: 'addresses/:address/total generic shelley address',

    endpoints: [
      'addresses/addr_test1qrujnahmnm29rwj0x4u8lk6n748zrqwh6yg9gwmx9ddvrpa7t52n6f4qn453yelcangcspz3j5lywvllj7huzl34srgqg3ldgw/total',
    ],

    response: {
      address:
        'addr_test1qrujnahmnm29rwj0x4u8lk6n748zrqwh6yg9gwmx9ddvrpa7t52n6f4qn453yelcangcspz3j5lywvllj7huzl34srgqg3ldgw',
      received_sum: [
        {
          unit: 'lovelace',
          quantity: expect.toBeAdaQuantity(),
        },
      ],
      sent_sum: [
        {
          unit: 'lovelace',
          quantity: expect.toBeAdaQuantity(),
        },
      ],
      tx_count: expect.toBePositive(),
    },
  },
  {
    id: 'addresses-address-total-bf-shelley-address_1029e268364d',
    testName: 'addresses/:address/total BF shelley address',

    endpoints: [
      'addresses/addr_test1qpxghn6cjkmawmxnufpvvc5kempxumyt9xv2tvzyswarmhenpjux68s5nrdttupgzq6wwg8m84kre34tlq8t2n2nxwqsxgf4vp/total',
    ],

    response: {
      address:
        'addr_test1qpxghn6cjkmawmxnufpvvc5kempxumyt9xv2tvzyswarmhenpjux68s5nrdttupgzq6wwg8m84kre34tlq8t2n2nxwqsxgf4vp',
      received_sum: [
        {
          unit: 'lovelace',
          quantity: '10000000',
        },
      ],
      sent_sum: [
        {
          unit: 'lovelace',
          quantity: '0',
        },
      ],
      tx_count: 1,
    },
  },
  {
    id: 'addresses-address-total-bf-shelley-address-payment-cred_710156fbb924',
    testName: 'addresses/:address/total BF shelley address payment cred',
    endpoints: ['addresses/addr_vkh1fj9u7ky4kltke5lzgtrx99kwcfhxezefnzjmq3yrhg7a7u20s6n/total'],

    response: {
      address: 'addr_vkh1fj9u7ky4kltke5lzgtrx99kwcfhxezefnzjmq3yrhg7a7u20s6n',
      received_sum: [
        {
          unit: 'lovelace',
          quantity: '10000000',
        },
      ],
      sent_sum: [
        {
          unit: 'lovelace',
          quantity: '0',
        },
      ],
      tx_count: 1,
    },
  },
];
