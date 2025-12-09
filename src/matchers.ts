import { expect } from 'vitest';
import { getUnixTime, isValid } from 'date-fns';
import { isBlockchainStateSetupEnabled } from './utils.js';

type BigValue = string | number | bigint;

const toBigIntSafe = (value: BigValue): bigint | number | null => {
  if (typeof value === 'number') {
    return value;
  }

  try {
    return BigInt(value);
  } catch {
    return null;
  }
};

function createMatcher(description: string, compare: (...values: (bigint | number)[]) => boolean) {
  return {
    toBe: (...arguments_: BigValue[]) => {
      const receivedType = typeof arguments_[0];
      const expectedType = typeof arguments_[1];

      if (receivedType !== expectedType) {
        return {
          pass: false,
          message: () =>
            `expected all values to be ${expectedType} but got ${receivedType} (${arguments_[0]})`,
        };
      }

      const bigIntArguments = arguments_.map(argument => toBigIntSafe(argument));

      if (bigIntArguments.includes(null)) {
        return {
          pass: false,
          message: () =>
            `expected all values to be convertible to bigint but got (${arguments_.join(', ')})`,
        };
      }
      const pass = compare(...(bigIntArguments as bigint[]));

      return { pass, message: () => `expected ${arguments_.join(` ${description} `)}` };
    },

    getAsymmetricMatcher: (expected: BigValue) => ({
      asymmetricMatch: (received: BigValue) => {
        const expectedType = typeof expected;
        const receivedType = typeof received;

        if (expectedType !== receivedType) {
          return {
            pass: false,
            message: () =>
              `expected value to be ${expectedType} but got ${receivedType} (${received})`,
          };
        }

        const receivedBigInt = toBigIntSafe(received);
        const expectedBigInt = toBigIntSafe(expected);

        return (
          receivedBigInt !== null &&
          expectedBigInt !== null &&
          compare(receivedBigInt, expectedBigInt)
        );
      },
      toString: () => `${description} ${expected}`,
    }),
  };
}

export const toBeGreaterThan = createMatcher(
  'to be greater than',
  (received, expected) => received > expected,
);

export const toBeLessThan = createMatcher(
  'to be less than',
  (received, expected) => received < expected,
);

export const toBeInRange = createMatcher(
  'to be in range',
  (received, min, max) => received >= min && received <= max,
);

export const toBeGreaterThanOrEqual = createMatcher(
  'to be greater than or equal to',
  (received, expected) => received >= expected,
);

export const toBeLessThanOrEqual = createMatcher(
  'to be less than or equal to',
  (received, expected) => received <= expected,
);

export function toBeBlake2b256Hash(received: string) {
  const pass = typeof received === 'string' && received.length === 64;

  return { pass, message: () => `Expected value ${received} to be Blake2b-256 hash.` };
}

export function toBePoolBech32(received: string) {
  const pass = typeof received === 'string' && received.startsWith('pool1');

  return { pass, message: () => `Expected value ${received} to be bech32 pool ID.` };
}

export function toBeDrepId(received: string) {
  // sanity check for cip129 drep ids (legacy one could have drep_script prefix)
  const pass = typeof received === 'string' && received.startsWith('drep1');

  return { pass, message: () => `Expected value ${received} to be bech32 DRep ID.` };
}

export function toBeUnixTimestamp(received: number) {
  const pass = typeof received === 'number' && isValid(received * 1000);

  return { pass, message: () => `Expected value ${received} to valid unix timestamp` };
}

export function toBeCurrentTimestamp(
  received: number,
  options?: { tolerance?: number; ms?: boolean },
) {
  const currentUnixTimestamp = getUnixTime(new Date());
  const DEFAULT_TOLERANCE_SECONDS = 10 * 60; // 10 mins
  const tolerance = options?.tolerance ?? DEFAULT_TOLERANCE_SECONDS;
  const multiplier = options?.ms ? 1000 : 1;
  const pass =
    typeof received === 'number' &&
    Math.abs(currentUnixTimestamp - received / multiplier) < tolerance;

  return {
    pass,
    message: () =>
      `Expected value ${received} to current timestamp within tolerance (${tolerance} seconds)`,
  };
}

export function toBeAssetQuantity(received: string) {
  const receivedBigInt = toBigIntSafe(received);
  const maxQuantity = BigInt('340282366920938463463374607431768211460'); // arbitrary 2^128
  const pass =
    typeof received === 'string' &&
    receivedBigInt !== null &&
    receivedBigInt >= 0n &&
    receivedBigInt <= maxQuantity;

  return {
    pass,
    message: () => `Expected value ${received} to be within range for an asset quantity <0, 2^128>`,
  };
}

export function toBeAdaQuantity(received: string) {
  const receivedBigInt = toBigIntSafe(received);
  const maxQuantity = BigInt('18446744073709551615'); // 2^64-1
  const pass =
    typeof received === 'string' &&
    receivedBigInt !== null &&
    receivedBigInt >= 0n &&
    receivedBigInt <= maxQuantity;

  return {
    pass,
    message: () =>
      `Expected value ${received} to be within range for an asset quantity <0, 2^64-1>`,
  };
}

