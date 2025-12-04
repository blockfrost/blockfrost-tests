import { composeTransaction } from './helpers/compose-transaction.js';
import { signTransaction } from './helpers/sign-transaction.js';
import { deriveAddressPrvKey, mnemonicToPrivateKey } from './helpers/key.js';
import { Network } from './types/index.js';
import { sleep } from '../index.js';
import {
  getAddressUtxos,
  getEpochsLatestParameters,
  getLatestBlock,
  getPrimaryInstance,
  getSecondaryInstance,
} from '../blockfrost-client.js';
import { BlockfrostServerError } from '@blockfrost/blockfrost-js';

const init = async () => {
  // BIP39 mnemonic (seed) from which we will generate address to retrieve utxo from and private key used for signing the transaction
  const MNEMONIC: string | undefined = process.env.SUBMIT_MNEMONIC;

  if (!MNEMONIC) {
    throw new Error('Environment variable SUBMIT_MNEMONIC is required but not set.');
  }

  // Amount sent to the recipient
  const OUTPUT_AMOUNT = '1000000'; // 1 000 000 lovelaces = 1 ADA
  const environment = (process.env.TEST_ENV ?? 'dev') as 'prod' | 'dev';

  return {
    MNEMONIC,
    OUTPUT_AMOUNT,
    environment,
  };
};

export const buildTx = async (_network: Network) => {
  const { MNEMONIC, OUTPUT_AMOUNT, environment } = await init();

  let network: 'mainnet' | 'testnet' = 'mainnet';

  if (_network !== 'mainnet') {
    network = 'testnet';
  }

  // Derive an address (this is the address where you need to send ADA in order to have UTXO to actually make the transaction)
  const bip32PrvKey = mnemonicToPrivateKey(MNEMONIC);
  const { signKey, address } = deriveAddressPrvKey(
    bip32PrvKey,
    network,
    // prod/dev envs use different address to isolate utxo sets
    environment === 'prod' ? 0 : 1,
  );

  // Retrieve protocol parameters
  const protocolParameters = await getEpochsLatestParameters();

  // Retrieve utxo for the address
  const utxos = await getAddressUtxos(address);

  const hasLowBalance =
    utxos.length === 1 &&
    BigInt(utxos.at(0)?.amount.find(a => a.unit === 'lovelace')?.quantity ?? '0') < 2000000;

  if (utxos.length === 0 || hasLowBalance) {
    throw new Error(`You should send ADA to ${address} to have enough funds to sent a transaction`);
  }

  // console.log(`UTXO on ${address}:`);
  // console.log(JSON.stringify(utxo, undefined, 4));

  // Get current blockchain slot from latest block
  const latestBlock = await getLatestBlock();
  const currentSlot = latestBlock.slot;

  if (!currentSlot) {
    throw new Error('Failed to fetch slot number');
  }

  // Prepare transaction
  const { txBody } = composeTransaction(address, address, OUTPUT_AMOUNT, utxos, {
    protocolParams: protocolParameters,
    currentSlot,
  });

  // Sign transaction
  const transaction = signTransaction(txBody, signKey);

  return transaction;
};

export const waitForTx = async (txHash: string) => {
  const maxRetries = 12;
  const intervalMs = 10_000;
  const timeoutS = (maxRetries * intervalMs) / 1000;

  let client = getPrimaryInstance();

  console.log(`Waiting for tx ${txHash}... (checking every ${intervalMs}ms, max ${timeoutS}s)`);

  for (let index = 0; index < maxRetries; index++) {
    let instance: 'PRIMARY' | 'SECONDARY' = 'PRIMARY';

    await sleep(intervalMs);

    try {
      const tx = await client.txs(txHash);

      console.log(`Tx ${txHash} confirmed in block: ${tx.block} (instance: ${instance})`);
      return tx;
    } catch (error) {
      if (error instanceof BlockfrostServerError && error.status_code === 404) {
        // Tx not yet found
        console.log(
          `Waiting for the tx. Attempt ${index + 1}/${maxRetries}: Pending (404) on instance ${instance}...`,
        );

        if (index === maxRetries - 1) {
          console.error(
            `Timeout: Tx ${txHash} not found on blockchain within ${timeoutS} seconds.`,
            error,
          );
          throw new Error(`Tx not found on blockchain within ${timeoutS} seconds.`);
        }
      } else {
        // Unexpected error
        console.error(
          `Unexpected error while retrieving tx ${txHash} (instance: ${instance})`,
          error,
        );

        if (instance === 'PRIMARY') {
          // Note: if PRIMARY fails, then SECONDARY client fallbacks to public API in case env FALLBACK_SERVER_URL is not set,
          // thus it doesn't necessarily test the same backend that was used for submitting the tx
          console.warn(`Switching to SECONDARY instance.`, error);
          client = getSecondaryInstance();
          instance = 'SECONDARY';
        } else {
          // Fast fail on unexpected errors on SECONDARY instance
          throw error;
        }
      }
    }
  }

  throw new Error('Tx not found on blockchain within the timeout period.');
};
