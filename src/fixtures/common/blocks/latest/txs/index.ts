import { expect } from 'vitest';

export default [
  {
    testName: 'blocks/latest/txs',
    endpoints: ['blocks/latest/txs'],
    response: expect.toBeOneOf([[], expect.arrayContaining([expect.toBeBlake2b256Hash()])]),
  },
];
