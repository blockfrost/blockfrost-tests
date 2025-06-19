export default [
  {
    testName: 'blocks/:hash_or_number/addresses - generic shelley',
    endpoints: [
      'blocks/5426a586eede6ae6e24e6795ea4bba816185ab3decf69602ee87ed7b35406543/addresses',
      'blocks/6602319/addresses',
    ],
    response: [
      {
        address:
          'addr1q8jhys2qe7dgzrqaha0g7k355ynql7hx9p2x055z8v9evykshh6d79pfdwu8pep5nv6whpy2uwwfkdvrd5ux22uhgmmqupgqe6',
        transactions: [
          {
            tx_hash: '20a7cf7b4899a6b2b9d0d57fda59fe00926f42e4563bf6a02d2850a07d06f631',
          },
        ],
      },
      {
        address:
          'addr1q9rsuduppumgdx55udpajkrsu7m5ushkf6va6xwl94ndens3dny76gzpv76qy9gc6ch2phnwphyazg7gcfcmndfu62dqu65a6j',
        transactions: [
          {
            tx_hash: '5f8745fee7133d199036944a5d42e01710ec757aede4d9291f0664a228cb57d1',
          },
        ],
      },
      {
        address:
          'addr1q9w3wk9kymcsuya08xsh9d5jujpa47w8gjhcsxvtff9r0yrrr4crk2t657327pptzrlgszyl0s4gqe6huz8mlf2rfg4qkjd9sy',
        transactions: [
          {
            tx_hash: '1fa79851e676492451c4cfab909ab396bb25c7577ae80d34664d2cf4ecc07042',
          },
        ],
      },
      {
        address:
          'addr1qx9xc5wsk3v45agn9unky4wykkuzx48h6lgz075khl2jfv7shh6d79pfdwu8pep5nv6whpy2uwwfkdvrd5ux22uhgmmqq9f6z4',
        transactions: [
          {
            tx_hash: '20a7cf7b4899a6b2b9d0d57fda59fe00926f42e4563bf6a02d2850a07d06f631',
          },
        ],
      },
      {
        address:
          'addr1qy03mmj8m6zahgrgtfkdwhcwmseg3eqrgrztdcycrvmu8sc3dny76gzpv76qy9gc6ch2phnwphyazg7gcfcmndfu62dqk59fgc',
        transactions: [
          {
            tx_hash: '5f8745fee7133d199036944a5d42e01710ec757aede4d9291f0664a228cb57d1',
          },
        ],
      },
      {
        address:
          'addr1qya6fq80hqfqz7f7w9mnua8hsvkkwnqzsxw6cg2mqa3ztjd4zz8y55elqn89y4rlqpns3d6a6hr2xjhkyp5q75tugtgqt2gvxv',
        transactions: [
          {
            tx_hash: '21b6578413eb34f809754b264d574f02832656654ebd17557dc6699d4541cc89',
          },
        ],
      },
      {
        address:
          'addr1qyaeen3r0rzk0pfkypltcad7fgsmqhg8dj3a835wtv8c8gp2d353sej4vec2q70556sysn0l83xcw5e4jpajrkyet80sjw5g2k',
        transactions: [
          {
            tx_hash: '1fa79851e676492451c4cfab909ab396bb25c7577ae80d34664d2cf4ecc07042',
          },
        ],
      },
      {
        address:
          'addr1qys6hyecnevdde4atmj3z07qwugg48jzu67ezjpqjwtaml6053hyrgg3rjqkegp33r0wsdz9e5askt744dapsdncxcqs9wdy3w',
        transactions: [
          {
            tx_hash: '20a7cf7b4899a6b2b9d0d57fda59fe00926f42e4563bf6a02d2850a07d06f631',
          },
        ],
      },
      {
        address: 'addr1vy740r73x2w3du2xxt76cs4hdml4zw2c5h7tddcyf3jauys9tyns4',
        transactions: [
          {
            tx_hash: '21b6578413eb34f809754b264d574f02832656654ebd17557dc6699d4541cc89',
          },
        ],
      },
      {
        address:
          'DdzFFzCqrhshtvmzEffCgLJxAmSJhC2FCDfqnfpuATuLwD8A1iypC4BiKfYYjP7Fzk5iodVvnbowdwRXTGsK557MxHMFkCZYbq8eTfsv',
        transactions: [
          {
            tx_hash: '5f8745fee7133d199036944a5d42e01710ec757aede4d9291f0664a228cb57d1',
          },
        ],
      },
    ],
  },
  {
    testName: 'blocks/:hash_or_number/addresses?queryparams - generic shelley',
    endpoints: [
      'blocks/5426a586eede6ae6e24e6795ea4bba816185ab3decf69602ee87ed7b35406543/addresses?count=2&page=2',
      'blocks/6602319/addresses?count=2&page=2',
    ],
    response: [
      {
        address:
          'addr1q9w3wk9kymcsuya08xsh9d5jujpa47w8gjhcsxvtff9r0yrrr4crk2t657327pptzrlgszyl0s4gqe6huz8mlf2rfg4qkjd9sy',
        transactions: [
          {
            tx_hash: '1fa79851e676492451c4cfab909ab396bb25c7577ae80d34664d2cf4ecc07042',
          },
        ],
      },
      {
        address:
          'addr1qx9xc5wsk3v45agn9unky4wykkuzx48h6lgz075khl2jfv7shh6d79pfdwu8pep5nv6whpy2uwwfkdvrd5ux22uhgmmqq9f6z4',
        transactions: [
          {
            tx_hash: '20a7cf7b4899a6b2b9d0d57fda59fe00926f42e4563bf6a02d2850a07d06f631',
          },
        ],
      },
    ],
  },
];
