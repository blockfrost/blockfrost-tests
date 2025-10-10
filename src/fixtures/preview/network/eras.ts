import { expect } from 'vitest';

export default [
  {
    id: 'network-eras_161d67e8a062',
    testName: 'network eras',
    endpoints: ['network/eras'],
    response: [
      {
        start: { time: 0, slot: 0, epoch: 0 },
        end: { time: 0, slot: 0, epoch: 0 },
        parameters: { epoch_length: 4320, slot_length: 20, safe_zone: 864 },
      },
      {
        start: { time: 0, slot: 0, epoch: 0 },
        end: { time: 0, slot: 0, epoch: 0 },
        parameters: { epoch_length: 86_400, slot_length: 1, safe_zone: 25_920 },
      },
      {
        start: { time: 0, slot: 0, epoch: 0 },
        end: { time: 0, slot: 0, epoch: 0 },
        parameters: { epoch_length: 86_400, slot_length: 1, safe_zone: 25_920 },
      },
      {
        start: { time: 0, slot: 0, epoch: 0 },
        end: { time: 0, slot: 0, epoch: 0 },
        parameters: { epoch_length: 86_400, slot_length: 1, safe_zone: 25_920 },
      },
      {
        start: { time: 0, slot: 0, epoch: 0 },
        end: { time: 259_200, slot: 259_200, epoch: 3 },
        parameters: { epoch_length: 86_400, slot_length: 1, safe_zone: 25_920 },
      },
      {
        start: { time: 259_200, slot: 259_200, epoch: 3 },
        end: {
          time: 55814400,
          slot: 55814400,
          epoch: 646,
        },
        parameters: { epoch_length: 86_400, slot_length: 1, safe_zone: 25_920 },
      },
      {
        start: {
          time: 55814400,
          slot: 55814400,
          epoch: 646,
        },
        end: {
          time: expect.toBeUnixTimestamp(),
          slot: expect.toBeGreaterThan(55_728_000),
          epoch: expect.toBeGreaterThan(666),
        },
        parameters: { epoch_length: 86_400, slot_length: 1, safe_zone: 25_920 },
      },
    ],
  },
];
