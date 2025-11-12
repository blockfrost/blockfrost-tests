import { expect, beforeAll } from 'vitest';
import * as jestExtendedMatchers from 'jest-extended';
import { getEpochsLatest, getLatestBlock } from './blockfrost-client.js';
import {
  toBeBlake2b256Hash,
  toBePoolBech32,
  toBeDrepId,
  toBeCurrentTimestamp,
  toBeUnixTimestamp,
  toBeAdaQuantity,
  toBeAssetQuantity,
  toBeEpochNumber,
  toBeEpochSlotNumber,
  toBeSlotNumber,
  toBeAssetUnit,
  confirmations,
  toBeGreaterThan,
  toBeGreaterThanOrEqual,
  toBeLessThan,
  toBeLessThanOrEqual,
  toBeInRange,
  toBeStakeAddress,
} from './matchers.js';

let setupPromise: Promise<void> | null = null;

export async function ensureTestData() {
  if (globalThis.latest) {
    return globalThis.latest;
  }

  if (!setupPromise) {
    setupPromise = (async () => {
      const [epoch, block] = await Promise.all([getEpochsLatest(), getLatestBlock()]);

      globalThis.latest = { block, epoch };
      console.log('Global test data setup completed.', globalThis.latest);
    })();
  }

  await setupPromise;

  return globalThis.latest;
}

beforeAll(async () => {
  await ensureTestData();
});

expect.extend({
  ...jestExtendedMatchers,
  toBeGreaterThan: (received, expected) => toBeGreaterThan.toBe(received, expected),
  toBeLessThan: (received, expected) => toBeLessThan.toBe(received, expected),
  toBeGreaterThanOrEqual: (received, expected) => toBeGreaterThanOrEqual.toBe(received, expected),
  toBeLessThanOrEqual: (received, expected) => toBeLessThanOrEqual.toBe(received, expected),
  toBeInRange: (received, min, max) => toBeInRange.toBe(received, min, max),
  toBeBlake2b256Hash,
  toBePoolBech32,
  toBeDrepId,
  toBeCurrentTimestamp,
  toBeUnixTimestamp,
  toBeAdaQuantity,
  toBeAssetQuantity,
  toBeEpochNumber,
  toBeEpochSlotNumber,
  toBeSlotNumber,
  toBeAssetUnit,
  confirmations,
  toBeStakeAddress,
});
