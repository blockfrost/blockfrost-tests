import { error_400_addresses, error_404 } from '../../errors/index.js';

// mainnet-specific error paths of /addresses/{address}/*, see also common/addresses/_errors.ts.
export default [
  {
    id: 'addresses-address-valid-address-not-on-chain_947234c61d48',
    testName: 'addresses/:address/* - valid address not on-chain',
    endpoints: [
      'addresses/addr1qygl5xsd57u59wv6mszq6tu32t55qx60fz4t2mwytjxztxtswj8ngt9puck7f0cqxzsfe62un6ln88yy8c8tguz8twmq55qrdt/extended',
      'addresses/addr1qygl5xsd57u59wv6mszq6tu32t55qx60fz4t2mwytjxztxtswj8ngt9puck7f0cqxzsfe62un6ln88yy8c8tguz8twmq55qrdt/total',
      'addresses/addr1qygl5xsd57u59wv6mszq6tu32t55qx60fz4t2mwytjxztxtswj8ngt9puck7f0cqxzsfe62un6ln88yy8c8tguz8twmq55qrdt/txs',
      'addresses/addr1qygl5xsd57u59wv6mszq6tu32t55qx60fz4t2mwytjxztxtswj8ngt9puck7f0cqxzsfe62un6ln88yy8c8tguz8twmq55qrdt/transactions',
    ],
    response: error_404,
  },
  {
    id: 'addresses-address-address-of-another-network_9ef1ad9b8a69',
    testName: 'addresses/:address/* - address of another network',
    endpoints: [
      'addresses/addr_test1qre63def8pypvq95cw07lwy4hge4dl8e2nl36sa7h4amx56ycdz9a0l0yxcy9pe2sddxaym9hwy7wdzdu6mhwjattgms2p6puw',
      'addresses/addr_test1qre63def8pypvq95cw07lwy4hge4dl8e2nl36sa7h4amx56ycdz9a0l0yxcy9pe2sddxaym9hwy7wdzdu6mhwjattgms2p6puw/extended',
      'addresses/addr_test1qre63def8pypvq95cw07lwy4hge4dl8e2nl36sa7h4amx56ycdz9a0l0yxcy9pe2sddxaym9hwy7wdzdu6mhwjattgms2p6puw/total',
      'addresses/addr_test1qre63def8pypvq95cw07lwy4hge4dl8e2nl36sa7h4amx56ycdz9a0l0yxcy9pe2sddxaym9hwy7wdzdu6mhwjattgms2p6puw/utxos',
      'addresses/addr_test1qre63def8pypvq95cw07lwy4hge4dl8e2nl36sa7h4amx56ycdz9a0l0yxcy9pe2sddxaym9hwy7wdzdu6mhwjattgms2p6puw/utxos/lovelace',
      'addresses/addr_test1qre63def8pypvq95cw07lwy4hge4dl8e2nl36sa7h4amx56ycdz9a0l0yxcy9pe2sddxaym9hwy7wdzdu6mhwjattgms2p6puw/txs',
      'addresses/addr_test1qre63def8pypvq95cw07lwy4hge4dl8e2nl36sa7h4amx56ycdz9a0l0yxcy9pe2sddxaym9hwy7wdzdu6mhwjattgms2p6puw/transactions',
    ],
    response: error_400_addresses,
  },
];
