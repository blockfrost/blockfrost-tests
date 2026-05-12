import { getPaginationFixtures } from '../../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'governance/committee/cc_hot1qdjt7zpx7a8d76y29r4tml9aryff9m6pegz84lttspujfdcrkr62j/votes',
);

const VOTES_FOR_MEMBER = [
  {
    tx_hash: '658e603f81285b12a01d32628da1cb1778cc0dedcc03cd861414181567abea83',
    voter_hot_id: 'cc_hot1qdjt7zpx7a8d76y29r4tml9aryff9m6pegz84lttspujfdcrkr62j',
    proposal_id: 'gov_action1u008nt84f5tssj2m9zt7qfw9vh07kt7ukmy92u6ufrlx4v8uhe9qq7qtkgd',
    proposal_tx_hash: 'e3de79acf54d1708495b2897e025c565dfeb2fdcb6c855735c48fe6ab0fcbe4a',
    proposal_cert_index: 0,
    governance_type: 'info_action',
    vote: 'abstain',
    metadata_url:
      'https://raw.githubusercontent.com/carloslodelar/proposals/refs/heads/main/voteABSTAIN.jsonld',
    metadata_hash: '415fc89f163c97e8a7f3c876be75f4d7782db23ea0f2c93527c8a81624465703',
    block_height: 2611734,
    block_time: 1729881491,
  },
  {
    tx_hash: '9bcfcd9b446613503c9e1ec4cf59ac44416a9adedb7fe66549c4b5789e0ebf96',
    voter_hot_id: 'cc_hot1qdjt7zpx7a8d76y29r4tml9aryff9m6pegz84lttspujfdcrkr62j',
    proposal_id: 'gov_action1u008nt84f5tssj2m9zt7qfw9vh07kt7ukmy92u6ufrlx4v8uhe9qq7qtkgd',
    proposal_tx_hash: 'e3de79acf54d1708495b2897e025c565dfeb2fdcb6c855735c48fe6ab0fcbe4a',
    proposal_cert_index: 0,
    governance_type: 'info_action',
    vote: 'no',
    metadata_url:
      'https://raw.githubusercontent.com/carloslodelar/proposals/refs/heads/main/voteNO.jsonld',
    metadata_hash: '249847d032a3472ed4db53819434fc6ebd936f918a5a18345f82e7bcaaaa5c1f',
    block_height: 2611744,
    block_time: 1729881707,
  },
  {
    tx_hash: 'e325e5de1c43673f50d35f3d2fda24c83473a4fbf9576c5f863dead0096fe218',
    voter_hot_id: 'cc_hot1qdjt7zpx7a8d76y29r4tml9aryff9m6pegz84lttspujfdcrkr62j',
    proposal_id: 'gov_action1u008nt84f5tssj2m9zt7qfw9vh07kt7ukmy92u6ufrlx4v8uhe9qq7qtkgd',
    proposal_tx_hash: 'e3de79acf54d1708495b2897e025c565dfeb2fdcb6c855735c48fe6ab0fcbe4a',
    proposal_cert_index: 0,
    governance_type: 'info_action',
    vote: 'abstain',
    metadata_url:
      'https://raw.githubusercontent.com/carloslodelar/proposals/refs/heads/main/voteABSTAIN.jsonld',
    metadata_hash: '415fc89f163c97e8a7f3c876be75f4d7782db23ea0f2c93527c8a81624465703',
    block_height: 2611774,
    block_time: 1729882716,
  },
];

export default [
  ...paginationFixtures,
  {
    id: 'governance-committee-cc-hot-votes_b6a0eb7321ce',
    testName: 'governance/committee/:cc_hot/votes - 3 oldest votes by hot key',
    endpoints: [
      'governance/committee/cc_hot1qdjt7zpx7a8d76y29r4tml9aryff9m6pegz84lttspujfdcrkr62j/votes?count=3&page=1&order=asc',
    ],
    response: VOTES_FOR_MEMBER,
  },
  {
    id: 'governance-committee-cc-cold-votes_47193ade2f01',
    testName:
      'governance/committee/:cc_cold/votes - returns union across hot keys (no rotation: equal to hot result)',
    endpoints: [
      'governance/committee/cc_cold1z0leh2lj8lhn748v9yfjcpaguguq04anjkc58mxclaulf3cmxjf0t/votes?count=3&page=1&order=asc',
    ],
    response: VOTES_FOR_MEMBER,
  },
  {
    id: 'governance-committee-cc-id-votes-bad-prefix_e4c1f0a5793b',
    testName: 'governance/committee/:cc_id/votes - non-CC prefix (drep1...) returns 400',
    endpoints: [
      'governance/committee/drep1rphr974gpgngzqujlknd2kw8a4rjrfjuu8yafme7rjrmg443jff/votes',
    ],
    response: {
      status_code: 400,
      error: 'Bad Request',
      message: 'Invalid or malformed cc credential id.',
    },
  },
  {
    id: 'governance-committee-cc-id-votes-malformed_a39b057e2614',
    testName: 'governance/committee/:cc_id/votes - malformed bech32 returns 400',
    endpoints: ['governance/committee/cc_hot1deadbeef/votes'],
    response: {
      status_code: 400,
      error: 'Bad Request',
      message: 'Invalid or malformed cc credential id.',
    },
  },
];
