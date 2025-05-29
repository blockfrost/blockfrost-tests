import {
  error_400,
  error_400_addresses,
  error_404,
} from "../../errors/index.js";
import { expect } from "vitest";

export default [
  {
    testName: "addresses/:address BF address without tokens (payment cred)",
    endpoints: [
      "addresses/addr_vkh1h7wl3l3w6heru0us8mdc3v3jlahq79w49cpypsuvgjhdwp5apep",
    ],
    response: {
      address: "addr_vkh1h7wl3l3w6heru0us8mdc3v3jlahq79w49cpypsuvgjhdwp5apep",
      amount: [{ unit: "lovelace", quantity: "2000000" }],
      stake_address: null,
      type: "shelley",
      script: false,
    },
  },
  {
    testName:
      "addresses/:address - big address with 0 assets, active stake address, no script",
    endpoints: [
      "addresses/addr1q9s5ws6xufe74h5vqyhxsd0n2hr4fdg895k9ztut2fjqz93z3znzpvegug3chp4dx556lp38h8ptu3smtj20q83rmdtqcjup2u",
    ],
    response: {
      address:
        "addr1q9s5ws6xufe74h5vqyhxsd0n2hr4fdg895k9ztut2fjqz93z3znzpvegug3chp4dx556lp38h8ptu3smtj20q83rmdtqcjup2u",
      amount: expect.arrayContaining([
        { quantity: expect.toBeAssetQuantity(), unit: expect.toBeAssetUnit() },
      ]),
      stake_address:
        "stake1uy3g3f3qkv5wyguts6kn22d0scnmns47gcd4e98src3ak4skkxyvj",
      type: "shelley",
      script: false,
    },
  },
  {
    testName:
      "addresses/:address - big address with 0 assets, inactive stake address, no script",
    endpoints: [
      "addresses/addr1q8fwxda8mq09rzjcluxrep9wyrnfe4e8kuzqzkvcdn53vskmspx9w7e55ly30vqnw4a0eza3hj2hxnhhq6hqqh58gyvstww5ww",
    ],
    response: {
      address:
        "addr1q8fwxda8mq09rzjcluxrep9wyrnfe4e8kuzqzkvcdn53vskmspx9w7e55ly30vqnw4a0eza3hj2hxnhhq6hqqh58gyvstww5ww",
      amount: expect.arrayContaining([
        { quantity: expect.toBeAssetQuantity(), unit: expect.toBeAssetUnit() },
      ]),
      stake_address:
        "stake1u8dcqnzh0v620jghkqfh27hu3wcme9tnfmmsdtsqt6r5zxghn2nm9",
      type: "shelley",
      script: false,
    },
  },
  {
    testName:
      "addresses/:address - large address with few assets, no stake address, script",
    endpoints: [
      "addresses/addr1w9vgcswrfxcujpqxt39wefrnd75ww35u3k3gauq4pf60mdc2rlkz7",
    ],
    response: {
      address: "addr1w9vgcswrfxcujpqxt39wefrnd75ww35u3k3gauq4pf60mdc2rlkz7",
      amount: expect.arrayContaining([
        { quantity: expect.toBeAssetQuantity(), unit: expect.toBeAssetUnit() },
      ]),
      stake_address: null,
      type: "shelley",
      script: true,
    },
  },
  {
    testName: "addresses/:address - humongous address with many assets",
    endpoints: [
      "addresses/addr1zxj47sy4qxlktqzmkrw8dahe46gtv8seakrshsqz26qnvzypw288a4x0xf8pxgcntelxmyclq83s0ykeehchz2wtspksr3q9nx",
    ],
    response: {
      address:
        "addr1zxj47sy4qxlktqzmkrw8dahe46gtv8seakrshsqz26qnvzypw288a4x0xf8pxgcntelxmyclq83s0ykeehchz2wtspksr3q9nx",
      amount: expect.arrayContaining([
        { quantity: expect.toBeAssetQuantity(), unit: expect.toBeAssetUnit() },
      ]),
      stake_address:
        "stake1uxqh9rn76n8nynsnyvf4ulndjv0srcc8jtvumut3989cqmgjt49h6",
      type: "shelley",
      script: true,
    },
  },
  {
    testName: "addresses/:address - payment cred address with many assets",
    endpoints: [
      "addresses/addr_vkh1lu3rzd3pwjp54twx32ye9g4gqkr34x7cyp4urt8luq22jvjx5ul",
    ],
    response: {
      address: "addr_vkh1lu3rzd3pwjp54twx32ye9g4gqkr34x7cyp4urt8luq22jvjx5ul",
      amount: expect.arrayContaining([
        { quantity: expect.toBeAssetQuantity(), unit: expect.toBeAssetUnit() },
      ]),
      stake_address: null,
      type: "shelley",
      script: false,
    },
  },
  {
    testName: "addresses/:address - biggest address with most assets",
    endpoints: [
      "addresses/addr1w999n67e86jn6xal07pzxtrmqynspgx0fwmcmpua4wc6yzsxpljz3",
    ],
    response: {
      address: "addr1w999n67e86jn6xal07pzxtrmqynspgx0fwmcmpua4wc6yzsxpljz3",
      amount: expect.arrayContaining([
        { quantity: expect.toBeAssetQuantity(), unit: expect.toBeAssetUnit() },
      ]),
      stake_address: expect.toBeOneOf([expect.toBeStakeAddress(), null]),
      type: "shelley",
      script: true,
    },
    customTimeout: 30_000,
  },
  {
    testName: "addresses/:address generic dormant exchange byron address",
    endpoints: [
      "addresses/DdzFFzCqrhstmqBkaU98vdHu6PdqjqotmgudToWYEeRmQKDrn4cAgGv9EZKtu1DevLrMA1pdVazufUCK4zhFkUcQZ5Gm88mVHnrwmXvT",
    ],
    response: {
      address:
        "DdzFFzCqrhstmqBkaU98vdHu6PdqjqotmgudToWYEeRmQKDrn4cAgGv9EZKtu1DevLrMA1pdVazufUCK4zhFkUcQZ5Gm88mVHnrwmXvT",
      amount: [{ unit: "lovelace", quantity: expect.toBeAssetQuantity() }],
      stake_address: expect.toBeOneOf([expect.toBeStakeAddress(), null]),
      type: "byron",
      script: false,
    },
  },
  {
    testName: "addresses/:address generic shelley address",
    endpoints: [
      "addresses/addr1q8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkw9etpkygj5x4kjpym5h35cvj5zw83s6nvw5fnrnck4cmvshkfm4y",
    ],

    response: {
      address:
        "addr1q8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkw9etpkygj5x4kjpym5h35cvj5zw83s6nvw5fnrnck4cmvshkfm4y",
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
      "addresses/addr_vkh1ch9vxc3z2s6k6gynwj7xnpj2sfc7xr2d363xvw0z6hrdjxyfmju",
    ],

    response: {
      address: "addr_vkh1ch9vxc3z2s6k6gynwj7xnpj2sfc7xr2d363xvw0z6hrdjxyfmju",
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
      "addresses/addr1q8zsjx7vxkl4esfejafhxthyew8c54c9ch95gkv3nz37sxrc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq3jd3w2",
    ],

    response: {
      address:
        "addr1q8zsjx7vxkl4esfejafhxthyew8c54c9ch95gkv3nz37sxrc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq3jd3w2",
      amount: [
        {
          unit: "lovelace",
          quantity: "3757366",
        },
        {
          unit: "d436d9f6b754582f798fe33f4bed12133d47493f78b944b9cc55fd1853756d6d69744c6f64676534393539",
          quantity: "1",
        },
      ],
      stake_address:
        "stake1u9uz4j024qfud557ucrqw3kqfdndjgaxj7m44x7tamkvmyqzdwe7v",
      type: "shelley",
      script: false,
    },
  },
  {
    testName: "addresses/:address BF address with summit token",
    endpoints: [
      "addresses/addr1q9x625ny9y42s5z8n78afjg9meyeknvt5kwm3y6sdlrz66tc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgqsyx3uz",
    ],

    response: {
      address:
        "addr1q9x625ny9y42s5z8n78afjg9meyeknvt5kwm3y6sdlrz66tc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgqsyx3uz",
      amount: [{ unit: "lovelace", quantity: "0" }],
      stake_address:
        "stake1u9uz4j024qfud557ucrqw3kqfdndjgaxj7m44x7tamkvmyqzdwe7v",
      type: "shelley",
      script: false,
    },
  },
  {
    testName: "addresses/:address BF address without tokens",
    endpoints: [
      "addresses/addr1qxlem7879m2ly03ljqldhz9jxtlkurc465hqysxr33z2a4ee3t4rc98rhcg4n0a3g60nd9f865gpy4unflgak3we53psrrk85u",
    ],

    response: {
      address:
        "addr1qxlem7879m2ly03ljqldhz9jxtlkurc465hqysxr33z2a4ee3t4rc98rhcg4n0a3g60nd9f865gpy4unflgak3we53psrrk85u",
      amount: [{ unit: "lovelace", quantity: "2000000" }],
      stake_address:
        "stake1uyuc463uzn3muy2eh7c5d8ekj5na2yqj27f5l5wmghv6gsc0smjnc",
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
      "addresses/addr1qygl5xsd57u59wv6mszq6tu32t55qx60fz4t2mwytjxztxtswj8ngt9puck7f0cqxzsfe62un6ln88yy8c8tguz8twmq55qrdt",
    ],

    response: error_404,
  },
  {
    testName:
      "addresses/:address - valid address not on-chain, valid not on-chain asset",
    endpoints: [
      "addresses/addr1qygl5xsd57u59wv6mszq6tu32t55qx60fz4t2mwytjxztxtswj8ngt9puck7f0cqxzsfe62un6ln88yy8c8tguz8twmq55qrdt/utxos/00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87aacafe",
    ],

    response: error_404,
  },
  {
    testName:
      "addresses/:address - valid address not on-chain, valid on-chain asset",
    endpoints: [
      "addresses/addr1qygl5xsd57u59wv6mszq6tu32t55qx60fz4t2mwytjxztxtswj8ngt9puck7f0cqxzsfe62un6ln88yy8c8tguz8twmq55qrdt/utxos/00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae6e7574636f696e",
    ],

    response: error_404,
  },
  {
    testName:
      "addresses/:address - valid on-chain address, valid not on-chain asset",
    endpoints: [
      "addresses/addr1qxcdc0jacmjcvz8rzc26ppntl03mdqtav6qa749d6wczckmswj8ngt9puck7f0cqxzsfe62un6ln88yy8c8tguz8twmq64snl8/utxos/00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87aacafe",
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
    endpoints: ["addresses/addr1uwu"],
  },
  {
    testName: "addresses/:address - invalid paymentCred address ",
    response: error_400_addresses,
    endpoints: ["addresses/addr_vkh1uwu"],
  },
  {
    testName: "addresses/:address - valid not on-chain address",
    response: error_404,
    endpoints: [
      "addresses/addr1q9y2gschak8ny3cet4dymth3xtq8fycnzpzg4svvvmdy7vnhxc96x8daz6yw33kxv07qqpxyn6w9e2ydcfhqk85ckehqrgssre",
    ],
  },
  {
    testName: "addresses/:address BF address with summit token (payment cred)",
    endpoints: [
      "addresses/addr_vkh1c5y3hnp4hawvzwvh2dejaext3799wpw9edz9nyvc505pswzdya0",
    ],

    response: {
      address: "addr_vkh1c5y3hnp4hawvzwvh2dejaext3799wpw9edz9nyvc505pswzdya0",
      amount: [
        { unit: "lovelace", quantity: "3757366" },
        {
          unit: "d436d9f6b754582f798fe33f4bed12133d47493f78b944b9cc55fd1853756d6d69744c6f64676534393539",
          quantity: "1",
        },
      ],
      stake_address: null,
      type: "shelley",
      script: false,
    },
  },
];
