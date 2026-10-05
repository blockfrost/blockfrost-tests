import { expect } from 'vitest';
import { getPaginationFixtures } from '../../../../../index.js';

const paginationFixtures = getPaginationFixtures('blocks/latest/txs');

export default [
  ...paginationFixtures,
  {
    id: 'blocks-latest-txs_6250473e963e',
    testName: 'blocks/latest/txs',
    endpoints: ['blocks/latest/txs'],
    response: expect.toBeOneOf([[], expect.arrayContaining([expect.toBeBlake2b256Hash()])]),
  },
];
