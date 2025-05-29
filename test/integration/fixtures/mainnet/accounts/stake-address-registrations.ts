export default [
  {
    testName:
      "accounts/:stake_address?queryparams generic stake address registrations",
    endpoints: [
      "accounts/stake1u8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkgs46q0w/registrations?count=2&page=1",
      "accounts/stake1u8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkgs46q0w/registrations?count=2&page=1&order=asc",
    ],
    response: [
      {
        tx_hash:
          "594acb72254f0fc0963de09eeca0ab8501c79aacb09bbeb9470ae6b9565fb547",
        action: "registered",
      },
      {
        tx_hash:
          "38a5687ab61d510f2874c6ff2cd5779bbebfa99a5c069fbe028e5397d8813d58",
        action: "deregistered",
      },
    ],
  },
];
