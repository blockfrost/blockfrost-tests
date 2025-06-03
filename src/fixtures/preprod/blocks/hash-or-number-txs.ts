export default [
  {
    testName: 'blocks/:hash_or_number/txs?queryparams - generic shelley desc',
    endpoints: [
      'blocks/e4f47653c608c33b6b588552b8714ae3c920d8855e847ca5c2e5c6b9f1c3dd0f/txs?order=desc&count=2&page=2',
      'blocks/1922992/txs?order=desc&count=2&page=2',
    ],
    response: [
      '4d17dddcb8b7b9730556e7c3e83739f0c1b93c2b94ff29e77ae9214017aeeb4e',
      'f451a9adb883ebbd05a4a445feff20452c34442b796a87906b394fd62c919acd',
    ],
  },
  {
    testName: 'blocks/:hash_or_number/txs?queryparams - generic shelley',
    endpoints: [
      'blocks/e4f47653c608c33b6b588552b8714ae3c920d8855e847ca5c2e5c6b9f1c3dd0f/txs?order=asc&count=2&page=2',
      'blocks/1922992/txs?order=asc&count=2&page=2',
      'blocks/e4f47653c608c33b6b588552b8714ae3c920d8855e847ca5c2e5c6b9f1c3dd0f/txs?count=2&page=2',
      'blocks/1922992/txs?count=2&page=2',
    ],
    response: [
      'f451a9adb883ebbd05a4a445feff20452c34442b796a87906b394fd62c919acd',
      '4d17dddcb8b7b9730556e7c3e83739f0c1b93c2b94ff29e77ae9214017aeeb4e',
    ],
  },
  {
    testName: 'blocks/:hash_or_number/txs - generic shelley',
    endpoints: [
      'blocks/e4f47653c608c33b6b588552b8714ae3c920d8855e847ca5c2e5c6b9f1c3dd0f/txs',
      'blocks/1922992/txs',
    ],
    response: [
      'e4001857f5fbfe4969325d1aafc7d801ca5d70a5c610357feaefab1fe715149d',
      '1e50953bef447b082fa46eb2f0bd3d84c741e4f4bfd9dfdedebbdad1ad17677f',
      'f451a9adb883ebbd05a4a445feff20452c34442b796a87906b394fd62c919acd',
      '4d17dddcb8b7b9730556e7c3e83739f0c1b93c2b94ff29e77ae9214017aeeb4e',
      '7926f2554813fe1029b372213ffc6acf5a58235f225a1b5ab807d4d2a8fe1561',
      '0ffd55deadeaca9059b184b78e24cd4de1ebd0c5768ad8b0877bc41d0093621b',
    ],
  },
];
