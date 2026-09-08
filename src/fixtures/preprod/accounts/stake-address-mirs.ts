import { getPaginationFixtures } from '../../../index.js';
import { error_400_accounts, error_404 } from '../../errors/index.js';

const paginationFixtures = getPaginationFixtures(
  'accounts/stake_test1uz55sf04mkd29tehvf4pu95vjhd6e72a50tcycje88jgcysxnh7d8/mirs',
);

export default [
  ...paginationFixtures,
  {
    // No MIR certificate ever reached this network (the reserve and treasury
    // tables are empty), so an on-chain account lists nothing on every page.
    id: 'accounts-stake-address-mirs-on-chain-account-without-mirs_d861d3caf02e',
    testName: 'accounts/:stake_address/mirs - on-chain account without MIRs',
    endpoints: [
      'accounts/stake_test1uz55sf04mkd29tehvf4pu95vjhd6e72a50tcycje88jgcysxnh7d8/mirs',
      'accounts/stake_test1uz55sf04mkd29tehvf4pu95vjhd6e72a50tcycje88jgcysxnh7d8/mirs?order=desc',
      'accounts/stake_test1uz55sf04mkd29tehvf4pu95vjhd6e72a50tcycje88jgcysxnh7d8/mirs?count=1&page=2',
    ],
    response: [],
  },
  {
    id: 'accounts-stake-address-mirs-valid-not-on-chain-account_6a9a676a0731',
    testName: 'accounts/:stake_address/mirs - valid not on-chain account',
    endpoints: ['accounts/stake_test1upzvx3z7hlhjrvzzsu4gxknwjdjmhz08x3x7ddmhfw445dc7u96sn/mirs'],
    response: error_404,
  },
  {
    id: 'accounts-stake-address-mirs-non-valid-account_da8d571c373f',
    testName: 'accounts/:stake_address/mirs - non-valid account',
    endpoints: ['accounts/stake1kek/mirs', 'accounts/stake_test1kek/mirs'],
    response: error_400_accounts,
  },
];
