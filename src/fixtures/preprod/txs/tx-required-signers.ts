export default [
  {
    id: 'txs-tx-required-signers-no-extra-witnesses_b7b9cf652e38',
    testName: 'txs/:tx/required_signers - no extra witnesses',

    endpoints: [
      'txs/780b3d7b8fd07ae217baff7456cfb2739d1c6945638160a63fe61c1d637a6767/required_signers',
    ],

    response: [],
  },
  {
    id: 'txs-tx-required-signers-2-extra-tx-witness_c81ba5ce8d17',
    testName: 'txs/:tx/required_signers - 2 extra tx witness',

    endpoints: [
      'txs/73abc6871083cda218dd3a9001430d4cc468354f26a653049c3bc7bc10b80cff/required_signers',
    ],

    response: [
      {
        witness_hash: '59d73f90058ff6934d2a960df2dccff1f0f449afdb10146ee74f16bd',
      },
      { witness_hash: '616224caabe8a8c60f1a33cc23cb0637c96c7805cdc518eb15382378' },
    ],
  },
];
