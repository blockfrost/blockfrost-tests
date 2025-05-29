import { expect } from 'vitest';
import { getPaginationFixtures } from '../../../utils.js';

const paginationFixtures = getPaginationFixtures('pools/retiring');

export default [
  ...paginationFixtures,
  {
    testName: 'pools retiring',
    endpoints: ['pools/retiring'],
    response: expect.toBeOneOf([
      [],
      expect.arrayContaining([{ pool_id: expect.toBePoolBech32(), epoch: expect.toBePositive() }]),
    ]),
  },
];
