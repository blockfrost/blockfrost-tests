import { expect } from 'vitest';
import { getPaginationFixtures } from '../../../../index.js';

const paginationFixtures = getPaginationFixtures('governance/committee/votes');

export default [
  ...paginationFixtures,
  {
    id: 'governance-committee-votes-oldest-5-asc_77a3e9b0f218',
    testName: 'governance/committee/votes 5 oldest votes (asc, page=1)',
    endpoints: ['governance/committee/votes?count=5&page=1&order=asc'],
    response: [
      {
        tx_hash: '658e603f81285b12a01d32628da1cb1778cc0dedcc03cd861414181567abea83',
        voter_hot_id: 'cc_hot1qdjt7zpx7a8d76y29r4tml9aryff9m6pegz84lttspujfdcrkr62j',
        proposal_id: 'gov_action1u008nt84f5tssj2m9zt7qfw9vh07kt7ukmy92u6ufrlx4v8uhe9qq7qtkgd',
        proposal_tx_hash: 'e3de79acf54d1708495b2897e025c565dfeb2fdcb6c855735c48fe6ab0fcbe4a',
        proposal_index: 0,
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
        proposal_index: 0,
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
        proposal_index: 0,
        governance_type: 'info_action',
        vote: 'abstain',
        metadata_url:
          'https://raw.githubusercontent.com/carloslodelar/proposals/refs/heads/main/voteABSTAIN.jsonld',
        metadata_hash: '415fc89f163c97e8a7f3c876be75f4d7782db23ea0f2c93527c8a81624465703',
        block_height: 2611774,
        block_time: 1729882716,
      },
      {
        tx_hash: 'c1c763ce13e17a7b04526d05ea87cbc0ac96d81f36196db96c8d96862435773d',
        voter_hot_id: 'cc_hot1qdjt7zpx7a8d76y29r4tml9aryff9m6pegz84lttspujfdcrkr62j',
        proposal_id: 'gov_action1jkhcvzxu02h4cucz2pnt2zdzcywg98efssqf4jfwwpfazglmeetsqypdyqf',
        proposal_tx_hash: '95af8608dc7aaf5c73025066b509a2c11c829f2984009ac92e7053d123fbce57',
        proposal_index: 0,
        governance_type: 'parameter_change',
        vote: 'yes',
        metadata_url:
          'https://raw.githubusercontent.com/carloslodelar/proposals/refs/heads/main/voteYES.jsonld',
        metadata_hash: 'c0f8e190c7527b75c32877dcf198136106ea0b8e8795fda87e18d783646797b5',
        block_height: 2620228,
        block_time: 1730124362,
      },
      {
        tx_hash: 'e3d4a5dda6610f3355fee9e3d5465241824eff381a8bcbb2031eceba033ff0a0',
        voter_hot_id: 'cc_hot1qdjt7zpx7a8d76y29r4tml9aryff9m6pegz84lttspujfdcrkr62j',
        proposal_id: 'gov_action1rarl8newf7gsn03wl6gc9jhqsvr72autml4zz58xjq7y3mw2pw8sqsymael',
        proposal_tx_hash: '1f47f3cf2e4f9109be2efe9182cae08307e5778bdfea2150e6903c48edca0b8f',
        proposal_index: 0,
        governance_type: 'parameter_change',
        vote: 'yes',
        metadata_url:
          'https://raw.githubusercontent.com/carloslodelar/proposals/refs/heads/main/voteYES.jsonld',
        metadata_hash: 'c0f8e190c7527b75c32877dcf198136106ea0b8e8795fda87e18d783646797b5',
        block_height: 2620546,
        block_time: 1730134062,
      },
    ],
  },
  {
    id: 'governance-committee-votes-latest-shape_19e2acaeb700',
    testName: 'governance/committee/votes latest vote shape',
    endpoints: ['governance/committee/votes?count=1&page=1&order=desc'],
    response: [
      {
        tx_hash: expect.stringMatching(/^[0-9a-f]{64}$/),
        voter_hot_id: expect.stringMatching(/^cc_hot1/),
        proposal_id: expect.stringMatching(/^gov_action1/),
        proposal_tx_hash: expect.stringMatching(/^[0-9a-f]{64}$/),
        proposal_index: expect.any(Number),
        governance_type: expect.toBeOneOf([
          'hard_fork_initiation',
          'new_committee',
          'new_constitution',
          'info_action',
          'no_confidence',
          'parameter_change',
          'treasury_withdrawals',
        ]),
        vote: expect.toBeOneOf(['yes', 'no', 'abstain']),
        metadata_url: expect.toBeOneOf([expect.any(String), null]),
        metadata_hash: expect.toBeOneOf([expect.stringMatching(/^[0-9a-f]{64}$/), null]),
        block_height: expect.any(Number),
        block_time: expect.any(Number),
      },
    ],
  },
];
