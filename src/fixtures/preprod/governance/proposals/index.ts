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
        id: 'gov_action1pmx8fl3x2vkwcx4e52vlpq40csm2ljygegkuplr2ekjrr3fdccxsq0jegy9',
        tx_hash: '0ecc74fe26532cec1ab9a299f082afc436afc888ca2dc0fc6acda431c52dc60d',
        cert_index: 0,
        governance_type: 'parameter_change',
      },
      {
        id: 'gov_action14lefp8upwhhq92xph7t075txshf9huxxh9d2ey05ml2n5hqgvlxqqp92kfl',
        tx_hash: 'aff2909f8175ee02a8c1bf96ff516685d25bf0c6b95aac91f4dfd53a5c0867cc',
        cert_index: 0,
        governance_type: 'info_action',
      },
      {
        id: 'gov_action1a960ajl5ttpcdfmxqh57s3azuhf8cqrlm597vaxt44fcurp4lcqsqqfz6j2',
        tx_hash: 'e974fecbf45ac386a76605e9e847a2e5d27c007fdd0be674cbad538e0c35fe01',
        cert_index: 0,
        governance_type: 'parameter_change',
      },
    ],
  },
  // One tx proposing many actions at once: the listing walks its cert
  // indexes in order and only then moves on to the next tx, and the ids of
  // those rows carry the index in their CIP-129 payload.
  {
    id: 'governance-proposals-cert-index-order-inside-one-tx_06d509ac9f32',
    testName: 'governance proposals - cert index order inside one tx',
    endpoints: ['governance/proposals?count=10&page=5'],
    response: [
      {
        id: 'gov_action19nvvldw9x8cv05q923fyympcgsff0zumvmmy73z86rpvw0ueakrpzwjz90m',
        tx_hash: '2cd8cfb5c531f0c7d0055452426c384412978b9b66f64f4447d0c2c73f99ed86',
        cert_index: 17,
        governance_type: 'treasury_withdrawals',
      },
      {
        id: 'gov_action19nvvldw9x8cv05q923fyympcgsff0zumvmmy73z86rpvw0ueakrpyjapqnv',
        tx_hash: '2cd8cfb5c531f0c7d0055452426c384412978b9b66f64f4447d0c2c73f99ed86',
        cert_index: 18,
        governance_type: 'treasury_withdrawals',
      },
      {
        id: 'gov_action10md95hawtukx6yqmj33ndwpg7wxd35zdez88gazqkxhna9jzkgnsqpt3cra',
        tx_hash: '7eda5a5fae5f2c6d101b946336b828f38cd8d04dc88e747440b1af3e9642b227',
        cert_index: 0,
        governance_type: 'treasury_withdrawals',
      },
      {
        id: 'gov_action10md95hawtukx6yqmj33ndwpg7wxd35zdez88gazqkxhna9jzkgnszjwsmss',
        tx_hash: '7eda5a5fae5f2c6d101b946336b828f38cd8d04dc88e747440b1af3e9642b227',
        cert_index: 1,
        governance_type: 'treasury_withdrawals',
      },
      {
        id: 'gov_action10md95hawtukx6yqmj33ndwpg7wxd35zdez88gazqkxhna9jzkgnsywpn7v8',
        tx_hash: '7eda5a5fae5f2c6d101b946336b828f38cd8d04dc88e747440b1af3e9642b227',
        cert_index: 2,
        governance_type: 'treasury_withdrawals',
      },
      {
        id: 'gov_action10md95hawtukx6yqmj33ndwpg7wxd35zdez88gazqkxhna9jzkgnsxayjal2',
        tx_hash: '7eda5a5fae5f2c6d101b946336b828f38cd8d04dc88e747440b1af3e9642b227',
        cert_index: 3,
        governance_type: 'treasury_withdrawals',
      },
      {
        id: 'gov_action10md95hawtukx6yqmj33ndwpg7wxd35zdez88gazqkxhna9jzkgnsgll45aq',
        tx_hash: '7eda5a5fae5f2c6d101b946336b828f38cd8d04dc88e747440b1af3e9642b227',
        cert_index: 4,
        governance_type: 'treasury_withdrawals',
      },
      {
        id: 'gov_action10md95hawtukx6yqmj33ndwpg7wxd35zdez88gazqkxhna9jzkgns2v65hwd',
        tx_hash: '7eda5a5fae5f2c6d101b946336b828f38cd8d04dc88e747440b1af3e9642b227',
        cert_index: 5,
        governance_type: 'treasury_withdrawals',
      },
      {
        id: 'gov_action10md95hawtukx6yqmj33ndwpg7wxd35zdez88gazqkxhna9jzkgnsvs4hjj6',
        tx_hash: '7eda5a5fae5f2c6d101b946336b828f38cd8d04dc88e747440b1af3e9642b227',
        cert_index: 6,
        governance_type: 'treasury_withdrawals',
      },
      {
        id: 'gov_action10md95hawtukx6yqmj33ndwpg7wxd35zdez88gazqkxhna9jzkgnswrsk3ph',
        tx_hash: '7eda5a5fae5f2c6d101b946336b828f38cd8d04dc88e747440b1af3e9642b227',
        cert_index: 7,
        governance_type: 'treasury_withdrawals',
      },
    ],
  },
];
