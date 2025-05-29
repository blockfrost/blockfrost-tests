import { expect } from 'vitest';

export default [
  {
    testName:
      'blocks/slot/:slot_number and blocks/epoch/:epoch_number/slot/:slot_number - generic shelley',
    endpoints: ['blocks/slot/16019999', 'blocks/epoch/234/slot/295199'],
    response: {
      time: 1_607_586_290,
      height: 5_058_628,
      hash: '5d3df361b77ba7aff50a00ace1f00cec23126aa3b67af775dbf70c88c7e85ca4',
      slot: 16_019_999,
      epoch: 234,
      epoch_slot: 295_199,
      slot_leader: 'pool1x0qm7xsyh2za3ltprxsgael544je4hg8tc3q3v5gv232z8jt4wp',
      size: 392,
      tx_count: 1,
      output: '6225908',
      fees: '173025',
      op_cert: '3b14f088aa8309ed61b0b64b1210370d02a809d5ea573397a5cbdb78862a2447',
      op_cert_counter: '1',
      block_vrf: 'vrf_vk17hff333krucx82wjdhnwnfvusg8p4zn22lwmf2pmd2e5mghu52hqvpf8qj',
      previous_block: '7ee80a3c33b7ebb876671a936f57ec79f02a8b44a5132033c8860137e1c01c13',
      next_block: '94f96c20547b47e9668d5f42c88d0d3b92700c2614ec9bb3ad683bb0bba471f6',
      confirmations: expect.confirmations({ height: 5_058_628 }),
    },
  },
];
