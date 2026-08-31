import { getPaginationFixtures } from '../../../../index.js';
import { error_400_cert_index, error_400_gov_action_id } from '../../../errors/index.js';

// 0e58f693…6590#0 pays out to three reward accounts, so the listing has an
// order to get wrong. The rows come back in reward-account order — the order
// the proposal procedure's own map is in — not by amount, not by insertion.
const MULTI_WITHDRAWALS = [
  {
    stake_address: 'stake_test1upugeuz3jdy0a7hncusutadavzcetdzylgxcldz39hp9n0s0xy0n5',
    amount: '2000',
  },
  {
    stake_address: 'stake_test1uzapf83wydusjln97rqr7fen6vgrz5087yqdxm0akqdqkgstjz8g4',
    amount: '1000',
  },
  {
    stake_address: 'stake_test1urmrzdcvepug9067zj4hy56v4un9t59z559f4z3cyzak7js3z5t2t',
    amount: '3000',
  },
];

const paginationFixtures = getPaginationFixtures(
  'governance/proposals/0e58f693c8d701978625df494caa14a39527e4291a0faa1a83bffac645396590/0/withdrawals',
);

export default [
  ...paginationFixtures,
  {
    id: 'governance-proposal-withdrawals_e5986d499f1f',
    testName: 'governance proposal withdrawals',
    endpoints: [
      'governance/proposals/0e58f693c8d701978625df494caa14a39527e4291a0faa1a83bffac645396590/0/withdrawals',
      'governance/proposals/gov_action1pev0dy7g6uqe0p39may5e2s55w2j0epfrg865x5rhlavv3fevkgqqj0d5u3/withdrawals',
    ],
    response: MULTI_WITHDRAWALS,
  },
  {
    id: 'governance-proposal-withdrawals-desc_5683e27b4493',
    testName: 'governance proposal withdrawals - desc',
    endpoints: [
      'governance/proposals/0e58f693c8d701978625df494caa14a39527e4291a0faa1a83bffac645396590/0/withdrawals?order=desc',
      'governance/proposals/gov_action1pev0dy7g6uqe0p39may5e2s55w2j0epfrg865x5rhlavv3fevkgqqj0d5u3/withdrawals?order=desc',
    ],
    response: [...MULTI_WITHDRAWALS].reverse(),
  },
  {
    id: 'governance-proposal-withdrawals-first-page_36aaac15b56b',
    testName: 'governance proposal withdrawals - first page',
    endpoints: [
      'governance/proposals/0e58f693c8d701978625df494caa14a39527e4291a0faa1a83bffac645396590/0/withdrawals?count=2',
    ],
    response: MULTI_WITHDRAWALS.slice(0, 2),
  },
  {
    id: 'governance-proposal-withdrawals-second-page_763a0cc1c8cf',
    testName: 'governance proposal withdrawals - second page',
    endpoints: [
      'governance/proposals/0e58f693c8d701978625df494caa14a39527e4291a0faa1a83bffac645396590/0/withdrawals?count=2&page=2',
    ],
    response: MULTI_WITHDRAWALS.slice(2),
  },
  {
    id: 'governance-proposal-withdrawals-page-past-the-end_6665f4f745b0',
    testName: 'governance proposal withdrawals - page past the end',
    endpoints: [
      'governance/proposals/0e58f693c8d701978625df494caa14a39527e4291a0faa1a83bffac645396590/0/withdrawals?page=5',
    ],
    response: [],
  },
  {
    id: 'governance-proposal-withdrawals-second-treasury-withdrawals-proposal_7fc917e2938f',
    testName: 'governance proposal withdrawals - second treasury_withdrawals proposal',
    endpoints: [
      'governance/proposals/fd52a722794d73a48fc2f90d2e7b961d9fab39a224ee334bc9b6c35f9a5eb6d1/0/withdrawals',
      'governance/proposals/gov_action1l4f2wgnef4e6fr7zlyxju7ukrk06kwdzynhrxj7fkmp4lxj7kmgsq57926a/withdrawals',
    ],
    response: [
      {
        stake_address: 'stake_test1up9xza05jtnmdz9pge0r2002pfm0uv8x49jr6z7cvej0w7qp9guuc',
        amount: '100000000',
      },
      {
        stake_address: 'stake_test1urznf7nszc8z776mcp5ttzaezdjdgf8qfdrg69u2wpff6mqntc8at',
        amount: '10000000',
      },
      {
        stake_address: 'stake_test1urkvayh8272xffuwks9kxuyfpuxl0msrye8gmzyjeattk3c27j0sl',
        amount: '50000000',
      },
    ],
  },
  {
    id: 'governance-proposal-withdrawals-single-withdrawal_f530c35ee01b',
    testName: 'governance proposal withdrawals - single withdrawal',
    endpoints: [
      'governance/proposals/cbdfd1717b4e7ea2d4b3c141387b24f2f31fac8be8fec64c3b70870bad425643/0/withdrawals',
      'governance/proposals/gov_action1e00azutmfel2949nc9qns7ey7te3ltytarlvvnpmwzrsht2z2epsqwmg2ug/withdrawals',
    ],
    response: [
      {
        stake_address: 'stake_test1up8xg8ur80nsymvefrlk4dshjyfrze4pep843l289f4n8fgrtrmy4',
        amount: '283',
      },
    ],
  },
  // Nothing here is a 404: the listing is a join against the withdrawals of a
  // proposal, so an action that asks for none, a proposal nobody made and a
  // hash that is not a hash all come back as the same empty array.
  {
    id: 'governance-proposal-withdrawals-proposal-without-withdrawals_5cea99dc318d',
    testName: 'governance proposal withdrawals - proposal without withdrawals',
    endpoints: [
      // info_action
      'governance/proposals/e61f151fcef9e99dff5c705f8d5de18891f8d1d92d69fef5ff608d2c29a7c133/0/withdrawals',
      'governance/proposals/gov_action1uc03287wl85eml6uwp0c6h0p3zgl35we945laa0lvzxjc2d8cyesq4whp09/withdrawals',
      // parameter_change
      'governance/proposals/95af8608dc7aaf5c73025066b509a2c11c829f2984009ac92e7053d123fbce57/0/withdrawals',
      // new_constitution
      'governance/proposals/88f0d0fc7a6bac735be72963d2919105c1220b25ffaa69b0b166f4d4b8027ff1/0/withdrawals',
      // an index the proposing tx never used
      'governance/proposals/0e58f693c8d701978625df494caa14a39527e4291a0faa1a83bffac645396590/9/withdrawals',
      // a proposal nobody made
      'governance/proposals/0000000000000000000000000000000000000000000000000000000000000000/0/withdrawals',
      'governance/proposals/gov_action1zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zygsq6dmejn/withdrawals',
      // not a transaction hash at all
      'governance/proposals/not-a-tx-hash/0/withdrawals',
    ],
    response: [],
  },
  {
    id: 'governance-proposal-withdrawals-malformed-cert-index_b84bf66f3bd4',
    testName: 'governance proposal withdrawals - malformed cert_index',
    endpoints: [
      'governance/proposals/0e58f693c8d701978625df494caa14a39527e4291a0faa1a83bffac645396590/x/withdrawals',
    ],
    response: error_400_cert_index,
  },
  {
    id: 'governance-proposal-withdrawals-malformed-gov-action-id_5908f900f669',
    testName: 'governance proposal withdrawals - malformed gov action id',
    endpoints: [
      'governance/proposals/gov_action1nonsense/withdrawals',
      'governance/proposals/drep1yfus3eg3tr384fx6ltew20n9j9ph7aduk743y6a77lgcy0cjl30y9/withdrawals',
    ],
    response: error_400_gov_action_id,
  },
];
