import { error_400_accounts, error_404 } from '../../errors/index.js';

// Network-independent error paths of /accounts/{stake_address}/*.
// The network-specific ones (not on-chain, other network) live in <network>/accounts/_errors.ts.
export default [
  {
    id: 'accounts-stake-address-malformed-stake-address_970580134e25',
    testName: 'accounts/:stake_address/* - malformed stake address',
    endpoints: [
      'accounts/stake1kek',
      'accounts/stake1kek/rewards',
      'accounts/stake1kek/history',
      'accounts/stake1kek/delegations',
      'accounts/stake1kek/registrations',
      'accounts/stake1kek/withdrawals',
      'accounts/stake1kek/addresses',
      'accounts/stake1kek/addresses/total',
      'accounts/stake1kek/utxos',
      'accounts/stake1kek/transactions',
    ],
    response: error_400_accounts,
  },
  {
    id: 'accounts-stake-address-bech32-with-a-non-stake-prefix_6930d5c57b25',
    testName: 'accounts/:stake_address/* - bech32 with a non-stake prefix',
    endpoints: [
      'accounts/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2',
      'accounts/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2/rewards',
      'accounts/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2/history',
      'accounts/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2/delegations',
      'accounts/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2/registrations',
      'accounts/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2/withdrawals',
      'accounts/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2/mirs',
      'accounts/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2/addresses',
      'accounts/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2/addresses/assets',
      'accounts/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2/addresses/total',
      'accounts/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2/utxos',
      'accounts/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2/transactions',
    ],
    response: error_400_accounts,
  },
  {
    id: 'accounts-stake-address-transactions-stake-key-hash-and-script-hash-not-on-chain_a4379ec85a56',
    testName: 'accounts/:stake_address/transactions - stake key hash and script hash not on-chain',
    endpoints: [
      'accounts/stake_vkh1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wl6p6lp/transactions',
      'accounts/script1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wamyp7r/transactions',
    ],
    response: error_404,
  },
];
