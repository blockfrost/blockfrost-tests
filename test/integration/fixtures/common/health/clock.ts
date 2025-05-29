import { expect } from "vitest";

export default [
  {
    testName: "health/clock",
    endpoints: ["health/clock"],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    customExpect: (response: any) => {
      // server_time is reported in ms
      expect(Math.abs(Date.now() - response.server_time)).toBeLessThan(
        10 * 60 * 1000,
      ); // 10 min tolerance
    },
  },
];
