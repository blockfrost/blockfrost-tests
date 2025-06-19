import { getPaginationFixtures } from '../../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'governance/dreps/drep_script1wcl0w4np7rxceraptxne67dlaru6w6rchk407uq9nrhqu0c4hhj/votes',
);

export default [
  ...paginationFixtures,
  {
    testName: 'governance drep votes',

    endpoints: [
      'governance/dreps/drep_script1wcl0w4np7rxceraptxne67dlaru6w6rchk407uq9nrhqu0c4hhj/votes',
      'governance/dreps/drep1ydmraa6kv8cvmry059v608tehl50nfmg0z764lmsqkvwurs40sw2z/votes', //CIP129 id
    ],
    response: [
      {
        tx_hash: 'e239058473ab5ab1f5829b9058a93cbd0daaf72f9252cc16b34925cd87b37d35',
        cert_index: 0,
        vote: 'yes',
      },
    ],
  },
  {
    testName: 'governance drep_always_no_confidence votes',

    endpoints: ['governance/dreps/drep_always_no_confidence/votes'],
    response: [],
  },
  {
    testName: 'governance drep_always_abstain votes',

    endpoints: ['governance/dreps/drep_always_abstain/votes'],
    response: [],
  },
];
