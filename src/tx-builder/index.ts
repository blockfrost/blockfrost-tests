// This example is written in Typescript.
// In order to run it on Node.js your need to compile the code first.
// Follow instructions in README
import { BlockFrostAPI, BlockfrostServerError } from '@blockfrost/blockfrost-js';

import { composeTransaction } from './helpers/compose-transaction.js';
import { signTransaction } from './helpers/sign-transaction.js';
import { deriveAddressPrvKey, mnemonicToPrivateKey } from './helpers/key.js';
import { UTXO } from './types/index.js';
import { sleep } from '../index.js';

// BIP39 mnemonic (seed) from which we will generate address to retrieve utxo from and private key used for signing the transaction
const MNEMONIC: string = process.env.SUBMIT_MNEMONIC || '';

export type Network = 'mainnet' | 'preview' | 'preprod';

// Amount sent to the recipient
const OUTPUT_AMOUNT = '1000000'; // 1 000 000 lovelaces = 1 ADA
const environment = (process.env.TEST_ENV ?? 'dev') as 'prod' | 'dev';

export const buildTx = async (blockfrostClient: BlockFrostAPI, _network: Network) => {
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
  const protocolParameters = await blockfrostClient.epochsLatestParameters();

  // Retrieve utxo for the address
  let utxo: UTXO = [];

  try {
    utxo = await blockfrostClient.addressesUtxosAll(address);
  } catch (error) {
    if (error instanceof BlockfrostServerError && error.status_code === 404) {
      // Address derived from the seed was not used yet
      // In this case Blockfrost API will return 404
      utxo = [];
    } else {
      throw error;
    }
  }

  const hasLowBalance =
    utxo.length === 1 &&
    BigInt(utxo.at(0)?.amount.find(a => a.unit === 'lovelace')?.quantity ?? '0') < 2000000;

  if (utxo.length === 0 || hasLowBalance) {
    throw new Error(`You should send ADA to ${address} to have enough funds to sent a transaction`);
  }

  // console.log(`UTXO on ${address}:`);
  // console.log(JSON.stringify(utxo, undefined, 4));

  // Get current blockchain slot from latest block
  const latestBlock = await blockfrostClient.blocksLatest();
  const currentSlot = latestBlock.slot;

  if (!currentSlot) {
    throw new Error('Failed to fetch slot number');
  }

  // Prepare transaction
  const { txBody } = composeTransaction(address, address, OUTPUT_AMOUNT, utxo, {
    protocolParams: protocolParameters,
    currentSlot,
  });

  // Sign transaction
  const transaction = signTransaction(txBody, signKey);

  return transaction;
};

export const waitForTx = async (blockfrostClient: BlockFrostAPI, txHash: string) => {
  const maxRetries = 5;

  for (let index = 0; index < maxRetries; index++) {
    // wait for 20 seconds between attempts
    await sleep(20_000);

    try {
      const tx = await blockfrostClient.txs(txHash);

      return tx;
    } catch (error) {
      if (error instanceof BlockfrostServerError && error.status_code === 404) {
        // last attempt
        if (index === maxRetries - 1) {
          console.error(`Tx not found on blockchain after ${index + 1} attempts.`, error);
          throw new Error('Tx not found on blockchain after maximum retries.');
        }
      } else {
        console.error(`Error retrieving tx from blockchain.`, error);
        throw error;
      }
    }
  }

  // If the transaction is not found after all retries, throw an error
  throw new Error('Tx not found on blockchain after maximum retries.');
};
