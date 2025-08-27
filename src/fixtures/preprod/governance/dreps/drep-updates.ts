import { getPaginationFixtures } from '../../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'governance/dreps/drep1wcl0w4np7rxceraptxne67dlaru6w6rchk407uq9nrhquq6gltn/updates',
);

export default [
  ...paginationFixtures,
  {
    id: 'governance-drep-key-hash-updates_2762fc0baaa3',
    testName: 'governance drep keyHash updates',

    endpoints: [
      'governance/dreps/drep1wcl0w4np7rxceraptxne67dlaru6w6rchk407uq9nrhquq6gltn/updates',
    ],

    response: [],
  },
  {
    id: 'governance-drep-script-hash-updates_ac3cefd4be4a',
    testName: 'governance drep scriptHash updates',

    endpoints: [
      'governance/dreps/drep_script1wcl0w4np7rxceraptxne67dlaru6w6rchk407uq9nrhqu0c4hhj/updates',
      'governance/dreps/drep1ydmraa6kv8cvmry059v608tehl50nfmg0z764lmsqkvwurs40sw2z/updates', // CIP129 id
    ],

    response: [
      {
        tx_hash: '744fb092ab6d8a4d8ca8f66ea3c0abb6b9d49381205aa41c75c8597e91137948',
        cert_index: 0,
        action: 'registered',
      },
      {
        tx_hash: 'ebab27b88379f662d5bdcd2db7c0be391fd94674a889255411d540b6684e5c13',
        cert_index: 0,
        action: 'updated',
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
];
