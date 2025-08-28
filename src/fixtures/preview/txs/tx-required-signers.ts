export default [
  {
    id: 'txs-tx-required-signers-no-extra-witnesses_deeaf352650e',
    testName: 'txs/:tx/required_signers - no extra witnesses',
    endpoints: [
      'txs/dc9e5ae2fe80b4dc6a9c4597cc7bc5dbfabd282f652bb7627d7cc491edc604a4/required_signers',
    ],
    response: [],
  },
  {
    id: 'txs-tx-required-signers-1-extra-tx-witness_1dd7f3db114b',
    testName: 'txs/:tx/required_signers - 1 extra tx witness',
    endpoints: [
      'txs/bbdd9d38ab735957f22ed92610fe843b04bf43330a51883f6f6a972526f5accb/required_signers',
    ],
    response: [{ witness_hash: 'f97ccf4fe384174e63f2250a3c4a61f851112ed0b93caeb6aa84308e' }],
  },
];
