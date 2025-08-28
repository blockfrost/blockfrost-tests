export default [
  {
    id: 'scripts-hash-json_84b53e7ae639',
    testName: 'scripts/:hash/json',
    endpoints: ['scripts/ffbea8425064c5d7874498f07b7b117e503eb4d2891267a3c00ae6d5/json'],
    response: { json: null },
  },
  {
    id: 'scripts-hash-json-timelock_6c128c617a22',
    testName: 'scripts/:hash/json timelock',
    endpoints: ['scripts/8ae8d45803db56a02fd82a464d2e3ff7b7923a772d5ad650a0f18160/json'],
    response: {
      json: {
        type: 'any',
        scripts: [
          {
            type: 'all',
            scripts: [
              { slot: 43800000, type: 'after' },
              { type: 'sig', keyHash: '0a11b0c7e25dc5d9c63171bdf39d9741b901dc903e12b4e162348e07' },
            ],
          },
          {
            type: 'all',
            scripts: [
              { slot: 43800000, type: 'before' },
              { type: 'sig', keyHash: '3a568816e88fab5cc2cf183c0b08284a64a310b370c2c3421b2949f3' },
            ],
          },
        ],
      },
    },
  },
  {
    id: 'scripts-hash-json-another-one_104ce6ff6c9b',
    testName: 'scripts/:hash/json another one',
    endpoints: ['scripts/6c969320597b755454ff3653ad09725d590c570827a129aeb4385526/json'],
    response: {
      json: { type: 'sig', keyHash: 'c84e8193d0e8895fb31991c842c1a7196590622a5097e18a5a311358' },
    },
  },
];
