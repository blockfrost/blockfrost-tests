import { error_400_accounts, error_404 } from '../../errors/index.js';

export default [
  {
    id: 'accounts-stake-address-queryparams-generic-stake-address-mirs_d58c64399ad6',
    testName: 'accounts/:stake_address?queryparams generic stake address mirs',
    endpoints: [
      'accounts/stake1uyq7039vutuw8v7femqtktdu9zlhnqh3mkvvhdazft9ga2q8zdfkp/mirs?count=1&page=1',
      'accounts/stake1uyq7039vutuw8v7femqtktdu9zlhnqh3mkvvhdazft9ga2q8zdfkp/mirs?count=1&page=1&order=asc',
    ],
    response: [
      {
        tx_hash: '7b57f2cf1c442c563647ab29669c88b9116c2668d31d42526ff27ed614da1252',
        amount: '19296735',
        tx_slot: 21491996,
        block_height: 5329076,
        block_time: 1613058287,
      },
    ],
  },
  {
    id: 'accounts-stake-address-mirs-valid-not-on-chain-account_64a1c4180603',
    testName: 'accounts/:stake_address/mirs - valid not on-chain account',
    endpoints: ['accounts/stake1u9mnvzarrk73dz8gcmrx8lqqqnzfa8zu4zxuymstr6vtvmsutca3h/mirs'],
    response: error_404,
  },
  {
    id: 'accounts-stake-address-mirs-non-valid-account_da8d571c373f',
    testName: 'accounts/:stake_address/mirs - non-valid account',
    endpoints: ['accounts/stake1kek/mirs', 'accounts/stake_test1kek/mirs'],
    response: error_400_accounts,
  },
];
