import { getPaginationFixtures } from '../../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'governance/committee/cc_hot1q036f3qavavj5xudslrzuhzaw0m73kurv9ceg4qj6yl5p7qf4a3gz/votes',
);

const VOTES_FOR_MEMBER = [
  {
    tx_hash: '48b7ab4a9c5f5d3c1f954c9e1a56dec3d48f1331c1bd8a61759bcc8e17efeb2a',
    voter_hot_id: 'cc_hot1q036f3qavavj5xudslrzuhzaw0m73kurv9ceg4qj6yl5p7qf4a3gz',
    proposal_id: 'gov_action14lefp8upwhhq92xph7t075txshf9huxxh9d2ey05ml2n5hqgvlxqqp92kfl',
    proposal_tx_hash: 'aff2909f8175ee02a8c1bf96ff516685d25bf0c6b95aac91f4dfd53a5c0867cc',
    proposal_cert_index: 0,
    governance_type: 'info_action',
    vote: 'yes',
    metadata_url: 'https://hornan7.github.io/Vote_Context2.jsonld',
    metadata_hash: '30d5a8af01f9b08511afd3a70d185b05c9b857dc040e586de11fbd534b767cee',
    block_height: 2746866,
    block_time: 1727882230,
  },
  {
    tx_hash: '38727ff2442a42710be13046a7e026f20590035168df0b5ae2f24c53a1044b13',
    voter_hot_id: 'cc_hot1q036f3qavavj5xudslrzuhzaw0m73kurv9ceg4qj6yl5p7qf4a3gz',
    proposal_id: 'gov_action1k5hsy2yw8n5v0et524fz7nkap8qj09m5nckmxgycajlfszmyt4zsqp0n7ft',
    proposal_tx_hash: 'b52f02288e3ce8c7e57455522f4edd09c12797749e2db32098ecbe980b645d45',
    proposal_cert_index: 0,
    governance_type: 'parameter_change',
    vote: 'yes',
    metadata_url: 'https://hornan7.github.io/Vote_Context2.jsonld',
    metadata_hash: '30d5a8af01f9b08511afd3a70d185b05c9b857dc040e586de11fbd534b767cee',
    block_height: 2859952,
    block_time: 1730903059,
  },
  {
    tx_hash: '6b5e9099fe4d16eee0b7c8a30e97eabcce9098555cf146f3be0885b750d8e04d',
    voter_hot_id: 'cc_hot1q036f3qavavj5xudslrzuhzaw0m73kurv9ceg4qj6yl5p7qf4a3gz',
    proposal_id: 'gov_action1a960ajl5ttpcdfmxqh57s3azuhf8cqrlm597vaxt44fcurp4lcqsqqfz6j2',
    proposal_tx_hash: 'e974fecbf45ac386a76605e9e847a2e5d27c007fdd0be674cbad538e0c35fe01',
    proposal_cert_index: 0,
    governance_type: 'parameter_change',
    vote: 'no',
    metadata_url: 'https://hornan7.github.io/Vote_Context2.jsonld',
    metadata_hash: '30d5a8af01f9b08511afd3a70d185b05c9b857dc040e586de11fbd534b767cee',
    block_height: 2859998,
    block_time: 1730904215,
  },
];

export default [
  ...paginationFixtures,
  {
    id: 'governance-committee-cc-hot-votes_3f72e8d915ab',
    testName: 'governance/committee/:cc_hot/votes - 3 oldest votes by hot key',
    endpoints: [
      'governance/committee/cc_hot1q036f3qavavj5xudslrzuhzaw0m73kurv9ceg4qj6yl5p7qf4a3gz/votes?count=3&page=1&order=asc',
    ],
    response: VOTES_FOR_MEMBER,
  },
  {
    id: 'governance-committee-cc-cold-votes_bd1947602ef0',
    testName:
      'governance/committee/:cc_cold/votes - returns union across hot keys (no rotation: equal to hot result)',
    endpoints: [
      'governance/committee/cc_cold1zdgf3h7sm6a8yhad66fpnr7r8m54n7l8umklrddxjhsxucgkudvrr/votes?count=3&page=1&order=asc',
    ],
    response: VOTES_FOR_MEMBER,
  },
  {
    id: 'governance-committee-cc-id-votes-bad-prefix_92e1c44f8a07',
    testName: 'governance/committee/:cc_id/votes - non-CC prefix (drep1...) returns 400',
    endpoints: [
      'governance/committee/drep1wcl0w4np7rxceraptxne67dlaru6w6rchk407uq9nrhquq6gltn/votes',
    ],
    response: {
      status_code: 400,
      error: 'Bad Request',
      message: 'Invalid or malformed cc credential id.',
    },
  },
  {
    id: 'governance-committee-cc-id-votes-malformed_5f3e60a82c1d',
    testName: 'governance/committee/:cc_id/votes - malformed bech32 returns 400',
    endpoints: ['governance/committee/cc_hot1deadbeef/votes'],
    response: {
      status_code: 400,
      error: 'Bad Request',
      message: 'Invalid or malformed cc credential id.',
    },
  },
];
