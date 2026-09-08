import { getPaginationFixtures } from '../../../../index.js';
import { error_400_cert_index, error_400_gov_action_id } from '../../../errors/index.js';

// 191398f3…9f8f#0 pays the same amount to two reward accounts, so neither the
// amount nor the stake address can be what orders the rows: they come back in
// the order of the proposal's own withdrawals map, the way db-sync stored them.
const MULTI_WITHDRAWALS = [
  {
    stake_address: 'stake_test1uz9jy876cesr4xem09cq523ukffj9d2ft8hr9rthpwkajxcgaknmk',
    amount: '200000000000',
  },
  {
    stake_address: 'stake_test1uz6ljatyc7w52z44hskd5pu5cvw7qemwz6re3ux4pmdqumcn2qyrx',
    amount: '200000000000',
  },
];

const paginationFixtures = getPaginationFixtures(
  'governance/proposals/191398f38ef05515ddca265020d607fbb85c5651813f2429b38160fd491d9f8f/0/withdrawals',
);

export default [
  ...paginationFixtures,
  {
    id: 'governance-proposal-withdrawals_1cda99a4c3c7',
    testName: 'governance proposal withdrawals',
    endpoints: [
      'governance/proposals/191398f38ef05515ddca265020d607fbb85c5651813f2429b38160fd491d9f8f/0/withdrawals',
      'governance/proposals/gov_action1ryfe3uuw7p23thw2yegzp4s8lwu9c4j3syljg2dns9s06jgan78sq72q85v/withdrawals',
    ],
    response: MULTI_WITHDRAWALS,
  },
  {
    id: 'governance-proposal-withdrawals-desc_5d19661dcc56',
    testName: 'governance proposal withdrawals - desc',
    endpoints: [
      'governance/proposals/191398f38ef05515ddca265020d607fbb85c5651813f2429b38160fd491d9f8f/0/withdrawals?order=desc',
      'governance/proposals/gov_action1ryfe3uuw7p23thw2yegzp4s8lwu9c4j3syljg2dns9s06jgan78sq72q85v/withdrawals?order=desc',
    ],
    response: [...MULTI_WITHDRAWALS].reverse(),
  },
  {
    id: 'governance-proposal-withdrawals-first-page_4d06fddb5244',
    testName: 'governance proposal withdrawals - first page',
    endpoints: [
      'governance/proposals/191398f38ef05515ddca265020d607fbb85c5651813f2429b38160fd491d9f8f/0/withdrawals?count=1',
    ],
    response: MULTI_WITHDRAWALS.slice(0, 1),
  },
  {
    id: 'governance-proposal-withdrawals-second-page_4e27c9c11ac9',
    testName: 'governance proposal withdrawals - second page',
    endpoints: [
      'governance/proposals/191398f38ef05515ddca265020d607fbb85c5651813f2429b38160fd491d9f8f/0/withdrawals?count=1&page=2',
    ],
    response: MULTI_WITHDRAWALS.slice(1),
  },
  {
    id: 'governance-proposal-withdrawals-page-past-the-end_4ff559506c8b',
    testName: 'governance proposal withdrawals - page past the end',
    endpoints: [
      'governance/proposals/191398f38ef05515ddca265020d607fbb85c5651813f2429b38160fd491d9f8f/0/withdrawals?page=3',
    ],
    response: [],
  },
  {
    id: 'governance-proposal-withdrawals-single-withdrawal_bd3c1d0861eb',
    testName: 'governance proposal withdrawals - single withdrawal',
    endpoints: [
      'governance/proposals/372d688faa77e146798b581b322c0f2981a9023764736ade5d12e0e4e796af8c/0/withdrawals',
      'governance/proposals/gov_action1xukk3ra2wls5v7vttqdnytq09xq6jq3hv3ek4hjaztswfeuk47xqqg4644z/withdrawals',
    ],
    response: [
      {
        stake_address: 'stake_test1uppy2gm2hqzkwc80em4mlat73j4jyqvzhclrvsu72g9xg4q2yweet',
        amount: '1000000000000',
      },
    ],
  },
  // 2cd8cfb5…ed86 proposes nineteen treasury withdrawals in one tx, all to the
  // same reward account with different amounts, so the cert index is the only
  // thing that tells them apart and the amount shows which one was picked.
  {
    id: 'governance-proposal-withdrawals-cert-index-15-of-a-multi-proposal-tx_f5ffb3cf876a',
    testName: 'governance proposal withdrawals - cert index 15 of a multi-proposal tx',
    endpoints: [
      'governance/proposals/2cd8cfb5c531f0c7d0055452426c384412978b9b66f64f4447d0c2c73f99ed86/15/withdrawals',
      'governance/proposals/gov_action19nvvldw9x8cv05q923fyympcgsff0zumvmmy73z86rpvw0ueakrq79srdqf/withdrawals',
    ],
    response: [
      {
        stake_address: 'stake_test1urrfysygca8m9x0qypxrutl5j2n9c252mev4qmwdtzwqr6g6dj7kn',
        amount: '700000000000',
      },
    ],
  },
  {
    id: 'governance-proposal-withdrawals-cert-index-14-of-a-multi-proposal-tx_205ae68edb02',
    testName: 'governance proposal withdrawals - cert index 14 of a multi-proposal tx',
    endpoints: [
      'governance/proposals/2cd8cfb5c531f0c7d0055452426c384412978b9b66f64f4447d0c2c73f99ed86/14/withdrawals',
      'governance/proposals/gov_action19nvvldw9x8cv05q923fyympcgsff0zumvmmy73z86rpvw0ueakrquk4zwny/withdrawals',
    ],
    response: [
      {
        stake_address: 'stake_test1urrfysygca8m9x0qypxrutl5j2n9c252mev4qmwdtzwqr6g6dj7kn',
        amount: '11070323000000',
      },
    ],
  },
  // Nothing here is a 404: the listing is a join against the withdrawals of a
  // proposal, so an action that asks for none, a proposal nobody made and a
  // hash that is not a hash all come back as the same empty array.
  {
    id: 'governance-proposal-withdrawals-proposal-without-withdrawals_97c2171a957b',
    testName: 'governance proposal withdrawals - proposal without withdrawals',
    endpoints: [
      // info_action
      'governance/proposals/aff2909f8175ee02a8c1bf96ff516685d25bf0c6b95aac91f4dfd53a5c0867cc/0/withdrawals',
      'governance/proposals/gov_action14lefp8upwhhq92xph7t075txshf9huxxh9d2ey05ml2n5hqgvlxqqp92kfl/withdrawals',
      // parameter_change
      'governance/proposals/0ecc74fe26532cec1ab9a299f082afc436afc888ca2dc0fc6acda431c52dc60d/0/withdrawals',
      // an index the proposing tx never used
      'governance/proposals/191398f38ef05515ddca265020d607fbb85c5651813f2429b38160fd491d9f8f/9/withdrawals',
      // a proposal nobody made
      'governance/proposals/0000000000000000000000000000000000000000000000000000000000000000/0/withdrawals',
      'governance/proposals/gov_action1zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zygsq6dmejn/withdrawals',
      // not a transaction hash at all
      'governance/proposals/not-a-tx-hash/0/withdrawals',
    ],
    response: [],
  },
  {
    id: 'governance-proposal-withdrawals-malformed-cert-index_145f71dacad2',
    testName: 'governance proposal withdrawals - malformed cert_index',
    endpoints: [
      'governance/proposals/191398f38ef05515ddca265020d607fbb85c5651813f2429b38160fd491d9f8f/x/withdrawals',
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
