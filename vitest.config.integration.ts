import { defineConfig } from 'vitest/config';

if (!['mainnet', 'preprod', 'preview'].includes(process.env.NETWORK || '')) {
  throw 'Error NETWORK env variable can be only `mainnet, preview, preprod, ipfs, milkomeda-mainnet, milkomeda-testnet`';
}

const testFolders = [`./src/tests/${process.env.NETWORK}/**/*.ts`, `./src/tests/common/**/*.ts`];

export default defineConfig({
  test: {
    reporters: process.env.GITHUB_ACTIONS ? ['dot', 'github-actions'] : ['verbose'],
    // Be aware that there is also customTimeout option that can be set in fixtures
    // AND DEFAULT_TEST_TIMEOUT ./test/integration/utils
    testTimeout: 15_000,
    sequence: { concurrent: true },
    hookTimeout: 20_000,
    include: testFolders,
    passWithNoTests: true,
    setupFiles: ['./src/setup.ts'],
    chaiConfig: { truncateThreshold: 40_000 },
  },
});
