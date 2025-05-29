export default [
  {
    testName: "governance proposal info_action detail",

    endpoints: [
      "governance/proposals/e61f151fcef9e99dff5c705f8d5de18891f8d1d92d69fef5ff608d2c29a7c133/0",
    ],
    response: {
      tx_hash:
        "e61f151fcef9e99dff5c705f8d5de18891f8d1d92d69fef5ff608d2c29a7c133",
      cert_index: 0,
      governance_type: "info_action",
      governance_description: {
        tag: "InfoAction",
      },
      deposit: "100000000000",
      return_address:
        "stake_test1urqntq4wexjylnrdnp97qq79qkxxvrsa9lcnwr7ckjd6w0cr04y4p",
      ratified_epoch: null,
      enacted_epoch: null,
      dropped_epoch: 678,
      expired_epoch: 677,
      expiration: 677,
    },
  },
  {
    testName: "governance proposal parameter_change detail",

    endpoints: [
      "governance/proposals/4d5f4b83fecbc79767c34109b065119b28902f97b5a3f22b73ec0688a9eef86b/0",
    ],
    response: {
      tx_hash:
        "4d5f4b83fecbc79767c34109b065119b28902f97b5a3f22b73ec0688a9eef86b",
      cert_index: +0,
      governance_type: "parameter_change",
      governance_description: {
        tag: "ParameterChange",
        contents: [
          {
            txId: "1f47f3cf2e4f9109be2efe9182cae08307e5778bdfea2150e6903c48edca0b8f",
            govActionIx: +0,
          },
          { stakePoolTargetNum: 600 },
          "fa24fb305126805cf2164c161d852a0e7330cf988f1fe558cf7d4a64",
        ],
      },
      deposit: "100000000000",
      return_address:
        "stake_test1uz8lgpemq9v79y2zdru87w2h7sfa3qt4kwuuxmj7kuv8xxcz5tvhu",
      ratified_epoch: null,
      enacted_epoch: null,
      dropped_epoch: null,
      expired_epoch: null,
      expiration: 956,
    },
  },
  {
    testName: "governance proposal parameter_change detail 2",

    endpoints: [
      "governance/proposals/95af8608dc7aaf5c73025066b509a2c11c829f2984009ac92e7053d123fbce57/0",
    ],
    response: {
      tx_hash:
        "95af8608dc7aaf5c73025066b509a2c11c829f2984009ac92e7053d123fbce57",
      cert_index: +0,
      governance_type: "parameter_change",
      governance_description: {
        tag: "ParameterChange",
        contents: [
          null,
          {
            costModels: {
              PlutusV3: [
                100788, 420, 1, 1, 1000, 173, +0, 1, 1000, 59957, 4, 1, 11183,
                32, 201305, 8356, 4, 16000, 100, 16000, 100, 16000, 100, 16000,
                100, 16000, 100, 16000, 100, 100, 100, 16000, 100, 94375, 32,
                132994, 32, 61462, 4, 72010, 178, +0, 1, 22151, 32, 91189, 769,
                4, 2, 85848, 123203, 7305, -900, 1716, 549, 57, 85848, +0, 1, 1,
                1000, 42921, 4, 2, 24548, 29498, 38, 1, 898148, 27279, 1, 51775,
                558, 1, 39184, 1000, 60594, 1, 141895, 32, 83150, 32, 15299, 32,
                76049, 1, 13169, 4, 22100, 10, 28999, 74, 1, 28999, 74, 1,
                43285, 552, 1, 44749, 541, 1, 33852, 32, 68246, 32, 72362, 32,
                7243, 32, 7391, 32, 11546, 32, 85848, 123203, 7305, -900, 1716,
                549, 57, 85848, +0, 1, 90434, 519, +0, 1, 74433, 32, 85848,
                123203, 7305, -900, 1716, 549, 57, 85848, +0, 1, 1, 85848,
                123203, 7305, -900, 1716, 549, 57, 85848, +0, 1, 955506, 213312,
                +0, 2, 270652, 22588, 4, 1457325, 64566, 4, 20467, 1, 4, +0,
                141992, 32, 100788, 420, 1, 1, 81663, 32, 59498, 32, 20142, 32,
                24588, 32, 20744, 32, 25933, 32, 24623, 32, 43053543, 10,
                53384111, 14333, 10, 43574283, 26308, 10, 16000, 100, 16000,
                100, 962335, 18, 2780678, 6, 442008, 1, 52538055, 3756, 18,
                267929, 18, 76433006, 8868, 18, 52948122, 18, 1995836, 36,
                3227919, 12, 901022, 1, 166917843, 4307, 36, 284546, 36,
                158221314, 26549, 36, 74698472, 36, 333849714, 1, 254006273, 72,
                2174038, 72, 2261318, 64571, 4, 207616, 8310, 4, 1293828, 28716,
                63, +0, 1, 1006041, 43623, 251, +0, 1,
              ],
            },
          },
          "fa24fb305126805cf2164c161d852a0e7330cf988f1fe558cf7d4a64",
        ],
      },
      deposit: "100000000000",
      return_address:
        "stake_test1uz6ljatyc7w52z44hskd5pu5cvw7qemwz6re3ux4pmdqumcn2qyrx",
      ratified_epoch: null,
      enacted_epoch: null,
      dropped_epoch: 736,
      expired_epoch: null,
      expiration: 759,
    },
  },
  {
    testName: "governance treasury_withdrawals detail",

    endpoints: [
      "governance/proposals/cbdfd1717b4e7ea2d4b3c141387b24f2f31fac8be8fec64c3b70870bad425643/0",
    ],
    response: {
      tx_hash:
        "cbdfd1717b4e7ea2d4b3c141387b24f2f31fac8be8fec64c3b70870bad425643",
      cert_index: 0,
      governance_type: "treasury_withdrawals",
      governance_description: {
        tag: "TreasuryWithdrawals",
        contents: [
          [
            [
              {
                network: "Testnet",
                credential: {
                  keyHash:
                    "4e641f833be7026d9948ff6ab61791123166a1c84f58fd472a6b33a5",
                },
              },
              283,
            ],
          ],
          "fa24fb305126805cf2164c161d852a0e7330cf988f1fe558cf7d4a64",
        ],
      },
      deposit: "100000000000",
      return_address:
        "stake_test1up8xg8ur80nsymvefrlk4dshjyfrze4pep843l289f4n8fgrtrmy4",
      ratified_epoch: null,
      enacted_epoch: null,
      dropped_epoch: 838,
      expired_epoch: 837,
      expiration: 837,
    },
  },
  {
    testName: "governance new_constitution detail",

    endpoints: [
      "governance/proposals/88f0d0fc7a6bac735be72963d2919105c1220b25ffaa69b0b166f4d4b8027ff1/0",
    ],
    response: {
      tx_hash:
        "88f0d0fc7a6bac735be72963d2919105c1220b25ffaa69b0b166f4d4b8027ff1",
      cert_index: 0,
      governance_type: "new_constitution",
      governance_description: {
        tag: "NewConstitution",
        contents: [
          null,
          {
            anchor: {
              url: "https://metadata.drep.id/data/10cab0c13daf5dee5ed91e5166c5c0f9c02aba55054c77767868f18d1465a6fd",
              dataHash:
                "10cab0c13daf5dee5ed91e5166c5c0f9c02aba55054c77767868f18d1465a6fd",
            },
            script: "db1bc3c3f99ce68977ceaf27ab4dd917123ef9e73f85c304236eab23",
          },
        ],
      },
      deposit: "100000000000",
      return_address:
        "stake_test1uryzv36xvlgm0kcnzv8kayprmxvsvp8g039nrlqpysfjhjq8q3652",
      ratified_epoch: null,
      enacted_epoch: null,
      dropped_epoch: 851,
      expired_epoch: 850,
      expiration: 850,
    },
  },
  {
    testName: "governance proposal new_committee detail",

    endpoints: [
      "governance/proposals/bfdf53cfc743b6673b32a83c1dc8a45d6700c9fafa3360c02047d42c794d1f9b/0",
    ],
    response: {
      tx_hash:
        "bfdf53cfc743b6673b32a83c1dc8a45d6700c9fafa3360c02047d42c794d1f9b",
      cert_index: +0,
      governance_type: "new_committee",
      governance_description: {
        tag: "UpdateCommittee",
        contents: [
          null,
          [],
          {
            "keyHash-19c5d6b49d6c4dc8bd97cb6b47a68e3a7934703c1e62809e6930c477": 5662,
            "keyHash-6ebf3e3ea7bc4c9ec6e57d52ad405bb62afd3402dd6dbc73ead56023": 8066,
          },
          { numerator: 7, denominator: 19 },
        ],
      },
      deposit: "100000000000",
      return_address:
        "stake_test1urd3hs7rlxwwdzthe6hj026dmyt3y0heuulctscyydh2kgck6nkmz",
      ratified_epoch: null,
      enacted_epoch: null,
      dropped_epoch: 782,
      expired_epoch: 781,
      expiration: 781,
    },
  },
  {
    testName: "governance proposal hard_fork_initiation detail",

    endpoints: [
      "governance/proposals/4afc683dcd1274db4c08243500b54f44590368172fef70e114434465fdd6e6aa/0",
    ],
    response: {
      tx_hash:
        "4afc683dcd1274db4c08243500b54f44590368172fef70e114434465fdd6e6aa",
      cert_index: +0,
      governance_type: "hard_fork_initiation",
      governance_description: {
        tag: "HardForkInitiation",
        contents: [
          {
            txId: "049ae5d612b2fa825655809133b023d60c7f8cac683c278cf95de1622e4592f3",
            govActionIx: +0,
          },
          { major: 11, minor: +0 },
        ],
      },
      deposit: "100000000000",
      return_address:
        "stake_test1urd3hs7rlxwwdzthe6hj026dmyt3y0heuulctscyydh2kgck6nkmz",
      ratified_epoch: null,
      enacted_epoch: null,
      dropped_epoch: 782,
      expired_epoch: 781,
      expiration: 781,
    },
  },
  {
    testName: "governance proposal no_confidence detail",

    endpoints: [
      "governance/proposals/373f95678adba793c11b298fa1538e389e3adde2cf41ffaacf943bc1210ccb45/0",
    ],
    response: {
      tx_hash:
        "373f95678adba793c11b298fa1538e389e3adde2cf41ffaacf943bc1210ccb45",
      cert_index: +0,
      governance_type: "no_confidence",
      governance_description: { tag: "NoConfidence", contents: null },
      deposit: "100000000000",
      return_address:
        "stake_test1upe8zhshcv6nssmcywdcxrk2z80q7ah5xmprzvmnjkj2ehch9nrjd",
      ratified_epoch: null,
      enacted_epoch: null,
      dropped_epoch: null,
      expired_epoch: null,
      expiration: 956,
    },
  },
];
