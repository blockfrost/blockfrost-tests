import { expect } from "vitest";

import { error_400_pools, error_404 } from "../../errors/index.js";

export default [
  {
    testName: "pools/pool_id - best pool",
    endpoints: [
      "pools/pool13la5erny3srx9u4fz9tujtl2490350f89r4w4qjhk0vdjmuv78v",
      "pools/8ffb4c8e648c0662f2a91157c92feaa95f1a3d2728eaea8257b3d8d9",
    ],
    response: {
      pool_id: "pool13la5erny3srx9u4fz9tujtl2490350f89r4w4qjhk0vdjmuv78v",
      hex: "8ffb4c8e648c0662f2a91157c92feaa95f1a3d2728eaea8257b3d8d9",
      vrf_key:
        "41f661fcc0ee3e16b3c4105f993c169c89846bb77200bfb81ac15cac1eb38c6a",
      blocks_minted: expect.toBeGreaterThanOrEqual(137_781),
      blocks_epoch: expect.toBeGreaterThanOrEqual(0),
      live_stake: expect.toBeAdaQuantity(),
      live_size: expect.toBeInRange(0, 1),
      live_saturation: expect.toBeInRange(0, 1),
      live_delegators: expect.toBeInRange(1, 20_000),
      active_stake: expect.toBeAdaQuantity(),
      active_size: expect.toBeInRange(0, 1),
      declared_pledge: "220000000000",
      live_pledge: expect.toBeGreaterThanOrEqual("220000000000"),
      margin_cost: 0.0069,
      fixed_cost: "170000000",
      reward_account:
        "stake_test1ur9pv4652sv524d5qdy9q5h354er45jc3s562jp6vjykwwqyz0kzj",
      owners: [
        "stake_test1ur9pv4652sv524d5qdy9q5h354er45jc3s562jp6vjykwwqyz0kzj",
      ],
      registration: [
        "e6e7e7e137744d01d3e5a9ab2df3bd31dbc5720d5565e37dd0ef7b3ace486672",
        "6ad4fda95070666799484a0ffefb18966eb99e945f40dfa5b47db9a7aeeab220",
        "4d4f55bfd80f8a8f5f63cf30f55925ef8b8bee198967e13e9018d36713cb4973",
        "8fa1ad5310c9a81103da1d6a463a0046f74d5df166ad60d0be50a011a037eb16",
        "9e8436cab47850b28ffe52071b3161132e8105d12288d9dd8311ea793187d8e5",
        "5438579b64538dc419b64205b0f194db41b91a20e8ad870ea26a59f9b868ba36",
        "b8aa65a587e135e6f8bd1795f5db8fea28e63dea1b6ce4d3815f2b53e060e407",
        "f7995cc3e45496a6f6a50e8efa1e4ccc656c141f2e1339bf44c19d5afb144ac5",
        "c292a39d7de78d3abebe6da0778dae8c29745a91a7a596f8a74c6ac8a99f16cd",
        "a3e3650a64b11336804dd98eec886ad152ae3b8a84b90e23916e85a192182746",
        "229b7e3cc180f47212a2399d3673c3075a3c63f108c545630ddd9a52f4f0e09f",
      ],

      retirement: [],
      calidus_key: null,
    },
  },
  {
    testName: "pools/pool_id - pool with more owners",
    endpoints: [
      "pools/pool12r7sxy225v94m6qcpnzt7g85axrmrg9gc05ykplzkwu7um36dns",
      "pools/50fd03114aa30b5de8180cc4bf20f4e987b1a0a8c3e84b07e2b3b9ee",
    ],
    response: {
      pool_id: "pool12r7sxy225v94m6qcpnzt7g85axrmrg9gc05ykplzkwu7um36dns",
      hex: "50fd03114aa30b5de8180cc4bf20f4e987b1a0a8c3e84b07e2b3b9ee",
      vrf_key:
        "91406fdfd8633050bbd1194358de0ef1f01ae5fb3545b7c159291b67b2d34b13",
      blocks_minted: expect.toBeGreaterThanOrEqual(479),
      blocks_epoch: expect.toBeGreaterThanOrEqual(0),
      live_stake: expect.toBeAdaQuantity(),
      live_size: expect.toBeInRange(0, 1),
      live_saturation: expect.toBeInRange(0, 1),
      live_delegators: expect.toBeInRange(1, 20_000),
      active_stake: expect.toBeAdaQuantity(),
      active_size: expect.toBeInRange(0, 1),
      declared_pledge: "2000000000",
      live_pledge: expect.toBeGreaterThanOrEqual("2000000000"),
      margin_cost: 0.075,
      fixed_cost: "170000000",
      reward_account:
        "stake_test1uq6uczg8y79dcntjqp2rlq7hrf5szavvkeedj5tfa6rsensvfu88m",
      owners: [
        "stake_test1uq6uczg8y79dcntjqp2rlq7hrf5szavvkeedj5tfa6rsensvfu88m",
        "stake_test1upydn9u7vd3effvqx54dkxr67pc9gkqxrmeawn9avzvl78qk0rkne",
      ],
      registration: [
        "607631202297449dcc330bab1da8c5cd9930a2e2032b9602dc1549f652dcd59d",
      ],
      retirement: [],
      calidus_key: null,
    },
  },
  {
    testName: "pools/pool_id - pool with invalid reward stake address",
    endpoints: [
      "pools/pool1547tew8vmuj0g6vj3k5jfddudextcw6hsk2hwgg6pkhk7lwphe6",
      "pools/a57cbcb8ecdf24f469928da924b5bc6e4cbc3b57859577211a0daf6f",
    ],
    response: {
      pool_id: "pool1547tew8vmuj0g6vj3k5jfddudextcw6hsk2hwgg6pkhk7lwphe6",
      hex: "a57cbcb8ecdf24f469928da924b5bc6e4cbc3b57859577211a0daf6f",
      vrf_key:
        "868173d343611103acbdb3452b922bbca5e580d08da4e8f7abf3fb0f2284338a",
      blocks_minted: expect.toBeGreaterThanOrEqual(142_530),
      blocks_epoch: expect.toBeGreaterThanOrEqual(0),
      live_stake: expect.toBeAdaQuantity(),
      live_size: expect.toBeInRange(0, 1),
      live_saturation: expect.toBeInRange(0, 1),
      live_delegators: expect.toBeInRange(1, 20_000),
      active_stake: expect.toBeAdaQuantity(),
      active_size: expect.toBeInRange(0, 1),
      declared_pledge: "100000000000000",
      live_pledge: expect.toBeGreaterThanOrEqual("1000000000000"),
      margin_cost: 1,
      fixed_cost: "500000000",
      reward_account:
        "stake_test1uzkdwx64sjkt6xxtzye00y3k2m9wn5zultsguadaf4ggmssadyunp",
      owners: [
        "stake_test1uztg6yppa0t30rslkrneva5c9qju40rhndjnuy356kxw83s6n95nu",
      ],
      registration: [
        "a3d6f2627a56fe7921eeda546abfe164321881d41549b7f2fbf09ea0b718d758",
      ],
      retirement: [
        "5eaf1d1d538a15e192f82e5f5c4f3effafc59980f9b1f37e3e1b6f1fd84a8a61",
      ],
      calidus_key: null,
    },
  },
  {
    testName: "pools/pool_id - multiple times deregistered pool",
    endpoints: [
      "pools/pool1e0zq88g3duznzfenn08larmcnnarqxl7wluapazcft6jsssexch",
      "pools/cbc4039d116f053127339bcffe8f789cfa301bfe77f9d0f4584af528",
    ],
    response: {
      pool_id: "pool1e0zq88g3duznzfenn08larmcnnarqxl7wluapazcft6jsssexch",
      hex: "cbc4039d116f053127339bcffe8f789cfa301bfe77f9d0f4584af528",
      vrf_key:
        "efb86a1ed3c202ecb90961d6f81ee925d83b0916f7434fa16bc030bf87257ab3",
      blocks_minted: 0,
      blocks_epoch: 0,
      live_stake: "0",
      live_size: 0,
      live_saturation: 0,
      live_delegators: 0,
      active_stake: "0",
      active_size: 0,
      declared_pledge: "123",
      live_pledge: "0",
      margin_cost: 0,
      fixed_cost: "340000000",
      reward_account:
        "stake_test1urrd9gratla5rupapyj29nqxcjxr46f827e53rakclzn8wc662kyf",
      owners: [
        "stake_test1urrd9gratla5rupapyj29nqxcjxr46f827e53rakclzn8wc662kyf",
      ],
      registration: [
        "88b86fab82bd29ac401134f6c916191085cda7bcea28dde83eeca80b4181237f",
        "7a9626750f2b1945b6e92d6715b38cb9e321c4a413b2c55536a53a2acdfc99fa",
        "2298c1e7205e3fcb687bd640d5cc6aa528ddd482f856cde3053aa578a13ffca8",
        "a47dd7c2c14a6369c57544ffe806391326a8592ba386a905b8e7a08b11375af0",
        "026f7f8ad71ebea2c8c68d93611f9ce6ba3f69bff8d8b56cd5a5699be75f904c",
        "c524bb50582a29a03b7db16d71c02713d64bb5a7000181bc6a98bb3af26fb5d4",
      ],
      retirement: [
        "31562ad32926b3be70d3d5938347d2645c8799db33754291c3e3abe3beb03b49",
        "82d4e964f885d18502fb1c50bf88faaec348722e0b98df5ce45d57fd55a6f2ba",
        "077788d7a4b7125f82382d7f02c5a0564959a0a7ca3a74c29c2dcb2c187b7517",
        "d9af60f8014af5ccf6c674284abe19016f4ceca44e7c44c2fb6ef03ed97b8c90",
        "39b4a8b7411753c8929df9a3323e6bc13c9beaf2c87b5027fc209a0dd4abee0a",
      ],
      calidus_key: null,
    },
  },
  {
    testName: "pools/:pool_id - expired pool",
    endpoints: [
      "pools/bccae9c65c4909b7fab3444e5b5f4caa4cbf534f0e44fa2ec9d6a8dc",
    ],
    response: {
      pool_id: "pool1hn9wn3jufyym074ng389kh6v4fxt7560pez05tkf665dcm6yvn0",
      hex: "bccae9c65c4909b7fab3444e5b5f4caa4cbf534f0e44fa2ec9d6a8dc",
      vrf_key:
        "45fba821a345d7b12c6b92fc338d9483cb9de7d1b77cc61860cee861bdda6fdb",
      blocks_minted: 0,
      blocks_epoch: 0,
      live_stake: expect.toBeAdaQuantity(),
      live_size: expect.toBeInRange(0, 1),
      live_saturation: expect.toBeInRange(0, 1),
      live_delegators: 1,
      active_stake: "0",
      active_size: expect.toBeInRange(0, 1),
      declared_pledge: "1000000000",
      live_pledge: "500000000",
      margin_cost: 0.02,
      fixed_cost: "170000000",
      reward_account:
        "stake_test1uze6qfc8atnkjuntjjk02h25c6dzzq74j2d5e8wn5dqmcacqc4m7v",
      owners: [
        "stake_test1uze6qfc8atnkjuntjjk02h25c6dzzq74j2d5e8wn5dqmcacqc4m7v",
      ],
      registration: [
        "65b1f87ed679befddc1ee66814875748eeb6f3debafcb35f32c7838be73bff1b",
      ],
      retirement: [
        "21c191e9ded8ce436872e64a9379d52d4a6f9ca3203f45df312d91097f9313cf",
      ],
      calidus_key: null,
    },
  },
  {
    testName: "pools/:pool_id - expired pool no 1 - same rewards account",
    endpoints: [
      "pools/pool190dapqls3y9dxuqtexmm80sppjha7e8rhu62xydgwn4jjj07pqm",
    ],
    response: {
      pool_id: "pool190dapqls3y9dxuqtexmm80sppjha7e8rhu62xydgwn4jjj07pqm",
      hex: "2bdbd083f0890ad3700bc9b7b3be010cafdf64e3bf34a311a874eb29",
      vrf_key:
        "e46c9a3b6e559a1dead187027220ed64ca881a4b34dadbdd7edb6a1e9db5420b",
      blocks_minted: 0,
      blocks_epoch: 0,
      live_stake: expect.toBeAdaQuantity(),
      live_size: expect.toBeInRange(0, 1),
      live_saturation: expect.toBeInRange(0, 1),
      live_delegators: 1,
      active_stake: "0",
      active_size: 0,
      declared_pledge: "900000000",
      live_pledge: "19987438729",
      margin_cost: 0.009,
      fixed_cost: "340000000",
      reward_account:
        "stake_test1uz2kjvelaz2z04l7hwv3lk2q75uvlcekkmwysuhxqke2lvqkxjfuy",
      owners: [
        "stake_test1uz2kjvelaz2z04l7hwv3lk2q75uvlcekkmwysuhxqke2lvqkxjfuy",
      ],
      registration: [
        "2970e1ab583d752cc3c61d2e5474f607b941b922a8dd0dcd82ccdacc98054987",
      ],
      retirement: [
        "bbda7432ed3c90f3e78879f45148b158fc015f9820213c57ad6814cf545c593d",
      ],
      calidus_key: null,
    },
  },
  {
    testName: "pools/:pool_id - expired pool no 2 - same rewards account",
    endpoints: [
      "pools/pool1gzznwjn5ehc4t758x0skg0pv43hc6drhdjkfnj5cc6tvva5ej6j",
    ],
    response: {
      pool_id: "pool1gzznwjn5ehc4t758x0skg0pv43hc6drhdjkfnj5cc6tvva5ej6j",
      hex: "4085374a74cdf155fa8733e1643c2cac6f8d34776cac99ca98c696c6",
      vrf_key:
        "687129b1ad428a3b59a6db2c5b59796428a7964678cd49622f35c49ec02defa2",
      blocks_minted: 361,
      blocks_epoch: 0,
      live_stake: expect.toBeAdaQuantity(),
      live_size: expect.toBeInRange(0, 1),
      live_saturation: expect.toBeInRange(0, 1),
      live_delegators: 2,
      active_stake: expect.toBeAdaQuantity(),
      active_size: 0,
      declared_pledge: "15000000000",
      live_pledge: "21814238879",
      margin_cost: 0,
      fixed_cost: "340000000",
      reward_account:
        "stake_test1ur25c7kjdkvqc97xhgz7zd3ymgu6pdm4hklz6aexsjwu4zqly49ju",
      owners: [
        "stake_test1ur25c7kjdkvqc97xhgz7zd3ymgu6pdm4hklz6aexsjwu4zqly49ju",
      ],
      registration: [
        "8c753a015c82a813d9cf42ba847a5df8f0f08325f07b00cf9fdabd799b6753cf",
        "c77e5eb534d3d96aae155d1f12689b9771cdefbc306d26b2d00911d70b90ef31",
        "1321abb4eed3805e0f608039e011f4fd6d2a1c9058c6b9be9f8c6b2f1590b3a9",
        "f32eb4489cadf32a0c4b2b9fcb38654fe3b4f46652a6691d5eea40eddcfe0e5c",
        "0a890ccb7108bd9c74dfca226a2d007f5480e4a919eb7456ab6c41fcd70afb13",
        "25184e69076a57ef045db000c38a0c3acce1b2179534a3929bb54e6ba6df8a6e",
        "3bebddd3f9a4c8525af8e765b8590848ba44ba101d18c4de9b724bcdc971f3a6",
        "d3f4ec577ae374dbb1f80e25a1be717d2cc51159848dd871b3303a18866e074f",
        "9c58e67e15f79cd78522f7ae179b6046ea0862ef8bab6cfb6cc8f345dadbea6f",
        "3998277bbf82d9b6399eb546f24b5cf7ce114183938d2fa1a210452647640b98",
      ],
      retirement: [
        "332ec4177e657c910b14df3d2276ad3253aa630405b1dd088afaf8e7cca8ac0e",
      ],
      calidus_key: null,
    },
  },
  {
    testName: "pools/:pool_id - expired pool no 3 - same rewards account",
    endpoints: [
      "pools/pool1qkkpw4e4lhdpaeppdsdkesfn47q36hdnfw4v0gh27w3yc6l3fpn",
    ],
    response: {
      pool_id: "pool1qkkpw4e4lhdpaeppdsdkesfn47q36hdnfw4v0gh27w3yc6l3fpn",
      hex: "05ac175735fdda1ee4216c1b6cc133af811d5db34baac7a2eaf3a24c",
      vrf_key:
        "36f971bdf7d485b2250e838ec827a92d38d35d7dcbac757216f931d9ee92625e",
      blocks_minted: 0,
      blocks_epoch: 0,
      live_stake: expect.toBeAdaQuantity(),
      live_size: expect.toBeInRange(0, 1),
      live_saturation: expect.toBeInRange(0, 1),
      live_delegators: 1,
      active_stake: expect.toBeAdaQuantity(),
      active_size: 0,
      declared_pledge: "100000000",
      live_pledge: "10697439741",
      margin_cost: 0.15,
      fixed_cost: "345000000",
      reward_account:
        "stake_test1urxtwywtyaqdlpkt2686rpt66cee5xq04zymz5jpuf5fyhg5njs38",
      owners: [
        "stake_test1urxtwywtyaqdlpkt2686rpt66cee5xq04zymz5jpuf5fyhg5njs38",
      ],
      registration: [
        "1301c2fb7f2b0c18209b31d2207b4d4f1c4a0197c3b65c9bdabf8609850b9696",
      ],
      retirement: [
        "b2fb9a6dac8d2553271e268a3dc3580c6d3578cfe5dd5c1f3e266e027c4718c9",
      ],
      calidus_key: null,
    },
  },
  // TODO: add pool with registered calidus key once available
  // {
  //   testName: 'pools/:pool_id - calidus key',
  //   endpoints: ['pools/<todo>'],
  //   response: {},
  // },
  {
    testName: "pools/:pool_id - invalid pool",

    response: error_400_pools,
    endpoints: ["pools/pool1kek"],
  },
  {
    testName: "pools/:pool_id - valid non-existing pool (for this network)",

    response: error_404,
    endpoints: [
      "pools/pool1y6chk7x7fup4ms9leesdr57r4qy9cwxuee0msan72x976a6u0nc",
    ],
  },
];
