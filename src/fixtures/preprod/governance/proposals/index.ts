import { getPaginationFixtures } from '../../../../index.js';

const paginationFixtures = getPaginationFixtures('governance/proposals');

export default [
  ...paginationFixtures,
  {
    id: 'governance-proposals_e6264a6c6f3c',
    testName: 'governance proposals',
    endpoints: ['governance/proposals?count=3'],

    response: [
      {
        tx_hash: '0ecc74fe26532cec1ab9a299f082afc436afc888ca2dc0fc6acda431c52dc60d',
        cert_index: 0,
        governance_type: 'parameter_change',
      },
      {
        tx_hash: 'aff2909f8175ee02a8c1bf96ff516685d25bf0c6b95aac91f4dfd53a5c0867cc',
        cert_index: 0,
        governance_type: 'info_action',
      },
      {
        cert_index: 0,
        governance_type: 'parameter_change',
        tx_hash: 'e974fecbf45ac386a76605e9e847a2e5d27c007fdd0be674cbad538e0c35fe01',
      },
    ],
  },
];
