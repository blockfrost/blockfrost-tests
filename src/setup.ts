import { getBlockfrostAPIClient } from './blockfrost-client.js';
import { registerMatchers } from './register-matchers.js';
import { isBlockchainStateSetupEnabled } from './utils.js';

export const setGlobalBlockchainState = async (options?: { force?: boolean }) => {
  if (globalThis.latest && !options?.force) {
    return;
  }

  try {
    const client = getBlockfrostAPIClient();
    const [epoch, block] = await Promise.all([client.epochsLatest(), client.blocksLatest()]);

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

registerMatchers();
