import { expect } from "vitest";

export default [
  {
    testName: "Mainnet - Unpaged - ryo/mimicry",
    customTimeout: 60_000,
    endpoints: [
      "accounts/stake1u9lftqwl9zj4wsuvycvtsgp8dwqc6qd3kw45xskwvk07cagyg6vjw/addresses/assets",
      // 'addresses/addr1q8sypaxdrj6na6y48lxyhhl2hdzs8fhzrfgaj482yv2ju6ax60s74dvd8gtxq2hgh5xlk4quwqxn6xu4k9ghgapgllys29jrnm/utxos',
      // 'addresses/addr1q8sypaxdrj6na6y48lxyhhl2hdzs8fhzrfgaj482yv2ju6ax60s74dvd8gtxq2hgh5xlk4quwqxn6xu4k9ghgapgllys29jrnm/utxos/lovelace',
      "addresses/addr1q8gnl74rj62acdnlvxq5u03qvlwxjrnrzvkxcrzdk8dgj8s0nvxseh7mzj6tdfee57kmkl4a86cn88uyy8vpjwyd59nq4hz2t9/transactions",
      "addresses/addr1q8gnl74rj62acdnlvxq5u03qvlwxjrnrzvkxcrzdk8dgj8s0nvxseh7mzj6tdfee57kmkl4a86cn88uyy8vpjwyd59nq4hz2t9/txs",
      "assets/5ac3d4bdca238105a040a565e5d7e734b7c9e1630aec7650e809e34a6e65775f6c71/transactions",
      "assets/5ac3d4bdca238105a040a565e5d7e734b7c9e1630aec7650e809e34a6e65775f6c71/txs",
    ],
    clientOptions: {
      headers: {
        unpaged: "true",
      },
    },
    customExpect: async (response: unknown) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect((response as any).length).toBeGreaterThan(100);
    },
  },
  {
    testName: "Mainnet - Unpaged - mimicry only",
    customTimeout: 60_000,
    endpoints: [
      "assets/a5039068cb2b3ebcf874c0a4b012f19409befcf99e38c34c080af9d552686f6469756d436f696e/addresses", // RhodiumCoin (most popular assets won't work because the endpoint is super slow)
      // Vitest throws OOM when executing test on /assets
      // 'assets',
      "metadata/txs/labels",
      "pools",
      "pools/extended",
    ],
    clientOptions: {
      headers: {
        unpaged: "true",
      },
    },
    customExpect: async (response: unknown) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect((response as any).length).toBeGreaterThan(100);
    },
  },
];
