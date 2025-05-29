import { getPaginationFixtures } from '../../../../utils.js';

const paginationFixtures = getPaginationFixtures(
  'governance/dreps/drep1rphr974gpgngzqujlknd2kw8a4rjrfjuu8yafme7rjrmg443jff/updates'
);

export default [
  ...paginationFixtures,
  {
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
      },
      {
        tx_hash: '14604a80079437682922134e365e8d433d73802c5250466d6b39bcc5457dc7e0',
        cert_index: 0,
        action: 'deregistered',
      },
      {
        tx_hash: '1bff19f281d7776f35d35ad0f650e98b33392c37a45cef042ce50e4c248fadc9',
        cert_index: 0,
        action: 'deregistered',
      },
      {
        tx_hash: '968027f43352ed787fe027bf5168be331c5279c6a15ea8380c74135fdc30c855',
        cert_index: 0,
        action: 'registered',
      },
    ],
  },
  {
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
      },
    ],
  },
  {
    testName: 'governance drep_always_abstain updates',

    endpoints: ['governance/dreps/drep_always_abstain/updates'],
    response: [],
  },
  {
    testName: 'governance drep_always_no_confidence updates',

    endpoints: ['governance/dreps/drep_always_no_confidence/updates'],
    response: [],
  },
];
