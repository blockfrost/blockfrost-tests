import { getPaginationFixtures } from '../../../../index.js';
import { error_400_cert_index, error_400_gov_action_id } from '../../../errors/index.js';

// 60ed6ab4…ec45#0 pays out to five reward accounts, so the listing has an
// order to get wrong. The rows come back in the order of the proposal's own
// withdrawals map (the order db-sync stored them in), not by amount and not
// by stake address.
const MULTI_WITHDRAWALS = [
  {
    stake_address: 'stake17xrqac8khkprtpp2jz90mpkujjwye8dt6a9sjewrvjudx9ggg4u5y',
    amount: '100000000000',
  },
  {
    stake_address: 'stake17xrh74lqhhxgzelfsn0wq5kcm4e5dmluprlcpg5mq30p5yqhgk7k8',
    amount: '500000000000',
  },
  {
    stake_address: 'stake17xd74ehu0l4d5mx0sfz4fd0r5jvw4v2jqkkfyjxrlwvnkhccrqj9l',
    amount: '300000000000',
  },
  {
    stake_address: 'stake17xnev6rc25xwz8kg4qae8lq6dcg964z00py5gqgxd387pncv8fq8g',
    amount: '300000000000',
  },
  {
    stake_address: 'stake178jztxzwynajcp4dva5gy9udmmnwg7ueffvf4c7hpjqhc7gtj5nzz',
    amount: '300000000000',
  },
];

const paginationFixtures = getPaginationFixtures(
  'governance/proposals/60ed6ab43c840ff888a8af30a1ed27b41e9f4a91a89822b2b63d1bfc52aeec45/0/withdrawals',
);

