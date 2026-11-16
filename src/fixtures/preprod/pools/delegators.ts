import { expect } from 'vitest';

export default [
  {
    id: 'pools-delegators-active-pool_1ef741e428f4',
    testName: 'pools delegators - active pool',
    endpoints: ['pools/pool1yzwxetclm2l48xzvmnwwf6x48a5qze0nx4t6glz5k8wk50xl006/delegators'],
    response: expect.arrayContaining([
      {
        address: expect.toBeStakeAddress(),
        live_stake: expect.toBeInRange('1', '45000000000000000'),
      },
    ]),
  },
  {
    id: 'pools-delegators_dced50c8afd1',
    testName: 'pools delegators',
    endpoints: ['pools/pool13m26ky08vz205232k20u8ft5nrg8u68klhn0xfsk9m4gsqsc44v/delegators'],
    // the pool retired at epoch 305, which removed its delegations
    response: [],
  },
];
