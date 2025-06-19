import { expect } from 'vitest';
import { BlockFrostAPI } from '@blockfrost/blockfrost-js';
import { buildTx, Network, waitForTx } from './index.js';
import { sleep } from '../utils.js';

export const submitAndMempoolTest = async (network: Network) => {
  let blockfrostClient: BlockFrostAPI;

  if (process.env.PROJECT_ID) {
    blockfrostClient = new BlockFrostAPI({
      projectId: process.env.PROJECT_ID,
      customBackend: process.env.SERVER_URL || 'http://localhost:3000',
    });
  } else {
    throw new Error('PROJECT_ID environment variable is not set');
  }

  const signedTx = await buildTx(blockfrostClient, network);
  const signedTxJson = signedTx.to_js_value();

  // Push transaction to network
  const txHash = await blockfrostClient.txSubmit(signedTx.to_bytes());

  expect(txHash).toBeString();
  // Before the tx is included in a block it is a waiting room known as mempool
  // Retrieve transaction from Blockfrost Mempool

  await sleep(100); // seems that fetching the tx from mempool right after submitting it is not reliable enough

  console.log(`Submitted tx ${txHash}.\nWaiting for the tx to be included in a block...`);

  const tx = await waitForTx(blockfrostClient, txHash);

  expect(tx).toStrictEqual({
    hash: txHash,
    block: expect.toBeBlake2b256Hash(),
    block_height: expect.any(Number),
    block_time: expect.toBeCurrentTimestamp(),
    slot: expect.any(Number),
    index: expect.toBeInRange(0, 300),
    output_amount: expect.arrayContaining([{ quantity: expect.toBeAdaQuantity(), unit: expect.any(String) }]),
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
