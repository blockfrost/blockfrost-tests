import { expect } from 'vitest';

export default [
  {
    testName: 'epochs/latest',
    endpoints: ['epochs/latest'],
    response: {
      epoch: expect.toBeEpochNumber(),
      start_time: expect.toBeCurrentTimestamp({ tolerance: 864_000 }), // 10 days tolerance
      end_time: expect.toBeCurrentTimestamp({ tolerance: 864_000 }),
      first_block_time: expect.toBeCurrentTimestamp({ tolerance: 864_000 }),
      last_block_time: expect.toBeCurrentTimestamp({ tolerance: 864_000 }),
      block_count: expect.toBeInRange(0, 40_000),
      tx_count: expect.toBeInRange(0, 800_000),
      output: expect.toBeAdaQuantity(),
      fees: expect.toBeAdaQuantity(),
      active_stake: expect.toBeAdaQuantity(),
    },
  },
];
