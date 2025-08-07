import { expect } from 'vitest';
import * as jestExtendedMatchers from 'jest-extended';
import { getBlockfrostProductionInstance, getInstance } from './index.js';
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
import { Got } from 'got';

const fetchBlockchainState = async (clientInstance: Got) => {
  const block = await clientInstance.get('blocks/latest').json();
  const epoch = await clientInstance.get('epochs/latest').json();

  return { block, epoch };
};

const setCurrentBlockchainState = async () => {
  const CARDANO_NETWORKS = ['mainnet', 'preprod', 'preview'];

  if (CARDANO_NETWORKS.includes(process.env.NETWORK ?? '') === false) {
    return;
  }

  const client = getInstance();
  const fallbackClient = getBlockfrostProductionInstance();

  try {
    // primary client
    const { block, epoch } = await fetchBlockchainState(client);

    console.log(`[SETUP] Setting blockchain state to`, block, epoch);

    globalThis.latest = {
      // @ts-expect-error untyped response
      block,
      // @ts-expect-error untyped response
      epoch,
    };
  } catch (err) {
    console.error(`[SETUP] Primary client failed: ${err}. Attempting fallback client...`);

    try {
      // fallback client
      const { block, epoch } = await fetchBlockchainState(fallbackClient);

      console.log(`[SETUP] Fallback succeeded. Setting blockchain state to`, block, epoch);

      globalThis.latest = {
        // @ts-expect-error untyped response
        block,
        // @ts-expect-error untyped response
        epoch,
      };
    } catch (err) {
      console.error(`[SETUP] Fallback client also failed: ${err}`);
      throw new Error('Both primary and fallback clients failed to retrieve blockchain state.');
    }
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
