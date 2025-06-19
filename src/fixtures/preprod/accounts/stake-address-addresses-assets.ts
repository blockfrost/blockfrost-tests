import { error_400_accounts, error_404 } from '../../errors/index.js';
import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'accounts/stake_test1urmus498k7r299azjvhh50c9044zwqxgqfuqqrj3m46y8ucef0hex/addresses/assets',
);

export default [
  ...paginationFixtures,
  {
    testName: 'accounts/:stake_address/addresses/assets - BF account',
    endpoints: [
      'accounts/stake_test1urmus498k7r299azjvhh50c9044zwqxgqfuqqrj3m46y8ucef0hex/addresses/assets',
      'accounts/stake_test1urmus498k7r299azjvhh50c9044zwqxgqfuqqrj3m46y8ucef0hex/addresses/assets?order=asc',
      'accounts/stake_test1urmus498k7r299azjvhh50c9044zwqxgqfuqqrj3m46y8ucef0hex/addresses/assets?order=asc&page=1',
      'accounts/stake_test1urmus498k7r299azjvhh50c9044zwqxgqfuqqrj3m46y8ucef0hex/addresses/assets?order=asc&page=1&count=8',
    ],
    response: [
      {
        unit: '1a7b9a6264eba2e1f053624ae3740ab29fcf89d6b297e9c60aa6f8d333',
        quantity: '1000000000',
      },
      {
        unit: '1a7b9a6264eba2e1f053624ae3740ab29fcf89d6b297e9c60aa6f8d3465432',
        quantity: '100',
      },
      {
        unit: '1a7b9a6264eba2e1f053624ae3740ab29fcf89d6b297e9c60aa6f8d348656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '1a7b9a6264eba2e1f053624ae3740ab29fcf89d6b297e9c60aa6f8d3777577',
        quantity: '1000000001',
      },
      {
        unit: '1a7b9a6264eba2e1f053624ae3740ab29fcf89d6b297e9c60aa6f8d377757732',
        quantity: '1000000002',
      },
    ],
  },
  {
    testName: 'accounts/:stake_address/addresses/assets - generic stake address without tokens',

    endpoints: [
      'accounts/stake_test1uprndrzzjwcacy4kzt9u9y2uh8zusqkak6glcphxay472fszzgeyu/addresses/assets',
    ],
    response: [],
  },
  {
    testName: 'accounts/:stake_address - non-valid account',

    response: error_400_accounts,
    endpoints: ['accounts/stake1kek/addresses/assets'],
  },
  {
    testName: 'accounts/:stake_address - valid not on-chain account',

    response: error_404,
    endpoints: [
      'accounts/stake_test1upzvx3z7hlhjrvzzsu4gxknwjdjmhz08x3x7ddmhfw445dc7u96sn/addresses/assets',
    ],
  },
  {
    testName: 'accounts/:stake_address/addresses/assets - valid not on-chain account',

    response: error_404,
    endpoints: [
      'accounts/stake_test1upzvx3z7hlhjrvzzsu4gxknwjdjmhz08x3x7ddmhfw445dc7u96sn/addresses/assets',
    ],
  },
];
