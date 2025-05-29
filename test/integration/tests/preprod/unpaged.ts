import { describe } from "vitest";
import { generateTestSuite } from "../../utils.js";
import unpagedFixtures from "../../fixtures/preprod/unpaged.js";

describe("Integration Tests - preprod unpaged", async () => {
  generateTestSuite({ unpaged: unpagedFixtures });
});
