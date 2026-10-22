import { beforeEach } from 'vitest';
import { getBlockfrostAPIClient } from './blockfrost-client.js';
import { registerMatchers } from './register-matchers.js';
import { isBlockchainStateSetupEnabled } from './utils.js';

// Tests in a file run concurrently and can start minutes after the setup, while matchers like
// expect.confirmations() only tolerate a 2 block drift, so the state is refreshed when older than this
const BLOCKCHAIN_STATE_MAX_AGE_MS = 15_000;
// How long tests wait for a refresh, counted from its start, before they continue with the previous state
const BLOCKCHAIN_STATE_REFRESH_WAIT_MS = 5_000;

// time of the last fetch attempt, so a failing backend is not retried by every test
let blockchainStateFetchedAt = 0;
// shared by concurrent tests so a stale state is fetched only once
let blockchainStateRefresh: Promise<void> | null = null;

const fetchBlockchainState = async () => {
  blockchainStateFetchedAt = Date.now();

  const client = getBlockfrostAPIClient();
  const [epoch, block] = await Promise.all([client.epochsLatest(), client.blocksLatest()]);

  globalThis.latest = {
    block,
    epoch,
  };
};

export const setGlobalBlockchainState = async (options?: { force?: boolean }) => {
  if (globalThis.latest && !options?.force) {
    return;
  }

  await fetchBlockchainState();
};

const initBlockchainState = async () => {
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
};

const isBlockchainStateStale = () =>
  Date.now() - blockchainStateFetchedAt >= BLOCKCHAIN_STATE_MAX_AGE_MS;

// Never rejects, a failed refresh keeps the previously fetched state
const refreshBlockchainState = () => {
  if (!blockchainStateRefresh) {
    blockchainStateRefresh = fetchBlockchainState()
      .catch(error => {
        console.warn('[SETUP] Failed to refresh blockchain state, using the previous one:', error);
      })
      .finally(() => {
        blockchainStateRefresh = null;
      });
  }

  return blockchainStateRefresh;
};

// Resolves once the promise settles or the time runs out, whichever comes first
const waitAtMost = async (promise: Promise<void>, ms: number) => {
  let timeout: NodeJS.Timeout | undefined;

  await Promise.race([
    promise,
    new Promise<void>(resolve => {
      timeout = setTimeout(resolve, ms);
    }),
  ]);
  clearTimeout(timeout);
};

// A slow refresh keeps running in the background and updates the state once it finishes,
// tests stop waiting for it BLOCKCHAIN_STATE_REFRESH_WAIT_MS after it started
const refreshStaleBlockchainState = async () => {
  if (!isBlockchainStateStale()) {
    return;
  }

  const refresh = refreshBlockchainState();

  await waitAtMost(
    refresh,
    blockchainStateFetchedAt + BLOCKCHAIN_STATE_REFRESH_WAIT_MS - Date.now(),
  );
};

if (isBlockchainStateSetupEnabled()) {
  await initBlockchainState();
  beforeEach(refreshStaleBlockchainState);
} else {
  console.warn(
    `[SETUP] Env var BLOCKCHAIN_STATE_SETUP is not set. Skipping blockchain state setup.`,
  );
}

registerMatchers();
