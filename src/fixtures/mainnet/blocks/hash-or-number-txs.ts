export default [
  {
    id: 'blocks-hash-or-number-txs-queryparams-generic-shelley_f51f0d031cfd',
    testName: 'blocks/:hash_or_number/txs?queryparams - generic shelley',

    endpoints: [
      'blocks/c6e3901b2cd95598b0bf5dc55cb62d682ea369298be9825b4b58d891b844b320/txs?order=desc&count=2&page=2',
      'blocks/5360435/txs?order=desc&count=2&page=2',
    ],

    response: [
      'b29bd7a9e79345639d359f549bbf0b668d6177c90a105c66186d8b98835d187f',
      '2a6bb221aac6192e3fdb05a1c82c1c2236fc6b226363021ec8036ff6f9475ed0',
    ],
  },
  {
    id: 'blocks-hash-or-number-txs-queryparams-generic-shelley_dc5352b11097',
    testName: 'blocks/:hash_or_number/txs?queryparams - generic shelley',

    endpoints: [
      'blocks/c6e3901b2cd95598b0bf5dc55cb62d682ea369298be9825b4b58d891b844b320/txs?order=asc&count=2&page=11',
      'blocks/5360435/txs?order=asc&count=2&page=11',
      'blocks/c6e3901b2cd95598b0bf5dc55cb62d682ea369298be9825b4b58d891b844b320/txs?count=2&page=11',
      'blocks/5360435/txs?count=2&page=11',
    ],

    response: [
      '2a6bb221aac6192e3fdb05a1c82c1c2236fc6b226363021ec8036ff6f9475ed0',
      'b29bd7a9e79345639d359f549bbf0b668d6177c90a105c66186d8b98835d187f',
    ],
  },
  {
    id: 'blocks-hash-or-number-txs-generic-shelley_728609ce239f',
    testName: 'blocks/:hash_or_number/txs - generic shelley',

    endpoints: [
      'blocks/c6e3901b2cd95598b0bf5dc55cb62d682ea369298be9825b4b58d891b844b320/txs',
      'blocks/5360435/txs',
    ],

    response: [
      '055f9d4c86733997a9b8b12e3422feee8ef95d79ccbde20abdb6ff9222bb79c6',
      'e66077bac8d32cf16aa991d793a3e5840d3eee1ad3dfd04f1ee609d46a936dff',
      '70cf3046cd12879a9c36cafeddec17b3b22da619d7998b64c556fd9c70c62903',
      '79993d55b7e49bb588c83d9f19bf03c10fe18e6b52c5684766c436e870921e88',
      'd49776db1423a229fee5403dfc1fc0c6512a1cb0cbc01c4fcd040db82329c125',
      '0672c94a748c8ab06d99496bba73007871eb8d43766dc0c74ed326e0cc3f473c',
      'a14476ee69f5ec35331200e94da50ccad1529aa8ba22d5793f3d0f4fa31e8352',
      'b3ce7f3a4f9d680fc5de83200f436792ed0aec02e8e39bca4c255c5a50100906',
      '2cf6eb3c194d9deb93e5219d4371f2f09fa90af5393b814f939f9b8f393a6889',
      '08ae724058cd840350417153a432ff3d2fad5f8f8469f64742019b36794df519',
      '8ed65e234e2db82a6b67e1982fd6e627b44e9abdce8cfea6d1d05f8bb786d8f5',
      '783aefd86ba442d0574beb81b5d1db6b5c0dca40fa464d893aa5f849403842ba',
      '0f750962b3a039ec1ea5065c98cf083fb737decfb54ba04bdfa2b107fef65b45',
      '4f45923f709234b52b5ddb75f70b37b039519623dbb55da0916773912391fd32',
      'eb27af616f701cdf7ad81b4e9c503b2e26059859fff8b37c0f267272028c24fb',
      '86f77e854e485135878eef867cf98469dc1c5a90ceb9dda33a981ac1dc183b85',
      '8e7cd4e261631ca6b5b0ae588cf7c07617657e3ed563896e8e2c0226b7b7d152',
      '849e2475ec8f2a35bf62d3a8cc70b87326f5509987bbb7e7fc36fb8e9b5c59d5',
      '3f98fca4978cc2ac86380453538b1ab020dfa8aa34506827c7032540d9dc30b2',
      'cfe0a45709522edc07a0725cd7a99d65d5ce8f5b62365d9a3f9660bc79d25202',
      '2a6bb221aac6192e3fdb05a1c82c1c2236fc6b226363021ec8036ff6f9475ed0',
      'b29bd7a9e79345639d359f549bbf0b668d6177c90a105c66186d8b98835d187f',
      '9a5bdc512e9df8b20f486b38a190168c1b84fa250005eac35038019f1fd47039',
      '3e7721720db366599ae5ce53dc3a48b56e1ffaaa2572ae0ad66eb6c8467b8eb7',
    ],
  },
];
