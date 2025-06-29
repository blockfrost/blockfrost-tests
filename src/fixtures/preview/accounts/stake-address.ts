import { expect } from 'vitest';
export default [
  {
    testName: 'accounts/:stake_address - BF account',

    endpoints: ['accounts/stake_test1uzh390qu4xgcv7xhjsxypys2rw334sztwdr6642jfvl8p9czvu3yu'],
    response: {
      stake_address: 'stake_test1uzh390qu4xgcv7xhjsxypys2rw334sztwdr6642jfvl8p9czvu3yu',
      active: true,
      active_epoch: expect.toBeGreaterThanOrEqual(498),
      controlled_amount: expect.toBeGreaterThanOrEqual('5104894414'),
      rewards_sum: expect.toBeGreaterThanOrEqual('991910471'),
      withdrawals_sum: '2988261434',
      reserves_sum: '0',
      treasury_sum: '0',
      drep_id: null,
      withdrawable_amount: expect.toBeAdaQuantity(),
      pool_id: 'pool1y0uxkqyplyx6ld25e976t0s35va3ysqcscatwvy2sd2cwcareq7',
    },
  },
  {
    testName: 'accounts/:stake_address generic stake address',

    endpoints: ['accounts/stake_test1uplm3vtt2637738tx4wy9l4sjlhtdld2nvtlv8pj9ng9feg6d3pr7'],

    response: {
      stake_address: 'stake_test1uplm3vtt2637738tx4wy9l4sjlhtdld2nvtlv8pj9ng9feg6d3pr7',
      active: expect.any(Boolean),
      active_epoch: expect.toBeOneOf([expect.toBeEpochNumber(), null]),
      controlled_amount: expect.toBeAdaQuantity(),
      rewards_sum: expect.toBeAdaQuantity(),
      withdrawals_sum: expect.toBeAdaQuantity(),
      drep_id: null,
      reserves_sum: expect.toBeAdaQuantity(),
      treasury_sum: expect.toBeAdaQuantity(),
      withdrawable_amount: expect.toBeAdaQuantity(),
      pool_id: expect.toBeOneOf([expect.toBePoolBech32(), null]),
    },
  },
  {
    testName: 'accounts/:stake_address reward account for deregistered pool',
    endpoints: ['accounts/stake_test1uqyjrlhrrfadh2z6td9w5lta7svlen7udafq656wzxzltyczhx8rn'],

    response: {
      stake_address: 'stake_test1uqyjrlhrrfadh2z6td9w5lta7svlen7udafq656wzxzltyczhx8rn',
      active: false,
      active_epoch: 197,
      controlled_amount: '0',
      rewards_sum: '0',
      drep_id: null,
      withdrawals_sum: '500000000',
      reserves_sum: '0',
      treasury_sum: '0',
      withdrawable_amount: '0',
      pool_id: null,
    },
  },

  {
    testName: 'accounts/:stake_address reward account for pool deregistered multiple times',

    endpoints: ['accounts/stake_test1upnm8qjag0mesuxv9d3y5thjh6k2kytpsucmvdamafvdg3gfx0uly'],

    response: {
      stake_address: 'stake_test1upnm8qjag0mesuxv9d3y5thjh6k2kytpsucmvdamafvdg3gfx0uly',
      active: true,
      active_epoch: 480,
      controlled_amount: '1848379796',
      rewards_sum: '3852386867',
      withdrawals_sum: '3042227608',
      reserves_sum: '0',
      drep_id: null,
      treasury_sum: '0',
      withdrawable_amount: '1310159259',
      pool_id: 'pool1k3jnk3rnscnvt6u8p7a24ye0dy8f39xuccmchnsw3pzzwq453hp',
    },
  },
  // registered drep
  {
    // shiver pottery tiny course sketch ranch castle little merit stomach page deliver weapon soon oval depart aisle consider envelope excite news feed toy kangaroo
    testName: 'accounts/:stake_address registered drep (legacy drep_script)',
    endpoints: ['accounts/stake_test1uqtv67n99jt7mj0txqne80s7gn7q8xxyzyx4xaqxfpgd52c7aqzhd'],

    response: {
      stake_address: 'stake_test1uqtv67n99jt7mj0txqne80s7gn7q8xxyzyx4xaqxfpgd52c7aqzhd',
      active: expect.any(Boolean),
      active_epoch: expect.toBeEpochNumber(),
      controlled_amount: expect.any(String),
      rewards_sum: expect.any(String),
      withdrawals_sum: expect.any(String),
      reserves_sum: expect.any(String),
      treasury_sum: expect.any(String),
      drep_id: 'drep1y2hvc4lu4unhntkd3w5mmgaf5k2j5q60auhh7w6wvldsrrgllp6n4',
      withdrawable_amount: expect.any(String),
      pool_id: null,
    },
  },
  // registered drep_script
  {
    testName: 'accounts/:stake_address registered drep',
    endpoints: ['accounts/stake_test1uzyp0n0lqk65g9wae0uhn3fdzevww4u7w665w46wsdmeaysjvtvpu'],

    response: {
      stake_address: 'stake_test1uzyp0n0lqk65g9wae0uhn3fdzevww4u7w665w46wsdmeaysjvtvpu',
      active: expect.any(Boolean),
      active_epoch: expect.toBeEpochNumber(),
      controlled_amount: expect.any(String),
      rewards_sum: expect.any(String),
      withdrawals_sum: expect.any(String),
      reserves_sum: '0',
      treasury_sum: '0',
      drep_id: 'drep1yw9zlct3e7vtjlfklvh2050lr78t55cavfjahjhnh5v3e7s2h3c8k',
      withdrawable_amount: expect.any(String),
      pool_id: null,
    },
  },
  {
    testName:
      'accounts/:stake_address when DRep is retired all delegators to that DRep should have their drep_id cleared.',
    endpoints: ['accounts/stake_test1uq3f3kt99hu4e3vt7cnx6uya88qjjw52yexh56qcknqkj9qa0awyd'],
    response: {
      stake_address: 'stake_test1uq3f3kt99hu4e3vt7cnx6uya88qjjw52yexh56qcknqkj9qa0awyd',
      active: false,
      active_epoch: 647,
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
      active_epoch: 947,
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
      'accounts/:stake_address deregister and register stake key after voting. should have their drep_id cleared. (All actions in single epoch)',
    endpoints: ['accounts/stake_test1ur7h39znyuzdw7d809htgf9enusvzf67w6963cwn3x9tpcgm877g2'],
    response: {
      stake_address: 'stake_test1ur7h39znyuzdw7d809htgf9enusvzf67w6963cwn3x9tpcgm877g2',
      active: true,
      active_epoch: 948,
      controlled_amount: expect.toBeAdaQuantity(),
      rewards_sum: expect.toBeAdaQuantity(),
      withdrawals_sum: expect.toBeAdaQuantity(),
      reserves_sum: '0',
      treasury_sum: '0',
      drep_id: null,
      withdrawable_amount: expect.toBeAdaQuantity(),
      pool_id: 'pool1ag29qua3amyl7fszngeqxnrxpamu6rychrxjjuju5e0tskdpwka',
    },
  },
  {
    testName:
      'accounts/:stake_address retire and register drep after voting. should have their drep_id cleared.',
    endpoints: ['accounts/stake_test1upvjras0sny422fesgr9yhq0cjnqjmzk8as08qsjvlr37ng796phq'],
    response: {
      stake_address: 'stake_test1upvjras0sny422fesgr9yhq0cjnqjmzk8as08qsjvlr37ng796phq',
      active: true,
      active_epoch: 952,
      controlled_amount: expect.toBeAdaQuantity(),
      rewards_sum: expect.toBeAdaQuantity(),
      withdrawals_sum: expect.toBeAdaQuantity(),
      reserves_sum: '0',
      treasury_sum: '0',
      drep_id: null,
      withdrawable_amount: expect.toBeAdaQuantity(),
      pool_id: 'pool1ag29qua3amyl7fszngeqxnrxpamu6rychrxjjuju5e0tskdpwka',
    },
  },
  {
    testName: 'accounts/:stake_address vote delegation in the same tx as DRep registration',
    endpoints: ['accounts/stake_test1upktggljr9mdvslp9lkzm5689vggykptqlcmv6euw3l9rzs8l3m4m'],
    response: {
      stake_address: 'stake_test1upktggljr9mdvslp9lkzm5689vggykptqlcmv6euw3l9rzs8l3m4m',
      active: false,
      active_epoch: 683,
      controlled_amount: expect.toBeAdaQuantity(),
      rewards_sum: expect.toBeAdaQuantity(),
      withdrawals_sum: expect.toBeAdaQuantity(),
      reserves_sum: '0',
      treasury_sum: '0',
      drep_id: 'drep1ytzgfes7tltejwwsamezxntx74c48rvys69y6y9sjpssrqsnf0vk0',
      withdrawable_amount: expect.toBeAdaQuantity(),
      pool_id: null,
    },
  },
];
