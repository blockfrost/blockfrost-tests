import { expect } from 'vitest';

const UNIT_REDEEMER_HASH = '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec';

export default [
  {
    id: 'txs-tx-redeemers_4159b667f762',
    testName: 'txs/:tx/redeemers',
    endpoints: ['txs/ecc0420f2f5d02d9200dd9e008dfe612e82e46eb036b8287e95d1a0249ea040e/redeemers'],
    response: [
      {
        tx_index: 0,
        purpose: 'spend',
        script_hash: 'eb8a0f8c99610a0eadeb0173cd25d57075aafcf5be7c03665d5576b8',
        redeemer_data_hash: '58973384df665c05b152ac081652b8b0aa697d8310893855170361163ff59dbb',
        datum_hash: '58973384df665c05b152ac081652b8b0aa697d8310893855170361163ff59dbb',
        unit_mem: '3138824',
        unit_steps: '1369417919',
        fee: '279846',
      },
      {
        tx_index: 1,
        purpose: 'spend',
        script_hash: '04e0f7205915547a3898757f008cde8f7bae8d341819c3907ac23655',
        redeemer_data_hash: UNIT_REDEEMER_HASH,
        datum_hash: UNIT_REDEEMER_HASH,
        unit_mem: '23776',
        unit_steps: '8949203',
        fee: '2018',
      },
    ],
  },
  {
    // cert-purpose redeemers with resolved script_hash. the tx delegates 14
    // script stake credentials in one go, so every redeemer is a cert and
    // r.index order is unambiguous.
    id: 'txs-tx-redeemers-cert-purpose_2b548197982d',
    testName: 'txs/:tx/redeemers cert purpose',
    endpoints: ['txs/c1c026a093dd36419da14ae6f2c022df919c37c1ce8a0814181b75e7ebb12915/redeemers'],
    response: [
      ['a9ab0d8813c8a4107c22a8821e238a94072c12a56cd77de5835a97cb', '21544', '5479571', '1639'],
      ['c2f44bd543a91113be5a24855f230137f65b89879a36f7bca0406fa3', '15456', '4278886', '1201'],
      ['5e6039201f6cfe9e69adbe895b76cb93bec6b6d97a0980856fb8442b', '15456', '4278886', '1201'],
      ['a55d65597808cf9df27c8b82510d0e4afcd1ddc7fd857de713890f67', '16591', '4477042', '1281'],
      ['40dbb8715d7db31f26b6b575949ea238b5fda885c3165caadbfcc031', '15126', '4226086', '1178'],
      ['35cae67056c1eb4afacc5b29ce4a4a2aa664c03c139df2768c6bdd07', '15786', '4331686', '1224'],
      ['87cd4eb2d26614c5887f35bfe4d3729703f6f46b21c3498afea7f67f', '20327', '5193619', '1548'],
      ['b34fc2e471282d963bbb6b8819aeab70760a04fe4aa637a3d8b31164', '20551', '5179951', '1560'],
      ['cfdd027d998121473634feb844b0f8926475871e92463ac76645e1b7', '19526', '4999394', '1488'],
      ['45b4e7dcd980b3b5e0f7b20c59ef48395ccf3877b16dee3459922324', '19966', '5069794', '1518'],
      ['98cecd4d2df049ef5aa073ffd4b240024c11e8b155717025e3c970f1', '21687', '5378107', '1640'],
      ['471799e0cec53a636c8a5d58cc09013bed5ac81bd758fea7addec769', '16921', '4599151', '1308'],
      ['1632491afe0401629348c6a0c84d6a1e073b4adec6c2c0b3603056a9', '20952', '5277063', '1590'],
      ['9db3dd3c76243f3bebd4aeca6c20a3031212841a0ef54e100506de93', '20221', '5127151', '1537'],
    ].map(([script_hash, unit_mem, unit_steps, fee], tx_index) => ({
      tx_index,
      purpose: 'cert',
      script_hash,
      redeemer_data_hash: UNIT_REDEEMER_HASH,
      datum_hash: UNIT_REDEEMER_HASH,
      unit_mem,
      unit_steps,
      fee,
    })),
  },
  {
    // reward-purpose redeemers with resolved script_hash. the tx mixes mint
    // and reward purposes; db-sync orders rows by redeemer index only, and
    // cross-tag index ties make row order backend-specific — compare as
    // same-members.
    id: 'txs-tx-redeemers-reward-purpose_94d6da36fec1',
    testName: 'txs/:tx/redeemers reward purpose',
    endpoints: ['txs/a048ea3491dc7e354219358003225b4a1ef83632d207582a85ef2ba14009b6e4/redeemers'],
    response: expect.toIncludeSameMembers([
      {
        tx_index: 1,
        purpose: 'mint',
        script_hash: '20d919fa44c2f96e319857b14f8e6945d83ed5df054b1b7f94b35b45',
        redeemer_data_hash: '06bf1b950020c29344803c13113e28a7d0b93d7bd7015b3828a09ca9703e22ce',
        datum_hash: '06bf1b950020c29344803c13113e28a7d0b93d7bd7015b3828a09ca9703e22ce',
        unit_mem: '893335',
        unit_steps: '307521055',
        fee: '73718',
      },
      {
        tx_index: 0,
        purpose: 'reward',
        script_hash: '471799e0cec53a636c8a5d58cc09013bed5ac81bd758fea7addec769',
        redeemer_data_hash: UNIT_REDEEMER_HASH,
        datum_hash: UNIT_REDEEMER_HASH,
        unit_mem: '21242',
        unit_steps: '5745761',
        fee: '1640',
      },
      {
        tx_index: 1,
        purpose: 'reward',
        script_hash: '98cecd4d2df049ef5aa073ffd4b240024c11e8b155717025e3c970f1',
        redeemer_data_hash: '4b9cab8cbba0c3eb811de67d63960f9cca861a74e912b8b59110a8f7959baa57',
        datum_hash: '4b9cab8cbba0c3eb811de67d63960f9cca861a74e912b8b59110a8f7959baa57',
        unit_mem: '524877',
        unit_steps: '156573627',
        fee: '41575',
      },
      {
        tx_index: 2,
        purpose: 'reward',
        script_hash: 'b34fc2e471282d963bbb6b8819aeab70760a04fe4aa637a3d8b31164',
        redeemer_data_hash: '153ad6d6421d16b16c2e167c57974e05d8e308f4c7e4c9646d7044a7e7d73f60',
        datum_hash: '153ad6d6421d16b16c2e167c57974e05d8e308f4c7e4c9646d7044a7e7d73f60',
        unit_mem: '439482',
        unit_steps: '128100123',
        fee: '34595',
      },
    ]),
  },
];
