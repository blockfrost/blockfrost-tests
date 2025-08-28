export default [
  {
    id: 'pools-pool-id-updates-generic-pool-updates_a431cf52a511',
    testName: 'pools/:pool_id/updates - generic pool updates',
    endpoints: [
      'pools/pool1kchver88u3kygsak8wgll7htr8uxn5v35lfrsyy842nkscrzyvj/updates?count=10',
      'pools/b62ecc8ce7e46c4443b63b91fffaeb19f869d191a7d2381087aaa768/updates?count=10',
    ],
    response: [
      {
        tx_hash: 'c3af622e2817bc27436b952b4109b24bfc73e1acc57a4ec6691be5a7d8c0a5b0',
        cert_index: 0,
        action: 'registered',
      },
      {
        tx_hash: 'e4ec04972f4a3b19676f1e7d3a999ca36cd7fe42bc020c2de0fbba589a6e3fad',
        cert_index: 0,
        action: 'registered',
      },
      {
        tx_hash: 'eacc1c5ba0cb50e57189ce8cbd69d0facb1234352110eba4fff8c546d1f81bfb',
        cert_index: 0,
        action: 'registered',
      },
      {
        tx_hash: 'd91421e07090dfacdb8e00860dedcf352ce98e140962f902ed6752e77463dfb5',
        cert_index: 0,
        action: 'registered',
      },
      {
        tx_hash: 'f842a99a60e1741bc04554d1a632776c85fc6ce3be1858f32d7bb8bd45f04396',
        cert_index: 0,
        action: 'registered',
      },
      {
        tx_hash: '77275ff1df5dbdc47c8d92bd5c772230cdfe570c45a841f97e0ff4a88326cc01',
        cert_index: 2,
        action: 'registered',
      },
      {
        tx_hash: '9e728040370bf35109a8501739a45d7c05bfc80f4c4b5d31732b498f5cd6ccfd',
        cert_index: 2,
        action: 'registered',
      },
      {
        tx_hash: 'f8756b99863bb5ed24612daa0f732b045c2f24be6a561d95a9c86a9c70a496bc',
        cert_index: 1,
        action: 'registered',
      },
      {
        tx_hash: '62f8257434e73810149effc6f96d8e853e91c597bb86c40e2a6003f13fd81180',
        cert_index: 0,
        action: 'registered',
      },
      {
        tx_hash: '28bd5e8c342ab89d6642e446cb299058ea36256af1718e4af9326898ce4192d7',
        cert_index: 0,
        action: 'registered',
      },
    ],
  },
  {
    id: 'pools-pool-id-updates-best-pool_f9339a4c9f32',
    testName: 'pools/:pool_id/updates - best pool',
    endpoints: [
      'pools/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy/updates?count=1&page=1',
      'pools/0f292fcaa02b8b2f9b3c8f9fd8e0bb21abedb692a6d5058df3ef2735/updates?count=1&page=1',
    ],
    response: [
      {
        tx_hash: 'a96c79773b7506211eb56bf94886a2face17657d1009f52fb5ea05f19cc8823e',
        cert_index: 0,
        action: 'registered',
      },
    ],
  },
];
