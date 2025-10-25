import { BlockFrostAPI, BlockfrostServerError } from '@blockfrost/blockfrost-js';

const projectId = process.env.PROJECT_ID;
const serverUrl = process.env.SERVER_URL as string;
const isLocal = serverUrl.includes('localhost');

if (!projectId) {
  throw new Error('PROJECT_ID env is required');
}

if (!serverUrl) {
  throw new Error('SERVER_URL env is required');
}

export const getPrimaryInstance = (): BlockFrostAPI => {
  return new BlockFrostAPI({
    projectId,
    ...(isLocal && { gotOptions: { rejectUnauthorized: false } }),
  });
};

export const getFallbackInstance = (): BlockFrostAPI => {
  return new BlockFrostAPI({
    projectId,
    ...(isLocal && { gotOptions: { rejectUnauthorized: false } }),
  });
};

async function callWithFallback<T>(
  apiCall: (instance: BlockFrostAPI) => Promise<T>,
  name: string,
): Promise<T> {
  const primary = getPrimaryInstance();

  try {
    return await apiCall(primary);
  } catch (error) {
    console.error(`Error fetching ${name} from primary:`, error);

    const fallback = getFallbackInstance();

    try {
      return await apiCall(fallback);
    } catch (fallbackError) {
      console.error(`Error fetching ${name} from fallback:`, fallbackError);
      throw fallbackError;
    }
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
        // Address derived from the seed was not used yet
        // In this case Blockfrost API will return 404
        return [];
      } else {
        throw error;
      }
    }
  }, `address UTXOs for ${address}`);
