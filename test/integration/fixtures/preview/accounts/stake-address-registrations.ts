export default [
  {
    testName:
      "accounts/:stake_address?queryparams generic stake address registrations",
    endpoints: [
      "accounts/stake_test17z3asy8j38jwwev9n856wl5z88fwsnmy5vt4endnalm6tsc33dwc2/registrations?count=2&page=1",
      "accounts/stake_test17z3asy8j38jwwev9n856wl5z88fwsnmy5vt4endnalm6tsc33dwc2/registrations?count=1&page=1&order=asc",
    ],

    response: [
      {
        tx_hash:
          "45220a740fc56a9de8fd66a33961caad498867a899164ac4d0e545b384e7701e",
        action: "registered",
      },
    ],
  },
];
