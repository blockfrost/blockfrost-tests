import { error_400_accounts, error_404 } from '../../errors/index.js';

// preprod-specific error paths of /accounts/{stake_address}/*, see also common/accounts/_errors.ts.
export default [
  {
    id: 'accounts-stake-address-valid-stake-address-not-on-chain_aaf74d4d94ca',
    testName: 'accounts/:stake_address/* - valid stake address not on-chain',
    endpoints: [
      'accounts/stake_test1upzvx3z7hlhjrvzzsu4gxknwjdjmhz08x3x7ddmhfw445dc7u96sn',
      'accounts/stake_test1upzvx3z7hlhjrvzzsu4gxknwjdjmhz08x3x7ddmhfw445dc7u96sn/rewards',
      'accounts/stake_test1upzvx3z7hlhjrvzzsu4gxknwjdjmhz08x3x7ddmhfw445dc7u96sn/history',
      'accounts/stake_test1upzvx3z7hlhjrvzzsu4gxknwjdjmhz08x3x7ddmhfw445dc7u96sn/delegations',
      'accounts/stake_test1upzvx3z7hlhjrvzzsu4gxknwjdjmhz08x3x7ddmhfw445dc7u96sn/registrations',
      'accounts/stake_test1upzvx3z7hlhjrvzzsu4gxknwjdjmhz08x3x7ddmhfw445dc7u96sn/withdrawals',
      'accounts/stake_test1upzvx3z7hlhjrvzzsu4gxknwjdjmhz08x3x7ddmhfw445dc7u96sn/addresses',
      'accounts/stake_test1upzvx3z7hlhjrvzzsu4gxknwjdjmhz08x3x7ddmhfw445dc7u96sn/addresses/total',
      'accounts/stake_test1upzvx3z7hlhjrvzzsu4gxknwjdjmhz08x3x7ddmhfw445dc7u96sn/utxos',
      'accounts/stake_test1upzvx3z7hlhjrvzzsu4gxknwjdjmhz08x3x7ddmhfw445dc7u96sn/transactions',
    ],
    response: error_404,
  },
  {
    id: 'accounts-stake-address-stake-address-of-another-network_aaab2812caf8',
    testName: 'accounts/:stake_address/* - stake address of another network',
    endpoints: [
      'accounts/stake1u9mnvzarrk73dz8gcmrx8lqqqnzfa8zu4zxuymstr6vtvmsutca3h',
      'accounts/stake1u9mnvzarrk73dz8gcmrx8lqqqnzfa8zu4zxuymstr6vtvmsutca3h/rewards',
      'accounts/stake1u9mnvzarrk73dz8gcmrx8lqqqnzfa8zu4zxuymstr6vtvmsutca3h/history',
      'accounts/stake1u9mnvzarrk73dz8gcmrx8lqqqnzfa8zu4zxuymstr6vtvmsutca3h/delegations',
      'accounts/stake1u9mnvzarrk73dz8gcmrx8lqqqnzfa8zu4zxuymstr6vtvmsutca3h/registrations',
      'accounts/stake1u9mnvzarrk73dz8gcmrx8lqqqnzfa8zu4zxuymstr6vtvmsutca3h/withdrawals',
      'accounts/stake1u9mnvzarrk73dz8gcmrx8lqqqnzfa8zu4zxuymstr6vtvmsutca3h/mirs',
      'accounts/stake1u9mnvzarrk73dz8gcmrx8lqqqnzfa8zu4zxuymstr6vtvmsutca3h/addresses',
      'accounts/stake1u9mnvzarrk73dz8gcmrx8lqqqnzfa8zu4zxuymstr6vtvmsutca3h/addresses/assets',
      'accounts/stake1u9mnvzarrk73dz8gcmrx8lqqqnzfa8zu4zxuymstr6vtvmsutca3h/addresses/total',
      'accounts/stake1u9mnvzarrk73dz8gcmrx8lqqqnzfa8zu4zxuymstr6vtvmsutca3h/utxos',
    ],
    response: error_400_accounts,
  },
];
