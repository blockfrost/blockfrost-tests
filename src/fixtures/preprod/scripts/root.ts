import { getPaginationFixtures } from '../../../index.js';
import { expect } from 'vitest';

const paginationFixtures = getPaginationFixtures('scripts');

export default [
  ...paginationFixtures,
  {
    testName: 'scripts root',
    endpoints: ['scripts'],
    response: expect.arrayContaining([{ script_hash: expect.any(String) }]),
  },
];
