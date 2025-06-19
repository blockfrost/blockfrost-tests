export default [
  {
    testName:
      "accounts/:stake_address generic dormant stake address with one address",
    endpoints: [
      "accounts/stake1uyluup0rh6r2cc7kcw8nudqz990ezf5ltagxmw3u8deukvqwq7etq/addresses",
    ],
    response: [
      {
        address:
          "addr1qx632d7fn780gaaaljawtk2zr0wz840e2sza852tvl6z983lecz7805x433adsu08c6qy22ljynf7h6sdkarcwmnevcqk72a4g",
      },
    ],
  },
  {
    testName:
      "accounts/:stake_address generic stake address with zero addresses",
    endpoints: [
      "accounts/stake1u9q7y25vy0l4jan6k8r0g2zn2ranezmmk0jnprvvmxqns9cvnhhkl/addresses",
    ],
    response: [],
  },
];
