import { describe } from 'vitest';
import { generateTestSuite } from '../../utils.js';
import { logCycle } from '../../logging.js';
import unpagedFixtures from '../../fixtures/mainnet/unpaged.js';

describe('Integration Tests - mainnet unpaged', async () => {
  const cycle = await logCycle();

  generateTestSuite({ unpaged: unpagedFixtures }, cycle.id);
});
