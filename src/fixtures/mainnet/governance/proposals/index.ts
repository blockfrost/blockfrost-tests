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
  // One tx proposing many actions at once: the listing walks its cert
  // indexes in order and only then moves on to the next tx, and the ids of
  // those rows carry the index in their CIP-129 payload.
  {
    id: 'governance-proposals-cert-index-order-inside-one-tx_6704c9121cb7',
    testName: 'governance proposals - cert index order inside one tx',
    endpoints: ['governance/proposals?count=10&page=6'],
    response: [
      {
        id: 'gov_action13tfag48nf94rtjcdq7c06vhkslmxxw9h6c88sl7q5g5nnewcsvlpcdq823y',
        tx_hash: '8ad3d454f3496a35cb0d07b0fd32f687f66338b7d60e787fc0a22939e5d8833e',
        cert_index: 28,
        governance_type: 'treasury_withdrawals',
      },
      {
        id: 'gov_action13tfag48nf94rtjcdq7c06vhkslmxxw9h6c88sl7q5g5nnewcsvlp679xfzf',
        tx_hash: '8ad3d454f3496a35cb0d07b0fd32f687f66338b7d60e787fc0a22939e5d8833e',
        cert_index: 29,
        governance_type: 'treasury_withdrawals',
      },
      {
        id: 'gov_action13tfag48nf94rtjcdq7c06vhkslmxxw9h6c88sl7q5g5nnewcsvlpuz29v77',
        tx_hash: '8ad3d454f3496a35cb0d07b0fd32f687f66338b7d60e787fc0a22939e5d8833e',
        cert_index: 30,
        governance_type: 'treasury_withdrawals',
      },
      {
        id: 'gov_action13tfag48nf94rtjcdq7c06vhkslmxxw9h6c88sl7q5g5nnewcsvlp730y0dn',
        tx_hash: '8ad3d454f3496a35cb0d07b0fd32f687f66338b7d60e787fc0a22939e5d8833e',
        cert_index: 31,
        governance_type: 'treasury_withdrawals',
      },
      {
        id: 'gov_action13tfag48nf94rtjcdq7c06vhkslmxxw9h6c88sl7q5g5nnewcsvlzqhm6e8q',
        tx_hash: '8ad3d454f3496a35cb0d07b0fd32f687f66338b7d60e787fc0a22939e5d8833e',
        cert_index: 32,
        governance_type: 'treasury_withdrawals',
      },
      {
        id: 'gov_action13tfag48nf94rtjcdq7c06vhkslmxxw9h6c88sl7q5g5nnewcsvlzzy7m65d',
        tx_hash: '8ad3d454f3496a35cb0d07b0fd32f687f66338b7d60e787fc0a22939e5d8833e',
        cert_index: 33,
        governance_type: 'treasury_withdrawals',
      },
      {
        id: 'gov_action13tfag48nf94rtjcdq7c06vhkslmxxw9h6c88sl7q5g5nnewcsvlzyc3clg6',
        tx_hash: '8ad3d454f3496a35cb0d07b0fd32f687f66338b7d60e787fc0a22939e5d8833e',
        cert_index: 34,
        governance_type: 'treasury_withdrawals',
      },
      {
        id: 'gov_action13tfag48nf94rtjcdq7c06vhkslmxxw9h6c88sl7q5g5nnewcsvlzxt5eumh',
        tx_hash: '8ad3d454f3496a35cb0d07b0fd32f687f66338b7d60e787fc0a22939e5d8833e',
        cert_index: 35,
        governance_type: 'treasury_withdrawals',
      },
      {
        id: 'gov_action13tfag48nf94rtjcdq7c06vhkslmxxw9h6c88sl7q5g5nnewcsvlzgf074ea',
        tx_hash: '8ad3d454f3496a35cb0d07b0fd32f687f66338b7d60e787fc0a22939e5d8833e',
        cert_index: 36,
        governance_type: 'treasury_withdrawals',
      },
      {
        id: 'gov_action193leqzml768nz7nmpepzx822a5mzyanqhtewaxjtul5gp6uhwvfsqgl2qg0',
        tx_hash: '2c7f900b7ff68f317a7b0e42231d4aed36227660baf2ee9a4be7e880eb977313',
        cert_index: 0,
        governance_type: 'treasury_withdrawals',
      },
    ],
  },
];
