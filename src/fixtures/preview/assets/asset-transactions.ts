import { getPaginationFixtures } from "../../../utils.js";

const paginationFixtures = getPaginationFixtures(
  "assets/295ac3ec6d2795c55582f1280e62601afd2d6bc674830112144bd025434f4e54/transactions",
);

export default [
  ...paginationFixtures,
  {
    testName: "assets/:asset/transactions - DJED",
    endpoints: [
      "assets/7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d4144415f544544595354414b45315f4c50/transactions",
      "assets/7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d4144415f544544595354414b45315f4c50/transactions?order=asc",
      "assets/7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d4144415f544544595354414b45315f4c50/transactions?count=100&page=1&order=asc",
    ],

    response: [
      {
        tx_hash:
          "44c572ccad7ac911bdaf0a46ce3758ccf5da408b79ce896b1dd2a31cb1c1c57d",
        tx_index: 1,
        block_height: 1449809,
        block_time: 1700117698,
      },
      {
        tx_hash:
          "dff7528f4f9306dad36429dde693fec1142f1cc18509bbe65d38bfa4ee15e128",
        tx_index: 0,
        block_height: 1449826,
        block_time: 1700117988,
      },
      {
        tx_hash:
          "ec544bff35f1045132cd92e9ae73e6a4333aa1729f029369898e240994028dc6",
        tx_index: 0,
        block_height: 1449831,
        block_time: 1700118109,
      },
      {
        tx_hash:
          "f5c1de2e622d0327d8f3e9229ac3c8a0f01bb9720389d59d78cfe957dfff8ddd",
        tx_index: 0,
        block_height: 1449832,
        block_time: 1700118197,
      },
      {
        tx_hash:
          "63b84ec34b5cbf308dedf9955ca4676849cd2a7337a3e8942ce05aabd23fef27",
        tx_index: 0,
        block_height: 1452162,
        block_time: 1700174409,
      },
      {
        tx_hash:
          "4675bc1045664df8b96eb40192a83b87d052fecb370026df44cd245f831de838",
        tx_index: 0,
        block_height: 1452163,
        block_time: 1700174472,
      },
      {
        tx_hash:
          "1780c5d8d6e9505588fac2192c901221e30fb1469ac027562816a1f724ca1186",
        tx_index: 0,
        block_height: 1452172,
        block_time: 1700174678,
      },
      {
        tx_hash:
          "abcab3c8f70082567d7da6d4f0ea445e6ae5262946da5ef3519813557d64ef74",
        tx_index: 1,
        block_height: 1452173,
        block_time: 1700174739,
      },
      {
        tx_hash:
          "200e16dd9b8cb0da8e6d9b3d034ffe4072aed02b752b3f03f65062944dfc7f80",
        tx_index: 0,
        block_height: 1452193,
        block_time: 1700175385,
      },
      {
        tx_hash:
          "5ba7a1011c0af5b2489b4e49d45dc37b7657b9645e1655fbecf86dfcf300077e",
        tx_index: 1,
        block_height: 1452194,
        block_time: 1700175400,
      },
      {
        tx_hash:
          "bdc41de3553a78f192bc75cb5362912cc419be9c4baac39e54c0326ae66d33be",
        tx_index: 0,
        block_height: 1452199,
        block_time: 1700175546,
      },
      {
        tx_hash:
          "734feabb810584565d62445d9190a5328294b327f28c4172286c7e08319e68bb",
        tx_index: 1,
        block_height: 1452202,
        block_time: 1700175586,
      },
      {
        tx_hash:
          "6170ca9a13fb4c6069b91b0c6e49df5c2219b6213005fbd8ca66ea5600199108",
        tx_index: 1,
        block_height: 1452237,
        block_time: 1700176416,
      },
      {
        tx_hash:
          "0fcdab2f671b4be7be29c4496f125359fa61383989338da741a12c232f5027af",
        tx_index: 0,
        block_height: 1452240,
        block_time: 1700176600,
      },
      {
        tx_hash:
          "64f4858da2cc2f9743b40fe527f99d70c570331c58aedec0e4354f8c9c32bb2b",
        tx_index: 1,
        block_height: 1452253,
        block_time: 1700176820,
      },
      {
        tx_hash:
          "32fa61cf438345efe5340081be24b007c233c5c4d7b2a80cfe92b4902a424bb6",
        tx_index: 1,
        block_height: 1452270,
        block_time: 1700177248,
      },
      {
        tx_hash:
          "e0c5a2d7607d1f6b04227085c098d1b22c95496ffa27205cc293c4e941146e52",
        tx_index: 1,
        block_height: 1452281,
        block_time: 1700177410,
      },
      {
        tx_hash:
          "32f41e3bf53af3d6eb629187549bbcb50accf55ed728126c85d451ba14019a32",
        tx_index: 0,
        block_height: 1452321,
        block_time: 1700178242,
      },
      {
        tx_hash:
          "0539a544441d36a5df880a2e39572683942df55cc4be3909e2dee3e1f3453647",
        tx_index: 1,
        block_height: 1452343,
        block_time: 1700178792,
      },
      {
        tx_hash:
          "4004ff1e9f57ce72a647e0f5e94432b7ddb6bafa127b189297f892e9aa14913f",
        tx_index: 0,
        block_height: 1465524,
        block_time: 1700480625,
      },
      {
        tx_hash:
          "aefc1b1a2d47e8f79ab46c789c97687ec1af211ada80bc106810be7725fcb7c7",
        tx_index: 2,
        block_height: 1469092,
        block_time: 1700563151,
      },
      {
        tx_hash:
          "9d7f5780a98f60ea4903d5443742aa164933166cddb64523856624e8d8f70e2b",
        tx_index: 4,
        block_height: 1850027,
        block_time: 1709818272,
      },
      {
        tx_hash:
          "90c01a3789a2788cf3da3b320d50c9ef2fc851b21dde328f9ed967f70c92f920",
        tx_index: 0,
        block_height: 2006065,
        block_time: 1713560265,
      },
    ],
  },
  {
    testName: "assets/:asset/transactions - DJED desc",
    endpoints: [
      "assets/7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d4144415f544544595354414b45315f4c50/transactions?order=desc",
      "assets/7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d4144415f544544595354414b45315f4c50/transactions?count=100&page=1&order=desc",
    ],

    response: [
      {
        tx_hash:
          "90c01a3789a2788cf3da3b320d50c9ef2fc851b21dde328f9ed967f70c92f920",
        tx_index: +0,
        block_height: 2006065,
        block_time: 1713560265,
      },
      {
        tx_hash:
          "9d7f5780a98f60ea4903d5443742aa164933166cddb64523856624e8d8f70e2b",
        tx_index: 4,
        block_height: 1850027,
        block_time: 1709818272,
      },
      {
        tx_hash:
          "aefc1b1a2d47e8f79ab46c789c97687ec1af211ada80bc106810be7725fcb7c7",
        tx_index: 2,
        block_height: 1469092,
        block_time: 1700563151,
      },
      {
        tx_hash:
          "4004ff1e9f57ce72a647e0f5e94432b7ddb6bafa127b189297f892e9aa14913f",
        tx_index: +0,
        block_height: 1465524,
        block_time: 1700480625,
      },
      {
        tx_hash:
          "0539a544441d36a5df880a2e39572683942df55cc4be3909e2dee3e1f3453647",
        tx_index: 1,
        block_height: 1452343,
        block_time: 1700178792,
      },
      {
        tx_hash:
          "32f41e3bf53af3d6eb629187549bbcb50accf55ed728126c85d451ba14019a32",
        tx_index: +0,
        block_height: 1452321,
        block_time: 1700178242,
      },
      {
        tx_hash:
          "e0c5a2d7607d1f6b04227085c098d1b22c95496ffa27205cc293c4e941146e52",
        tx_index: 1,
        block_height: 1452281,
        block_time: 1700177410,
      },
      {
        tx_hash:
          "32fa61cf438345efe5340081be24b007c233c5c4d7b2a80cfe92b4902a424bb6",
        tx_index: 1,
        block_height: 1452270,
        block_time: 1700177248,
      },
      {
        tx_hash:
          "64f4858da2cc2f9743b40fe527f99d70c570331c58aedec0e4354f8c9c32bb2b",
        tx_index: 1,
        block_height: 1452253,
        block_time: 1700176820,
      },
      {
        tx_hash:
          "0fcdab2f671b4be7be29c4496f125359fa61383989338da741a12c232f5027af",
        tx_index: +0,
        block_height: 1452240,
        block_time: 1700176600,
      },
      {
        tx_hash:
          "6170ca9a13fb4c6069b91b0c6e49df5c2219b6213005fbd8ca66ea5600199108",
        tx_index: 1,
        block_height: 1452237,
        block_time: 1700176416,
      },
      {
        tx_hash:
          "734feabb810584565d62445d9190a5328294b327f28c4172286c7e08319e68bb",
        tx_index: 1,
        block_height: 1452202,
        block_time: 1700175586,
      },
      {
        tx_hash:
          "bdc41de3553a78f192bc75cb5362912cc419be9c4baac39e54c0326ae66d33be",
        tx_index: +0,
        block_height: 1452199,
        block_time: 1700175546,
      },
      {
        tx_hash:
          "5ba7a1011c0af5b2489b4e49d45dc37b7657b9645e1655fbecf86dfcf300077e",
        tx_index: 1,
        block_height: 1452194,
        block_time: 1700175400,
      },
      {
        tx_hash:
          "200e16dd9b8cb0da8e6d9b3d034ffe4072aed02b752b3f03f65062944dfc7f80",
        tx_index: +0,
        block_height: 1452193,
        block_time: 1700175385,
      },
      {
        tx_hash:
          "abcab3c8f70082567d7da6d4f0ea445e6ae5262946da5ef3519813557d64ef74",
        tx_index: 1,
        block_height: 1452173,
        block_time: 1700174739,
      },
      {
        tx_hash:
          "1780c5d8d6e9505588fac2192c901221e30fb1469ac027562816a1f724ca1186",
        tx_index: +0,
        block_height: 1452172,
        block_time: 1700174678,
      },
      {
        tx_hash:
          "4675bc1045664df8b96eb40192a83b87d052fecb370026df44cd245f831de838",
        tx_index: +0,
        block_height: 1452163,
        block_time: 1700174472,
      },
      {
        tx_hash:
          "63b84ec34b5cbf308dedf9955ca4676849cd2a7337a3e8942ce05aabd23fef27",
        tx_index: +0,
        block_height: 1452162,
        block_time: 1700174409,
      },
      {
        tx_hash:
          "f5c1de2e622d0327d8f3e9229ac3c8a0f01bb9720389d59d78cfe957dfff8ddd",
        tx_index: +0,
        block_height: 1449832,
        block_time: 1700118197,
      },
      {
        tx_hash:
          "ec544bff35f1045132cd92e9ae73e6a4333aa1729f029369898e240994028dc6",
        tx_index: +0,
        block_height: 1449831,
        block_time: 1700118109,
      },
      {
        tx_hash:
          "dff7528f4f9306dad36429dde693fec1142f1cc18509bbe65d38bfa4ee15e128",
        tx_index: +0,
        block_height: 1449826,
        block_time: 1700117988,
      },
      {
        tx_hash:
          "44c572ccad7ac911bdaf0a46ce3758ccf5da408b79ce896b1dd2a31cb1c1c57d",
        tx_index: 1,
        block_height: 1449809,
        block_time: 1700117698,
      },
    ],
  },
  {
    testName: "assets/:asset/transactions - DJED pagination",
    endpoints: [
      "assets/7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d4144415f544544595354414b45315f4c50/transactions?count=3&page=1",
    ],

    response: [
      {
        tx_hash:
          "44c572ccad7ac911bdaf0a46ce3758ccf5da408b79ce896b1dd2a31cb1c1c57d",
        tx_index: 1,
        block_height: 1449809,
        block_time: 1700117698,
      },
      {
        tx_hash:
          "dff7528f4f9306dad36429dde693fec1142f1cc18509bbe65d38bfa4ee15e128",
        tx_index: +0,
        block_height: 1449826,
        block_time: 1700117988,
      },
      {
        tx_hash:
          "ec544bff35f1045132cd92e9ae73e6a4333aa1729f029369898e240994028dc6",
        tx_index: +0,
        block_height: 1449831,
        block_time: 1700118109,
      },
    ],
  },
];
