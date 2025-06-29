export default [
  {
    testName: 'txs/:tx/pool_updates - generic shelley with pool certs',
    endpoints: [
      'txs/28bd5e8c342ab89d6642e446cb299058ea36256af1718e4af9326898ce4192d7/pool_updates',
    ],
    response: [
      {
        cert_index: 0,
        pool_id: 'pool1kchver88u3kygsak8wgll7htr8uxn5v35lfrsyy842nkscrzyvj',
        vrf_key: 'b4506cbdf5faeeb7bc771d0c17eea2e7e94749ec5a63e78a42d9ed8aad6baae5',
        pledge: '100000000000',
        margin_cost: 0.018,
        fixed_cost: '340000000',
        reward_account: 'stake1u97v0sjx96u5lydjfe2g5qdwkj6plm87h80q5vc0ma6wjpq22mh4c',
        owners: ['stake1ux69nctlngdhx99a6w8hrtexu89p9prqk8vmseg9qmmquyqhuns53'],
        metadata: {
          url: 'https://stakhanovite.io/cardano/stkh-1.json',
          hash: '0f519c0478527c6fd05556ecb31fafe9e5a6b9861fac96f5935381b3e328ee5d',
          ticker: null,
          name: null,
          description: null,
          homepage: null,
        },
        relays: [
          {
            ipv4: null,
            ipv6: null,
            dns: 'cardano-relay.stakhanovite.io',
            dns_srv: null,
            port: 7001,
          },
        ],
        active_epoch: 250,
      },
      {
        cert_index: 1,
        pool_id: 'pool1s7t7mfc89syw93h07aammaccnua66yn6d4l0mqt7zqurz2mczvq',
        vrf_key: 'f399304ca66731d66b739e4df6a94f32ab10b34450fb21b03720d2c1d45d59d2',
        pledge: '10000000000',
        margin_cost: 0.018,
        fixed_cost: '340000000',
        reward_account: 'stake1u97v0sjx96u5lydjfe2g5qdwkj6plm87h80q5vc0ma6wjpq22mh4c',
        owners: ['stake1uxclfpuwmmsdxjtqy7ee845246xlk6k4r5rxj6sexsh8caqf2z5dm'],
        metadata: {
          url: 'https://stakhanovite.io/cardano/stkh-2.json',
          hash: '11171d873f8f5b704552111d75b629f840b1c3399b49d9642cf12970031583b7',
          ticker: null,
          name: null,
          description: null,
          homepage: null,
        },
        relays: [
          {
            ipv4: null,
            ipv6: null,
            dns: 'cardano-relay.stakhanovite.io',
            dns_srv: null,
            port: 7001,
          },
        ],
        active_epoch: 250,
      },
    ],
  },
  {
    testName:
      'txs/:tx/pool_updates - shelley with pool update which does not have onchain reward address',
    endpoints: [
      'txs/6299278d563d92bc10cf77562a0437ae600d2b52941fdef45efcefec2f921160/pool_updates',
    ],
    response: [
      {
        cert_index: 0,
        pool_id: 'pool1qqvukkkfr3ux4qylfkrky23f6trl2l6xjluv36z90ax7gfa8yxt',
        vrf_key: 'b4fad4c9b12ce0766abfe5ccd034a56c2445cf710494d5cc6b70fce536f18ecc',
        pledge: '50000000000',
        margin_cost: 0.008,
        fixed_cost: '340000000',
        reward_account: 'stake1uynmjul7hqpp0mar79e5v0dduhdkxjewqdvr7w9z8p6hmqctf87q7',
        owners: ['stake1u83tppelvkswasl9e2fl0mw7ref9z2z2g0e0dcccs9z8zsc0w4zaf'],
        metadata: {
          url: 'https://planetstake.s3.eu-west-2.amazonaws.com/STAKE1-004.json',
          hash: 'fa95abfe646b85e194e86a202d099a1c6bb93f8ac6c30e70c59c03c055d4433e',
          ticker: null,
          name: null,
          description: null,
          homepage: null,
        },
        relays: [
          {
            ipv4: null,
            ipv6: null,
            dns: 'relays.planetstake.com',
            dns_srv: null,
            port: 3001,
          },
        ],
        active_epoch: 255,
      },
    ],
  },
  {
    testName: 'txs/:tx - generic shelley with MULTIPLE delegation, stake certs and pool updates',
    endpoints: [
      'txs/f1aee024a482d5d21ed552d15eefbb664e98095cdabde75a9ff9c78c0812e6fb/pool_updates',
    ],
    response: [
      {
        cert_index: 2,
        pool_id: 'pool1mxqjlrfskhd5kql9kak06fpdh8xjwc76gec76p3taqy2qmfzs5z',
        vrf_key: '1304083df5749327159619f25afab1b78f227086d861c29c49ff9fbba1f26990',
        pledge: '5000000000000',
        margin_cost: 0.07,
        fixed_cost: '340000000',
        reward_account: 'stake1uydrrrlm3frl99sa228tmccntgvgn8l52jkvv20vyqj8llse5l3h7',
        owners: ['stake1u89zz7r72ccf3y6t7uuzatuae0vyncgdc2mzf74vrpu5uqcjc7m3l'],
        metadata: {
          url: 'https://pools.iohk.io/IOG1.json',
          hash: '22cf1de98f4cf4ce61bef2c6bc99890cb39f1452f5143189ce3a69ad70fcde72',
          ticker: 'IOG1',
          name: 'Input Output Global (IOHK) - 1',
          description:
            'Our mission is to provide economic identity to the billions of people who lack it. IOHK will not use the IOHK ticker.',
          homepage: 'https://iohk.io',
        },
        relays: [
          {
            ipv4: null,
            ipv6: null,
            dns: 'relays-new.cardano-mainnet.iohk.io',
            dns_srv: null,
            port: 3001,
          },
        ],
        active_epoch: 210,
      },
      {
        cert_index: 6,
        pool_id: 'pool10dwjth7esfw5gc036vu6l6csnvn6elqax0d3kh8t65rxyewk2g3',
        vrf_key: 'd54561502f82f883a40a0a237cd86c8b7ba8547c16f6cfd2146234a2e113c4fa',
        pledge: '3300000000000',
        margin_cost: 0.07,
        fixed_cost: '340000000',
        reward_account: 'stake1u80ltwt358r7kv002m4g5jxn6x3skf970nmt897qz8qszecs6qv9f',
        owners: ['stake1u99j39m84g2trc7hpveuufsle3n8dfurua026jww7g600xqcl03l0'],
        metadata: {
          url: 'https://pools.iohk.io/IOG2.json',
          hash: '04faac1dce6c68b6bdf406eb261fbc6f57ce0baa9ab039d8e3bb1de8f903f092',
          ticker: 'IOG2',
          name: 'Input Output Global (IOHK) - 2',
          description:
            'Our mission is to provide economic identity to the billions of people who lack it. IOHK will not use the IOHK ticker.',
          homepage: 'https://iohk.io',
        },
        relays: [
          {
            ipv4: null,
            ipv6: null,
            dns: 'relays-new.cardano-mainnet.iohk.io',
            dns_srv: null,
            port: 3001,
          },
        ],
        active_epoch: 210,
      },
      {
        cert_index: 10,
        pool_id: 'pool1augg8mngjqjmxr8zypdqx7066f67q5cjcuwf738ja7csynadd99',
        vrf_key: '52c3b95e82529059cb8b90e095d3e535e101304ae58d5d215a8c5552099d5f16',
        pledge: '3300000000000',
        margin_cost: 0.07,
        fixed_cost: '340000000',
        reward_account: 'stake1uxs3crcc96zslc2xus3v9j2rgzwrxvt6pdgzu3we4whvjxgg4vfca',
        owners: ['stake1u9vqalwm30jksz0n84uz340e3pacrkgct5adt47rs4ejmqgstwpj8'],
        metadata: {
          url: 'https://pools.iohk.io/IOG3.json',
          hash: '47d5ad9a718bfd40892ab89eb46b34ef2b1ebce9ebba6f5410a1ab96284771ed',
          ticker: 'IOG3',
          name: 'Input Output Global (IOHK) - 3',
          description:
            'Our mission is to provide economic identity to the billions of people who lack it. IOHK will not use the IOHK ticker.',
          homepage: 'https://iohk.io',
        },
        relays: [
          {
            ipv4: null,
            ipv6: null,
            dns: 'relays-new.cardano-mainnet.iohk.io',
            dns_srv: null,
            port: 3001,
          },
        ],
        active_epoch: 210,
      },
      {
        cert_index: 14,
        pool_id: 'pool1czg8a3gg33aujkkcf9wrnr8zf4qq9qn0rrkh04umrg60k0vyvdl',
        vrf_key: '378147e17c1c846238b7a28b0dd7a27b1329b98c13e83dbe0659239b4d4317a0',
        pledge: '3000000000000',
        margin_cost: 0.07,
        fixed_cost: '340000000',
        reward_account: 'stake1u88nna5tmx6shmum40y9s3d2w6vgd8j5r3gs8n027nd4l3ctqwetj',
        owners: ['stake1uxnknpmvmqz9f9885kme32mjtujha47tdjr3uyqcn4u4e5gk9we3z'],
        metadata: {
          url: 'https://pools.iohk.io/IOG4.json',
          hash: '540bdf0957350f1bb2da583790729e4d4845ce9b4ef47f9e37023744ca3f7278',
          ticker: 'IOG4',
          name: 'Input Output Global (IOHK) - 4',
          description:
            'Our mission is to provide economic identity to the billions of people who lack it. IOHK will not use the IOHK ticker.',
          homepage: 'https://iohk.io',
        },
        relays: [
          {
            ipv4: null,
            ipv6: null,
            dns: 'relays-new.cardano-mainnet.iohk.io',
            dns_srv: null,
            port: 3001,
          },
        ],
        active_epoch: 210,
      },
      {
        cert_index: 18,
        pool_id: 'pool1cz8pf6u3m9n6s4ql9nrgd5gx4tzflr49wcy0cuy5n4tpu00pa4f',
        vrf_key: '443d49845beee381ce29ab272e96162abdaf7d7ba7098fb4b74a0e0a675fece3',
        pledge: '3000000000000',
        margin_cost: 0.07,
        fixed_cost: '340000000',
        reward_account: 'stake1u98qeq562rulfrn7ndvqughnse26k0vr2le3rg6gz4d93sgh9vhrk',
        owners: ['stake1u9kjekuk620nculrk9zx76vqlq7lpkutggtvtnawhs7lpvcq7k2ep'],
        metadata: {
          url: 'https://pools.iohk.io/IOG5.json',
          hash: '35b199f18bd26b2c42cadbafc3bc886a6828e46b05d46def2d7a7eda643800b2',
          ticker: 'IOG5',
          name: 'Input Output Global (IOHK) - 5',
          description:
            'Our mission is to provide economic identity to the billions of people who lack it. IOHK will not use the IOHK ticker.',
          homepage: 'https://iohk.io',
        },
        relays: [
          {
            ipv4: null,
            ipv6: null,
            dns: 'relays-new.cardano-mainnet.iohk.io',
            dns_srv: null,
            port: 3001,
          },
        ],
        active_epoch: 210,
      },
      {
        cert_index: 22,
        pool_id: 'pool1dfg7g6u6vvs4av77frff5f2zejznmjmvtewhxzyg5h3p5m3we65',
        vrf_key: 'e6c752104501f2d1a419e235af7279f87b50ca1dc080893bd33e020aaf07d27a',
        pledge: '2900000000000',
        margin_cost: 0.07,
        fixed_cost: '340000000',
        reward_account: 'stake1uyy36x2h7rchrrpc06gsspntvvml2jnfjxne0e6yljdykdc8kdfen',
        owners: ['stake1u970ge3nws9eyd5uf8hknjtxxqect3ec54xcgjl8fymy53s07lklz'],
        metadata: {
          url: 'https://pools.iohk.io/IOG6.json',
          hash: '57baf2d1e1ef927ce7445db9a440d610e4b09e54d68d2fff80260ad6799d0046',
          ticker: 'IOG6',
          name: 'Input Output Global (IOHK) - 6',
          description:
            'Our mission is to provide economic identity to the billions of people who lack it. IOHK will not use the IOHK ticker.',
          homepage: 'https://iohk.io',
        },
        relays: [
          {
            ipv4: null,
            ipv6: null,
            dns: 'relays-new.cardano-mainnet.iohk.io',
            dns_srv: null,
            port: 3001,
          },
        ],
        active_epoch: 210,
      },
      {
        cert_index: 26,
        pool_id: 'pool16qd8xyz4dsn3g5zxdxtvr253u8jpy7xcn4ut9v92ug20gegt55h',
        vrf_key: '6d5025fb02d33ba23e7672c147c5282c93d79652abcc38cf3bf12418b00556e8',
        pledge: '2700000000000',
        margin_cost: 0.07,
        fixed_cost: '340000000',
        reward_account: 'stake1u97vdsdmrm4slrxjlltghy547xkv3hkeu8rtkrv4ke3sw9sxwmxal',
        owners: ['stake1uxguhhgns04395zyjwqrffpdej5kh0w2820a7g9td49d8dc6wqmmh'],
        metadata: {
          url: 'https://pools.iohk.io/IOG7.json',
          hash: '820adf4b5f3328b3fbee956be90cbc38546c12d47905d4abc1174ce0ba402927',
          ticker: 'IOG7',
          name: 'Input Output Global (IOHK) - 7',
          description:
            'Our mission is to provide economic identity to the billions of people who lack it. IOHK will not use the IOHK ticker.',
          homepage: 'https://iohk.io',
        },
        relays: [
          {
            ipv4: null,
            ipv6: null,
            dns: 'relays-new.cardano-mainnet.iohk.io',
            dns_srv: null,
            port: 3001,
          },
        ],
        active_epoch: 210,
      },
      {
        cert_index: 30,
        pool_id: 'pool1rcj4kw3nepfpwr6s2tzgq3x3emw45n9w58063j98h38rse482k0',
        vrf_key: '9180e7714a615652e0293288cb2dd1c0d667438e1a290cd75658fe03592d5ef1',
        pledge: '2500000000000',
        margin_cost: 0.05,
        fixed_cost: '340000000',
        reward_account: 'stake1uxyrtpsfq2952x4zcyxgtj89eptf2jay4zjlk98zw0ynrjcyt3ymv',
        owners: ['stake1uyyvnuxcm7pgren2upnx8gkam7d2sa44esrkg8k4peel6qgjxslhm'],
        metadata: {
          url: 'https://pools.iohk.io/IOG8.json',
          hash: '812ecda7ee2f3c3e1feaab5144e6ef9089d4749c1be57cd1dea118e452df12c4',
          ticker: 'IOG8',
          name: 'Input Output Global (IOHK) - 8',
          description:
            'Our mission is to provide economic identity to the billions of people who lack it. IOHK will not use the IOHK ticker.',
          homepage: 'https://iohk.io',
        },
        relays: [
          {
            ipv4: null,
            ipv6: null,
            dns: 'relays-new.cardano-mainnet.iohk.io',
            dns_srv: null,
            port: 3001,
          },
        ],
        active_epoch: 210,
      },
      {
        cert_index: 34,
        pool_id: 'pool19z8vmgdts5lstk8z5lc8mgz3a8jhggscsf9cygvuz0vtuzcsxyu',
        vrf_key: 'eb4af7c13e5839c4f4069f30fdf5223ad5572844bfdaf0720801cce1cca28ad5',
        pledge: '2500000000000',
        margin_cost: 0.05,
        fixed_cost: '340000000',
        reward_account: 'stake1u98tt35j56umllsn3nu0rdj9l00v7tv9zd0hramuh2sfnpq2a54vy',
        owners: ['stake1uyjjaafuqwe9ntwczghqx9lrtr65pxrz5a5gd4ta65vpx8glvmpwa'],
        metadata: {
          url: 'https://pools.iohk.io/IOG9.json',
          hash: '984ef6e5b7fe9538a0d82eebc83cc605e9da5964a731403a94ffd2da9653ebb2',
          ticker: 'IOG9',
          name: 'Input Output Global (IOHK) - 9',
          description:
            'Our mission is to provide economic identity to the billions of people who lack it. IOHK will not use the IOHK ticker.',
          homepage: 'https://iohk.io',
        },
        relays: [
          {
            ipv4: null,
            ipv6: null,
            dns: 'relays-new.cardano-mainnet.iohk.io',
            dns_srv: null,
            port: 3001,
          },
        ],
        active_epoch: 210,
      },
      {
        cert_index: 38,
        pool_id: 'pool1uqehpxy4wst2k5u640wdt9tgmqdd26l0dahgxf3ln70js830xv2',
        vrf_key: 'dbcea7621302f9154841dfea92c7e76723f980cfc9198555ec1b9f073ae2eaf9',
        pledge: '2500000000000',
        margin_cost: 0.05,
        fixed_cost: '340000000',
        reward_account: 'stake1uym6297nf5sq8rl26uak2u5rzevmeq8jvpxwzmzh25cl9wsel4e4t',
        owners: ['stake1uywmuhh5sqnv6kgfypeumhzrzcmc7ngfu0aule5nz4wh27g6zp9ce'],
        metadata: {
          url: 'https://pools.iohk.io/IOG10.json',
          hash: '31b15adb7317a833fac173f372ef8f038a98e4bfca2320e241e79f1ab412ed0a',
          ticker: 'IOG10',
          name: 'Input Output Global (IOHK) - 10',
          description:
            'Our mission is to provide economic identity to the billions of people who lack it. IOHK will not use the IOHK ticker.',
          homepage: 'https://iohk.io',
        },
        relays: [
          {
            ipv4: null,
            ipv6: null,
            dns: 'relays-new.cardano-mainnet.iohk.io',
            dns_srv: null,
            port: 3001,
          },
        ],
        active_epoch: 210,
      },
      {
        cert_index: 42,
        pool_id: 'pool1x8ujs98g90dchw8kvu7u8jzntdh656u376fv7rv62e84jmznsr9',
        vrf_key: '80b4299ef448ce4c8cf9233ec8e365d770295608478a991105c25f0bc81935d8',
        pledge: '2000000000000',
        margin_cost: 0.05,
        fixed_cost: '340000000',
        reward_account: 'stake1uxlr0yu4qjtuhx8f7wtfp2pqg2hc2x36tfxellzcyuy7yfg2c4mfj',
        owners: ['stake1u8au2k5sjwsch32mdv3whga6atg6xevz7l8uejyx09lmgaq089fvp'],
        metadata: {
          url: 'https://pools.iohk.io/IOG11.json',
          hash: '5984d71c7949ab4a89da50d457f720842c957dfafe0f7bdfe2d6c868e9739b31',
          ticker: 'IOG11',
          name: 'Input Output Global (IOHK) - 11',
          description:
            'Our mission is to provide economic identity to the billions of people who lack it. IOHK will not use the IOHK ticker.',
          homepage: 'https://iohk.io',
        },
        relays: [
          {
            ipv4: null,
            ipv6: null,
            dns: 'relays-new.cardano-mainnet.iohk.io',
            dns_srv: null,
            port: 3001,
          },
        ],
        active_epoch: 210,
      },
      {
        cert_index: 46,
        pool_id: 'pool1welc4vthqtkvcf2e4adza90np6p7v7c4dmkmf567w3xr7ffqd72',
        vrf_key: '4d052daad4427461c5d9e75720ee3c7954f1d26d072315dd9a72fa9fdc50c2fb',
        pledge: '1700000000000',
        margin_cost: 0.05,
        fixed_cost: '340000000',
        reward_account: 'stake1uxyllmwzckxd58ww3cmq76ckj3kn8n6g6l5fyj2lmd5egfgjj93ml',
        owners: ['stake1ux9gvymwc8525yesr70wce3n9a2tvg725c296a977qdfw0cml5cle'],
        metadata: {
          url: 'https://pools.iohk.io/IOG12.json',
          hash: '93c1ad4e40b477890c5bcd48253788b879e7ca682bf0027fae917fffb385ed22',
          ticker: 'IOG12',
          name: 'Input Output Global (IOHK) - 12',
          description:
            'Our mission is to provide economic identity to the billions of people who lack it. IOHK will not use the IOHK ticker.',
          homepage: 'https://iohk.io',
        },
        relays: [
          {
            ipv4: null,
            ipv6: null,
            dns: 'relays-new.cardano-mainnet.iohk.io',
            dns_srv: null,
            port: 3001,
          },
        ],
        active_epoch: 210,
      },
      {
        cert_index: 50,
        pool_id: 'pool19nrqgmwwz8xu939ulpskuky2qq5z36v4jtnwcs69qr7xy4j495y',
        vrf_key: 'db49204caf739cfcb92931c58f440beb8dd4996d107ec22fd71dffe7035849b3',
        pledge: '1600000000000',
        margin_cost: 0.05,
        fixed_cost: '340000000',
        reward_account: 'stake1uxkukp2hazjjcwspzcty4hh8a7tnkry30ufrs62rpe0s54qj7js8d',
        owners: ['stake1uxfgmnvftm5gkdnv5tedt9dylcxludgrgpewl5lehepq73gu6jxxa'],
        metadata: {
          url: 'https://pools.iohk.io/IOG13.json',
          hash: 'ef9ef183f64ed435501829756dd495beb25e4a8404a65e7823dded5e9f6a3446',
          ticker: 'IOG13',
          name: 'Input Output Global (IOHK) - 13',
          description:
            'Our mission is to provide economic identity to the billions of people who lack it. IOHK will not use the IOHK ticker.',
          homepage: 'https://iohk.io',
        },
        relays: [
          {
            ipv4: null,
            ipv6: null,
            dns: 'relays-new.cardano-mainnet.iohk.io',
            dns_srv: null,
            port: 3001,
          },
        ],
        active_epoch: 210,
      },
      {
        cert_index: 54,
        pool_id: 'pool1nncdkshmqynzv3ledrlnan542qercf4h8xydjjylkg0xu62fk6y',
        vrf_key: 'a4449cc3a35d48120839fd15e95bc0c902294b92c71341a2c8b08a8c8719d17a',
        pledge: '1470000000000',
        margin_cost: 0.03,
        fixed_cost: '340000000',
        reward_account: 'stake1u8s3rhujx895q38mye57axv8frr8v00hh7qg4q85hc6w8gs74yzrf',
        owners: ['stake1uyesn8nj5e6nv0tq8tgrjcg8x3ehvha8s35pqhtd2dtaerg6djuj5'],
        metadata: {
          url: 'https://pools.iohk.io/IOG14.json',
          hash: '404bc8481e58ed7a826b33fc3b891de884f4700e4d95e6b3c82165d4ccc87fa6',
          ticker: 'IOG14',
          name: 'Input Output Global (IOHK) - 14',
          description:
            'Our mission is to provide economic identity to the billions of people who lack it. IOHK will not use the IOHK ticker.',
          homepage: 'https://iohk.io',
        },
        relays: [
          {
            ipv4: null,
            ipv6: null,
            dns: 'relays-new.cardano-mainnet.iohk.io',
            dns_srv: null,
            port: 3001,
          },
        ],
        active_epoch: 210,
      },
      {
        cert_index: 58,
        pool_id: 'pool17vxhghxt2w2hc8c945ex2wqpwlcz39v6uc3fcxvqln45s8xrdt3',
        vrf_key: '6cd4a441ab0daa4b188434342a72c5976de277b1110cdd32321f8cb36bfa5354',
        pledge: '1470000000000',
        margin_cost: 0.03,
        fixed_cost: '340000000',
        reward_account: 'stake1u8knsucj4ql6gexxzprzgydycp39aq7wqec2fcpj7788n8qgdr4je',
        owners: ['stake1u8ym9lxklycl2dc9p7p6av53j78x8y4dhktjqqsf7v67dlca8vmdl'],
        metadata: {
          url: 'https://pools.iohk.io/IOG15.json',
          hash: 'e3a3431a580f615f98c183bc4481ccdf3aa9671ce1be56ce90a67e9402e9722d',
          ticker: 'IOG15',
          name: 'Input Output Global (IOHK) - 15',
          description:
            'Our mission is to provide economic identity to the billions of people who lack it. IOHK will not use the IOHK ticker.',
          homepage: 'https://iohk.io',
        },
        relays: [
          {
            ipv4: null,
            ipv6: null,
            dns: 'relays-new.cardano-mainnet.iohk.io',
            dns_srv: null,
            port: 3001,
          },
        ],
        active_epoch: 210,
      },
      {
        cert_index: 62,
        pool_id: 'pool1uy8ws63cmz37gaunkhuehynvr4a0yakw2yv0vfjs704326nte98',
        vrf_key: '3bd43eecc032e50e069f5a77350f7fe299cc5379cfe1ccaf4974cae35cfa09d7',
        pledge: '1200000000000',
        margin_cost: 0.03,
        fixed_cost: '340000000',
        reward_account: 'stake1uxkffxtd3ws9pz5t36humw5aarqv0phzt8w0nnur9fl5mqcr9slez',
        owners: ['stake1uyy2afzr0kdxgyvtk2aqkma8y9kcuze4gefx025435y84pc9lwpd7'],
        metadata: {
          url: 'https://pools.iohk.io/IOG16.json',
          hash: '3cf7de0a890b69560e867cfd8714da5151870ff3f78b119b6c6769a7edf38771',
          ticker: 'IOG16',
          name: 'Input Output Global (IOHK) - 16',
          description:
            'Our mission is to provide economic identity to the billions of people who lack it. IOHK will not use the IOHK ticker.',
          homepage: 'https://iohk.io',
        },
        relays: [
          {
            ipv4: null,
            ipv6: null,
            dns: 'relays-new.cardano-mainnet.iohk.io',
            dns_srv: null,
            port: 3001,
          },
        ],
        active_epoch: 210,
      },
      {
        cert_index: 66,
        pool_id: 'pool17038jcq6xdgjn0xsjx7m79rx52r7sucqwtr5j20tk23w5mjank3',
        vrf_key: '89f2d088cc37a858704f96cec8e112a66d0558eb60ef6e52977a200bf400d60a',
        pledge: '1100000000000',
        margin_cost: 0.03,
        fixed_cost: '340000000',
        reward_account: 'stake1u85sxxz4f6u69zg3hulpsqukk6l75ctsg8zgq2pggrhqacqzt2ns7',
        owners: ['stake1u9dekkf27mlyfysvlc2lkgpx7kzyqah6curxhwrefjnugssm4c49j'],
        metadata: {
          url: 'https://pools.iohk.io/IOG17.json',
          hash: '14f37b1c109bb57d5c9bb51594d58b8c0e3d1932bc2cad5db68f03fe4ed8bcc7',
          ticker: 'IOG17',
          name: 'Input Output Global (IOHK) - 17',
          description:
            'Our mission is to provide economic identity to the billions of people who lack it. IOHK will not use the IOHK ticker.',
          homepage: 'https://iohk.io',
        },
        relays: [
          {
            ipv4: null,
            ipv6: null,
            dns: 'relays-new.cardano-mainnet.iohk.io',
            dns_srv: null,
            port: 3001,
          },
        ],
        active_epoch: 210,
      },
      {
        cert_index: 70,
        pool_id: 'pool1l3fvlzadk5hg78wy3e304s9t8tjzxnu962e2fl7tq8x2yg3mz6l',
        vrf_key: 'da9f219bb178ca33ea2476927485de878c7fb8eaf0f2ef96ec33cf6a1b236ff6',
        pledge: '1050000000000',
        margin_cost: 0.03,
        fixed_cost: '340000000',
        reward_account: 'stake1u9mxda8vjc5htq3pw6yl8r2pcuyrg0uax4jup5jv29g2dlckuj0q9',
        owners: ['stake1uxl9hs3lre43zyxl3zsfgwm5tlxg2e2mdz5tsjy4hdagc8gvykxnv'],
        metadata: {
          url: 'https://pools.iohk.io/IOG18.json',
          hash: '5af7d13447c535815f497f6259ffe8989674cfcf4b1b10e2202957b705b0489b',
          ticker: 'IOG18',
          name: 'Input Output Global (IOHK) - 18',
          description:
            'Our mission is to provide economic identity to the billions of people who lack it. IOHK will not use the IOHK ticker.',
          homepage: 'https://iohk.io',
        },
        relays: [
          {
            ipv4: null,
            ipv6: null,
            dns: 'relays-new.cardano-mainnet.iohk.io',
            dns_srv: null,
            port: 3001,
          },
        ],
        active_epoch: 210,
      },
      {
        cert_index: 74,
        pool_id: 'pool1j25x3lguq95gp0tt8ng2nw3fz9ea2p6a89vmgffdw6h0zyh66a0',
        vrf_key: '7b1b7f21a24bc462b65c9d3759ccd10c0ed5a3a7e644b815873b5b3c8dfc4f74',
        pledge: '1033736000000',
        margin_cost: 0.03,
        fixed_cost: '340000000',
        reward_account: 'stake1uyzku3s2wxu2ljhe6ykd9v9a8qkvn548nru7qnhjlj6s2ds8hz4mc',
        owners: ['stake1uyx2elg2gf20kxtprmkfxwdfmjpq0tylpwahgpxdzgy63lsjh9ada'],
        metadata: {
          url: 'https://pools.iohk.io/IOG19.json',
          hash: 'f10c6122814d047f51884bd4963e7ffbc0f8f02c8fda70f3c36c6826887bf32c',
          ticker: 'IOG19',
          name: 'Input Output Global (IOHK) - 19',
          description:
            'Our mission is to provide economic identity to the billions of people who lack it. IOHK will not use the IOHK ticker.',
          homepage: 'https://iohk.io',
        },
        relays: [
          {
            ipv4: null,
            ipv6: null,
            dns: 'relays-new.cardano-mainnet.iohk.io',
            dns_srv: null,
            port: 3001,
          },
        ],
        active_epoch: 210,
      },
      {
        cert_index: 78,
        pool_id: 'pool13kd6k66rrrhsh4s9px92qxymsrkjcjy336lpg80tt38lk6r799y',
        vrf_key: '1babb5d2429bd9fe4268d58a42e57d91be5807c4cfe68dacba7575c6607c6aac',
        pledge: '1020000000000',
        margin_cost: 0.03,
        fixed_cost: '340000000',
        reward_account: 'stake1u8fpv84fvlscglyyaamj58ngcu4v9effttm49zw05d2aslq6jnzpj',
        owners: ['stake1uymf0aly0mz6898kupjrz96zl0t9jggwerdrqys24wv8w7qcdtdc8'],
        metadata: {
          url: 'https://pools.iohk.io/IOG20.json',
          hash: '71a65cb6d240a4938e9b4e3ee7e78ddbc652e8ae8ec532c8180aeb22be990d4b',
          ticker: 'IOG20',
          name: 'Input Output Global (IOHK) - 20',
          description:
            'Our mission is to provide economic identity to the billions of people who lack it. IOHK will not use the IOHK ticker.',
          homepage: 'https://iohk.io',
        },
        relays: [
          {
            ipv4: null,
            ipv6: null,
            dns: 'relays-new.cardano-mainnet.iohk.io',
            dns_srv: null,
            port: 3001,
          },
        ],
        active_epoch: 210,
      },
    ],
  },
];
