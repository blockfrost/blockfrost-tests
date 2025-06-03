import {
  error_400,
  error_400_addresses,
  error_404,
} from "../../errors/index.js";
import { expect } from "vitest";

export default [
  {
    // addr type 1 (scripthash/StakeKeyHash) holds 1 ada addr_test1zpv68zsj9af8sxg0du6zxzmnwm4ch6atlyhcwfqdyfc7qy3u7yzv8ay6qvmlywtgvt7exaxt783dxuzv03qal7muda5srdg8p9
    // addr type 3 (scripthash/scripthash) holds 3 ada addr_test1xpv68zsj9af8sxg0du6zxzmnwm4ch6atlyhcwfqdyfc7qyje5w9pyt6j0qvs7me5yv9hxaht3046h7f0sujq6gn3uqfqu495jl
    // script1tx3c5y302fupjrm0xs3skumkaw97h2le97rjgrfzw8spydzr5ej
    // https://gist.github.com/slowbackspace/53613acdafff950e08139a6e6d4fc9d2
    testName: "addresses/:address (script payment cred)",

    endpoints: [
      "addresses/script1tx3c5y302fupjrm0xs3skumkaw97h2le97rjgrfzw8spydzr5ej",
    ],
    response: {
      address: "script1tx3c5y302fupjrm0xs3skumkaw97h2le97rjgrfzw8spydzr5ej",
      amount: [{ unit: "lovelace", quantity: "3000000" }],
      stake_address: null,
      type: "shelley",
      script: true,
    },
  },
  {
    testName:
      "addresses/:address - big address with few assets, no stake address, no script",

    endpoints: [
      "addresses/addr_test1vp8cprhse9pnnv7f4l3n6pj0afq2hjm6f7r2205dz0583egagfjah",
    ],
    response: {
      address:
        "addr_test1vp8cprhse9pnnv7f4l3n6pj0afq2hjm6f7r2205dz0583egagfjah",
      amount: expect.arrayContaining([
        { quantity: expect.toBeAssetQuantity(), unit: expect.toBeAssetUnit() },
      ]),
      stake_address: null,
      type: "shelley",
      script: false,
    },
  },
  {
    testName:
      "addresses/:address - big address with 0 assets, stake address, no script",

    endpoints: [
      "addresses/addr_test1qrynuvvft74pzd08gd8ta543gs50l429ycvx46ype4exhhtmewj955x423l89jad0gescpg6zj6ppgydef23a4qwnxxsshe8eq",
    ],
    response: {
      address:
        "addr_test1qrynuvvft74pzd08gd8ta543gs50l429ycvx46ype4exhhtmewj955x423l89jad0gescpg6zj6ppgydef23a4qwnxxsshe8eq",
      amount: expect.arrayContaining([
        { quantity: expect.toBeAssetQuantity(), unit: expect.toBeAssetUnit() },
      ]),
      stake_address:
        "stake_test1upauhfz62r24glnjewkh5vcvq5dpfdqs5zxu54g76s8fnrgc8c2uv",
      type: "shelley",
      script: false,
    },
  },
  {
    testName:
      "addresses/:address - large address with few assets, no stake address, script",

    endpoints: [
      "addresses/addr_test1wqmpwrh2mlqa04e2mf3vr8w9rjt9du0dpnync8dzc85spgsya8emz",
    ],
    response: {
      address:
        "addr_test1wqmpwrh2mlqa04e2mf3vr8w9rjt9du0dpnync8dzc85spgsya8emz",
      amount: expect.arrayContaining([
        { quantity: expect.toBeAssetQuantity(), unit: expect.toBeAssetUnit() },
      ]),
      stake_address: null,
      type: "shelley",
      script: true,
    },
  },
  {
    testName: "addresses/:address - biggest address with most assets",

    endpoints: [
      "addresses/addr_test1vqeux7xwusdju9dvsj8h7mca9aup2k439kfmwy773xxc2hcu7zy99",
    ],
    response: {
      address:
        "addr_test1vqeux7xwusdju9dvsj8h7mca9aup2k439kfmwy773xxc2hcu7zy99",
      amount: expect.arrayContaining([
        { quantity: expect.toBeAssetQuantity(), unit: expect.toBeAssetUnit() },
      ]),
      stake_address: expect.toBeOneOf([expect.toBeStakeAddress(), null]),
      type: "shelley",
      script: false,
    },
  },
  {
    testName:
      "addresses/:address - biggest address with most assets (payment cred)",

    endpoints: [
      "addresses/addr_vkh1x0ph3nhyrvhpttyy3alk78f00q244vfdjwm38h5f3kz47kpgum5",
    ],
    response: {
      address: "addr_vkh1x0ph3nhyrvhpttyy3alk78f00q244vfdjwm38h5f3kz47kpgum5",
      amount: expect.arrayContaining([
        { quantity: expect.toBeAssetQuantity(), unit: expect.toBeAssetUnit() },
      ]),
      stake_address: expect.toBeOneOf([expect.toBeStakeAddress(), null]),
      type: "shelley",
      script: false,
    },
  },
  {
    testName: "addresses/:address generic shelley address",
    endpoints: [
      "addresses/addr_test1vpet907qag8pk7pmk82p6ey0tgkfpxam9qg3e0ns2nsnt0c0q7kuf",
    ],

    response: {
      address:
        "addr_test1vpet907qag8pk7pmk82p6ey0tgkfpxam9qg3e0ns2nsnt0c0q7kuf",
      amount: expect.arrayContaining([
        { quantity: expect.toBeAssetQuantity(), unit: expect.toBeAssetUnit() },
      ]),
      stake_address: expect.toBeOneOf([expect.toBeStakeAddress(), null]),
      type: "shelley",
      script: false,
    },
  },
  {
    testName: "addresses/:address generic shelley address payment cred",
    endpoints: [
      "addresses/addr_vkh1w2etls82pcdhswa36swkfr669jgfhwegzywtuuz5uy6m72g9jpj",
    ],

    response: {
      address: "addr_vkh1w2etls82pcdhswa36swkfr669jgfhwegzywtuuz5uy6m72g9jpj",
      amount: expect.arrayContaining([
        { quantity: expect.toBeAssetQuantity(), unit: expect.toBeAssetUnit() },
      ]),
      stake_address: expect.toBeOneOf([expect.toBeStakeAddress(), null]),
      type: "shelley",
      script: false,
    },
  },
  {
    testName: "addresses/:address BF address - used but now empty",
    endpoints: [
      "addresses/addr_test1qprwyxzmswhtjstxvj7epjc28gskffsqcxuurx80qrjdy3uayerntq74us2hsgxymgk3f5nka58z46zcqgctv9c05ctq8g0qn7",
    ],

    response: {
      address:
        "addr_test1qprwyxzmswhtjstxvj7epjc28gskffsqcxuurx80qrjdy3uayerntq74us2hsgxymgk3f5nka58z46zcqgctv9c05ctq8g0qn7",
      amount: [
        {
          unit: "lovelace",
          quantity: "0",
        },
      ],
      stake_address:
        "stake_test1uzwjv3e4s027g9tcyrzd5tg56fmw6r32apvqyv9kzu86v9sqrx6ye",
      type: "shelley",
      script: false,
    },
  },
  {
    testName: "addresses/:address BF address with some token",
    endpoints: [
      "addresses/addr_test1qpztm7xav83l26wgn3l5aqvtljld8qkhcxn47eqdxlv992umj6t6e3jwxrmy8rgfw9s2xzpyye6vfpzgmjxhv67f26ask2pcge",
    ],

    response: {
      address:
        "addr_test1qpztm7xav83l26wgn3l5aqvtljld8qkhcxn47eqdxlv992umj6t6e3jwxrmy8rgfw9s2xzpyye6vfpzgmjxhv67f26ask2pcge",
      amount: [
        {
          unit: "lovelace",
          quantity: "10000000",
        },
        {
          unit: "fa3eff2047fdf9293c5feef4dc85ce58097ea1c6da4845a35153518374494e4459",
          quantity: "2",
        },
      ],
      stake_address:
        "stake_test1uzded9avce8rpajr35yhzc9rpqjzvaxys3ydertkd0y4dwckc8m4f",
      type: "shelley",
      script: false,
    },
  },
  {
    testName: "addresses/:address BF address with some token (payment cred)",
    endpoints: [
      "addresses/addr_vkh1gj7l3htpu06knjyu0a8grzluhmfc947p5a0kgrfhmpf2k8lnszf",
    ],

    response: {
      address: "addr_vkh1gj7l3htpu06knjyu0a8grzluhmfc947p5a0kgrfhmpf2k8lnszf",
      amount: [
        {
          unit: "lovelace",
          quantity: "10000000",
        },
        {
          unit: "fa3eff2047fdf9293c5feef4dc85ce58097ea1c6da4845a35153518374494e4459",
          quantity: "2",
        },
      ],
      stake_address: null,
      type: "shelley",
      script: false,
    },
  },
  {
    testName: "addresses/:address BF address without tokens",
    endpoints: [
      "addresses/addr_test1qrgavepv2jt8czjxrf9zlchldcgluxq94j7x3aqcdqnps9mslnc2xh37p37yps628vn00y07zxzwfvph4q984mjfjtaq6m25rv",
    ],

    response: {
      address:
        "addr_test1qrgavepv2jt8czjxrf9zlchldcgluxq94j7x3aqcdqnps9mslnc2xh37p37yps628vn00y07zxzwfvph4q984mjfjtaq6m25rv",
      amount: [
        {
          unit: "lovelace",
          quantity: "10000000",
        },
      ],
      stake_address:
        "stake_test1upc0eu9rtclqclzqcd9rkfhhj8lprp8ykqm6szn6aeye97srdg2vn",
      type: "shelley",
      script: false,
    },
  },

  // errors

  {
    testName: "addresses/:address - invalid address",
    endpoints: ["addresses/addr1stonks"],

    response: error_400_addresses,
  },
  {
    testName: "addresses/:address - valid address not on-chain",
    endpoints: [
      "addresses/addr_test1qre63def8pypvq95cw07lwy4hge4dl8e2nl36sa7h4amx56ycdz9a0l0yxcy9pe2sddxaym9hwy7wdzdu6mhwjattgms2p6puw",
    ],

    response: error_404,
  },
  {
    testName:
      "addresses/:address - valid address not on-chain, valid not on-chain asset",
    endpoints: [
      "addresses/addr_test1qre63def8pypvq95cw07lwy4hge4dl8e2nl36sa7h4amx56ycdz9a0l0yxcy9pe2sddxaym9hwy7wdzdu6mhwjattgms2p6puw/utxos/f4988f549728dc76b58d7677849943cafee5385dc67e6c25f6aa901e506978656c54696c653235",
    ],

    response: error_404,
  },
  {
    testName:
      "addresses/:address - valid address not on-chain, valid on-chain asset",
    endpoints: [
      "addresses/addr_test1qre63def8pypvq95cw07lwy4hge4dl8e2nl36sa7h4amx56ycdz9a0l0yxcy9pe2sddxaym9hwy7wdzdu6mhwjattgms2p6puw/utxos/e68f1cea19752d1292b4be71b7f5d2b3219a15859c028f7454f66cdf74544555524f",
    ],

    response: error_404,
  },
  {
    testName:
      "addresses/:address - valid on-chain address, valid not on-chain asset",
    endpoints: [
      "addresses/addr_test1qz93grfnssuxr00vyutc92tw6dgj4jxtnsxzvf2as04harx9v4sp0psum0jrw94ldemxr5v5v87wcmtsc57ckjg968cqlq4rsm/utxos/f4988f549728dc76b58d7677849943cafee5385dc67e6c25f6aa901e506978656c54696c653235",
    ],

    response: error_404,
  },
  {
    testName: "Invalid path",
    endpoints: ["addresses/"],

    response: error_400,
  },
  {
    testName: "addresses/:address - invalid address ",

    response: error_400_addresses,
    endpoints: ["addresses/addr_test1uwu"],
  },
];
