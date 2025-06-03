export default [
  {
    testName: 'txs/:tx/required_signers - no extra witnesses',
    endpoints: [
      'txs/c2120581050a1116ab38a5ac8a62d64df4cf12cf3370d22337201d36eb65fcc4/required_signers',
    ],
    response: [],
  },
  {
    testName: 'txs/:tx/required_signers - 1 extra witness',
    endpoints: [
      'txs/b024ad35c6309a71a8e613d8bfea2a8185d81eda379ca9128877adefcde1c515/required_signers',
    ],
    response: [
      {
        witness_hash: 'db7685e2d763133630e1a4afdefc5752d4b1c9be6c102e71242fb06f',
      },
    ],
  },
];
