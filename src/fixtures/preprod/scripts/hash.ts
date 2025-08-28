export default [
  {
    id: 'scripts-hash-timelock_67bea5cda875',
    testName: 'scripts/:hash - timelock',
    endpoints: ['scripts/e2bab64ca481afc5a695b7db22fd0a7df4bf930158dfa652fb337999'],
    response: {
      script_hash: 'e2bab64ca481afc5a695b7db22fd0a7df4bf930158dfa652fb337999',
      type: 'timelock',
      serialised_size: null,
    },
  },
  {
    id: 'scripts-hash-plutus-v1_26cb5c511806',
    testName: 'scripts/:hash - PlutusV1',
    endpoints: ['scripts/be349fa49a9ce173a999e4229efbb3983c86c8183d75305728d7d9ff'],
    response: {
      script_hash: 'be349fa49a9ce173a999e4229efbb3983c86c8183d75305728d7d9ff',
      type: 'plutusV1',
      serialised_size: 2925,
    },
  },
  {
    id: 'scripts-hash-plutus-v2_4b356e039316',
    testName: 'scripts/:hash - PlutusV2',
    endpoints: ['scripts/12108f654f8a58118e06fa8cccf5b6def94b07eab73f03ae0dbf8e3d'],
    response: {
      script_hash: '12108f654f8a58118e06fa8cccf5b6def94b07eab73f03ae0dbf8e3d',
      type: 'plutusV2',
      serialised_size: 4905,
    },
  },
];
