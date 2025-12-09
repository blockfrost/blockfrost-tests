import { expect } from 'vitest';

export default [
  {
    id: 'blocks-latest_f94253466f6c',
    testName: 'blocks/latest',
    endpoints: ['blocks/latest'],
    response: {
      time: expect.toBeCurrentTimestamp(),
      height: expect.toBeCurrentBlockHeight(),
      hash: expect.toBeBlake2b256Hash(),
      slot: expect.toBeSlotNumber(),
      epoch: expect.toBeEpochNumber(),
      epoch_slot: expect.toBeEpochSlotNumber(),
      slot_leader: expect.toBePoolBech32(),
      size: expect.toBeInRange(0, 100_000),
      tx_count: expect.toBeInRange(0, 500),
      output: expect.toBeOneOf([expect.toBeAdaQuantity(), null]),
      fees: expect.toBeOneOf([expect.toBeAdaQuantity(), null]),
      block_vrf: expect.stringContaining('vrf_vk1'),
      op_cert: expect.toBeBlake2b256Hash(),
      op_cert_counter: expect.toBeGreaterThanOrEqual('0'),
      previous_block: expect.toBeBlake2b256Hash(),
      next_block: null,
      confirmations: 0,
    },
  },
];
