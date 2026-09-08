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
