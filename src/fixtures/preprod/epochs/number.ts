import { error_404, error_400_epochs } from '../../errors/index.js';

export default [
  {
    testName: 'epochs/:number - first',
    endpoints: ['epochs/0'],

    response: {
      epoch: 0,
      start_time: 1_654_041_600,
      end_time: 1_654_473_600,
      first_block_time: 1_654_041_600,
      last_block_time: 1_654_430_500,
      block_count: 11,
      tx_count: 0,
      output: '0',
      fees: '0',
      active_stake: null,
    },
  },
  {
    testName: 'epochs/:number - generic byron',
    endpoints: ['epochs/3'],

    response: {
      epoch: 3,
      start_time: 1_655_337_600,
      end_time: 1_655_769_600,
      first_block_time: 1_655_337_640,
      last_block_time: 1_655_726_440,
      block_count: 11,
      tx_count: 0,
      output: '0',
      fees: '0',
      active_stake: null,
    },
  },
  {
    testName: 'epochs/:number - generic shelley',
    endpoints: ['epochs/10'],

    response: {
      epoch: 10,
      start_time: 1_658_361_600,
      end_time: 1_658_793_600,
      first_block_time: 1_658_361_605,
      last_block_time: 1_658_793_593,
      block_count: 21_717,
      tx_count: 0,
      output: '0',
      fees: '0',
      active_stake: '300000000000000',
    },
  },
  {
    testName: 'epochs/:number - out of range epoch',
    endpoints: ['epochs/696969696969'],

    response: error_400_epochs,
  },
  {
    testName: 'epochs/:number - not found epoch',
    endpoints: ['epochs/69696969'],

    response: error_404,
  },
];
