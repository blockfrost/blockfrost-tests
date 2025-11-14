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

export const getPrimaryInstance = (): BlockFrostAPI | null => {
  if (!fallbackServerUrl) {
    console.log('No FALLBACK_SERVER_URL configured, skipping primary');
    return null;
  }

  return new BlockFrostAPI({
    projectId,
    customBackend: fallbackServerUrl,
    gotOptions: { https: { rejectUnauthorized: false } },
  });
};

export const getSecondaryInstance = (): BlockFrostAPI => {
  return new BlockFrostAPI({
    projectId,
    customBackend: serverUrl,
    gotOptions: { https: { rejectUnauthorized: false } },
  });
};

export const getTertiaryFallbackInstance = (): BlockFrostAPI => {
  return new BlockFrostAPI({ projectId });
};

async function callWithFallback<T>(
  apiCall: (instance: BlockFrostAPI) => Promise<T>,
  name: string,
): Promise<T> {
  // PRIMARY (FALLBACK_SERVER_URL) first
  const primary = getPrimaryInstance();

  if (primary) {
    console.log(`Attempting to fetch ${name} from PRIMARY (${fallbackServerUrl})`);
    try {
      const result = await apiCall(primary);

      console.log(`✓ SUCCESS fetching ${name} from PRIMARY`);
      return result;
    } catch (error) {
      console.error(`✗ FAILED fetching ${name} from PRIMARY:`, error);
    }
  }

  // SECONDARY (SERVER_URL)
  console.log(`Attempting to fetch ${name} from SECONDARY (${serverUrl})`);
  const secondary = getSecondaryInstance();

  try {
    const result = await apiCall(secondary);

    console.log(`✓ SUCCESS fetching ${name} from SECONDARY`);
    return result;
  } catch (error) {
    console.error(`✗ FAILED fetching ${name} from SECONDARY:`, error);
  }

  // TERTIARY (production)
  console.log(`Attempting to fetch ${name} from TERTIARY (production)`);
  const tertiary = getTertiaryFallbackInstance();

  try {
    const result = await apiCall(tertiary);

    console.log(`✓ SUCCESS fetching ${name} from TERTIARY`);
    return result;
  } catch (tertiaryError) {
    console.error(`✗ FAILED fetching ${name} from TERTIARY:`, tertiaryError);
    console.error(`✗✗✗ ALL FALLBACKS EXHAUSTED for ${name}`);
    throw tertiaryError;
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
