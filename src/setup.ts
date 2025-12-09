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
  toBeCurrentBlockHeight,
  toBeCurrentEpochNumber,
} from './matchers.js';
import { isBlockchainStateSetupEnabled } from './utils.js';

export const setGlobalBlockchainState = async (options?: { force?: boolean }) => {
  if (globalThis.latest && !options?.force) {
    return;
  }

  try {
    const [epoch, block] = await Promise.all([getEpochsLatest(), getLatestBlock()]);

    globalThis.latest = {
      block,
      epoch,
    };

    console.log('[SETUP] Blockchain state setup completed.', globalThis.latest);
  } catch (error) {
    console.error(
      '[SETUP] Failed to retrieve blockchain state (latest epoch and/or block):',
      error,
    );
    throw error;
  }
};

if (isBlockchainStateSetupEnabled()) {
  await setGlobalBlockchainState();
} else {
  console.warn(
    `[SETUP] Env var BLOCKCHAIN_STATE_SETUP is not set. Skipping blockchain state setup.`,
  );
}

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
  toBeCurrentBlockHeight,
  toBeCurrentEpochNumber,
});
