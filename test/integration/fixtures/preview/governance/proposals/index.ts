import { getPaginationFixtures } from "../../../../utils.js";

const paginationFixtures = getPaginationFixtures("governance/dreps");

export default [
  ...paginationFixtures,
  {
    testName: "governance proposals",

    endpoints: ["governance/proposals?count=28"],
    response: [
      {
        tx_hash:
          "e61f151fcef9e99dff5c705f8d5de18891f8d1d92d69fef5ff608d2c29a7c133",
        cert_index: 0,
        governance_type: "info_action",
      },
      {
        tx_hash:
          "2238412520d53025e2e1330b10d9db07c0826f624e633801afe5749c60848ae3",
        cert_index: 0,
        governance_type: "info_action",
      },
      {
        tx_hash:
          "699b989055cb4ea7501e9028df24a48fa256969ef7d82be757b7d7f635d5730b",
        cert_index: 0,
        governance_type: "info_action",
      },
      {
        tx_hash:
          "5e0e59a1e40fbdef987d0fdb47fd08a6f00ba6a1661b26ebae7bd827ec400e50",
        cert_index: 0,
        governance_type: "info_action",
      },
      {
        tx_hash:
          "f6cb185a1fe988dad1011eb239d9a281e8abd3557417918cffd7ef9e7afcf599",
        cert_index: 0,
        governance_type: "parameter_change",
      },
      {
        tx_hash:
          "27997e2a0b3eca5676cfa59e15f1578e2e929411e813369df6e08a9e857c6031",
        cert_index: 0,
        governance_type: "parameter_change",
      },
      {
        tx_hash:
          "71762f767d96f92a73151ed44c7895b5c7e1253da68469b3dc9f3505398a8112",
        cert_index: 0,
        governance_type: "parameter_change",
      },
      {
        tx_hash:
          "a488c443cd475bcd3f84e985924c3c9b426525cbdcc08dacc8d6f9a73c6f70c5",
        cert_index: 0,
        governance_type: "info_action",
      },
      {
        tx_hash:
          "50952ac11fc4359ae4a19846eddf7cf201a435bac3429d5b1e09afe39bb724c8",
        cert_index: 0,
        governance_type: "info_action",
      },
      {
        tx_hash:
          "ad70b525212e01d5b6c7216e9b8163e27f90b7d0282f85ae57d125f732fc88ab",
        cert_index: 0,
        governance_type: "info_action",
      },
      {
        tx_hash:
          "3d2aff5ab2577e4d45663f31043f5d6454155a0de665d159d6cf5223b84891e1",
        cert_index: 0,
        governance_type: "info_action",
      },
      {
        tx_hash:
          "2ad082a4f85d4a66e8bb240ecd147a8351228ebd0995bef90c4d14f61d4b19cc",
        cert_index: 0,
        governance_type: "info_action",
      },
      {
        tx_hash:
          "19a065f3262b44d2cc8289dd7729b2e4078418642b857b996176760adc9f87e2",
        cert_index: 0,
        governance_type: "hard_fork_initiation",
      },
      {
        tx_hash:
          "25a34f986bf2479e4efdf2e3e9b8be16daf6bbeac9c7efd36f077d7df05ceaae",
        cert_index: 0,
        governance_type: "info_action",
      },
      {
        tx_hash:
          "a8583d06425b6a09276808ae49d3f23b9c0798d2aaa9b24006bbf42c6ffe5033",
        cert_index: 0,
        governance_type: "info_action",
      },
      {
        tx_hash:
          "197a3f349784c2ea0057d920eefad5170712c3b42e9fe3a31db791e1327656a8",
        cert_index: 0,
        governance_type: "info_action",
      },
      {
        tx_hash:
          "03a340bc182a0f42b9858a5051f2098e39063785f8f1f8edc51046847a338304",
        cert_index: 0,
        governance_type: "info_action",
      },
      {
        tx_hash:
          "ac8396b0bb07b0611835d8836065e61d672051ee26434bc0177667e651a0d533",
        cert_index: 0,
        governance_type: "info_action",
      },
      {
        tx_hash:
          "e3228c2a81552b59c862a6b399f2c68fc17825c639e14fbde594350a96aa9e4a",
        cert_index: 0,
        governance_type: "info_action",
      },
      {
        tx_hash:
          "29e33472dc4b3a6d89af9d06986f1c09ae58fd9aa53342c15c4ee0b4868cf072",
        cert_index: 0,
        governance_type: "info_action",
      },
      {
        tx_hash:
          "b3c204d5137838a5791e505a0709d191e0fbb49f57edd7be43057e2a4415d7f2",
        cert_index: 0,
        governance_type: "info_action",
      },
      {
        tx_hash:
          "4395836c2435a13ca298068ef08edd6a31e2804e37b459c75761f4ba92ff6d8d",
        cert_index: 0,
        governance_type: "info_action",
      },
      {
        cert_index: 0,
        governance_type: "info_action",
        tx_hash:
          "5612d49f7ac6fce1ae178b742a176a7492977e539b7406f59ccadfed989c1b8e",
      },
      {
        cert_index: 0,
        governance_type: "info_action",
        tx_hash:
          "e8b3226cd85175a081e823a41c81516e0b7096ad71f472a6c19364de9db59ab1",
      },
      {
        cert_index: 0,
        governance_type: "info_action",
        tx_hash:
          "0081371b60c69c6c02fb845f93c553c0ae0738e7c56986ee0adf612eb1185115",
      },
      {
        cert_index: 0,
        governance_type: "parameter_change",
        tx_hash:
          "2841a581076167a0662f1b4f1a38bcc8eff386f9ce45c33ae33b1fe8289de210",
      },
      {
        cert_index: 0,
        governance_type: "info_action",
        tx_hash:
          "f4607d4c794034b8f413294c4d191167bd6c14c8622a689b17fc38d0ee006e53",
      },
      {
        cert_index: 0,
        governance_type: "parameter_change",
        tx_hash:
          "95af8608dc7aaf5c73025066b509a2c11c829f2984009ac92e7053d123fbce57",
      },
    ],
  },
];
