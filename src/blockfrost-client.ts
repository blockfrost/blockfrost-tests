import { BlockFrostAPI } from '@blockfrost/blockfrost-js';

const projectId = process.env.PROJECT_ID;
const serverUrl = process.env.SERVER_URL;

if (!projectId) {
  throw new Error('PROJECT_ID env is required');
}

if (!serverUrl) {
  throw new Error('SERVER_URL env is required');
}

export const getPrimaryInstance = (): BlockFrostAPI => {
  return new BlockFrostAPI({ projectId });
};

export const getFallbackInstance = (): BlockFrostAPI => {
  return new BlockFrostAPI({ projectId, customBackend: serverUrl });
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

export const getLatestBlock = () =>
  callWithFallback(instance => instance.blocksLatest(), 'latest block');
