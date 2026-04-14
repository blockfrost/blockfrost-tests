import { error_400_assets, error_404 } from '../../errors/index.js';

export default [
  // --- Validation (400) — network-independent ---

  {
    id: 'swaps-asset-invalid-asset-too-short_a1b2c3d4e5f6',
    testName: 'swaps/:asset - invalid asset (too short)',
    endpoints: ['swaps/abc'],
    response: error_400_assets,
  },
  {
    id: 'swaps-asset-invalid-asset-not-hex_b2c3d4e5f6a1',
    testName: 'swaps/:asset - invalid asset (not hex)',
    endpoints: ['swaps/zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'],
    response: error_400_assets,
  },

  // --- Not found (404) — network-independent ---

  {
    id: 'swaps-asset-valid-hex-nonexistent_f6a1b2c3d4e5',
    testName: 'swaps/:asset - valid hex but nonexistent asset',
    endpoints: ['swaps/0000000000000000000000000000000000000000000000000000000000000000'],
    response: error_404,
  },
];
