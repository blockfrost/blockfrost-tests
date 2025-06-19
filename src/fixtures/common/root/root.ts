import { expect } from 'vitest';

export default [
  {
    testName: 'root endpoint',
    endpoints: [''],
    response: {
      url: 'https://blockfrost.io/',
      version: expect.any(String),
    },
  },
];
