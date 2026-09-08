import { expect } from 'vitest';
import * as jestExtendedMatchers from 'jest-extended';
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
  toBeNullableEpochNumber,
} from './matchers.js';

/**
 * Registers jest-extended and the custom matchers on vitest's `expect`.
 *
 * Fixture modules call `expect.<matcher>(...)` while they are being evaluated,
 * so this has to run before any fixture is imported. The vitest setup file does
 * that for test runs; standalone scripts that only load the fixtures (e.g.
 * `scripts/check-endpoint-coverage.ts`) call it themselves, which keeps them
 * free of the backend client and its `PROJECT_ID` requirement.
 */
export const registerMatchers = () => {
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
    toBeNullableEpochNumber,
  });
};
