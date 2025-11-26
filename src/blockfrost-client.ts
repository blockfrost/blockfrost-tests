import { BlockFrostAPI, BlockfrostServerError } from '@blockfrost/blockfrost-js';

const projectId = process.env.PROJECT_ID;
const serverUrl = process.env.SERVER_URL as string;
const fallbackServerUrl = process.env.FALLBACK_SERVER_URL;

if (!projectId) {
  throw new Error('PROJECT_ID env is required');
}

if (!serverUrl) {
  throw new Error('SERVER_URL env is required');
}

export const getPrimaryInstance = (): BlockFrostAPI => {
  return new BlockFrostAPI({
    projectId,
    customBackend: serverUrl,
    gotOptions: { https: { rejectUnauthorized: false } },
  });
};

export const getSecondaryInstance = (): BlockFrostAPI => {
  if (fallbackServerUrl) {
    return new BlockFrostAPI({
      projectId,
      customBackend: fallbackServerUrl,
      gotOptions: { https: { rejectUnauthorized: false } },
    });
  }

  // Fallback to standard public Blockfrost API
  return new BlockFrostAPI({ projectId });
};

async function callWithFallback<T>(
  apiCall: (instance: BlockFrostAPI) => Promise<T>,
  name: string,
): Promise<T> {
  const primary = getPrimaryInstance();
  const primaryUrl = serverUrl;

  console.log(`[Attempt 1] Fetching ${name} from PRIMARY (${primaryUrl})`);

  try {
    const result = await apiCall(primary);

    console.log(`✓ SUCCESS: Fetched ${name} from PRIMARY`);
    return result;
  } catch (primaryError) {
    console.warn(`! FAILURE: Could not fetch ${name} from PRIMARY.`, primaryError);
  }

  const secondary = getSecondaryInstance();
  const secondaryUrl = fallbackServerUrl || 'Public Blockfrost API';

  console.log(`[Attempt 2] Fetching ${name} from SECONDARY (${secondaryUrl})`);

  try {
    const result = await apiCall(secondary);

    console.log(`SUCCESS: Fetched ${name} from SECONDARY`);
    return result;
  } catch (secondaryError) {
    console.error(`FAILED: Could not fetch ${name} from SECONDARY.`, secondaryError);
    // Both attempts failed
    throw secondaryError;
  }
}

export const getEpochsLatestParameters = () =>
  callWithFallback(instance => instance.epochsLatestParameters(), 'epochs latest parameters');

export const getEpochsLatest = () =>
  callWithFallback(instance => instance.epochsLatest(), 'epochs latest');

export const getTxs = (txHash: string) =>
  callWithFallback(instance => instance.txs(txHash), `txs for ${txHash}`);

export const getLatestBlock = () =>
  callWithFallback(instance => instance.blocksLatest(), 'latest block');

export const getAddressUtxos = (address: string) =>
  callWithFallback(async instance => {
    try {
      return await instance.addressesUtxosAll(address);
    } catch (error) {
      if (error instanceof BlockfrostServerError && error.status_code === 404) {
        // Address unused, return empty array
        return [];
      }
      throw error;
    }
  }, `address UTXOs for ${address}`);
