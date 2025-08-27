export default [
  {
    id: 'governance-proposal-info-action-detail_b8a98f685892',
    testName: 'governance proposal info_action detail',

    endpoints: [
      'governance/proposals/aff2909f8175ee02a8c1bf96ff516685d25bf0c6b95aac91f4dfd53a5c0867cc/0',
    ],

    response: {
      tx_hash: 'aff2909f8175ee02a8c1bf96ff516685d25bf0c6b95aac91f4dfd53a5c0867cc',
      cert_index: 0,
      governance_type: 'info_action',
      governance_description: {
        tag: 'InfoAction',
      },
      deposit: '100000000000',
      return_address: 'stake_test1upqt8jvd8d045a6gs2wkzt57rnx47s5ewz4un2l746r847g7hgw24',
      ratified_epoch: null,
      enacted_epoch: null,
      dropped_epoch: 173,
      expired_epoch: 172,
      expiration: 172,
    },
  },
  {
    id: 'governance-proposal-parameter-change-detail_e908709abef5',
    testName: 'governance proposal parameter_change detail',

    endpoints: [
      'governance/proposals/b52f02288e3ce8c7e57455522f4edd09c12797749e2db32098ecbe980b645d45/0',
    ],

    response: {
      tx_hash: 'b52f02288e3ce8c7e57455522f4edd09c12797749e2db32098ecbe980b645d45',
      cert_index: 0,
      governance_type: 'parameter_change',
      governance_description: {
        tag: 'ParameterChange',
        contents: [
          null,
          {
            costModels: {
              PlutusV3: [
                100788, 420, 1, 1, 1000, 173, 0, 1, 1000, 59957, 4, 1, 11183, 32, 201305, 8356, 4,
                16000, 100, 16000, 100, 16000, 100, 16000, 100, 16000, 100, 16000, 100, 100, 100,
                16000, 100, 94375, 32, 132994, 32, 61462, 4, 72010, 178, 0, 1, 22151, 32, 91189,
                769, 4, 2, 85848, 123203, 7305, -900, 1716, 549, 57, 85848, 0, 1, 1, 1000, 42921, 4,
                2, 24548, 29498, 38, 1, 898148, 27279, 1, 51775, 558, 1, 39184, 1000, 60594, 1,
                141895, 32, 83150, 32, 15299, 32, 76049, 1, 13169, 4, 22100, 10, 28999, 74, 1,
                28999, 74, 1, 43285, 552, 1, 44749, 541, 1, 33852, 32, 68246, 32, 72362, 32, 7243,
                32, 7391, 32, 11546, 32, 85848, 123203, 7305, -900, 1716, 549, 57, 85848, 0, 1,
                90434, 519, 0, 1, 74433, 32, 85848, 123203, 7305, -900, 1716, 549, 57, 85848, 0, 1,
                1, 85848, 123203, 7305, -900, 1716, 549, 57, 85848, 0, 1, 955506, 213312, 0, 2,
                270652, 22588, 4, 1457325, 64566, 4, 20467, 1, 4, 0, 141992, 32, 100788, 420, 1, 1,
                81663, 32, 59498, 32, 20142, 32, 24588, 32, 20744, 32, 25933, 32, 24623, 32,
                43053543, 10, 53384111, 14333, 10, 43574283, 26308, 10, 16000, 100, 16000, 100,
                962335, 18, 2780678, 6, 442008, 1, 52538055, 3756, 18, 267929, 18, 76433006, 8868,
                18, 52948122, 18, 1995836, 36, 3227919, 12, 901022, 1, 166917843, 4307, 36, 284546,
                36, 158221314, 26549, 36, 74698472, 36, 333849714, 1, 254006273, 72, 2174038, 72,
                2261318, 64571, 4, 207616, 8310, 4, 1293828, 28716, 63, 0, 1, 1006041, 43623, 251,
                0, 1, 100181, 726, 719, 0, 1, 100181, 726, 719, 0, 1, 100181, 726, 719, 0, 1,
                107878, 680, 0, 1, 95336, 1, 281145, 18848, 0, 1, 180194, 159, 1, 1, 158519, 8942,
                0, 1, 159378, 8813, 0, 1, 107490, 3298, 1, 106057, 655, 1, 1964219, 24520, 3,
              ],
            },
          },
          'fa24fb305126805cf2164c161d852a0e7330cf988f1fe558cf7d4a64',
        ],
      },
      deposit: '100000000000',
      return_address: 'stake_test1uz6ljatyc7w52z44hskd5pu5cvw7qemwz6re3ux4pmdqumcn2qyrx',
      ratified_epoch: 179,
      enacted_epoch: 180,
      dropped_epoch: 180,
      expired_epoch: null,
      expiration: 184,
    },
  },
  {
    id: 'governance-proposal-parameter-change-ryan_8941d45defe7',
    testName: 'governance proposal parameter_change Ryan',

    endpoints: [
      'governance/proposals/0ecc74fe26532cec1ab9a299f082afc436afc888ca2dc0fc6acda431c52dc60d/0',
    ],

    response: {
      tx_hash: '0ecc74fe26532cec1ab9a299f082afc436afc888ca2dc0fc6acda431c52dc60d',
      cert_index: 0,
      governance_type: 'parameter_change',
      governance_description: {
        tag: 'ParameterChange',
        contents: [
          null,
          {
            stakeAddressDeposit: 1234567,
          },
          'fa24fb305126805cf2164c161d852a0e7330cf988f1fe558cf7d4a64',
        ],
      },
      deposit: '100000000000',
      return_address: 'stake_test1upfpm2244k8jf00l357t3adp2hzfsuqrwqvleheqjj08uhswme5cn',
      ratified_epoch: null,
      enacted_epoch: null,
      dropped_epoch: 171,
      expired_epoch: 170,
      expiration: 170,
    },
  },
  {
    id: 'governance-proposal-hard-fork-initiation-detail_9bd72ec997fa',
    testName: 'governance proposal hard_fork_initiation detail',

    endpoints: [
      'governance/proposals/ccb27f6b0d58c25ae33fd821b62c387f5230dae930afd07489fa3df56ae56522/0',
    ],

    response: {
      tx_hash: 'ccb27f6b0d58c25ae33fd821b62c387f5230dae930afd07489fa3df56ae56522',
      cert_index: 0,
      governance_type: 'hard_fork_initiation',
      governance_description: {
        tag: 'HardForkInitiation',
        contents: [
          null,
          {
            major: 10,
            minor: 0,
          },
        ],
      },
      deposit: '100000000000',
      return_address: 'stake_test1uz6ljatyc7w52z44hskd5pu5cvw7qemwz6re3ux4pmdqumcn2qyrx',
      ratified_epoch: 180,
      enacted_epoch: 181,
      dropped_epoch: 181,
      expired_epoch: null,
      expiration: 185,
    },
  },
  {
    id: 'governance-proposal-new-committee-detail_1ef5ff0fc3b2',
    testName: 'governance proposal new_committee detail',

    endpoints: [
      'governance/proposals/be1640dd2b3485e94703be5683c804d5051d96c12e1eaacc17c30e74de580ce5/0',
    ],

    response: {
      tx_hash: 'be1640dd2b3485e94703be5683c804d5051d96c12e1eaacc17c30e74de580ce5',
      cert_index: 0,
      governance_type: 'new_committee',
      governance_description: {
        tag: 'UpdateCommittee',
        contents: [
          null,
          [],
          {
            'keyHash-379569411996ae5b16fc5d79ec08cd9cbe420e7a73456c8dc6c13367': 200,
          },
          0.66,
        ],
      },
      deposit: '100000000000',
      return_address: 'stake_test1uz0hsdqhrv8pneylfkwj77s8r0xls0dh03ane72a3u8dtsgmasfxe',
      ratified_epoch: null,
      enacted_epoch: null,
      dropped_epoch: 198,
      expired_epoch: 197,
      expiration: 197,
    },
  },
  {
    id: 'governance-proposal-treasury-withdrawals-detail_a95cc45efe41',
    testName: 'governance proposal treasury_withdrawals detail',

    endpoints: [
      'governance/proposals/372d688faa77e146798b581b322c0f2981a9023764736ade5d12e0e4e796af8c/0',
    ],

    response: {
      tx_hash: '372d688faa77e146798b581b322c0f2981a9023764736ade5d12e0e4e796af8c',
      cert_index: 0,
      governance_type: 'treasury_withdrawals',
      governance_description: {
        tag: 'TreasuryWithdrawals',
        contents: [
          [
            [
              {
                network: 'Testnet',
                credential: {
                  keyHash: '4245236ab8056760efceebbff57e8cab220182be3e36439e520a6454',
                },
              },
              1000000000000,
            ],
          ],
          'fa24fb305126805cf2164c161d852a0e7330cf988f1fe558cf7d4a64',
        ],
      },
      deposit: '100000000000',
      return_address: 'stake_test1uppy2gm2hqzkwc80em4mlat73j4jyqvzhclrvsu72g9xg4q2yweet',
      ratified_epoch: null,
      enacted_epoch: null,
      dropped_epoch: 190,
      expired_epoch: 189,
      expiration: 189,
    },
  },
];
