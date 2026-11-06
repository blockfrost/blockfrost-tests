import { expect } from 'vitest';
import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'pools/pool13m26ky08vz205232k20u8ft5nrg8u68klhn0xfsk9m4gsqsc44v/delegators',
);

export default [
  ...paginationFixtures,
  {
    id: 'pools-delegators_dced50c8afd1',
    testName: 'pools delegators',
    endpoints: ['pools/pool13m26ky08vz205232k20u8ft5nrg8u68klhn0xfsk9m4gsqsc44v/delegators'],
    response: expect.arrayContaining([
      {
        address: expect.toBeStakeAddress(),
        live_stake: expect.toBeInRange('1', '45000000000000000'),
      },
    ]),
  },
];
