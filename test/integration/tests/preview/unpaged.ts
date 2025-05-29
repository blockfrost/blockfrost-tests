import { describe } from "vitest";
import { generateTestSuite } from "../../utils.js";
import unpagedFixtures from "../../fixtures/preview/unpaged.js";

describe("Integration Tests - preview unpaged", async () => {
  generateTestSuite({ unpaged: unpagedFixtures });
});
