import { getPaginationFixtures } from '../../../../index.js';

const paginationFixtures = getPaginationFixtures('governance/dreps');

export default [
  ...paginationFixtures,
  {
    id: 'governance-proposals_2284f5750494',
    testName: 'governance proposals',
    endpoints: ['governance/proposals?count=4'],
    response: [
      {
        id: 'gov_action1zhuz5djmmmjg8f9s8pe6grfc98xg3szglums8cgm6qwancp4eytqqmpu0pr',
        tx_hash: '15f82a365bdee483a4b03873a40d3829cc88c048ff3703e11bd01dd9e035c916',
        cert_index: 0,
        governance_type: 'info_action',
      },
      {
        id: 'gov_action1t87n2vjnavthuggyarerafxx8c7n9mu4c7r96qlfp5uggsjdc8dsqymg588',
        tx_hash: '59fd353253eb177e2104e8f23ea4c63e3d32ef95c7865d03e90d3884424dc1db',
        cert_index: 0,
        governance_type: 'info_action',
      },
      {
        id: 'gov_action10lty9xka3unprtvdfrqvcjgsz33sjwhv9p06afqzar8au782trtsq7dhd95',
        tx_hash: '7fd6429add8f2611ad8d48c0cc49101463093aec285faea402e8cfde78ea58d7',
        cert_index: 0,
        governance_type: 'info_action',
      },
      {
        id: 'gov_action1286ft23r7jem825s4l0y5rn8sgam0tz2ce04l7a38qmnhp3l9a6qqn850dw',
        tx_hash: '51f495aa23f4b3b3aa90afde4a0e67823bb7ac4ac65f5ffbb138373b863f2f74',
        cert_index: 0,
        governance_type: 'parameter_change',
      },
    ],
  },
];
