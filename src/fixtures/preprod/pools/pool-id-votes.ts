import { getPaginationFixtures } from '../../../index.js';
import { error_400_pools, error_404 } from '../../errors/index.js';

// Active pools can still vote, so only the oldest rows (ascending, with a
// count) are pinned: a new vote lands at the end and leaves them untouched.
// Rows follow the order the votes reached the chain; tx_hash is the voting tx
// and cert_index the position of the vote inside that tx.
const POOL_VOTES = [
  {
    tx_hash: '45f18dec1784d3f98f8c5034fa138f5bfb70a89b0396154fc4d45fe5d3ee8957',
    cert_index: 0,
    vote: 'no',
  },
  {
    tx_hash: 'e2eeaf57af3a400ad8e7a68e9b5bb650cd6e7b87db91144529a44d92d834e647',
    cert_index: 0,
    vote: 'no',
  },
  {
    tx_hash: 'd001b058367db5c7138f0c4ca83ba0a620f8c49fd8217e8f833e27daaa848a13',
    cert_index: 0,
    vote: 'yes',
  },
];

const paginationFixtures = getPaginationFixtures(
  'pools/pool1yzwxetclm2l48xzvmnwwf6x48a5qze0nx4t6glz5k8wk50xl006/votes',
);

export default [
  ...paginationFixtures,
  // The first two rows are votes on the same proposal (aff2909f…67cc) from two
  // txs; the listing keeps both instead of collapsing them to the latest one.
  {
    id: 'pools-pool-id-votes-pool-that-voted-twice-on-one-proposal_06da8a9f5412',
    testName: 'pools/:pool_id/votes - pool that voted twice on one proposal',
    endpoints: [
      'pools/pool1yzwxetclm2l48xzvmnwwf6x48a5qze0nx4t6glz5k8wk50xl006/votes?count=3',
      'pools/209c6caf1fdabf53984cdcdce4e8d53f680165f33557a47c54b1dd6a/votes?count=3',
    ],
    response: POOL_VOTES,
  },
  {
    id: 'pools-pool-id-votes-first-page_60b66bbdcc86',
    testName: 'pools/:pool_id/votes - first page',
    endpoints: ['pools/pool1yzwxetclm2l48xzvmnwwf6x48a5qze0nx4t6glz5k8wk50xl006/votes?count=2'],
    response: POOL_VOTES.slice(0, 2),
  },
  {
    id: 'pools-pool-id-votes-second-page_253afffe2ae4',
    testName: 'pools/:pool_id/votes - second page',
    endpoints: [
      'pools/pool1yzwxetclm2l48xzvmnwwf6x48a5qze0nx4t6glz5k8wk50xl006/votes?count=1&page=2',
    ],
    response: POOL_VOTES.slice(1, 2),
  },
  {
    id: 'pools-pool-id-votes-single-vote_2447666fc996',
    testName: 'pools/:pool_id/votes - single vote',
    endpoints: [
      'pools/pool1vw6fr9agt58djrp3w0t0lsn6t329t6eusqxz5ugd9w7ecyedsdv/votes?count=1',
      'pools/63b49197a85d0ed90c3173d6ffc27a5c5455eb3c800c2a710d2bbd9c/votes?count=1',
    ],
    response: [
      {
        tx_hash: '60eb71bb8841d32b60c7a91f06490da212de9ccb43fd7330a1e4b4673d1f6e8a',
        cert_index: 0,
        vote: 'yes',
      },
    ],
  },
  {
    // Retired in epoch 79, long before Conway, so it never voted and never will.
    id: 'pools-pool-id-votes-pool-without-votes_b5816fc80bcd',
    testName: 'pools/:pool_id/votes - pool without votes',
    endpoints: [
      'pools/pool10208t5hc4l4gll3d64d2a8mml5tjgg9k0nsjvxplt046k7pwkvc/votes',
      'pools/7a9e75d2f8afea8ffe2dd55aae9f7bfd172420b67ce126183f5bebab/votes',
      'pools/pool10208t5hc4l4gll3d64d2a8mml5tjgg9k0nsjvxplt046k7pwkvc/votes?order=desc',
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
