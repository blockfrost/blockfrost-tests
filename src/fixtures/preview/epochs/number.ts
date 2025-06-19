import { error_404, error_400_epochs } from '../../errors/index.js';

export default [
  {
    testName: 'epochs/:number - first',
    endpoints: ['epochs/0'],
    response: {
      epoch: 0,
      start_time: 1_666_656_000,
      end_time: 1_666_742_400,
      first_block_time: 1_666_656_000,
      last_block_time: 1_666_742_380,
      block_count: 4320,
      tx_count: 2,
      output: '59999998493362207',
      fees: '437793',
      active_stake: null,
    },
  },
  {
    testName: 'epochs/:number - generic byron',
    endpoints: ['epochs/3'],
    response: {
      epoch: 3,
      start_time: 1_666_915_200,
      end_time: 1_667_001_600,
      first_block_time: 1_666_915_215,
      last_block_time: 1_667_001_594,
      block_count: 4298,
      tx_count: 1,
      output: '29699998492845396',
      fees: '304233',
      active_stake: '300000000000000',
    },
  },
  {
    testName: 'epochs/:number - generic shelley',
    endpoints: ['epochs/10'],
    response: {
      epoch: 10,
      start_time: 1_667_520_000,
      end_time: 1_667_606_400,
      first_block_time: 1_667_520_004,
      last_block_time: 1_667_606_373,
      block_count: 2989,
      tx_count: 2519,
      output: '21406917763167',
      fees: '597144524',
      active_stake: '322373863624712',
    },
  },
  {
    testName: 'epochs/:number - out of range epoch',
    response: error_400_epochs,
    endpoints: ['epochs/696969696969'],
  },
  {
    testName: 'epochs/:number - not found epoch',
    response: error_404,
    endpoints: ['epochs/69696969'],
  },
];
