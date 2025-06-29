import { describe } from 'vitest';
import { preprodFixtures } from '../../fixtures/preprod/index.js';
import { commonFixtures } from '../../fixtures/common/index.js';
import { generateTestSuite } from '../../index.js';

describe('Integration Tests - preprod', async () => {
  generateTestSuite(commonFixtures);
  generateTestSuite(preprodFixtures);
});
