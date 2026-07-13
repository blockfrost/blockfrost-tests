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
        proposal_id: 'gov_action1uc03287wl85eml6uwp0c6h0p3zgl35we945laa0lvzxjc2d8cyesq4whp09',
        proposal_tx_hash: 'e61f151fcef9e99dff5c705f8d5de18891f8d1d92d69fef5ff608d2c29a7c133',
        proposal_cert_index: 0,
        vote: 'yes',
      },
      {
        tx_hash: 'f5191ede01371d62378c21bc16472315b97630fab3692ab125a2bd0612e3c53a',
        cert_index: 0,
        proposal_id: 'gov_action12z2j4sglcs6e4e9pnprwmhmu7gq6gdd6cdpf6kc7pxh78xahynyqqhf0dzn',
        proposal_tx_hash: '50952ac11fc4359ae4a19846eddf7cf201a435bac3429d5b1e09afe39bb724c8',
        proposal_cert_index: 0,
        vote: 'yes',
      },
      {
        cert_index: 0,
        proposal_id: 'gov_action1azejymxc2966pq0gywjpeq23dc9hp94dw8689fkpjdjda8d4n2csqm2yxdd',
        proposal_tx_hash: 'e8b3226cd85175a081e823a41c81516e0b7096ad71f472a6c19364de9db59ab1',
        proposal_cert_index: 0,
        tx_hash: '0a5e373519d59d586fd91ff0e3e4d2277d37ee503c9f311bf8e63537351b69e9',
        vote: 'yes',
      },
      {
        cert_index: 0,
        proposal_id: 'gov_action12cfdf8m6cm7wrtsh3d6z59m2wjffwljnnd6qdavuet07mxyurw8qqcp6l5y',
        proposal_tx_hash: '5612d49f7ac6fce1ae178b742a176a7492977e539b7406f59ccadfed989c1b8e',
        proposal_cert_index: 0,
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
