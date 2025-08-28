import { expect } from 'vitest';

export default [
  {
    id: 'addresses-address-total-script-payment-cred_db2fe3ac0b2f',
    // addr type 1 (scripthash/StakeKeyHash) holds 1 ada addr_test1zpv68zsj9af8sxg0du6zxzmnwm4ch6atlyhcwfqdyfc7qy3u7yzv8ay6qvmlywtgvt7exaxt783dxuzv03qal7muda5srdg8p9
    // addr type 3 (scripthash/scripthash) holds 3 ada addr_test1xpv68zsj9af8sxg0du6zxzmnwm4ch6atlyhcwfqdyfc7qyje5w9pyt6j0qvs7me5yv9hxaht3046h7f0sujq6gn3uqfqu495jl
    // script1tx3c5y302fupjrm0xs3skumkaw97h2le97rjgrfzw8spydzr5ej
    // https://gist.github.com/slowbackspace/53613acdafff950e08139a6e6d4fc9d2
    testName: 'addresses/:address/total script payment cred',
    endpoints: ['addresses/script1tx3c5y302fupjrm0xs3skumkaw97h2le97rjgrfzw8spydzr5ej/total'],
    response: {
      address: 'script1tx3c5y302fupjrm0xs3skumkaw97h2le97rjgrfzw8spydzr5ej',
      received_sum: [{ unit: 'lovelace', quantity: '3000000' }],
      sent_sum: [{ unit: 'lovelace', quantity: '0' }],
      tx_count: 2,
    },
  },
  {
    id: 'addresses-address-total-generic-shelley-address_8c4b37275899',
    testName: 'addresses/:address/total generic shelley address',
    endpoints: [
      'addresses/addr_test1qpny8vzukjqaawymyea3n828cr94z4xgzxvdkzs94vp2gwuyeyl5ukv0ec4c3ym59wvuqrgryvh7rnvjdcvhet9n7h5q5y9r87/total',
    ],
    response: {
      address:
        'addr_test1qpny8vzukjqaawymyea3n828cr94z4xgzxvdkzs94vp2gwuyeyl5ukv0ec4c3ym59wvuqrgryvh7rnvjdcvhet9n7h5q5y9r87',
      received_sum: [{ unit: 'lovelace', quantity: expect.toBeAdaQuantity() }],
      sent_sum: [{ unit: 'lovelace', quantity: expect.toBeAdaQuantity() }],
      tx_count: expect.toBePositive(),
    },
  },
  {
    id: 'addresses-address-total-bf-shelley-address_04c10e4015c8',
    testName: 'addresses/:address/total BF shelley address',
    endpoints: [
      'addresses/addr_test1qrgavepv2jt8czjxrf9zlchldcgluxq94j7x3aqcdqnps9mslnc2xh37p37yps628vn00y07zxzwfvph4q984mjfjtaq6m25rv/total',
    ],
    response: {
      address:
        'addr_test1qrgavepv2jt8czjxrf9zlchldcgluxq94j7x3aqcdqnps9mslnc2xh37p37yps628vn00y07zxzwfvph4q984mjfjtaq6m25rv',
      received_sum: [{ unit: 'lovelace', quantity: '10000000' }],
      sent_sum: [{ unit: 'lovelace', quantity: '0' }],
      tx_count: 1,
    },
  },
  {
    id: 'addresses-address-total-bf-shelley-address-payment-cred_84a233f6a7f1',
    testName: 'addresses/:address/total BF shelley address payment cred',
    endpoints: ['addresses/addr_vkh168txgtz5je7q53s6fgh79lmwz8lpspdvh350gxrgycvpwmk8yuu/total'],
    response: {
      address: 'addr_vkh168txgtz5je7q53s6fgh79lmwz8lpspdvh350gxrgycvpwmk8yuu',
      received_sum: [{ unit: 'lovelace', quantity: '10000000' }],
      sent_sum: [{ unit: 'lovelace', quantity: '0' }],
      tx_count: 1,
    },
  },
];
