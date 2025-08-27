import { expect } from 'vitest';

export default [
  {
    id: 'governance-drep-delegators_0bc3609f7df7',
    testName: 'governance drep delegators',

    endpoints: [
      'governance/dreps/drep14pjm8ytt682wkp4jcegdj2yerkcy9a20xevvp7udlcd0ggjxdud/delegators',
      'governance/dreps/drep1y25xtvu3d0gaf6cxktr9pkfgnywmqsh4fum93s8m3hlp4aqj3uqdp/delegators', // CIP129 id
    ],

    response: expect.arrayContaining([
      {
        amount: expect.toBeAssetQuantity(),
        address: expect.toBeStakeAddress(),
      },
    ]),
  },
  {
    id: 'governance-drep-always-no-confidence-delegators_1faca8a60c77',
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
    id: 'governance-drep-always-abstain-delegators_2bdf5256ee3d',
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
