import { expect } from 'vitest';
export default [
  {
    id: 'pools-delegators_f2d665309ca1',
    testName: 'pools delegators',
    endpoints: ['pools/d5cfc42cf67f6b637688d19fa50a4342658f63370b9e2c9e3eaf4dfe/delegators'],

    response: [
      {
        address: 'stake_test1uzapf83wydusjln97rqr7fen6vgrz5087yqdxm0akqdqkgstjz8g4',
        live_stake: expect.toBeInRange('8055390', '1000000000'),
      },
    ],
  },
];
