import { beforeEach } from 'vitest';
import { getBlockfrostAPIClient } from './blockfrost-client.js';
import { registerMatchers } from './register-matchers.js';
import { isBlockchainStateSetupEnabled } from './utils.js';

// Tests in a file run concurrently and can start minutes after the setup, while matchers like
// expect.confirmations() only tolerate a 2 block drift, so the state is refreshed when older than this
const BLOCKCHAIN_STATE_MAX_AGE_MS = 15_000;

let blockchainStateFetchedAt = 0;
// shared by concurrent tests so a stale state is fetched only once
let blockchainStateRequest: Promise<void> | null = null;

const fetchBlockchainState = async () => {
  const client = getBlockfrostAPIClient();
  const [epoch, block] = await Promise.all([client.epochsLatest(), client.blocksLatest()]);

  globalThis.latest = {
    block,
    epoch,
  };
  blockchainStateFetchedAt = Date.now();
};

export const setGlobalBlockchainState = async (options?: { force?: boolean }) => {
  if (globalThis.latest && !options?.force) {
    return;
  }

  if (!blockchainStateRequest) {
    blockchainStateRequest = fetchBlockchainState().finally(() => {
      blockchainStateRequest = null;
    });
  }

  await blockchainStateRequest;
};

if (isBlockchainStateSetupEnabled()) {
  try {
    await setGlobalBlockchainState();
    console.log('[SETUP] Blockchain state setup completed.', globalThis.latest);
  } catch (error) {
    console.error(
      '[SETUP] Failed to retrieve blockchain state (latest epoch and/or block):',
      error,
    );
    throw error;
  }

  beforeEach(async () => {
    if (Date.now() - blockchainStateFetchedAt < BLOCKCHAIN_STATE_MAX_AGE_MS) {
      return;
    }

    try {
      await setGlobalBlockchainState({ force: true });
    } catch (error) {
      // keep the previous state, a failed refresh shouldn't fail the test
      console.warn('[SETUP] Failed to refresh blockchain state, using the previous one:', error);
    }
  });
} else {
  console.warn(
    `[SETUP] Env var BLOCKCHAIN_STATE_SETUP is not set. Skipping blockchain state setup.`,
  );
}

registerMatchers();
