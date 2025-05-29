import { expect } from 'vitest';

export default [
  {
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
    testName: 'governance drep_always_no_confidence delegators',

    endpoints: ['governance/dreps/drep_always_no_confidence/delegators'],
    response: expect.arrayContaining([
      {
        amount: expect.toBeAssetQuantity(),
        address: expect.toBeStakeAddress(),
      },
    ]),
  },
  {
    testName: 'governance drep_always_abstain delegators',

    endpoints: ['governance/dreps/drep_always_abstain/delegators'],
    response: expect.arrayContaining([
      {
        amount: expect.toBeAssetQuantity(),
        address: expect.toBeStakeAddress(),
      },
    ]),
  },
];
