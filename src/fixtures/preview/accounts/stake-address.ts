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
  // check position sure monitor misery icon own cereal amateur sustain knock utility click focus type space debate dad black metal catch unlock scale require
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
];
