import { BlockFrostAPI } from '@blockfrost/blockfrost-js';
import { getConfig } from './config.js';

const { projectId, serverUrl } = getConfig();

if (!projectId) {
  throw new Error('PROJECT_ID env is required');
}

if (!serverUrl) {
  throw new Error('SERVER_URL env is required');
}

export const getBlockfrostAPIClient = (): BlockFrostAPI => {
  return new BlockFrostAPI({
    projectId,
    customBackend: serverUrl,
    gotOptions: { https: { rejectUnauthorized: false } },
  });
};
