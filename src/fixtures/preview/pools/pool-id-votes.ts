import { getPaginationFixtures } from '../../../index.js';
import { error_400_pools, error_404 } from '../../errors/index.js';

// Active pools can still vote, so only the oldest rows (ascending, with a
// count) are pinned: a new vote lands at the end and leaves them untouched.
// Rows follow the order the votes reached the chain; tx_hash is the voting tx
// and cert_index the position of the vote inside that tx.
const POOL_VOTES = [
  {
    tx_hash: 'dd44abf1ccbc1325af599fb32c302be9b345140ea5e20ca517e257e8cb9dd1e1',
    cert_index: 0,
    vote: 'no',
  },
  {
    tx_hash: '3d854f3779239fd1b3c41a4cc98fb2e40d301d57c6c9a420add33ec22cc25514',
    cert_index: 0,
    vote: 'yes',
  },
  {
    tx_hash: 'a77b8cb4428a01e7b4430628f9c9d68ca48c8b0923c3287a2751de495c0a0de8',
    cert_index: 0,
    vote: 'abstain',
  },
  {
    tx_hash: 'ad35f8ad7b386086dc9354844c52d5b397f7e571b41d2321f1a631e6d9493963',
    cert_index: 0,
    vote: 'no',
  },
];

const paginationFixtures = getPaginationFixtures(
  'pools/pool1mfc42za8tj74zc66ez3slwtq4mumdl7yrylaxajd5xugujmhd0c/votes',
);

export default [
  ...paginationFixtures,
  {
    id: 'pools-pool-id-votes-all-three-vote-kinds_d711f9e4debd',
    testName: 'pools/:pool_id/votes - all three vote kinds',
    endpoints: [
      'pools/pool1mfc42za8tj74zc66ez3slwtq4mumdl7yrylaxajd5xugujmhd0c/votes?count=4',
      'pools/da71550ba75cbd51635ac8a30fb960aef9b6ffc4193fd3764da1b88e/votes?count=4',
    ],
    response: POOL_VOTES,
  },
  {
    id: 'pools-pool-id-votes-first-page_410c9348df68',
    testName: 'pools/:pool_id/votes - first page',
    endpoints: ['pools/pool1mfc42za8tj74zc66ez3slwtq4mumdl7yrylaxajd5xugujmhd0c/votes?count=2'],
    response: POOL_VOTES.slice(0, 2),
  },
  {
    id: 'pools-pool-id-votes-second-page_cc5598b4e229',
    testName: 'pools/:pool_id/votes - second page',
    endpoints: [
      'pools/pool1mfc42za8tj74zc66ez3slwtq4mumdl7yrylaxajd5xugujmhd0c/votes?count=2&page=2',
    ],
    response: POOL_VOTES.slice(2, 4),
  },
  {
    // Retired in epoch 451, so it never voted and never will.
    id: 'pools-pool-id-votes-pool-without-votes_5fd1735e8913',
    testName: 'pools/:pool_id/votes - pool without votes',
    endpoints: [
      'pools/pool1076ljkzg2j6xuph5s62wnauvq9h3y2yndsvjm2439ewh64mu2nf/votes',
      'pools/7fb5f9584854b46e06f48694e9f78c016f1228936c192daab12e5d7d/votes',
      'pools/pool1076ljkzg2j6xuph5s62wnauvq9h3y2yndsvjm2439ewh64mu2nf/votes?order=desc',
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
