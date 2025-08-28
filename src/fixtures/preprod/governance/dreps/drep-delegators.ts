import { expect } from 'vitest';

export default [
  {
    id: 'governance-drep-key-hash-delegators_8c2e3705a198',
    testName: 'governance drep keyHash delegators',

    endpoints: [
      'governance/dreps/drep1df2uxemkj2j7gtwmj84455jv523kne57e8956v9sywu9jaq57f4/delegators',
      'governance/dreps/drep1yf49tsm8w6f2tepdmwg7kkjjfj32x60xnmyuknfskq3mskgfvuvhp/delegators', // CIP129 id
    ],
    response: expect.arrayContaining([
      { address: expect.toBeStakeAddress(), amount: expect.toBeAdaQuantity() },
    ]),
  },
  {
    id: 'governance-drep-script-hash-delegators_9650a69fcaf2',
    testName: 'governance drep scriptHash delegators',

    endpoints: [
      'governance/dreps/drep_script1wcl0w4np7rxceraptxne67dlaru6w6rchk407uq9nrhqu0c4hhj/delegators',
      'governance/dreps/drep1ydmraa6kv8cvmry059v608tehl50nfmg0z764lmsqkvwurs40sw2z/delegators', // CIP129 id
    ],
    response: [
      {
        address: 'stake_test1upqt8jvd8d045a6gs2wkzt57rnx47s5ewz4un2l746r847g7hgw24',
        amount: expect.toBeAdaQuantity(),
      },
      {
        address: 'stake_test1uzl65wzu364hh0wxex94qsf5xkeaq2mnmc7xgnsnsjuqr4qruvxwu',
        amount: expect.toBeAdaQuantity(),
      },
      {
        address: 'stake_test1uzrvw62pn24xw0yk8ksyuj6m4ezg6jgw9n4vjqktstjd5aspv59nv',
        amount: expect.toBeAdaQuantity(),
      },
      {
        address: 'stake_test1ur7sufjy8lfactkprnwl5x7mjn0ugajqg920n6uv4g7l68cra6p74',
        amount: expect.toBeAdaQuantity(),
      },
      {
        address: 'stake_test1uz6u2c4aahak62p67yantf342mqdftx9agqsd8uku7t456cgzz565',
        amount: expect.toBeAdaQuantity(),
      },
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
    id: 'governance-delegator-cleared-out-after-retiring-and-registering-again_220b12e7aa08',
    testName: 'governance delegator cleared out after retiring and registering again',

    endpoints: [
      'governance/dreps/drep1ytvd8c8wj7p8vypgazgevngkvxj97rh4hg8wpjf0mhvxwngmswgym/delegators',
    ],
    response: [
      {
        // stake_test1upvjras0sny422fesgr9yhq0cjnqjmzk8as08qsjvlr37ng796phq was cleared out
        // stake_test1ur880e7p4ew25hyt2fwc63t72c6msjtf6jrctvg89ggtjyq2szg8x delegated after last drep registration
        address: 'stake_test1ur880e7p4ew25hyt2fwc63t72c6msjtf6jrctvg89ggtjyq2szg8x',
        amount: expect.toBeAssetQuantity(),
      },
    ],
  },
];
