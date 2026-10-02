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
  {
    // The only vote of a DRep that deregistered and registered again.
    id: 'governance-drep-votes-re-registered_43d88c54d35a',
    testName: 'governance drep votes re-registered',
    endpoints: [
      'governance/dreps/drep1ar8me9dv5p0tykglpwm2jysn2n33sx2wvgg29jyjwerqszsww5z/votes',
      'governance/dreps/drep1yt5vl0y44js9avjeru9md2gjzd2wxxqefe3ppgkgjfmyvzqgfnp8u/votes', // CIP129 id
    ],
    response: [
      {
        tx_hash: '578066572d2caf7108e35e46e0f8fa97655cf1753aaf1b19ef05abfc921f732a',
        cert_index: 0,
        proposal_id: 'gov_action12c6gg46nxdau90tux9rvvk3sjs9f7tuqm2ztuwypgtaeg80vg8jsq2q53zg',
        proposal_tx_hash: '5634845753337bc2bd7c3146c65a30940a9f2f80da84be388142fb941dec41e5',
        proposal_cert_index: 0,
        vote: 'yes',
      },
    ],
  },
  {
    // Two votes on the same proposal: one before and one after a
    // re-registration.
    id: 'governance-drep-votes-re-registered-revote_4345dc287b52',
    testName: 'governance drep votes re-registered revote',
    endpoints: [
      'governance/dreps/drep1uydtqqqp8pzk6tm3uynejfgrmuqkcva4w2ys89tt4cxkkttjv89/votes',
      'governance/dreps/drep1yts34vqqqyuy2mf0w8sj0xf9q00szmpnk4egjqu4dwhq66cewm6vn/votes', // CIP129 id
    ],
    response: [
      {
        tx_hash: '578066572d2caf7108e35e46e0f8fa97655cf1753aaf1b19ef05abfc921f732a',
        cert_index: 0,
        proposal_id: 'gov_action12c6gg46nxdau90tux9rvvk3sjs9f7tuqm2ztuwypgtaeg80vg8jsq2q53zg',
        proposal_tx_hash: '5634845753337bc2bd7c3146c65a30940a9f2f80da84be388142fb941dec41e5',
        proposal_cert_index: 0,
        vote: 'yes',
      },
      {
        tx_hash: '28bdee792caa6a3b6abfc721d47db511dd8fc288609de1408c48f93b98bba853',
        cert_index: 0,
        proposal_id: 'gov_action12c6gg46nxdau90tux9rvvk3sjs9f7tuqm2ztuwypgtaeg80vg8jsq2q53zg',
        proposal_tx_hash: '5634845753337bc2bd7c3146c65a30940a9f2f80da84be388142fb941dec41e5',
        proposal_cert_index: 0,
        vote: 'yes',
      },
    ],
  },
];
