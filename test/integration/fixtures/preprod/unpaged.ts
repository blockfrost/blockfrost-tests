import { expect } from "vitest";

export default [
  {
    testName: "Preprod - Unpaged mimicry/ryo",
    customTimeout: 60_000,
    endpoints: [
      "accounts/stake_test1uzp7e9n3nhq9jyp5k78ywtt0ga6yvfsla39u29l6f5z87qspdcmkt/addresses/assets",
      "addresses/addr_test1wrrgep77m0v8uv5unauluwgyr7pmdr2827wgye3sx5aw7yg7z2dsu/transactions",
      "addresses/addr_test1wrrgep77m0v8uv5unauluwgyr7pmdr2827wgye3sx5aw7yg7z2dsu/txs",
      "assets/295ac3ec6d2795c55582f1280e62601afd2d6bc674830112144bd025434f4e54/transactions",
      "assets/295ac3ec6d2795c55582f1280e62601afd2d6bc674830112144bd025434f4e54/txs",
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
    testName: "Preprod - Unpaged - mimicry only",
    customTimeout: 60_000,
    endpoints: [
      // 'assets/a0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235484f534b59/addresses', // HOSKY
      "assets",
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
