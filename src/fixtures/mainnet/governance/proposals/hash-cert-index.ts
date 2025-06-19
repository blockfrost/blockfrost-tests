export default [
  {
    testName: "governance proposal info_action detail",

    endpoints: [
      "governance/proposals/15f82a365bdee483a4b03873a40d3829cc88c048ff3703e11bd01dd9e035c916/0",
    ],
    response: {
      tx_hash:
        "15f82a365bdee483a4b03873a40d3829cc88c048ff3703e11bd01dd9e035c916",
      cert_index: 0,
      governance_type: "info_action",
      governance_description: {
        tag: "InfoAction",
      },
      deposit: "100000000000",
      return_address:
        "stake1u9zaaehwt4lkxxmzym2972w6gywy97n7s9kup9ydx8sdhfcjxtusp",
      ratified_epoch: null,
      enacted_epoch: null,
      dropped_epoch: 515,
      expired_epoch: 514,
      expiration: 514,
    },
  },
  {
    testName: "governance proposal parameter_change detail",

    endpoints: [
      "governance/proposals/b2a591ac219ce6dcca5847e0248015209c7cb0436aa6bd6863d0c1f152a60bc5/0",
    ],
    response: {
      tx_hash:
        "b2a591ac219ce6dcca5847e0248015209c7cb0436aa6bd6863d0c1f152a60bc5",
      cert_index: 0,
      governance_type: "parameter_change",
      governance_description: {
        tag: "ParameterChange",
        contents: [
          null,
          {
            costModels: {
              PlutusV3: [
                100788, 420, 1, 1, 1000, 173, 0, 1, 1000, 59957, 4, 1, 11183,
                32, 201305, 8356, 4, 16000, 100, 16000, 100, 16000, 100, 16000,
                100, 16000, 100, 16000, 100, 100, 100, 16000, 100, 94375, 32,
                132994, 32, 61462, 4, 72010, 178, 0, 1, 22151, 32, 91189, 769,
                4, 2, 85848, 123203, 7305, -900, 1716, 549, 57, 85848, 0, 1, 1,
                1000, 42921, 4, 2, 24548, 29498, 38, 1, 898148, 27279, 1, 51775,
                558, 1, 39184, 1000, 60594, 1, 141895, 32, 83150, 32, 15299, 32,
                76049, 1, 13169, 4, 22100, 10, 28999, 74, 1, 28999, 74, 1,
                43285, 552, 1, 44749, 541, 1, 33852, 32, 68246, 32, 72362, 32,
                7243, 32, 7391, 32, 11546, 32, 85848, 123203, 7305, -900, 1716,
                549, 57, 85848, 0, 1, 90434, 519, 0, 1, 74433, 32, 85848,
                123203, 7305, -900, 1716, 549, 57, 85848, 0, 1, 1, 85848,
                123203, 7305, -900, 1716, 549, 57, 85848, 0, 1, 955506, 213312,
                0, 2, 270652, 22588, 4, 1457325, 64566, 4, 20467, 1, 4, 0,
                141992, 32, 100788, 420, 1, 1, 81663, 32, 59498, 32, 20142, 32,
                24588, 32, 20744, 32, 25933, 32, 24623, 32, 43053543, 10,
                53384111, 14333, 10, 43574283, 26308, 10, 16000, 100, 16000,
                100, 962335, 18, 2780678, 6, 442008, 1, 52538055, 3756, 18,
                267929, 18, 76433006, 8868, 18, 52948122, 18, 1995836, 36,
                3227919, 12, 901022, 1, 166917843, 4307, 36, 284546, 36,
                158221314, 26549, 36, 74698472, 36, 333849714, 1, 254006273, 72,
                2174038, 72, 2261318, 64571, 4, 207616, 8310, 4, 1293828, 28716,
                63, 0, 1, 1006041, 43623, 251, 0, 1, 100181, 726, 719, 0, 1,
                100181, 726, 719, 0, 1, 100181, 726, 719, 0, 1, 107878, 680, 0,
                1, 95336, 1, 281145, 18848, 0, 1, 180194, 159, 1, 1, 158519,
                8942, 0, 1, 159378, 8813, 0, 1, 107490, 3298, 1, 106057, 655, 1,
                1964219, 24520, 3,
              ],
            },
          },
          "fa24fb305126805cf2164c161d852a0e7330cf988f1fe558cf7d4a64",
        ],
      },
      deposit: "100000000000",
      return_address:
        "stake1uyguuqwdpexmhgjd07vax5t2ay3f7qvea49ex907g6fmvjclq6l03",
      ratified_epoch: 525,
      enacted_epoch: 526,
      dropped_epoch: 526,
      expired_epoch: null,
      expiration: 526,
    },
  },
  {
    testName: "governance proposal hard_fork_initiation detail",

    endpoints: [
      "governance/proposals/0b19476e40bbbb5e1e8ce153523762e2b6859e7ecacbaf06eae0ee6a447e79b9/0",
    ],
    response: {
      tx_hash:
        "0b19476e40bbbb5e1e8ce153523762e2b6859e7ecacbaf06eae0ee6a447e79b9",
      cert_index: 0,
      governance_type: "hard_fork_initiation",
      governance_description: {
        tag: "HardForkInitiation",
        contents: [
          null,
          {
            major: 10,
            minor: 0,
          },
        ],
      },
      deposit: "100000000000",
      return_address:
        "stake1uyguuqwdpexmhgjd07vax5t2ay3f7qvea49ex907g6fmvjclq6l03",
      ratified_epoch: 536,
      enacted_epoch: 537,
      dropped_epoch: null,
      expired_epoch: null,
      expiration: 536,
    },
  },
];
