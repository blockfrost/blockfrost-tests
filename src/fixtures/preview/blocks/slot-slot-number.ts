import { expect } from 'vitest';

export default [
  {
    id: 'blocks-slot-slot-number-and-blocks-epoch-epoch-number-slot-slot-number-generic-shelley_cfde18e7e318',

    testName:
      'blocks/slot/:slot_number and blocks/epoch/:epoch_number/slot/:slot_number - generic shelley',
    endpoints: ['blocks/slot/44214148', 'blocks/epoch/511/slot/63748'],
    response: {
      time: 1_710_870_148,
      height: 1_893_053,
      hash: '1466802be24edd32971c5ca96f6e15a914dc3f79d2cb3e82ec7cd05a16c1b387',
      slot: 44_214_148,
      epoch: 511,
      epoch_slot: 63_748,
      slot_leader: 'pool1xgmqwh23yc2jp52k7jn249x56v6nyhl9nhxaeg6hq8tmc5t78rq',
      size: 54_142,
      tx_count: 31,
      output: '4687401165211',
      fees: '7991536',
      block_vrf: 'vrf_vk1vmzg8lknwzucm74um7pc5g7ku29ulsq22r3lzzgwjfudxgmm0twqwnzz08',
      op_cert: 'a5c260b078c8db6c7e89457e693bd8ffa91535680f3bde626d6bebb3621fd73c',
      op_cert_counter: '2',
      previous_block: 'fdbc12bfbfacc21cf7186bf51fa47bdd5b18b541932dcd2ab2a9bc62b33097e0',
      next_block: '15a180eb8f3b28e35b97b48833a6f459eabd127460e4c92f2d0d61bf178ab0ef',
      confirmations: expect.confirmations({ height: 1_893_053 }),
    },
  },
];
