import { describe } from 'vitest';
import { previewFixtures } from '../../fixtures/preview/index.js';
import { commonFixtures } from '../../fixtures/common/index.js';
import { generateTestSuite } from '../../index.js';

describe('Integration Tests - preview', async () => {
  generateTestSuite(commonFixtures);
  generateTestSuite(previewFixtures);
});
