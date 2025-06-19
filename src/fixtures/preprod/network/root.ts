import { expect } from 'vitest';

export default [
  {
    testName: 'network test',
    endpoints: ['network'],
    response: {
      supply: {
        max: '45000000000000000',
        total: expect.toBeGreaterThanOrEqual('30885236090616664'),
        circulating: expect.toBeGreaterThan('30000000000000000'),
        locked: expect.toBeGreaterThan('121733245725859'),
        treasury: expect.toBeGreaterThan('861507812369005'),
        reserves: expect.toBeLessThan('13912473910928081'),
      },
      stake: {
        live: expect.toBeGreaterThan('179464594553014'),
        active: expect.toBeGreaterThan('216958274773481'),
      },
    },
  },
];
