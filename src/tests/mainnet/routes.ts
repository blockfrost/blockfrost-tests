import { describe } from 'vitest';
import { mainnetFixtures } from '../../fixtures/mainnet/index.js';
import { commonFixtures } from '../../fixtures/common/index.js';
import { generateTestSuite } from '../../index.js';

describe('Integration Tests - mainnet', async () => {
  generateTestSuite(commonFixtures);
  generateTestSuite(mainnetFixtures);
});
