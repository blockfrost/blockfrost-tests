import { expect } from "vitest";

export default [
  {
    testName: "governance drep keyHash delegators",

    endpoints: [
      "governance/dreps/drep1df2uxemkj2j7gtwmj84455jv523kne57e8956v9sywu9jaq57f4/delegators",
      "governance/dreps/drep1yf49tsm8w6f2tepdmwg7kkjjfj32x60xnmyuknfskq3mskgfvuvhp/delegators", // CIP129 id
    ],
    response: expect.arrayContaining([
      {
        address: expect.toBeStakeAddress(),
        amount: expect.toBeAdaQuantity(),
      },
    ]),
  },
  {
    testName: "governance drep scriptHash delegators",

    endpoints: [
      "governance/dreps/drep_script1wcl0w4np7rxceraptxne67dlaru6w6rchk407uq9nrhqu0c4hhj/delegators",
      "governance/dreps/drep1ydmraa6kv8cvmry059v608tehl50nfmg0z764lmsqkvwurs40sw2z/delegators", // CIP129 id
    ],
    response: [
      {
        address: "stake_test1upqt8jvd8d045a6gs2wkzt57rnx47s5ewz4un2l746r847g7hgw24",
        amount: expect.toBeAdaQuantity(),
      },
      {
        address: "stake_test1uzl65wzu364hh0wxex94qsf5xkeaq2mnmc7xgnsnsjuqr4qruvxwu",
        amount: expect.toBeAdaQuantity(),
      },
      {
        address: "stake_test1uzrvw62pn24xw0yk8ksyuj6m4ezg6jgw9n4vjqktstjd5aspv59nv",
        amount: expect.toBeAdaQuantity(),
      },
      {
        address: "stake_test1ur7sufjy8lfactkprnwl5x7mjn0ugajqg920n6uv4g7l68cra6p74",
        amount: expect.toBeAdaQuantity(),
      },
      {
        address: "stake_test1uz6u2c4aahak62p67yantf342mqdftx9agqsd8uku7t456cgzz565",
        amount: expect.toBeAdaQuantity(),
      },
      {
        address: "stake_test1uzyp0n0lqk65g9wae0uhn3fdzevww4u7w665w46wsdmeaysjvtvpu",
        amount: expect.toBeAdaQuantity(),
      },
    ],
  },
  {
    testName: "governance drep_always_no_confidence delegators",

    endpoints: ["governance/dreps/drep_always_no_confidence/delegators"],
    response: expect.arrayContaining([
      {
        amount: expect.toBeAssetQuantity(),
        address: expect.toBeStakeAddress(),
      },
    ]),
  },
  {
    testName: "governance drep_always_abstain delegators",

    endpoints: ["governance/dreps/drep_always_abstain/delegators"],
    response: expect.arrayContaining([
      {
        amount: expect.toBeAssetQuantity(),
        address: expect.toBeStakeAddress(),
      },
    ]),
  },
];
