import { getPaginationFixtures } from '../../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'governance/dreps/drep1lk47t6ngg76h2w3jknz8kkauzn8vh69vwqev4etgy22sylf2f6e/votes',
);

export default [
  ...paginationFixtures,
  {
    id: 'governance-drep-votes_c68573a533ce',
    testName: 'governance drep votes',

    endpoints: [
      'governance/dreps/drep1lk47t6ngg76h2w3jknz8kkauzn8vh69vwqev4etgy22sylf2f6e/votes',
      'governance/dreps/drep1yt76he02dprm2af6x26vg76mhs2vajlg43cr9jh9dq3f2qs68ts3s/votes', // CIP129 id
    ],

    response: [
      {
        tx_hash: 'be71b7514a70044e0d890a85ed5ee5620cb35150db66d6c7f455ac29635f6ec1',
        cert_index: 0,
        vote: 'yes',
      },
      {
        tx_hash: 'f5191ede01371d62378c21bc16472315b97630fab3692ab125a2bd0612e3c53a',
        cert_index: 0,
        vote: 'yes',
      },
      {
        cert_index: 0,
        tx_hash: '0a5e373519d59d586fd91ff0e3e4d2277d37ee503c9f311bf8e63537351b69e9',
        vote: 'yes',
      },
      {
        cert_index: 0,
        tx_hash: 'bdb70039f06e30f01948e50a877794dec7a589ee022e867083c3c69c32328bf4',
        vote: 'no',
      },
    ],
  },
  {
    id: 'governance-drep-always-no-confidence-votes_8448e67e592c',
    testName: 'governance drep_always_no_confidence votes',
    endpoints: ['governance/dreps/drep_always_no_confidence/votes'],
    response: [],
  },
  {
    id: 'governance-drep-always-abstain-votes_a2b741ae9ba6',
    testName: 'governance drep_always_abstain votes',
    endpoints: ['governance/dreps/drep_always_abstain/votes'],
    response: [],
  },
];
