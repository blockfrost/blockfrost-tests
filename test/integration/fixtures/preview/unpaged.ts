import { expect } from "vitest";

export default [
  {
    testName: "Preview - Unpaged ryo/mimicry",
    customTimeout: 60_000,
    endpoints: [
      "accounts/stake_test1uzh390qu4xgcv7xhjsxypys2rw334sztwdr6642jfvl8p9czvu3yu/addresses/assets",
      // 'addresses/addr_test1qzwuqsd70k70wcm8smxs6jw34r59r83ywm867t5nu3nutceksz8m2cq3qzq36wt37xengqnuweh8pmr4wrxqcavz996sj2cqw8/utxos',
      // 'addresses/addr_test1qzwuqsd70k70wcm8smxs6jw34r59r83ywm867t5nu3nutceksz8m2cq3qzq36wt37xengqnuweh8pmr4wrxqcavz996sj2cqw8/utxos/lovelace',
      "addresses/addr_test1qqr585tvlc7ylnqvz8pyqwauzrdu0mxag3m7q56grgmgu7sxu2hyfhlkwuxupa9d5085eunq2qywy7hvmvej456flknswgndm3/txs",
      "addresses/addr_test1qqr585tvlc7ylnqvz8pyqwauzrdu0mxag3m7q56grgmgu7sxu2hyfhlkwuxupa9d5085eunq2qywy7hvmvej456flknswgndm3/transactions",
      "assets/7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d4144415f444a45445f4c50/transactions",
      "assets/7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d4144415f444a45445f4c50/txs",
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
    testName: "Preview - Unpaged - mimicry only",
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
