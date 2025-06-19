import { expect } from 'vitest';
import * as jestExtendedMatchers from 'jest-extended';
import { getInstance } from './index.js';
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

const setCurrentBlockchainState = async () => {
  const CARDANO_NETWORKS = ['mainnet', 'preprod', 'preview'];

  if (CARDANO_NETWORKS.includes(process.env.NETWORK ?? '') === false) {
    return;
  }

  const client = getInstance();

  try {
    const block = await client.get('blocks/latest').json();
    const epoch = await client.get('epochs/latest').json();

    // console.log(`[SETUP] Setting blockchain state to`, block, epoch);
    globalThis.latest = {
      // @ts-expect-error untyped response
      block,
      // @ts-expect-error untyped response
      epoch,
    };
  } catch (error) {
    console.error(`[SETUP] Error while retrieving initial blockchain state.`);
    throw error;
  }
};

// Extend expect with direct comparison matchers
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

await setCurrentBlockchainState();
