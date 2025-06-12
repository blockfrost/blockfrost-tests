import { expect } from "vitest";
import { getPaginationFixtures } from "../../../utils.js";

const paginationFixtures = getPaginationFixtures(
  "accounts/stake_test1urmus498k7r299azjvhh50c9044zwqxgqfuqqrj3m46y8ucef0hex/rewards",
);

export default [
  ...paginationFixtures,
  {
    testName: "accounts/:stake_address - BF account",

    endpoints: [
      "accounts/stake_test1urmus498k7r299azjvhh50c9044zwqxgqfuqqrj3m46y8ucef0hex",
    ],
    response: {
      stake_address:
        "stake_test1urmus498k7r299azjvhh50c9044zwqxgqfuqqrj3m46y8ucef0hex",
      active: true,
      active_epoch: 164,
      controlled_amount: expect.toBeGreaterThanOrEqual("10003065667"),
      rewards_sum: expect.toBeGreaterThanOrEqual("8150815"),
      drep_id: "drep_always_abstain",
      withdrawals_sum: "0",
      reserves_sum: "0",
      treasury_sum: "0",
      withdrawable_amount: expect.toBeAdaQuantity(),
      pool_id: "pool13la5erny3srx9u4fz9tujtl2490350f89r4w4qjhk0vdjmuv78v",
    },
  },
  {
    testName: "accounts/:stake_address generic stake address",

    endpoints: [
      "accounts/stake_test1uplm3vtt2637738tx4wy9l4sjlhtdld2nvtlv8pj9ng9feg6d3pr7",
    ],

    response: {
      stake_address:
        "stake_test1uplm3vtt2637738tx4wy9l4sjlhtdld2nvtlv8pj9ng9feg6d3pr7",
      active: expect.any(Boolean),
      active_epoch: expect.toBeOneOf([expect.toBeEpochNumber(), null]),
      controlled_amount: expect.toBeAdaQuantity(),
      drep_id: null,
      rewards_sum: expect.toBeAdaQuantity(),
      withdrawals_sum: expect.toBeAdaQuantity(),
      reserves_sum: expect.toBeAdaQuantity(),
      treasury_sum: expect.toBeAdaQuantity(),
      withdrawable_amount: expect.toBeAdaQuantity(),
      pool_id: expect.toBeOneOf([expect.toBePoolBech32(), null]),
    },
  },

  {
    testName: "accounts/:stake_address reward account for deregistered pool ",

    endpoints: [
      "accounts/stake_test1ur45959eevjt0f02hajmvs69ag9q2t9hmyl4vgwdrxacues76c7wx",
    ],

    response: {
      stake_address:
        "stake_test1ur45959eevjt0f02hajmvs69ag9q2t9hmyl4vgwdrxacues76c7wx",
      active: true,
      active_epoch: 38,
      controlled_amount: "511130715",
      drep_id: null,
      rewards_sum: "0",
      withdrawals_sum: "0",
      reserves_sum: "0",
      treasury_sum: "0",
      withdrawable_amount: "500000000",
      pool_id: "pool1l0cyfx72p6w0tufav24ydeurujfs5wxgysg32mt3u86yj9w442w",
    },
  },
  {
    testName:
      "accounts/:stake_address reward account for pool deregistered multiple times",

    endpoints: [
      "accounts/stake_test1urt4kdcculn6lwpw5alfhehlhx8thax0cruy73gd0gr6kjs29vef7",
    ],

    response: {
      stake_address:
        "stake_test1urt4kdcculn6lwpw5alfhehlhx8thax0cruy73gd0gr6kjs29vef7",
      active: true,
      drep_id: null,
      active_epoch: 98,
      controlled_amount: "500000000",
      rewards_sum: "0",
      withdrawals_sum: "500000000",
      reserves_sum: "0",
      treasury_sum: "0",
      withdrawable_amount: "500000000",
      pool_id: "pool13jehpkxh5mwsyled40zyn66hdhml2n4zqqlhj5jddyvty7xc49a",
    },
  },
  // registered drep
  {
    testName: "accounts/:stake_address registered drep",

    endpoints: [
      "accounts/stake_test1uqtv67n99jt7mj0txqne80s7gn7q8xxyzyx4xaqxfpgd52c7aqzhd",
    ],

    response: {
      stake_address:
        "stake_test1uqtv67n99jt7mj0txqne80s7gn7q8xxyzyx4xaqxfpgd52c7aqzhd",
      active: expect.any(Boolean),
      active_epoch: expect.toBeEpochNumber(),
      controlled_amount: expect.any(String),
      rewards_sum: expect.any(String),
      withdrawals_sum: expect.any(String),
      reserves_sum: "0",
      treasury_sum: "0",
      drep_id: "drep1ytesfw7n2pq5ys2rk0m7fxxd2dyagf820wy24d82rdd9yxqfm4qjg",
      withdrawable_amount: expect.any(String),
      pool_id: null,
    },
  },
  // registered drep_script
  {
    // check position sure monitor misery icon own cereal amateur sustain knock utility click focus type space debate dad black metal catch unlock scale require
    testName: "accounts/:stake_address registered drep (legacy drep_script)",

    endpoints: [
      "accounts/stake_test1uzyp0n0lqk65g9wae0uhn3fdzevww4u7w665w46wsdmeaysjvtvpu",
    ],

    response: {
      stake_address:
        "stake_test1uzyp0n0lqk65g9wae0uhn3fdzevww4u7w665w46wsdmeaysjvtvpu",
      active: expect.any(Boolean),
      active_epoch: expect.toBeEpochNumber(),
      controlled_amount: expect.any(String),
      rewards_sum: expect.any(String),
      withdrawals_sum: expect.any(String),
      reserves_sum: expect.any(String),
      treasury_sum: expect.any(String),
      drep_id: "drep1ydmraa6kv8cvmry059v608tehl50nfmg0z764lmsqkvwurs40sw2z",
      withdrawable_amount: expect.any(String),
      pool_id: null,
    },
  },
  {
    testName:
      'accounts/:stake_address when DRep is retired all delegators to that DRep should have their drep_id cleared.',
    endpoints: ['accounts/stake_test1upjghly04re6yrr3nh3ntp9en3p5flnxh2yf6camc3vfhwg6dhc5w'],
    response: {
      stake_address: 'stake_test1upjghly04re6yrr3nh3ntp9en3p5flnxh2yf6camc3vfhwg6dhc5w',
      active: false,
      active_epoch: 169,
      controlled_amount: expect.toBeAdaQuantity(),
      rewards_sum: expect.toBeAdaQuantity(),
      withdrawals_sum: expect.toBeAdaQuantity(),
      reserves_sum: '0',
      treasury_sum: '0',
      drep_id: null,
      withdrawable_amount: expect.toBeAdaQuantity(),
      pool_id: null,
    },
  },
  {
    testName:
      'accounts/:stake_address deregister a stake key should clear any existing vote delegation. should have their drep_id cleared.',
    endpoints: ['accounts/stake_test1upq4d854xjc30jqkulsevam0jwt5wl2j9783twgzqpwtfvs705r7c'],
    response: {
      stake_address: 'stake_test1upq4d854xjc30jqkulsevam0jwt5wl2j9783twgzqpwtfvs705r7c',
      active: false,
      active_epoch: 218,
      controlled_amount: expect.toBeAdaQuantity(),
      rewards_sum: expect.toBeAdaQuantity(),
      withdrawals_sum: expect.toBeAdaQuantity(),
      reserves_sum: '0',
      treasury_sum: '0',
      drep_id: null,
      withdrawable_amount: expect.toBeAdaQuantity(),
      pool_id: null,
    },
  },
  {
    testName: 'accounts/:stake_address retire and register drep after voting. should have their drep_id cleared.',
    endpoints: ['accounts/stake_test1upvjras0sny422fesgr9yhq0cjnqjmzk8as08qsjvlr37ng796phq'],
    response: {
      stake_address: 'stake_test1upvjras0sny422fesgr9yhq0cjnqjmzk8as08qsjvlr37ng796phq',
      active: true,
      active_epoch: 219,
      controlled_amount: expect.toBeAdaQuantity(),
      rewards_sum: expect.toBeAdaQuantity(),
      withdrawals_sum: expect.toBeAdaQuantity(),
      reserves_sum: '0',
      treasury_sum: '0',
      drep_id: null,
      withdrawable_amount: expect.toBeAdaQuantity(),
      pool_id: 'pool18q5sayzqekqvqyenlkgaarlza5jxzhkyq9akc9qr5ytgczkjh23',
    },
  }
];
