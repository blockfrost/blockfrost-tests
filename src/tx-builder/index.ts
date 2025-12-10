import { BlockchainParameters, composeTransaction } from './helpers/compose-transaction.js';
import { signTransaction } from './helpers/sign-transaction.js';
import { deriveAddressPrvKey, mnemonicToPrivateKey } from './helpers/key.js';
import { Network } from './types/index.js';
import { sleep } from '../index.js';
import { BlockFrostAPI, BlockfrostServerError } from '@blockfrost/blockfrost-js';
import { getConfig } from '../config.js';

const init = async () => {
  const envConfig = getConfig();
  // BIP39 mnemonic (seed) from which we will generate address to retrieve utxo from and private key used for signing the transaction
  const MNEMONIC = envConfig.submitMnemonic;

  if (!MNEMONIC) {
    throw new Error('Environment variable SUBMIT_MNEMONIC is required but not set.');
  }

  // Amount sent to the recipient
  const OUTPUT_AMOUNT = '1000000'; // 1 000 000 lovelaces = 1 ADA

  return {
    MNEMONIC,
    OUTPUT_AMOUNT,
    environment: envConfig.environment,
  };
};

export const buildTx = async (options: {
  blockfrostClient: BlockFrostAPI;
  network: Network;
  blockchainParameters?: BlockchainParameters;
}) => {
  const { MNEMONIC, OUTPUT_AMOUNT, environment } = await init();
  const { blockfrostClient, blockchainParameters } = options;

  // Derive an address (this is the address where you need to send ADA in order to have UTXO to actually make the transaction)
  const bip32PrvKey = mnemonicToPrivateKey(MNEMONIC);
  const { signKey, address } = deriveAddressPrvKey(
    bip32PrvKey,
    options.network === 'mainnet' ? 'mainnet' : 'testnet',
    // prod/dev envs use different address to isolate utxo sets
    environment === 'prod' ? 0 : 1,
  );

  // Use provided protocol parameters or fetch latest protocol parameters
  const protocolParameters =
    blockchainParameters?.protocolParams ?? (await blockfrostClient.epochsLatestParameters());

  // Use provided slot or fetch current blockchain slot from latest block
  const currentSlot =
    blockchainParameters?.currentSlot ?? (await blockfrostClient.blocksLatest()).slot;

  // Retrieve utxo for the address
  const utxos = await blockfrostClient.addressesUtxos(address);

  const hasLowBalance =
    utxos.length === 1 &&
    BigInt(utxos.at(0)?.amount.find(a => a.unit === 'lovelace')?.quantity ?? '0') < 2000000;

  if (utxos.length === 0 || hasLowBalance) {
    throw new Error(`You should send ADA to ${address} to have enough funds to send a transaction`);
  }

  // console.log(`UTXO on ${address}:`);
  // console.log(JSON.stringify(utxo, undefined, 4));

  // Prepare transaction
  const { txBody } = composeTransaction(address, address, OUTPUT_AMOUNT, utxos, {
    protocolParams: protocolParameters,
    currentSlot: currentSlot!,
  });

  // Sign transaction
  const transaction = signTransaction(txBody, signKey);

  return transaction;
};

export const waitForTx = async (txHash: string, blockfrostClient: BlockFrostAPI) => {
  const maxRetries = 12;
  const intervalMs = 10_000;
  const timeoutS = (maxRetries * intervalMs) / 1000;

  console.log(
    `Submitted tx ${txHash}. Waiting for the tx to be included in a block (interval: ${intervalMs}ms, timeout: ${timeoutS}s)`,
  );

  for (let index = 0; index < maxRetries; index++) {
    await sleep(intervalMs);

    try {
      const tx = await blockfrostClient.txs(txHash);

      console.log(`Tx ${txHash} confirmed in block: ${tx.block}`);
      return tx;
    } catch (error) {
      if (error instanceof BlockfrostServerError && error.status_code === 404) {
        // Tx not yet found
        console.log(`Waiting for the tx. Attempt ${index + 1}/${maxRetries}.`);

        if (index === maxRetries - 1) {
          console.error(
            `Timeout: Tx ${txHash} not found on blockchain within ${timeoutS} seconds.`,
            error,
          );
          throw new Error(`Tx not found on blockchain within ${timeoutS} seconds.`);
        }
      } else {
        // Unexpected error
        console.error(`Unexpected error while retrieving tx ${txHash}`, error);
        throw error;
      }
    }
  }

  throw new Error('Tx not found on blockchain within the timeout period.');
};
