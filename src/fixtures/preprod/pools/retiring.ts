import { expect } from 'vitest';
import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures('pools/retiring');

export default [
  ...paginationFixtures,
  {
    id: 'pools-retiring_7f2f4b6c385c',
    testName: 'pools retiring',
    endpoints: ['pools/retiring'],
    response: expect.toBeOneOf([
      [],
      expect.arrayContaining([{ pool_id: expect.toBePoolBech32(), epoch: expect.toBePositive() }]),
    ]),
  },
];
