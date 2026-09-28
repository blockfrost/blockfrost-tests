import { getPaginationFixtures } from '../../../index.js';
import { error_400_pools, error_404 } from '../../errors/index.js';

// pool1f4rs6…xl6v retired in epoch 565, so its three votes can never grow or
// reorder. Rows follow the order the votes reached the chain; tx_hash is the
// voting tx and cert_index the position of the vote inside that tx.
const RETIRED_POOL_VOTES = [
  {
    tx_hash: '8e18a32a24c2895adfe3d556b8e859ac37e62b38f6e2a530ba0462f7b91221d8',
    cert_index: 0,
    vote: 'no',
  },
  {
    tx_hash: '1e3bb953edf2c07e28d324743e9f98b0c5bfe7e7056fad21b185e74ab9b37d19',
    cert_index: 0,
    vote: 'yes',
  },
  {
    tx_hash: '78dbfeabbfc708d60eeddcddc4e2edd4d8251edda0598b91ffe83b4f10e3c25f',
    cert_index: 0,
    vote: 'yes',
  },
];

// pool18pnja…zq7g retired in epoch 656. Its second tx votes on two proposals,
// and cert_index counts the votes of the pool inside that tx in the order of
// their governance action ids.
const TWO_VOTES_IN_ONE_TX = [
  {
    tx_hash: 'd49328f672108a0ccf6c965b54c179f8b114eca43b7ce53b31ce5250ba58476e',
    cert_index: 0,
    vote: 'yes',
  },
  {
    tx_hash: '98930fa509a2f1105549731f588b7111c692555a155eb460a180c80c637dd90b',
    cert_index: 0,
    vote: 'abstain',
  },
  {
    tx_hash: '98930fa509a2f1105549731f588b7111c692555a155eb460a180c80c637dd90b',
    cert_index: 1,
    vote: 'yes',
  },
];

const paginationFixtures = getPaginationFixtures(
  'pools/pool1f4rs6v0cpsqa09ueddp6hhl8xwdwtdqglvcuce26srxdwmzxl6v/votes',
);

