import { expect } from 'vitest';

export default [
  {
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
