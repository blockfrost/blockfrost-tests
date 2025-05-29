export default [
  {
    testName:
      "accounts/:stake_address generic dormant stake address with one address",
    endpoints: [
      "accounts/stake_test17z3asy8j38jwwev9n856wl5z88fwsnmy5vt4endnalm6tsc33dwc2/addresses",
    ],

    response: [
      {
        address:
          "addr_test1xznnmfk43w5cag3m7e9nnfe0wcsg5lx8afv4u9utjk3zxv9rmqg09z0yuajctx0f5algywwjap8kfgchtnxm8mlh5hpskzjeaz",
      },
    ],
  },
  {
    testName:
      "accounts/:stake_address generic stake address with zero addresses",
    endpoints: [
      "accounts/stake_test1urfjhemxd66mhxds7g6w07gsfy6dx2fheh6jv7zyd88l54qxghsqh/addresses",
    ],

    response: [],
  },
];
