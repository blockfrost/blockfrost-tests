export default [
  {
    testName: 'scripts/datum/:hash/cbor - random datum',
    endpoints: [
      'scripts/datum/fe9af0a9392b6b2435a3be352c20c5034452fad062895493a88aa1ffb6c08826/cbor',
    ],
    response: {
      cbor: 'd866820086581c4a1e7332045dace10c7aebf2a960e45f73fc2796e21fd1b034f607761b00000001dcc70dc0581cc364930bd612f42e14d156e1c5410511e77f64cab8f2367a9df544d155426f7373436174526f636b6574436c756239323033581cf10608451aaad361761cf6d62f8eede24c8f16fb4362610e56da2555181e',
    },
  },
  {
    testName: 'scripts/datum/:hash/cbor - redeemer (from redeemer_data table)',
    endpoints: [
      'scripts/datum/5a595ce795815e81d22a1a522cf3987d546dc5bb016de61b002edd63a5413ec4/cbor',
    ],
    response: {
      cbor: '423c33',
    },
  },
];
