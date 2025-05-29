import { expect } from "vitest";

export default [
  {
    testName: "network eras",
    endpoints: ["network/eras"],
    response: [
      {
        start: { time: 0, slot: 0, epoch: 0 },
        end: { time: 1_728_000, slot: 86_400, epoch: 4 },
        parameters: { epoch_length: 21_600, slot_length: 20, safe_zone: 4320 },
      },
      {
        start: { time: 1_728_000, slot: 86_400, epoch: 4 },
        end: { time: 2_160_000, slot: 518_400, epoch: 5 },
        parameters: { epoch_length: 432_000, slot_length: 1, safe_zone: 129_600 },
      },
      {
        start: { time: 2_160_000, slot: 518_400, epoch: 5 },
        end: { time: 2_592_000, slot: 950_400, epoch: 6 },
        parameters: { epoch_length: 432_000, slot_length: 1, safe_zone: 129_600 },
      },
      {
        start: { time: 2_592_000, slot: 950_400, epoch: 6 },
        end: { time: 3_024_000, slot: 1_382_400, epoch: 7 },
        parameters: { epoch_length: 432_000, slot_length: 1, safe_zone: 129_600 },
      },
      {
        start: { time: 3_024_000, slot: 1_382_400, epoch: 7 },
        end: { time: 5_184_000, slot: 3_542_400, epoch: 12 },
        parameters: { epoch_length: 432_000, slot_length: 1, safe_zone: 129_600 },
      },
      {
        start: {
          time: 5184000,
          slot: 3542400,
          epoch: 12,
        },
        end: {
          time: 70416000,
          slot: 68774400,
          epoch: 163,
        },
        parameters: {
          epoch_length: 432000,
          slot_length: 1,
          safe_zone: 129600,
        },
      },
      {
        start: { time: 70416000, slot: 68774400, epoch: 163 },
        end: {
          time: expect.toBeUnixTimestamp(),
          slot: expect.toBeGreaterThanOrEqual(58_958_863),
          epoch: expect.toBeGreaterThanOrEqual(140),
        },
        parameters: { epoch_length: 432_000, slot_length: 1, safe_zone: 129_600 },
      },
    ],
  },
];
