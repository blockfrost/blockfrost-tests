import { error_400_addresses, error_400_assets, error_404 } from '../../errors/index.js';

// Network-independent error paths of /addresses/{address}/*.
// Payment credentials (addr_vkh, script) are the same on every network.
export default [
  {
    id: 'addresses-address-malformed-address_ce814e74fd14',
    testName: 'addresses/:address/* - malformed address',
    endpoints: [
      'addresses/addr1stonks/extended',
      'addresses/addr1stonks/total',
      'addresses/addr1stonks/utxos',
      'addresses/addr1stonks/txs',
      'addresses/addr1stonks/transactions',
    ],
    response: error_400_addresses,
  },
  {
    id: 'addresses-address-bech32-with-a-non-address-prefix_6b20c437f8fa',
    testName: 'addresses/:address/* - bech32 with a non-address prefix',
    endpoints: [
      'addresses/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2',
      'addresses/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2/extended',
      'addresses/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2/total',
      'addresses/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2/utxos',
      'addresses/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2/utxos/lovelace',
      'addresses/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2/txs',
      'addresses/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2/transactions',
    ],
    response: error_400_addresses,
  },
  {
    id: 'addresses-address-payment-key-hash-not-on-chain_b68471710999',
    testName: 'addresses/:address/* - payment key hash not on-chain',
    endpoints: [
      'addresses/addr_vkh1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wpwau6z',
      'addresses/addr_vkh1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wpwau6z/extended',
      'addresses/addr_vkh1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wpwau6z/total',
      'addresses/addr_vkh1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wpwau6z/utxos',
      'addresses/addr_vkh1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wpwau6z/utxos/lovelace',
      'addresses/addr_vkh1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wpwau6z/txs',
      'addresses/addr_vkh1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wpwau6z/transactions',
    ],
    response: error_404,
  },
  {
    id: 'addresses-address-script-hash-not-on-chain_68941f4e3bcb',
    testName: 'addresses/:address/* - script hash not on-chain',
    endpoints: [
      'addresses/script1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wamyp7r',
      'addresses/script1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wamyp7r/utxos',
      'addresses/script1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wamyp7r/transactions',
    ],
    response: error_404,
  },
  {
    id: 'addresses-address-utxos-asset-payment-key-hash-not-on-chain-malformed-asset_4cf7ec1f813a',
    testName: 'addresses/:address/utxos/:asset - payment key hash not on-chain, malformed asset',
    endpoints: [
      'addresses/addr_vkh1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wpwau6z/utxos/stonks',
      'addresses/addr_vkh1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wpwau6z/utxos/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf0',
    ],
    response: error_400_assets,
  },
  {
    id: 'addresses-address-utxos-asset-payment-key-hash-not-on-chain-asset-not-on-chain_a1c6c6246b5a',
    testName: 'addresses/:address/utxos/:asset - payment key hash not on-chain, asset not on-chain',
    endpoints: [
      'addresses/addr_vkh1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wpwau6z/utxos/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057',
    ],
    response: error_404,
  },
];
