import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    reporters: ['verbose'],
    testTimeout: 15_000,
    sequence: { concurrent: true },
    hookTimeout: 20_000,
    include: ['unit/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    passWithNoTests: true,
    chaiConfig: { truncateThreshold: 40_000 },
  },
});
