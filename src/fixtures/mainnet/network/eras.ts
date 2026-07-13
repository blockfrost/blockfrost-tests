import { expect } from 'vitest';

export default [
  {
    id: 'network-eras_161d67e8a062',
    testName: 'network eras',
    endpoints: ['network/eras'],
    response: [
      {
        start: { time: 0, slot: 0, epoch: 0 },
        end: { time: 89_856_000, slot: 4_492_800, epoch: 208 },
        parameters: { epoch_length: 21_600, slot_length: 20, safe_zone: 4320 },
      },
      {
        start: { time: 89_856_000, slot: 4_492_800, epoch: 208 },
        end: { time: 101_952_000, slot: 16_588_800, epoch: 236 },
        parameters: { epoch_length: 432_000, slot_length: 1, safe_zone: 129_600 },
      },
      {
        start: { time: 101_952_000, slot: 16_588_800, epoch: 236 },
        end: { time: 108_432_000, slot: 23_068_800, epoch: 251 },
        parameters: { epoch_length: 432_000, slot_length: 1, safe_zone: 129_600 },
      },
      {
        start: { time: 108_432_000, slot: 23_068_800, epoch: 251 },
        end: { time: 125_280_000, slot: 39_916_800, epoch: 290 },
        parameters: { epoch_length: 432_000, slot_length: 1, safe_zone: 129_600 },
      },
      {
        start: { time: 125_280_000, slot: 39_916_800, epoch: 290 },
        end: { time: 157_680_000, slot: 72_316_800, epoch: 365 },
        parameters: { epoch_length: 432_000, slot_length: 1, safe_zone: 129_600 },
      },
      {
        start: { time: 157_680_000, slot: 72_316_800, epoch: 365 },
        end: { time: 219_024_000, slot: 133_660_800, epoch: 507 },
        parameters: { epoch_length: 432_000, slot_length: 1, safe_zone: 129_600 },
      },
      {
        start: { time: 219_024_000, slot: 133_660_800, epoch: 507 },
        end: {
          time: expect.toBeUnixTimestamp(),
          slot: expect.toBeGreaterThanOrEqual(133_660_800),
          epoch: expect.toBeGreaterThanOrEqual(507),
        },
        parameters: { epoch_length: 432_000, slot_length: 1, safe_zone: 129_600 },
      },
    ],
  },
];