export default [
  ...paginationFixtures,
  {
    id: 'governance-proposal-withdrawals_d8ef6cd3efd4',
    testName: 'governance proposal withdrawals',
    endpoints: [
      'governance/proposals/60ed6ab43c840ff888a8af30a1ed27b41e9f4a91a89822b2b63d1bfc52aeec45/0/withdrawals',
      'governance/proposals/gov_action1vrkk4dpuss8l3z9g4uc2rmf8ks0f7j534zvz9v4k85dlc54wa3zsqq68rx0/withdrawals',
    ],
    response: MULTI_WITHDRAWALS,
  },
  {
    id: 'governance-proposal-withdrawals-desc_f1ead3e44403',
    testName: 'governance proposal withdrawals - desc',
    endpoints: [
      'governance/proposals/60ed6ab43c840ff888a8af30a1ed27b41e9f4a91a89822b2b63d1bfc52aeec45/0/withdrawals?order=desc',
      'governance/proposals/gov_action1vrkk4dpuss8l3z9g4uc2rmf8ks0f7j534zvz9v4k85dlc54wa3zsqq68rx0/withdrawals?order=desc',
    ],
    response: [...MULTI_WITHDRAWALS].reverse(),
  },
  {
    id: 'governance-proposal-withdrawals-first-page_fb1f8f873baf',
    testName: 'governance proposal withdrawals - first page',
    endpoints: [
      'governance/proposals/60ed6ab43c840ff888a8af30a1ed27b41e9f4a91a89822b2b63d1bfc52aeec45/0/withdrawals?count=2',
    ],
    response: MULTI_WITHDRAWALS.slice(0, 2),
  },
  {
    id: 'governance-proposal-withdrawals-second-page_439520a2b021',
    testName: 'governance proposal withdrawals - second page',
    endpoints: [
      'governance/proposals/60ed6ab43c840ff888a8af30a1ed27b41e9f4a91a89822b2b63d1bfc52aeec45/0/withdrawals?count=2&page=2',
    ],
    response: MULTI_WITHDRAWALS.slice(2, 4),
  },
  {
    id: 'governance-proposal-withdrawals-last-page_02d1fb031178',
    testName: 'governance proposal withdrawals - last page',
    endpoints: [
      'governance/proposals/60ed6ab43c840ff888a8af30a1ed27b41e9f4a91a89822b2b63d1bfc52aeec45/0/withdrawals?count=2&page=3',
    ],
    response: MULTI_WITHDRAWALS.slice(4),
  },
  {
    id: 'governance-proposal-withdrawals-page-past-the-end_123beeeae7a0',
    testName: 'governance proposal withdrawals - page past the end',
    endpoints: [
      'governance/proposals/60ed6ab43c840ff888a8af30a1ed27b41e9f4a91a89822b2b63d1bfc52aeec45/0/withdrawals?page=5',
    ],
    response: [],
  },
  {
    id: 'governance-proposal-withdrawals-second-treasury-withdrawals-proposal_512563bb5d6d',
    testName: 'governance proposal withdrawals - second treasury_withdrawals proposal',
    endpoints: [
      'governance/proposals/2f2fc2539dde550d3c83bea67c11b03861407976bbe8d07c5b0e124aa8a12baa/0/withdrawals',
      'governance/proposals/gov_action19uhuy5uame2s60yrh6n8cyds8ps5q7tkh05dqlzmpcfy429p9w4qq5ll3g0/withdrawals',
    ],
    response: [
      {
        stake_address: 'stake17yezq8wpaqnssdjvd3p220uf7e6nzjae44w6yu625y965rg8en39a',
        amount: '1450000000000',
      },
      {
        stake_address: 'stake179r8gmryz5wrwvlxm6g4s4u9ssdz656z95hwjnk9rgamedqpl4qd7',
        amount: '1160000000000',
      },
      {
        stake_address: 'stake1790mk0jjjhppr36ethwj8kewpgyrxyc7q6qucl4gqru96dqh6k4q9',
        amount: '2575000000000',
      },
      {
        stake_address: 'stake178ndhlcfy30t38z0tql64fpg8ply93r37xrgvdagfpsz5nsttyvhp',
        amount: '4057000000000',
      },
      {
        stake_address: 'stake178a5gxtm0ynzw80f80rsps3a5dwem43swsekpnctd0wuwxs0hc220',
        amount: '900000000000',
      },
    ],
  },
  {
    id: 'governance-proposal-withdrawals-single-withdrawal_332bc3183387',
    testName: 'governance proposal withdrawals - single withdrawal',
    endpoints: [
      'governance/proposals/3cf29192a0ee1a77985054072edcdb566ac14707730637c4635d8fb6813cb4c9/0/withdrawals',
      'governance/proposals/gov_action18nefry4qacd80xzs2srjahxm2e4vz3c8wvrr03rrtk8mdqfuknysq66459t/withdrawals',
    ],
    response: [
      {
        stake_address: 'stake17xzc8pt7fgf0lc0x7eq6z7z6puhsxmzktna7dluahrj6g6ghh5qjr',
        amount: '45217000000',
      },
    ],
  },
  // Nothing here is a 404: the listing is a join against the withdrawals of a
  // proposal, so an action that asks for none, a proposal nobody made and a
  // hash that is not a hash all come back as the same empty array.
  {
    id: 'governance-proposal-withdrawals-proposal-without-withdrawals_506c0a5abe6d',
    testName: 'governance proposal withdrawals - proposal without withdrawals',
    endpoints: [
      // info_action
      'governance/proposals/15f82a365bdee483a4b03873a40d3829cc88c048ff3703e11bd01dd9e035c916/0/withdrawals',
      'governance/proposals/gov_action1zhuz5djmmmjg8f9s8pe6grfc98xg3szglums8cgm6qwancp4eytqqmpu0pr/withdrawals',
      // parameter_change
      'governance/proposals/51f495aa23f4b3b3aa90afde4a0e67823bb7ac4ac65f5ffbb138373b863f2f74/0/withdrawals',
      // an index the proposing tx never used
      'governance/proposals/60ed6ab43c840ff888a8af30a1ed27b41e9f4a91a89822b2b63d1bfc52aeec45/9/withdrawals',
      // a proposal nobody made
      'governance/proposals/0000000000000000000000000000000000000000000000000000000000000000/0/withdrawals',
      'governance/proposals/gov_action1zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zygsq6dmejn/withdrawals',
      // not a transaction hash at all
      'governance/proposals/not-a-tx-hash/0/withdrawals',
    ],
    response: [],
  },
  {
    id: 'governance-proposal-withdrawals-malformed-cert-index_43d7a2dc2a14',
    testName: 'governance proposal withdrawals - malformed cert_index',
    endpoints: [
      'governance/proposals/60ed6ab43c840ff888a8af30a1ed27b41e9f4a91a89822b2b63d1bfc52aeec45/x/withdrawals',
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
