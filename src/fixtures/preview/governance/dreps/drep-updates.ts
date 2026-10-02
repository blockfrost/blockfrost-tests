import { getPaginationFixtures } from '../../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'governance/dreps/drep1rphr974gpgngzqujlknd2kw8a4rjrfjuu8yafme7rjrmg443jff/updates',
);

export default [
  ...paginationFixtures,
  {
    id: 'governance-drep-updates_9ffe121de192',
    testName: 'governance drep updates',
    endpoints: [
      'governance/dreps/drep_script1rphr974gpgngzqujlknd2kw8a4rjrfjuu8yafme7rjrmg6hv64g/updates',
      'governance/dreps/drep1yvvxuvh64q9zdqgrjt76d42eclk5wgdxtnsun4808cwg0dquhj65s/updates', // CIP129 id
    ],
    response: [
      {
        tx_hash: '819402987a3ceb222911126d588c1f568db8a529d4dd842eea8fee306d6e7064',
        cert_index: 0,
        action: 'registered',
        deposit: '500000000',
      },
      {
        tx_hash: '14604a80079437682922134e365e8d433d73802c5250466d6b39bcc5457dc7e0',
        cert_index: 0,
        action: 'updated',
        deposit: null,
      },
      {
        tx_hash: '1bff19f281d7776f35d35ad0f650e98b33392c37a45cef042ce50e4c248fadc9',
        cert_index: 0,
        action: 'deregistered',
        deposit: null,
      },
      {
        tx_hash: '968027f43352ed787fe027bf5168be331c5279c6a15ea8380c74135fdc30c855',
        cert_index: 0,
        action: 'registered',
        deposit: '500000000',
      },
    ],
  },
  {
    id: 'governance-drep-script-updates_2c5f5a21695c',
    testName: 'governance drep script updates',
    endpoints: [
      'governance/dreps/drep_script13gh7zuw0nzuh6dhm96narlcl36a9x8tzvhdu4uaaryw05yltmjy/updates',
      'governance/dreps/drep1yw9zlct3e7vtjlfklvh2050lr78t55cavfjahjhnh5v3e7s2h3c8k/updates',
    ],
    response: [
      {
        tx_hash: '68e606fff03dad8e554f1cad72fc251fb98f1957ee7d609b3b07576e46e472a2',
        cert_index: +0,
        action: 'registered',
        deposit: '500000000',
      },
    ],
  },
  {
    id: 'governance-drep-always-abstain-updates_2500cf48ae74',
    testName: 'governance drep_always_abstain updates',
    endpoints: ['governance/dreps/drep_always_abstain/updates'],
    response: [],
  },
  {
    id: 'governance-drep-always-no-confidence-updates_79668a77e7b5',
    testName: 'governance drep_always_no_confidence updates',
    endpoints: ['governance/dreps/drep_always_no_confidence/updates'],
    response: [],
  },
  {
    // Registered in a tx with several certificates, then deregistered and
    // registered again.
    id: 'governance-drep-updates-re-registered_e8cebadef9b0',
    testName: 'governance drep updates re-registered',
    endpoints: [
      'governance/dreps/drep1ar8me9dv5p0tykglpwm2jysn2n33sx2wvgg29jyjwerqszsww5z/updates',
      'governance/dreps/drep1yt5vl0y44js9avjeru9md2gjzd2wxxqefe3ppgkgjfmyvzqgfnp8u/updates', // CIP129 id
    ],
    response: [
      {
        tx_hash: '44755cd3ac4f7dfc88911f14c37d3a3dcd37a6986a61c2b34dd210ee17cffae1',
        cert_index: 2,
        action: 'registered',
        deposit: '500000000',
      },
      {
        tx_hash: '80cb01f946afdee52991eb3cd04f76e849483f21ffca851fdc197799c41ca212',
        cert_index: 0,
        action: 'deregistered',
        deposit: null,
      },
      {
        tx_hash: '18e7bca6f8f15f39351d831e19895e860008bd6eae85da1aa67abbbfda9c27f8',
        cert_index: 0,
        action: 'registered',
        deposit: '500000000',
      },
    ],
  },
  {
    // Two deregistration and registration cycles.
    id: 'governance-drep-updates-re-registered-twice_e3dde94ab6fa',
    testName: 'governance drep updates re-registered twice',
    endpoints: [
      'governance/dreps/drep1uydtqqqp8pzk6tm3uynejfgrmuqkcva4w2ys89tt4cxkkttjv89/updates',
      'governance/dreps/drep1yts34vqqqyuy2mf0w8sj0xf9q00szmpnk4egjqu4dwhq66cewm6vn/updates', // CIP129 id
    ],
    response: [
      {
        tx_hash: '44755cd3ac4f7dfc88911f14c37d3a3dcd37a6986a61c2b34dd210ee17cffae1',
        cert_index: 3,
        action: 'registered',
        deposit: '500000000',
      },
      {
        tx_hash: '17b10ad128c880c84e42ed1ae766c06bdc8bab28df1d75f7359a19f77c93891a',
        cert_index: 0,
        action: 'deregistered',
        deposit: null,
      },
      {
        tx_hash: '352e603563688bf54b9ebb35b4f12105668bc7b1418d72327c0600e2f72c9d1d',
        cert_index: 0,
        action: 'registered',
        deposit: '500000000',
      },
      {
        tx_hash: '325a1d278ad307d58b097958178867bfa5fd101b4648feb8b11ad45ed76c2e99',
        cert_index: 0,
        action: 'deregistered',
        deposit: null,
      },
      {
        tx_hash: '653996e8e678cf7b9f0af9ebe2924188d35807e228d487af42ea6dcbaa7f56b8',
        cert_index: 0,
        action: 'registered',
        deposit: '500000000',
      },
    ],
  },
];
