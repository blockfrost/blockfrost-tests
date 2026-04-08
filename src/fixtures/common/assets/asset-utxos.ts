import { error_400_assets, error_404 } from '../../errors/index.js';

export default [
  // --- Validation (400) — network-independent ---

  {
    id: 'assets-utxos-invalid-asset-too-short_a1b2c3d4e5f6',
    testName: 'assets/:asset/utxos - invalid asset (too short)',
    endpoints: ['assets/abc/utxos'],
    response: error_400_assets,
  },
  {
    id: 'assets-utxos-invalid-asset-not-hex_b2c3d4e5f6a1',
    testName: 'assets/:asset/utxos - invalid asset (not hex)',
    endpoints: ['assets/zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz/utxos'],
    response: error_400_assets,
  },

  // --- Not found (404) — network-independent ---

  {
    id: 'assets-utxos-valid-hex-nonexistent_f6a1b2c3d4e5',
    testName: 'assets/:asset/utxos - valid hex but nonexistent asset',
    endpoints: ['assets/0000000000000000000000000000000000000000000000000000000000000000/utxos'],
    response: error_404,
  },
];
