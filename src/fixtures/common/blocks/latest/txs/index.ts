import { expect } from 'vitest';

export default [
  {
    id: 'blocks-latest-txs_6250473e963e',
    testName: 'blocks/latest/txs',
    endpoints: ['blocks/latest/txs'],
    response: expect.toBeOneOf([[], expect.arrayContaining([expect.toBeBlake2b256Hash()])]),
  },
];