export const toBeEpochNumber = (received: number) => {
  // Note: missing inversion (could be handled with this.isNot),
  // but since we are not using this feature it is not implemented
  const min = 0;

  if (!isBlockchainStateSetupEnabled()) {
    return {
      pass: typeof received === 'number' && toBeGreaterThanOrEqual.toBe(received, min).pass,
      message: () => `Expected value ${received} to be greater than ${min}`,
    };
  }

  const max = globalThis.latest.epoch.epoch;

  return {
    pass: typeof received === 'number' && toBeInRange.toBe(received, min, max).pass,
    message: () => `Expected value ${received} to be within range for an epoch <${min}, ${max}>`,
  };
};

export const toBeCurrentEpochNumber = (received: number) => {
  // Note: missing inversion (could be handled with this.isNot),
  // but since we are not using this feature it is not implemented

  if (!isBlockchainStateSetupEnabled()) {
    return {
      pass: typeof received === 'number' && toBeGreaterThanOrEqual.toBe(received, 0).pass,
      message: () => `Expected value ${received} to be greater than 0`,
    };
  }

  const min = globalThis.latest.epoch.epoch;
  const max = globalThis.latest.epoch.epoch;

  return {
    pass: typeof received === 'number' && toBeInRange.toBe(received, min, max).pass,
    message: () => `Expected value ${received} to be within range for an epoch <${min}, ${max}>`,
  };
};

export const toBeEpochSlotNumber = (received: number) => {
  // Note: missing inversion (could be handled with this.isNot),
  // but since we are not using this feature it is not implemented
  const buffer = 240; // new blocks could be minted between initial fetch of the blockchain state and the execution of the test
  const min = 0;

  if (!isBlockchainStateSetupEnabled()) {
    return {
      pass: typeof received === 'number' && toBeGreaterThanOrEqual.toBe(received, min).pass,
      message: () => `Expected value ${received} to be greater than ${min}`,
    };
  }

  const max = globalThis.latest.block.epoch_slot! + buffer;

  expect(received).toBeInRange(min, max);
  return {
    pass: true,
    message: () => `Expected value ${received} to be within range for an epoch <${min}, ${max}>`,
  };
};

export const toBeSlotNumber = (received: number) => {
  const min = 0;

  if (!isBlockchainStateSetupEnabled()) {
    return {
      pass: typeof received === 'number' && toBeGreaterThanOrEqual.toBe(received, min).pass,
      message: () => `Expected value ${received} to be greater than or equal to ${min}`,
    };
  }

  const max = globalThis.latest.block.slot!; // Note: this could be improved to match interval for given network

  expect(received).toBeInRange(min, max + 150);
  return {
    pass: true,
    message: () => `Expected value ${received} to be within range for a slot <${min}, ${max}>`,
  };
};

export function toBeCurrentBlockHeight(received: number, options?: { toleranceInBlocks?: number }) {
  const toleranceInBlocks = options?.toleranceInBlocks ?? 10;
  const currentHeight = globalThis.latest?.block?.height;

  if (!isBlockchainStateSetupEnabled()) {
    return {
      pass: typeof received === 'number' && toBeGreaterThanOrEqual.toBe(received, 0).pass,
      message: () => `Expected value ${received} to be greater than or equal to 0`,
    };
  }

  if (typeof currentHeight !== 'number') {
    return {
      pass: false,
      message: () =>
        `Cannot check confirmations: globalThis.latest.block.height is undefined or not a number. Check if the blockchain state is initialized.`,
    };
  }

  const maxHeight = currentHeight + toleranceInBlocks;
  const pass =
    typeof received === 'number' && toBeInRange.toBe(received, currentHeight, maxHeight).pass;

  return {
    pass,
    message: () =>
      `Received ${received}. Expected to be within range for a block height <${currentHeight}, ${maxHeight}> (blockchain height ${currentHeight} and tolerance ${toleranceInBlocks} blocks)`,
  };
}

export const toBeAssetUnit = (received: string) => {
  return {
    pass: typeof received === 'string',
    message: () => `Expected value ${received} to be valid asset unit`,
  };
};

export const toBeStakeAddress = (received: string) => {
  const stakeAddrPrefix = process.env.NETWORK === 'mainnet' ? 'stake1' : 'stake_test1';

  return {
    pass: typeof received === 'string' && received.startsWith(stakeAddrPrefix),
    message: () => `Expected value ${received} to be valid stake address`,
  };
};

export function confirmations(
  received: number,
  options: { height: number; toleranceInBlocks?: number },
) {
  const toleranceInBlocks = options.toleranceInBlocks ?? 2;
  const currentHeight = globalThis.latest?.block?.height;

  if (!isBlockchainStateSetupEnabled()) {
    return {
      pass: typeof received === 'number' && toBeGreaterThanOrEqual.toBe(received, 0).pass,
      message: () => `Expected value ${received} to be greater than or equal to 0`,
    };
  }

  if (typeof currentHeight !== 'number') {
    return {
      pass: false,
      message: () =>
        `Cannot check confirmations: globalThis.latest.block.height is undefined or not a number. Check if the blockchain watcher is initialized.`,
    };
  }

  const shouldHaveConfirmations = currentHeight - options.height;

  const pass =
    typeof received === 'number' &&
    Math.abs(received - shouldHaveConfirmations) <= toleranceInBlocks;

  return {
    pass,
    message: () =>
      `Received ${received}. Expected ${shouldHaveConfirmations} confirmations (based on fixture height ${options.height}, blockchain height ${currentHeight} and tolerance ${toleranceInBlocks} blocks)`,
  };
}
