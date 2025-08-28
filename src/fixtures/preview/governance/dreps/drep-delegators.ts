import { expect } from 'vitest';

export default [
  {
    id: 'governance-drep-delegators_8a27f2929e22',
    testName: 'governance drep delegators',
    endpoints: [
      'governance/dreps/drep1cjzwv8jl67vnn58w7g356eh4w9fcmpyx3fx3pvysvyqcy80x8zl/delegators',
      'governance/dreps/drep1ytzgfes7tltejwwsamezxntx74c48rvys69y6y9sjpssrqsnf0vk0/delegators', // CIP129 id
    ],
    response: [
      {
        address: 'stake_test1upktggljr9mdvslp9lkzm5689vggykptqlcmv6euw3l9rzs8l3m4m',
        amount: expect.toBeAdaQuantity(),
      },
    ],
  },
  {
    id: 'governance-drep-script-hash-delegators_26d4a02ac052',
    testName: 'governance drep scriptHash delegators',
    endpoints: [
      'governance/dreps/drep_script13gh7zuw0nzuh6dhm96narlcl36a9x8tzvhdu4uaaryw05yltmjy/delegators',
      'governance/dreps/drep1yw9zlct3e7vtjlfklvh2050lr78t55cavfjahjhnh5v3e7s2h3c8k/delegators', // CIP129 id
    ],
    response: [
      {
        address: 'stake_test1uzyp0n0lqk65g9wae0uhn3fdzevww4u7w665w46wsdmeaysjvtvpu',
        amount: expect.toBeAdaQuantity(),
      },
    ],
  },
  {
    id: 'governance-drep-always-no-confidence-delegators_1faca8a60c77',
    testName: 'governance drep_always_no_confidence delegators',
    endpoints: ['governance/dreps/drep_always_no_confidence/delegators'],
    response: expect.arrayContaining([
      { amount: expect.toBeAssetQuantity(), address: expect.toBeStakeAddress() },
    ]),
  },
  {
    id: 'governance-drep-always-abstain-delegators_2bdf5256ee3d',
    testName: 'governance drep_always_abstain delegators',
    endpoints: ['governance/dreps/drep_always_abstain/delegators'],
    response: expect.arrayContaining([
      { amount: expect.toBeAssetQuantity(), address: expect.toBeStakeAddress() },
    ]),
  },
  {
    id: 'governance-delegators-cleared-up-after-retiring-and-registering-drep_220b12e7aa08',
    testName: 'governance delegators cleared up after retiring and registering drep',
    endpoints: [
      'governance/dreps/drep1ytvd8c8wj7p8vypgazgevngkvxj97rh4hg8wpjf0mhvxwngmswgym/delegators',
    ],
    response: [],
  },
  {
    id: 'governance-delegators-vote-delegation-in-the-same-tx-as-d-rep-registration_f3211ce4fd73',
    testName: 'governance delegators vote delegation in the same tx as DRep registration',
    endpoints: [
      'governance/dreps/drep1ytzgfes7tltejwwsamezxntx74c48rvys69y6y9sjpssrqsnf0vk0/delegators',
    ],
    response: [
      {
        amount: expect.toBeAssetQuantity(),
        address: 'stake_test1upktggljr9mdvslp9lkzm5689vggykptqlcmv6euw3l9rzs8l3m4m',
      },
    ],
  },
];
