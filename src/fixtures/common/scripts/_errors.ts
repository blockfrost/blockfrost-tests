import { error_404 } from '../../errors/index.js';

// Network-independent error paths of /scripts/*.
export default [
  {
    id: 'scripts-script-hash-script-not-on-chain_1ba4eb15d651',
    testName: 'scripts/:script_hash/* - script not on-chain',
    endpoints: [
      'scripts/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057',
      'scripts/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/json',
      'scripts/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/cbor',
      'scripts/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/redeemers',
    ],
    response: error_404,
  },
  {
    id: 'scripts-datum-datum-hash-datum-not-on-chain_da23b535b80a',
    testName: 'scripts/datum/:datum_hash/* - datum not on-chain',
    endpoints: [
      'scripts/datum/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057',
      'scripts/datum/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/cbor',
    ],
    response: error_404,
  },
];
