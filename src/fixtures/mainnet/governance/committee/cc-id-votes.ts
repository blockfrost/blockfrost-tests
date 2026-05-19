import { getPaginationFixtures } from '../../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'governance/committee/cc_hot1qf5tkz6zwcpplq3kgpt2486d8za943vmymqkdjl249qgw3s2y5r9y/votes',
);

const VOTES_FOR_MEMBER = [
  {
    tx_hash: 'd284810dfbb0f064bc31f3f641262adb785e2ec95af7e71b549b4ef3797849d7',
    voter_hot_id: 'cc_hot1qf5tkz6zwcpplq3kgpt2486d8za943vmymqkdjl249qgw3s2y5r9y',
    proposal_id: 'gov_action1jr84r96lnsvu9yd6c0jhxe9gj5r7vnd2pgkntc6klplxdpyzz4tqqc9uldx',
    proposal_tx_hash: '90cf51975f9c19c291bac3e57364a89507e64daa0a2d35e356f87e6684821556',
    proposal_index: 0,
    governance_type: 'info_action',
    vote: 'yes',
    // vote without an anchor: metadata_url and metadata_hash both null
    metadata_url: null,
    metadata_hash: null,
    block_height: 12472230,
    block_time: 1759545784,
  },
  {
    tx_hash: '1e7ec2888d4d85166c3721386c50cabbc06ae5d874fe5784d0a04255d77b034a',
    voter_hot_id: 'cc_hot1qf5tkz6zwcpplq3kgpt2486d8za943vmymqkdjl249qgw3s2y5r9y',
    proposal_id: 'gov_action1ezp0r9rgf4njx93p9uq7l3kjs9m739jm0ntf26vplcmucec4jc0qqxjlfrc',
    proposal_tx_hash: 'c882f194684d672316212f01efc6d28177e8965b7cd6956981fe37cc6715961e',
    proposal_index: 0,
    governance_type: 'new_constitution',
    vote: 'yes',
    metadata_url: 'ipfs://QmdqsJYuTMkW9Sxyj8RZNrWKW4A14ZWoWUzB9Y2B35vgFx',
    metadata_hash: 'dad8f03f9ddade6814969734345ff6731d4f05a0469f7a62be595ee37fccc0a8',
    block_height: 12524546,
    block_time: 1760598710,
  },
  {
    tx_hash: '1e7ec2888d4d85166c3721386c50cabbc06ae5d874fe5784d0a04255d77b034a',
    voter_hot_id: 'cc_hot1qf5tkz6zwcpplq3kgpt2486d8za943vmymqkdjl249qgw3s2y5r9y',
    proposal_id: 'gov_action1u4jrcvlkppjzuv5j9z5ksacwtvv77h6glu0knpcjut8gvjjfu0cqqt3alsy',
    proposal_tx_hash: 'e5643c33f608642e329228a968770e5b19ef5f48ff1f698712e2ce864a49e3f0',
    proposal_index: 0,
    governance_type: 'info_action',
    vote: 'yes',
    metadata_url: 'ipfs://QmYnZvW3r4D7UUJDJWkmHNzkpvsoJjwrwRTSFGHXcjNKmB',
    metadata_hash: '788f741fe307112d917db5a228a6804772a036193fdcc0dae4d29e8e71bc27fb',
    block_height: 12524546,
    block_time: 1760598710,
  },
];

export default [
  ...paginationFixtures,
  {
    id: 'governance-committee-cc-hot-votes_4f12a89bd550',
    testName:
      'governance/committee/:cc_hot/votes - 3 oldest votes by hot key (mix anchored/unanchored)',
    endpoints: [
      'governance/committee/cc_hot1qf5tkz6zwcpplq3kgpt2486d8za943vmymqkdjl249qgw3s2y5r9y/votes?count=3&page=1&order=asc',
    ],
    response: VOTES_FOR_MEMBER,
  },
  {
    id: 'governance-committee-cc-cold-votes_a3d27e601f88',
    testName:
      'governance/committee/:cc_cold/votes - returns union across hot keys (no rotation: equal to hot result)',
    endpoints: [
      'governance/committee/cc_cold1zgf5jdusmxcrfqapu8ngf6j04u0wfzjc7sp9wnnlyfr0f4q68as9w/votes?count=3&page=1&order=asc',
    ],
    response: VOTES_FOR_MEMBER,
  },
  {
    id: 'governance-committee-cc-id-votes-bad-prefix_71f9e23a8c40',
    testName: 'governance/committee/:cc_id/votes - non-CC prefix (drep1...) returns 400',
    endpoints: [
      'governance/committee/drep1000002hneyj7jl9y95m0zxdsg6dp9n9y59lvlm7xjqp4qh2jx7h/votes',
    ],
    response: {
      status_code: 400,
      error: 'Bad Request',
      message: 'Invalid or malformed cc credential id.',
    },
  },
  {
    id: 'governance-committee-cc-id-votes-malformed_e6b88135cd02',
    testName: 'governance/committee/:cc_id/votes - malformed bech32 returns 400',
    endpoints: ['governance/committee/cc_hot1deadbeef/votes'],
    response: {
      status_code: 400,
      error: 'Bad Request',
      message: 'Invalid or malformed cc credential id.',
    },
  },
];
