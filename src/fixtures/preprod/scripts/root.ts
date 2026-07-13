import { getPaginationFixtures } from '../../../index.js';
import { expect } from 'vitest';

const paginationFixtures = getPaginationFixtures('scripts');

export default [
  ...paginationFixtures,
  {
    id: 'scripts-root_ac4202b4ef20',
    testName: 'scripts root',
    endpoints: ['scripts'],
    response: expect.arrayContaining([{ script_hash: expect.any(String) }]),
  },
];
