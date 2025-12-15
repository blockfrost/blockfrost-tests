import { expect } from 'vitest';
import { BlockFrostAPI } from '@blockfrost/blockfrost-js';
import { buildTx, waitForTx } from './index.js';
import { sleep } from '../index.js';
import { Network } from './types/index.js';
import { BlockchainParameters } from './helpers/compose-transaction.js';
import { getConfig } from '../config.js';

/**
 * Submits a transaction and verifies it gets included in a block.
 *
 * @param network - Target network: 'mainnet', 'preprod', or 'preview'
 * @param options - Optional configuration
 * @param options.testMempool - If true, verifies the transaction appears in mempool before block inclusion. False by default.
 * @param options.blockchainParameters - Pre-fetched blockchain parameters (protocol params and current slot). If not provided, they will be fetched.
 * @param options.fetchParametersFromPublicAPI - If true, fetches blockchain parameters from public Blockfrost API instead of the configured backend. Defaults to false.
 * @param options.verifyTxUsingPublicAPI - If true, verifies transaction confirmation using public Blockfrost API instead of the configured backend. Defaults to false.
 * @param options.blockfrostAPIUrl - Custom Blockfrost API URL to use when fetchParametersFromPublicAPI or verifyTxUsingPublicAPI is true. If not provided, uses the default public Blockfrost API.
 */
export const submitTest = async (
  network: Network,
  options?: {
    testMempool?: boolean;
    blockchainParameters?: BlockchainParameters;
    fetchParametersFromPublicAPI?: boolean;
    verifyTxUsingPublicAPI?: boolean;
    blockfrostAPIUrl?: string;
  },
) => {
  const envConfig = getConfig();
  const fetchParametersFromPublicAPI = options?.fetchParametersFromPublicAPI ?? false;

  if (!envConfig.projectId) {
    throw new Error('PROJECT_ID environment variable is not set');
  }

  const localBFClient = new BlockFrostAPI({
    projectId: envConfig.projectId,
    customBackend: envConfig.serverUrl,
  });

  // disable SSL on SDK's Got otherwise tests run directly on backend fail with  unable to verify the first certificate
  localBFClient.instance = localBFClient.instance.extend({
    https: { rejectUnauthorized: false },
  });

  // Optionally use public Blockfrost API client to fetch protocol parameters and current slot
  const publicBFClient = fetchParametersFromPublicAPI
    ? new BlockFrostAPI({
        projectId: envConfig.projectId,
        ...(options?.blockfrostAPIUrl ? { customBackend: options.blockfrostAPIUrl } : {}),
      })
    : null;

  const signedTx = await buildTx({
    network,
    blockchainParameters: options?.blockchainParameters,
    blockfrostClient: publicBFClient ?? localBFClient,
  });
  const signedTxJson = signedTx.to_js_value();

  // Push transaction to network
  const txHash = await localBFClient.txSubmit(signedTx.to_bytes());

  expect(txHash).toBeString();

  if (options?.testMempool) {
    // Before the tx is included in a block it is stored in a mempool
    // Retrieve transaction from Blockfrost Mempool
    await sleep(100); // seems that fetching the tx from mempool right after submitting it is not reliable enough
    const client = options?.verifyTxUsingPublicAPI ? publicBFClient! : localBFClient;
    const mempoolTx = await client.mempoolTx(txHash).catch(error => error);

    expect(mempoolTx).toMatchObject({
      tx: {
        hash: txHash,
      },
    });
    console.log(`Tx ${txHash} found in mempool.`);
  }

  console.log(`Submitted tx ${txHash}.\nWaiting for the tx to be included in a block...`);

  const tx = await waitForTx(
    txHash,
    options?.verifyTxUsingPublicAPI ? publicBFClient! : localBFClient,
  );

  expect(tx).toStrictEqual({
    hash: txHash,
    block: expect.toBeBlake2b256Hash(),
    block_height: expect.any(Number),
    block_time: expect.toBeCurrentTimestamp(),
    slot: expect.any(Number),
    index: expect.toBeInRange(0, 300),
    output_amount: expect.arrayContaining([
      { quantity: expect.toBeAdaQuantity(), unit: expect.any(String) },
    ]),
    fees: signedTxJson.body.fee,
    deposit: '0',
    size: expect.any(Number),
    invalid_before: null,
    invalid_hereafter: signedTxJson.body.ttl,
    utxo_count: signedTxJson.body.outputs.length + signedTxJson.body.inputs.length,
    withdrawal_count: 0,
    mir_cert_count: 0,
    delegation_count: 0,
    stake_cert_count: 0,
    pool_update_count: 0,
    pool_retire_count: 0,
    asset_mint_or_burn_count: 0,
    redeemer_count: 0,
    valid_contract: true,
  });
};
