export default [
  {
    id: 'scripts-datum-hash_d54d69898ce1',
    testName: 'scripts/datum/:hash',
    endpoints: ['scripts/datum/0041bf96b13f74bcf6fa9c12aa53a5a4be5ce82d755b578d8cb8131331f5de9a'],
    response: {
      json_value: {
        fields: [
          {
            fields: [
              {
                list: [
                  { bytes: '020a1091341fe5664bfa1782d5e04779689068c916b04cb365ec3153755684d9a1' },
                  { bytes: '020a1091341fe5664bfa1782d5e04779689068c916b04cb365ec3153755684d9a1' },
                  { bytes: '020a1091341fe5664bfa1782d5e04779689068c916b04cb365ec3153755684d9a1' },
                  { bytes: '0263c9cdabbef76829fe5b35f0bbf3051bd1c41b80f58b5d07c271d0dd04de2a4e' },
                  { bytes: '0291f1217d5a04cb83312ee3d88a6e6b33284e053e6ccfc3a90339a0299d12967c' },
                  { bytes: '0390084fdbf27d2b79d26a4f13f0ccd982cb755a661969143c37cbc49ef5b91f27' },
                  { bytes: '0390084fdbf27d2b79d26a4f13f0ccd982cb755a661969143c37cbc49ef5b91f27' },
                  { bytes: '03bc9d0ca094bd5b8b3225d7651eac5d18c1c04bf8ae8f8b263eebca4e1410ed0c' },
                  { bytes: '03bc9d0ca094bd5b8b3225d7651eac5d18c1c04bf8ae8f8b263eebca4e1410ed0c' },
                  { bytes: '03bc9d0ca094bd5b8b3225d7651eac5d18c1c04bf8ae8f8b263eebca4e1410ed0c' },
                ],
              },
              {
                list: [
                  {
                    bytes:
                      '5a9ced3a1ec755263b2fc841546d62916100c21f9454e9befdd7b3d31762de4776c776c278bd555053597a23fcb6365c8acf67258848a541b0a60b3af5b4d43e',
                  },
                  {
                    bytes:
                      '5a9ced3a1ec755263b2fc841546d62916100c21f9454e9befdd7b3d31762de4776c776c278bd555053597a23fcb6365c8acf67258848a541b0a60b3af5b4d43e',
                  },
                  {
                    bytes:
                      '5a9ced3a1ec755263b2fc841546d62916100c21f9454e9befdd7b3d31762de4776c776c278bd555053597a23fcb6365c8acf67258848a541b0a60b3af5b4d43e',
                  },
                  {
                    bytes:
                      '4e916dab4c1bb1497ead8bb6c8d4a50f13226353807554445bca4ecf7c4a09b12ef68a2a878fcb75f4eb95b1f25970a579fe009a62d7b9b2934dbda257136912',
                  },
                  {
                    bytes:
                      'e4e7afa783c0a4fc3202a69e11d6d9486fef3138ea5753dc5f2bb6bbe0c3ddd504b939ef25d3e831a2d8f4c242a82bc9ade30a185f333f0af73bea888a300ab4',
                  },
                  {
                    bytes:
                      'df6ff8049b1c11ab7bcd0a8f44d5ec57dc7d41e704967454b177813115556bc9395403b5a23e7ab6d4a169945acfbc77404aad9db3dcc299a3369d3f02c93926',
                  },
                  {
                    bytes:
                      'df6ff8049b1c11ab7bcd0a8f44d5ec57dc7d41e704967454b177813115556bc9395403b5a23e7ab6d4a169945acfbc77404aad9db3dcc299a3369d3f02c93926',
                  },
                ],
              },
            ],
            constructor: 0,
          },
        ],
        constructor: 0,
      },
    },
  },
  {
    id: 'scripts-datum-hash-random-datum_b56f49b64261',
    testName: 'scripts/datum/:hash - random datum',
    endpoints: ['scripts/datum/40ee7fb2e3eee29a0a83551a9925fd10cfed6b6fc8a5c5226b872e9ab65e5481'],
    response: {
      json_value: {
        list: [
          { int: 921929271250 },
          { int: 1289924 },
          { int: 44779840342921 },
          { int: 65592800697 },
          { int: 1043202218 },
          { int: 21486806944924736 },
          { list: [{ int: 2.949974115752463e21 }, { int: 8.904204400721812e26 }] },
          { int: 1715009543000 },
          { int: 1715011275000 },
          { list: [{ int: 988356633721 }, { int: 44779840342921 }] },
          { int: 3000000 },
        ],
      },
    },
  },
  {
    id: 'scripts-datum-hash-integer-past-int64_c30c0707e2cc',
    testName: 'scripts/datum/:hash - integer past int64',
    endpoints: ['scripts/datum/7e85cadb22634a84abc99655295b8612c39e8401e25252c953072cb10d430a73'],
    response: {
      json_value: {
        list: [
          { int: 557013768063 },
          { int: 5 },
          { int: 28072932694730 },
          { int: 4453577598 },
          { int: 66592394 },
          { int: 17265484429986448 },
          // the first is 12327218604269673247 on chain, between 2^63 and 2^64
          { list: [{ int: 12327218604269672000 }, { int: 7.0191742256875e26 }] },
          { int: 1785061615000 },
          { int: 1785063303000 },
          { list: [{ int: 40108615684 }, { int: 2005209478195 }] },
          { int: 3000000 },
        ],
      },
    },
  },
  {
    id: 'scripts-datum-hash-negative-bignum_d24e773eb4f6',
    testName: 'scripts/datum/:hash - negative bignum',
    endpoints: ['scripts/datum/aeef1c285332e73fc606e2fc8f2c40d8ad84b2d4401b7ab2360cde2950b71170'],
    response: {
      json_value: {
        fields: [
          { fields: [], constructor: 0 },
          { bytes: '74657374' },
          { fields: [], constructor: 1 },
          { int: 24224 },
          // -123123123123123123123123123123123 on chain, a CBOR negative bignum
          { int: -1.2312312312312312e32 },
          { map: [{ k: { bytes: '78797a' }, v: { int: 445 } }] },
        ],
        constructor: 1,
      },
    },
  },
];
