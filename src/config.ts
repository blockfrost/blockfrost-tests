export const getConfig = () => {
  const projectId = process.env.PROJECT_ID;
  const serverUrl = process.env.SERVER_URL || 'http://localhost:3000';
  const network = process.env.NETWORK;
  const environment = (process.env.TEST_ENV ?? 'dev') as 'prod' | 'dev';
  const submitMnemonic: string | undefined = process.env.SUBMIT_MNEMONIC;
  const blockchainStateSetup =
    process.env.BLOCKCHAIN_STATE_SETUP === 'true' || process.env.BLOCKCHAIN_STATE_SETUP === '1';
  const ignorelistOnly =
    process.env.IGNORELIST_ONLY === 'true' || process.env.IGNORELIST_ONLY === '1';

  if (!network) {
    throw new Error(`NETWORK env is not set.`);
  }

  return {
    projectId,
    serverUrl,
    network,
    environment,
    submitMnemonic,
    blockchainStateSetup,
    ignorelistOnly,
  };
};
