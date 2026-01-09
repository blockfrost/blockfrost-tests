export default [
  {
    id: 'accounts-stake-address-generic-dormant-stake-address-with-one-address_d3cca304de9a',
    testName: 'accounts/:stake_address generic dormant stake address with one address',
    endpoints: ['accounts/stake1uyluup0rh6r2cc7kcw8nudqz990ezf5ltagxmw3u8deukvqwq7etq/addresses'],
    response: [
      {
        address:
          'addr1qx632d7fn780gaaaljawtk2zr0wz840e2sza852tvl6z983lecz7805x433adsu08c6qy22ljynf7h6sdkarcwmnevcqk72a4g',
      },
    ],
  },
  {
    testName: 'accounts/:stake_address bf stake address with 4 addresses',
    endpoints: ['accounts/stake1u9uz4j024qfud557ucrqw3kqfdndjgaxj7m44x7tamkvmyqzdwe7v/addresses'],
    response: [
      {
        address:
          'addr1q8zsjx7vxkl4esfejafhxthyew8c54c9ch95gkv3nz37sxrc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq3jd3w2',
      },
      {
        address:
          'addr1qxrrzqsqnzqx3p8sxxsry936h6c78ml4rdl224f33l7pmcnc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgqr735lq',
      },
      {
        address:
          'addr1q9x625ny9y42s5z8n78afjg9meyeknvt5kwm3y6sdlrz66tc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgqsyx3uz',
      },
      {
        address:
          'addr1qy6qvd3szupa7ayqf6zw7cd0ple7w3yg5f3xh5gkkc4q9zmc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq52e2en',
      },
    ],
  },
  {
    id: 'accounts-stake-address-generic-stake-address-with-zero-addresses_58a5c07d3316',
    testName: 'accounts/:stake_address generic stake address with zero addresses',
    endpoints: ['accounts/stake1u9q7y25vy0l4jan6k8r0g2zn2ranezmmk0jnprvvmxqns9cvnhhkl/addresses'],
    response: [],
  },
];
