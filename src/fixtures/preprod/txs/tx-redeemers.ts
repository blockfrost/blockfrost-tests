import { expect } from 'vitest';

export default [
  {
    id: 'txs-tx-redeemers_bcba392ad135',
    testName: 'txs/:tx/redeemers',
    endpoints: ['txs/d5fed4dca96c7efda3d1b0897c91c0eee8f8c6a18e5931dfbd56b6ec7a5951a1/redeemers'],
    response: [
      {
        tx_index: 0,
        purpose: 'mint',
        script_hash: '1cf569e1ec3e0fee92f1f5002bfd4213b796c151c708db46e6e2d3a4',
        redeemer_data_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        datum_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        unit_mem: '881262',
        unit_steps: '270069846',
        fee: '70321',
      },
      {
        tx_index: 1,
        purpose: 'mint',
        script_hash: '8b14b900bbf9f43d911da209a28e7bd2cce500d8e4bc928c9ca714fb',
        redeemer_data_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        datum_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        unit_mem: '884102',
        unit_steps: '270492926',
        fee: '70516',
      },
      {
        tx_index: 2,
        purpose: 'mint',
        script_hash: 'b413bc466dadcb6bcf93e840a9eedabe04e83aa9d55f9deeb94d9743',
        redeemer_data_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        datum_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        unit_mem: '1105485',
        unit_steps: '330098849',
        fee: '87587',
      },
    ],
  },
  {
    // cert-purpose redeemer with resolved script_hash. the tx registers a
    // script DRep, so the single redeemer witnesses the drep_registration
    // certificate.
    id: 'txs-tx-redeemers-cert-purpose_f9025f07bec2',
    testName: 'txs/:tx/redeemers cert purpose',
    endpoints: ['txs/7b1fa6b65f0e175114cdecb011f34ed7a9bce875007db2b934e7a47d0435642f/redeemers'],
    response: [
      {
        tx_index: 0,
        purpose: 'cert',
        script_hash: '04dbc20a40869ad86a89996e61bf0bed551b361f99cbe76ecd6dfc2d',
        redeemer_data_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        datum_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        unit_mem: '66968',
        unit_steps: '20020457',
        fee: '5308',
      },
    ],
  },
  {
    // reward-purpose redeemer with resolved script_hash (withdraw-zero
    // batcher). the tx mixes spend and reward purposes; db-sync orders rows
    // by redeemer index only, and cross-tag index ties make row order
    // backend-specific — compare as same-members.
    id: 'txs-tx-redeemers-reward-purpose_4409b3ff775f',
    testName: 'txs/:tx/redeemers reward purpose',
    endpoints: ['txs/0ba048a6022a2ec3771d02e546433a29ed86a343dffa26f0994c5d6f5418f597/redeemers'],
    response: expect.toIncludeSameMembers([
      {
        tx_index: 0,
        purpose: 'spend',
        script_hash: 'eff5be0d47a6b29957c8b2d0f2b8e45fe693da761009b78101563c59',
        redeemer_data_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        datum_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        unit_mem: '28051',
        unit_steps: '8684558',
        fee: '2245',
      },
      {
        tx_index: 1,
        purpose: 'spend',
        script_hash: '92ed29650a584120cbd7b013b3adc04af99f71a4808b6a131d6e9e56',
        redeemer_data_hash: 'b79b1a77ae004d5f1746e7171880b1e3b125f10ca9a2d9154d4b351de0097e6e',
        datum_hash: 'b79b1a77ae004d5f1746e7171880b1e3b125f10ca9a2d9154d4b351de0097e6e',
        unit_mem: '875638',
        unit_steps: '296028157',
        fee: '71868',
      },
      {
        tx_index: 0,
        purpose: 'reward',
        script_hash: '80a867770caabaa845cd7616038f39ab5a9659dc57db0b4e1c64fcd6',
        redeemer_data_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        datum_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
        unit_mem: '32915',
        unit_steps: '10159844',
        fee: '2632',
      },
    ]),
  },
];
