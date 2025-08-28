export default [
  {
    id: 'blocks-hash-or-number-addresses-generic-shelley_05ffaa70dc98',
    testName: 'blocks/:hash_or_number/addresses - generic shelley',

    endpoints: [
      'blocks/e4f47653c608c33b6b588552b8714ae3c920d8855e847ca5c2e5c6b9f1c3dd0f/addresses',
      'blocks/1922992/addresses',
    ],
    response: [
      {
        address:
          'addr_test1qrsn0l3tz9e342agj8d2lkly4vjuw2kqfcjvs9s6nekyqchpxllzkytnr2463yw64ld7f2e9cu4vqn3yeqtp48nvgp3qcqsn65',
        transactions: [
          { tx_hash: 'e4001857f5fbfe4969325d1aafc7d801ca5d70a5c610357feaefab1fe715149d' },
        ],
      },
      {
        address:
          'addr_test1qrxqyzeqrn7rugyhc28cddpnppsgrvzzj7r9fx723tc27ywvqg9jq88u8csf0s50s66rxzrqsxcy99ux2jdu4zhs4ugs32ww6p',
        transactions: [
          { tx_hash: 'e4001857f5fbfe4969325d1aafc7d801ca5d70a5c610357feaefab1fe715149d' },
        ],
      },
      {
        address: 'addr_test1vp9dz4c70hmr6ntvfyjqeqmjad3e747qaanfxwxq6af09xc2pd49l',
        transactions: [
          { tx_hash: '1e50953bef447b082fa46eb2f0bd3d84c741e4f4bfd9dfdedebbdad1ad17677f' },
        ],
      },
      {
        address: 'addr_test1vqkhzqla4a97aja77dldcmfy6vgjxregxmg277g78f3kf5se9wfpy',
        transactions: [
          { tx_hash: '7926f2554813fe1029b372213ffc6acf5a58235f225a1b5ab807d4d2a8fe1561' },
        ],
      },
      {
        address: 'addr_test1vqq8muuq4mexu3rnnkelfln8mqfhg3hxxrdt8hckm8aam3g08ppha',
        transactions: [
          { tx_hash: 'f451a9adb883ebbd05a4a445feff20452c34442b796a87906b394fd62c919acd' },
        ],
      },
      {
        address: 'addr_test1vrm0d8j67d7zj7xtyyjvzgsz7gv9l4wpfm5nhwpjjyw6lrs6mvstl',
        transactions: [
          { tx_hash: '0ffd55deadeaca9059b184b78e24cd4de1ebd0c5768ad8b0877bc41d0093621b' },
        ],
      },
      {
        address: 'addr_test1vz7st3e4f5tqzyldkwdr9gkwvpzlfr6364egl7ha4ck7emctt2gnq',
        transactions: [
          { tx_hash: '4d17dddcb8b7b9730556e7c3e83739f0c1b93c2b94ff29e77ae9214017aeeb4e' },
        ],
      },
      {
        address: 'addr_test1wqlcn3pks3xdptxjw9pqrqtcx6ev694sstsruw3phd57ttg0lh0zq',
        transactions: [
          { tx_hash: '4d17dddcb8b7b9730556e7c3e83739f0c1b93c2b94ff29e77ae9214017aeeb4e' },
        ],
      },
      {
        address: 'addr_test1wr64gtafm8rpkndue4ck2nx95u4flhwf643l2qmg9emjajg2ww0nj',
        transactions: [
          { tx_hash: '1e50953bef447b082fa46eb2f0bd3d84c741e4f4bfd9dfdedebbdad1ad17677f' },
          { tx_hash: 'f451a9adb883ebbd05a4a445feff20452c34442b796a87906b394fd62c919acd' },
          { tx_hash: '7926f2554813fe1029b372213ffc6acf5a58235f225a1b5ab807d4d2a8fe1561' },
          { tx_hash: '0ffd55deadeaca9059b184b78e24cd4de1ebd0c5768ad8b0877bc41d0093621b' },
        ],
      },
    ],
  },
  {
    id: 'blocks-hash-or-number-addresses-queryparams-generic-shelley_05390311cef6',
    testName: 'blocks/:hash_or_number/addresses?queryparams - generic shelley',

    endpoints: [
      'blocks/e4f47653c608c33b6b588552b8714ae3c920d8855e847ca5c2e5c6b9f1c3dd0f/addresses?count=2&page=2',
      'blocks/1922992/addresses?count=2&page=2',
    ],
    response: [
      {
        address: 'addr_test1vp9dz4c70hmr6ntvfyjqeqmjad3e747qaanfxwxq6af09xc2pd49l',
        transactions: [
          { tx_hash: '1e50953bef447b082fa46eb2f0bd3d84c741e4f4bfd9dfdedebbdad1ad17677f' },
        ],
      },
      {
        address: 'addr_test1vqkhzqla4a97aja77dldcmfy6vgjxregxmg277g78f3kf5se9wfpy',
        transactions: [
          { tx_hash: '7926f2554813fe1029b372213ffc6acf5a58235f225a1b5ab807d4d2a8fe1561' },
        ],
      },
    ],
  },
];
