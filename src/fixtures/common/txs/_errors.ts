import { error_404 } from '../../errors/index.js';

// Network-independent error paths of /txs/{hash}/*.
export default [
  {
    id: 'txs-hash-transaction-not-on-chain_89e5543154b6',
    testName: 'txs/:hash/* - transaction not on-chain',
    endpoints: [
      'txs/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057',
      'txs/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/utxos',
      'txs/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/stakes',
      'txs/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/delegations',
      'txs/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/withdrawals',
      'txs/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/mirs',
      'txs/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/pool_updates',
      'txs/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/pool_retires',
      'txs/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/metadata',
      'txs/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/metadata/cbor',
      'txs/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/redeemers',
      'txs/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/required_signers',
      'txs/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/cbor',
    ],
    response: error_404,
  },
];
