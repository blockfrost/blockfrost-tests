import { expect } from 'vitest';
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

(async () => {
  const epoch = await getEpochsLatest();
  const block = await getLatestBlock();

  globalThis.latest = {
    block,
    epoch,
  };
})();
