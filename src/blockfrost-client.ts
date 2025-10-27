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

// try local instance first
export const getPrimaryInstance = (): BlockFrostAPI => {
  return new BlockFrostAPI({
    projectId,
    customBackend: serverUrl,
    gotOptions: { rejectUnauthorized: false },
  });
};

// fallback to production servers
export const getFallbackInstance = (): BlockFrostAPI => {
  return new BlockFrostAPI({ projectId });
};

// try custom secondary fallback instance
export const getSecondaryFallbackInstance = (): BlockFrostAPI | null => {
  if (!fallbackServerUrl) {
    return null;
  }

  return new BlockFrostAPI({
    projectId,
    customBackend: fallbackServerUrl,
    gotOptions: { rejectUnauthorized: false },
  });
};

async function callWithFallback<T>(
  apiCall: (instance: BlockFrostAPI) => Promise<T>,
  name: string,
): Promise<T> {
  console.log(`Attempting to fetch ${name} from PRIMARY (${serverUrl})`);
  const primary = getPrimaryInstance();

  try {
    const result = await apiCall(primary);

    console.log(`✓ SUCCESS fetching ${name} from PRIMARY`);
    return result;
  } catch (error) {
    console.error(`✗ FAILED fetching ${name} from PRIMARY:`, error);

    console.log(`Attempting to fetch ${name} from FALLBACK (production)`);
    const fallback = getFallbackInstance();

    try {
      const result = await apiCall(fallback);

      console.log(`✓ SUCCESS fetching ${name} from FALLBACK`);
      return result;
    } catch (fallbackError) {
      console.error(`✗ FAILED fetching ${name} from FALLBACK:`, fallbackError);

      const secondaryFallback = getSecondaryFallbackInstance();

      if (secondaryFallback) {
        console.log(`Attempting to fetch ${name} from SECONDARY FALLBACK (${fallbackServerUrl})`);
        try {
          const result = await apiCall(secondaryFallback);

          console.log(`✓ SUCCESS fetching ${name} from SECONDARY FALLBACK`);
          return result;
        } catch (secondaryFallbackError) {
          console.error(
            `✗ FAILED fetching ${name} from SECONDARY FALLBACK:`,
            secondaryFallbackError,
          );
          console.error(`✗✗✗ ALL FALLBACKS EXHAUSTED for ${name}`);
          throw secondaryFallbackError;
        }
      } else {
        console.log(`No SECONDARY FALLBACK configured (FALLBACK_SERVER_URL not set)`);
        console.error(` ✗✗ ALL FALLBACKS EXHAUSTED for ${name}`);
      }

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
