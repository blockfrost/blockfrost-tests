import { getPaginationFixtures } from '../../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'governance/dreps/drep14pjm8ytt682wkp4jcegdj2yerkcy9a20xevvp7udlcd0ggjxdud/votes',
);

export default [
  ...paginationFixtures,
  {
    id: 'governance-drep-votes_7490a85dc1f2',
    testName: 'governance drep votes',
    endpoints: [
      'governance/dreps/drep14pjm8ytt682wkp4jcegdj2yerkcy9a20xevvp7udlcd0ggjxdud/votes?count=8',
      'governance/dreps/drep1y25xtvu3d0gaf6cxktr9pkfgnywmqsh4fum93s8m3hlp4aqj3uqdp/votes?count=8', //CIP129 id
    ],
    response: [
      {
        tx_hash: 'dfe4ead3170e0de0e14ad40d6e83571282c5d2d17b7243260e02f9882149937f',
        cert_index: 0,
        proposal_id: 'gov_action1zhuz5djmmmjg8f9s8pe6grfc98xg3szglums8cgm6qwancp4eytqqmpu0pr',
        proposal_tx_hash: '15f82a365bdee483a4b03873a40d3829cc88c048ff3703e11bd01dd9e035c916',
        proposal_cert_index: 0,
        vote: 'no',
      },
      {
        tx_hash: 'ede02fea5e6165c14914090776088a0dfeca8ae0682070af8b224f5e8b3ac62e',
        cert_index: 0,
        proposal_id: 'gov_action1t87n2vjnavthuggyarerafxx8c7n9mu4c7r96qlfp5uggsjdc8dsqymg588',
        proposal_tx_hash: '59fd353253eb177e2104e8f23ea4c63e3d32ef95c7865d03e90d3884424dc1db',
        proposal_cert_index: 0,
        vote: 'yes',
      },
      {
        tx_hash: '8c96c4a7d6a2bea8c787baa0109b71a0b13a3fde3d53141bc3160eed7904a8d7',
        cert_index: 0,
        proposal_id: 'gov_action10lty9xka3unprtvdfrqvcjgsz33sjwhv9p06afqzar8au782trtsq7dhd95',
        proposal_tx_hash: '7fd6429add8f2611ad8d48c0cc49101463093aec285faea402e8cfde78ea58d7',
        proposal_cert_index: 0,
        vote: 'abstain',
      },
      {
        tx_hash: 'dae2e70b5504891d2a80b563a832491c296201dcbb715d1160061093f385518a',
        cert_index: 0,
        proposal_id: 'gov_action1llcd7ezdx299xeep9azm4dvsvz7783qfrhykcu3sv2ykl4sewv2qq4myfpk',
        proposal_tx_hash: 'fff0df644d328a5367212f45bab59060bde3c4091dc96c723062896fd6197314',
        proposal_cert_index: 0,
        vote: 'yes',
      },
      {
        tx_hash: '33d759fc86c0f046a628badeababf7b13d6536e3482f1ed4696efda732986624',
        cert_index: 0,
        proposal_id: 'gov_action1llcd7ezdx299xeep9azm4dvsvz7783qfrhykcu3sv2ykl4sewv2qq4myfpk',
        proposal_tx_hash: 'fff0df644d328a5367212f45bab59060bde3c4091dc96c723062896fd6197314',
        proposal_cert_index: 0,
        vote: 'yes',
      },
      {
        tx_hash: '23f0cd33df839ab449784e113b072418f7f143badf7ff7552b36d6d39c25823f',
        cert_index: 0,
        proposal_id: 'gov_action133jnaewfsq8x6v08ndd87l2yqryp63r30t2dkceacxx5cply5n7sqzlcyqf',
        proposal_tx_hash: '8c653ee5c9800e6d31e79b5a7f7d4400c81d44717ad4db633dc18d4c07e4a4fd',
        proposal_cert_index: 0,
        vote: 'yes',
      },
      {
        tx_hash: 'b60959c01edeaf6b51a3ee658108a61054232554d59a1c89253a971b2d9d9026',
        cert_index: 0,
        proposal_id: 'gov_action1js2s9v92zpxg2rge0y3jt9zy626he2m67x9kx9phw4r942kvsn6sqfym0d7',
        proposal_tx_hash: '941502b0aa104c850d197923259444d2b57cab7af18b63143775465aaacc84f5',
        proposal_cert_index: 0,
        vote: 'no',
      },
      {
        tx_hash: '3aae396bd291bd2f86486bca6e72353444056641836981a164d770b1ff58cc2e',
        cert_index: 0,
        proposal_id: 'gov_action1js2s9v92zpxg2rge0y3jt9zy626he2m67x9kx9phw4r942kvsn6sqfym0d7',
        proposal_tx_hash: '941502b0aa104c850d197923259444d2b57cab7af18b63143775465aaacc84f5',
        proposal_cert_index: 0,
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
