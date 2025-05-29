/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Assertion as BaseAssertion } from 'vitest';
import { Responses } from '@blockfrost/blockfrost-js';
import type { toBeOneOf } from 'jest-extended';

interface CustomMatchers<R = unknown> {
  toBeOneOf(p: any): R;
}

declare module 'vitest' {
  interface toBeOneOf<T = any> extends CustomMatchers {}
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}

declare module 'vitest' {
  export interface ExpectStatic {
    toBeGreaterThan(expected: BigValue): void;
    toBeLessThan(expected: BigValue): void;
    toBeInRange(min: BigValue, max: BigValue): void;
    toBeGreaterThanOrEqual(expected: BigValue): void;
    toBeLessThanOrEqual(expected: BigValue): void;
    toBeBlake2b256Hash(): void;
    toBeDrepId(): void;
    toBePoolBech32(): void;
    toBePositive(): void;
    toBeUnixTimestamp(): void;
    toBeCurrentTimestamp(options?: { tolerance?: number; ms?: boolean }): void;
    toBeAssetQuantity(): void;
    toBeAdaQuantity(): void;
    toBeSlotNumber(): void;
    toBeEpochNumber(): void;
    toBeEpochSlotNumber(): void;
    toBeAssetUnit(): void;
    confirmations(options?: { height?: number }): void;
    toBeStakeAddress(): void;
  }
}

// Declare a new interface to extend the existing NodeJS.Global interface
declare global {
  var latest: {
    block: Responses['block_content'];
    epoch: Responses['epoch_content'];
  };
}
