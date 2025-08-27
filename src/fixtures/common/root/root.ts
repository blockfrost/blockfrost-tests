import { expect } from 'vitest';

export default [
  {
    id: 'root-endpoint_055539df4a0b',
    testName: 'root endpoint',
    endpoints: [''],
    response: {
      url: 'https://blockfrost.io/',
      version: expect.any(String),
    },
  },
];