export default [
  ...paginationFixtures,
  {
    id: 'pools-pool-id-votes-retired-pool-with-a-closed-vote-history_86ba315bb6dd',
    testName: 'pools/:pool_id/votes - retired pool with a closed vote history',
    endpoints: [
      'pools/pool1f4rs6v0cpsqa09ueddp6hhl8xwdwtdqglvcuce26srxdwmzxl6v/votes',
      'pools/4d470d31f80c01d797996b43abdfe7339ae5b408fb31cc655a80ccd7/votes',
    ],
    response: RETIRED_POOL_VOTES,
  },
  {
    id: 'pools-pool-id-votes-desc_5267a39dccf4',
    testName: 'pools/:pool_id/votes - desc',
    endpoints: [
      'pools/pool1f4rs6v0cpsqa09ueddp6hhl8xwdwtdqglvcuce26srxdwmzxl6v/votes?order=desc',
      'pools/4d470d31f80c01d797996b43abdfe7339ae5b408fb31cc655a80ccd7/votes?order=desc',
    ],
    response: [...RETIRED_POOL_VOTES].reverse(),
  },
  {
    id: 'pools-pool-id-votes-first-page_b5cda77a57ec',
    testName: 'pools/:pool_id/votes - first page',
    endpoints: ['pools/pool1f4rs6v0cpsqa09ueddp6hhl8xwdwtdqglvcuce26srxdwmzxl6v/votes?count=2'],
    response: RETIRED_POOL_VOTES.slice(0, 2),
  },
  {
    id: 'pools-pool-id-votes-second-page_c3d3ff6cd27f',
    testName: 'pools/:pool_id/votes - second page',
    endpoints: [
      'pools/pool1f4rs6v0cpsqa09ueddp6hhl8xwdwtdqglvcuce26srxdwmzxl6v/votes?count=2&page=2',
    ],
    response: RETIRED_POOL_VOTES.slice(2),
  },
  {
    id: 'pools-pool-id-votes-page-past-the-end_1a47671bf94e',
    testName: 'pools/:pool_id/votes - page past the end',
    endpoints: ['pools/pool1f4rs6v0cpsqa09ueddp6hhl8xwdwtdqglvcuce26srxdwmzxl6v/votes?page=2'],
    response: [],
  },
  {
    id: 'pools-pool-id-votes-two-votes-in-one-tx_092dc161100a',
    testName: 'pools/:pool_id/votes - two votes in one tx',
    endpoints: [
      'pools/pool18pnja3z8vfkw3sj578xetj3ujhyp2vmljezjg5es290awqmzq7g/votes?count=3',
      'pools/38672ec447626ce8c254f1cd95ca3c95c815337f9645245330515fd7/votes?count=3',
    ],
    response: TWO_VOTES_IN_ONE_TX,
  },
  {
    // desc reverses the votes inside the tx as well.
    id: 'pools-pool-id-votes-two-votes-in-one-tx-desc_53ab023c106c',
    testName: 'pools/:pool_id/votes - two votes in one tx, desc',
    endpoints: [
      'pools/pool18pnja3z8vfkw3sj578xetj3ujhyp2vmljezjg5es290awqmzq7g/votes?order=desc',
      'pools/38672ec447626ce8c254f1cd95ca3c95c815337f9645245330515fd7/votes?order=desc',
    ],
    response: [...TWO_VOTES_IN_ONE_TX].reverse(),
  },
  // Active pools can still vote, so only the oldest rows (ascending, with a
  // count) are pinned: a new vote lands at the end and leaves them untouched.
  {
    id: 'pools-pool-id-votes-best-pool-first-votes_74389a599d18',
    testName: 'pools/:pool_id/votes - best pool first votes',
    endpoints: [
      'pools/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy/votes?count=2',
      'pools/0f292fcaa02b8b2f9b3c8f9fd8e0bb21abedb692a6d5058df3ef2735/votes?count=2',
    ],
    response: [
      {
        tx_hash: '4d410af17de522fe019b2f66daf5e5f3875d603cb6ee3e4920e3ba511179f282',
        cert_index: 0,
        vote: 'yes',
      },
      {
        tx_hash: 'fd1b59ce346fc335a4847b385bb314123c9eef98ed5d101eb5f7323d0f882115',
        cert_index: 0,
        vote: 'yes',
      },
    ],
  },
  // The last three rows of this page come from the txs at positions 4, 5 and 6
  // of block 13778740. They follow the order of the txs in the block, not the
  // order of their hashes.
  {
    id: 'pools-pool-id-votes-votes-from-three-txs-of-one-block_58ec87fee7e5',
    testName: 'pools/:pool_id/votes - votes from three txs of one block',
    endpoints: [
      'pools/pool13hxlxd6qa68fmfhrvvmasa0mjg30tj9p5v2lmgmgsmrp2rgzkfp/votes?count=5&page=2',
      'pools/8dcdf33740ee8e9da6e36337d875fb9222f5c8a1a315fda36886c615/votes?count=5&page=2',
    ],
    response: [
      {
        tx_hash: 'd9e0b11a31f9caf794a687901bc1075bd8a82c0537f4ee859d43a22d20647e81',
        cert_index: 0,
        vote: 'abstain',
      },
      {
        tx_hash: 'eeddd600a52c6ad1e4cef87e263b78c4d7a1c126047f9a72d08f6ef742d21448',
        cert_index: 0,
        vote: 'yes',
      },
      {
        tx_hash: 'cac3881e0c145b47bf7949800c86b5c11dbf2aab39f844116287bc634a252f73',
        cert_index: 0,
        vote: 'no',
      },
      {
        tx_hash: 'a36fec4c7ebb3a64aa8f93f6ba1771366df4b1df07d2b503e7de7cf41aa132ed',
        cert_index: 0,
        vote: 'no',
      },
      {
        tx_hash: '3b44e1084178d214e2b661d0f00d4cce3dc859ac9c8dd578f42ea2a8fd7b264a',
        cert_index: 0,
        vote: 'no',
      },
    ],
  },
  // 0b19476e…79b9 got two abstain votes from the same pool in two txs; the
  // listing keeps both instead of collapsing them to the latest one.
  {
    id: 'pools-pool-id-votes-pool-that-voted-twice-on-one-proposal_0b04a8349091',
    testName: 'pools/:pool_id/votes - pool that voted twice on one proposal',
    endpoints: [
      'pools/pool1mt8sdg37f2h3rypyuc77k7vxrjshtvjw04zdjlae9vdzyt9uu34/votes?count=4',
      'pools/dacf06a23e4aaf119024e63deb79861ca175b24e7d44d97fb92b1a22/votes?count=4',
    ],
    response: [
      {
        tx_hash: '7925c2e6848235f18440249b3b4ab0111dd6c56fdcc518ba6fd8f02e37e39d24',
        cert_index: 0,
        vote: 'yes',
      },
      {
        tx_hash: '94fc905a4044b57ad7a62d6ff2df56ab35c565fad7be2f2a4d38ea976b12db11',
        cert_index: 0,
        vote: 'abstain',
      },
      {
        tx_hash: '55e68c6143376436692fea3b87382a596937544f176c8a2aa827124e24e0fd1e',
        cert_index: 0,
        vote: 'abstain',
      },
      {
        tx_hash: '31f8b98efd8192c68ed715f73689f0fddf2af4c4873abd36abd55aa83c7377e6',
        cert_index: 0,
        vote: 'abstain',
      },
    ],
  },
  {
    // Retired before Conway, so it never voted and never will.
    id: 'pools-pool-id-votes-pool-without-votes_deb8450ff878',
    testName: 'pools/:pool_id/votes - pool without votes',
    endpoints: [
      'pools/pool1kchver88u3kygsak8wgll7htr8uxn5v35lfrsyy842nkscrzyvj/votes',
      'pools/b62ecc8ce7e46c4443b63b91fffaeb19f869d191a7d2381087aaa768/votes',
    ],
    response: [],
  },
  {
    id: 'pools-pool-id-votes-valid-non-existing-pool_024d66629e67',
    testName: 'pools/:pool_id/votes - valid non-existing pool',
    endpoints: [
      'pools/pool1y6chk7x7fup4ms9leesdr57r4qy9cwxuee0msan72x976a6u0nc/votes',
      'pools/0000000000000000000000000000000000000000000000000000dead/votes',
    ],
    response: error_404,
  },
  {
    id: 'pools-pool-id-votes-invalid-pool_70830e987a86',
    testName: 'pools/:pool_id/votes - invalid pool',
    endpoints: ['pools/pool1kek/votes'],
    response: error_400_pools,
  },
];
