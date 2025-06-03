import { expect } from 'vitest';

export default [
  {
    testName:
      'blocks/slot/:slot_number and blocks/epoch/:epoch_number/slot/:slot_number - generic shelley',
    endpoints: ['blocks/slot/470160', 'blocks/epoch/4/slot/383760'],
    response: {
      time: 1_656_153_360,
      height: 19_234,
      hash: 'cfcefdbe2f849a86d36792a33fd077035eb851b91f09bc3a90e61100709234d9',
      slot: 470_160,
      epoch: 4,
      epoch_slot: 383_760,
      slot_leader: 'ShelleyGenesis-d15422b2e8b60e50',
      size: 3,
      tx_count: 0,
      output: null,
      fees: null,
      block_vrf: 'vrf_vk1s4gyu7dqfjpy8fwjnduce0pj592glxavupsl44728axg8tscpx6snkkzwt',
      op_cert: '54914d6210ca26a038509e3f5b01eeec60719766ec2f839e2c8b2edcb39e4847',
      op_cert_counter: '0',
      previous_block: '61f939c85acd0ffc34a4d62d7aa7a42c40638008a6b63d3ed453d65c45cffb65',
      next_block: '7cb021dc54ecf37642ef3040a48729b3037b527bd682efa2c5fae847cffc4da6',
      confirmations: expect.confirmations({ height: 19_234 }),
    },
  },
];
