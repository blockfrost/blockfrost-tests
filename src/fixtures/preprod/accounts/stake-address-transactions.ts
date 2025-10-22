import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'accounts/stake_test1uqmgpra4vqgspqga89clrve5qf78vmnsa36hpnqvwkpzjagkstuad/transactions',
);

export default [
  {
    id: 'accounts-stake-address-transactions-bf-account-preprod',
    testName: 'accounts/:stake_address/transactions BF account 5 txs',
    endpoints: [
      'accounts/stake_test1uqmgpra4vqgspqga89clrve5qf78vmnsa36hpnqvwkpzjagkstuad/transactions',
      'accounts/stake_vkh1x6qgldtqzyqgz8few8cmxdqz03mxuu8vw4cvcrr4sg5h2tggw7v/transactions',
    ],
    response: [
      {
        address:
          'addr_test1qzwuqsd70k70wcm8smxs6jw34r59r83ywm867t5nu3nutceksz8m2cq3qzq36wt37xengqnuweh8pmr4wrxqcavz996sj2cqw8',
        tx_hash: '785f93127ceadfa589b5f14b2b8eada5d590f33d2195fbccc54d03c608386316',
        tx_index: 0,
        block_height: 1949743,
        block_time: 1708358087,
      },
      {
        address:
          'addr_test1qzwuqsd70k70wcm8smxs6jw34r59r83ywm867t5nu3nutceksz8m2cq3qzq36wt37xengqnuweh8pmr4wrxqcavz996sj2cqw8',
        tx_hash: 'ed726da664b0a1a812c8c635230e5efcc29ae7310406287d1134348c5b5b7109',
        tx_index: 0,
        block_height: 1949748,
        block_time: 1708358165,
      },
      {
        address:
          'addr_test1qzwuqsd70k70wcm8smxs6jw34r59r83ywm867t5nu3nutceksz8m2cq3qzq36wt37xengqnuweh8pmr4wrxqcavz996sj2cqw8',
        tx_hash: 'f965fe6c264c06a31dc92d392b029905601ce52c8d63493d4b95b8fc08f45d9d',
        tx_index: 0,
        block_height: 1949750,
        block_time: 1708358196,
      },
      {
        address:
          'addr_test1qzwuqsd70k70wcm8smxs6jw34r59r83ywm867t5nu3nutceksz8m2cq3qzq36wt37xengqnuweh8pmr4wrxqcavz996sj2cqw8',
        tx_hash: 'ed950a9d9ad6d88e3c013f92c8e6f27dca2d439677c98d71d86e8b15f9dc236f',
        tx_index: 1,
        block_height: 1949751,
        block_time: 1708358240,
      },
      {
        address:
          'addr_test1qzwuqsd70k70wcm8smxs6jw34r59r83ywm867t5nu3nutceksz8m2cq3qzq36wt37xengqnuweh8pmr4wrxqcavz996sj2cqw8',
        tx_hash: '650da9dd0dac04cd16ea952fe0b939730f12f40e64d705cb4000eb33770bf6d6',
        tx_index: 2,
        block_height: 1949753,
        block_time: 1708358283,
      },
    ],
  },
  {
    id: 'accounts-stake-address-transactions-large-account-preprod',
    testName: 'accounts/:stake_address/transactions huge stake account (80k+ txs)',
    endpoints: [
      'accounts/stake_test1urxzevdat43p44llqk45mt4kfnr2j25p83nvq0ymxku4xdcaxnffm/transactions?count=2&page=1',
    ],
    customTimeout: 40000,
    response: [
      {
        address:
          'addr_test1qr76w5nkamkyenc9artw63c96937696g252c5f05nfzsxexv9jcm6htzrttl7pdtfkhtvnxx4y4gz0rxcq7fkdde2vmsmpk2jh',
        tx_hash: '65f8777ea4796a1e02cdb40ba437c24e0f836a36b11deedfebe2f681e7bcfce8',
        tx_index: 0,
        block_height: 305082,
        block_time: 1669052307,
      },
      {
        address:
          'addr_test1qr76w5nkamkyenc9artw63c96937696g252c5f05nfzsxexv9jcm6htzrttl7pdtfkhtvnxx4y4gz0rxcq7fkdde2vmsmpk2jh',
        tx_hash: '5b225395af521d5a8e68251f85434ebc7453a1c50d5f864e31894a5ad317f522',
        tx_index: 0,
        block_height: 305086,
        block_time: 1669052426,
      },
    ],
  },
  {
    id: 'accounts-stake-address-transactions-script-hash-preprod',
    testName:
      'accounts/:stake_address/transactions scriptHash stake account (616 addresses, 621 txs)',
    endpoints: [
      'accounts/stake_test17pmkrxm6n4xzmu3gqjxsnkp4u6v5e74qe68akvk32medxqc59egdt/transactions?count=2&page=1',
      'accounts/script1wasek75afskly2qy35yasd0xn9x04gxw3ldn952k7tfsxwvknnn/transactions?count=2&page=1',
    ],
    response: [
      {
        address:
          'addr_test1xpc5tn95ylanfkvvvtwkhjrxw478ekuv3rne7ytegpylp7nhvxdh482v9hezspydp8vrte5efna2pn50mvedz4hj6vps5rrwah',
        tx_hash: '61d344f600fffc77d2840101635f730e88f70705b9b972cfebbb8b6e1c61997a',
        tx_index: 0,
        block_height: 307673,
        block_time: 1669104975,
      },
      {
        address:
          'addr_test1xpc5tn95ylanfkvvvtwkhjrxw478ekuv3rne7ytegpylp7nhvxdh482v9hezspydp8vrte5efna2pn50mvedz4hj6vps5rrwah',
        tx_hash: '4ee089d2d14e55d046a0bf1fe766aaaa61b88bf040f99ddbba675bf9a51e5a98',
        tx_index: 0,
        block_height: 308127,
        block_time: 1669114280,
      },
    ],
  },
  {
    id: 'accounts-stake-address-transactions-stake_vk-preprod',
    testName: 'accounts/:stake_address/transactions generic account stake_vk (cip19 test vector)',
    endpoints: [
      'accounts/stake_vk1px4j0r2fk7ux5p23shz8f3y5y2qam7s954rgf3lg5merqcj6aetsft99wu/transactions?count=19&page=1',
      'accounts/stake_test1uqehkck0lajq8gr28t9uxnuvgcqrc6070x3k9r8048z8y5gssrtvn/transactions?count=19&page=1&order=asc',
    ],
    response: [
      {
        address:
          'addr_test1qz2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer3n0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgs68faae',
        tx_hash: 'b85ea8d617a56c54a76949c3f9e2918057d459647045ce5c8b9aee53adaed728',
        tx_index: 1,
        block_height: 744372,
        block_time: 1679326013,
      },
      {
        address:
          'addr_test1zrphkx6acpnf78fuvxn0mkew3l0fd058hzquvz7w36x4gten0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgsxj90mg',
        tx_hash: '414761f7fa2743a8e72dee807c374e2123006bbe11b725fb5b017cbe4f633ad5',
        tx_index: 1,
        block_height: 744374,
        block_time: 1679326083,
      },
      {
        address:
          'addr_test1qz2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer3n0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgs68faae',
        tx_hash: '3426bd8f74ff7a170c0ac7147f4fef502627aeb742acdc163c8243b9ca3b417b',
        tx_index: 2,
        block_height: 744376,
        block_time: 1679326182,
      },
      {
        address:
          'addr_test1qz2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer3n0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgs68faae',
        tx_hash: 'b82ec92f93d68c568b6bae3b77e18bca8d30299d941ac255037cd766ea92dedd',
        tx_index: 3,
        block_height: 744384,
        block_time: 1679326343,
      },
      {
        address:
          'addr_test1qz2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer3n0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgs68faae',
        tx_hash: '5f4c99af42641ae7b092f54daf0987f00ae9e9dfbd5cf20963da7088c5e9eed2',
        tx_index: 0,
        block_height: 744387,
        block_time: 1679326467,
      },
      {
        address:
          'addr_test1zrphkx6acpnf78fuvxn0mkew3l0fd058hzquvz7w36x4gten0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgsxj90mg',
        tx_hash: 'aac4b898ead03aafd6ab86e8aa4d206902d587c8fb600a18db0a5aba87499d12',
        tx_index: 0,
        block_height: 744389,
        block_time: 1679326525,
      },
      {
        address:
          'addr_test1qz2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer3n0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgs68faae',
        tx_hash: '26f4881c1495c89e1c23b2d45119eec8aa8deef6c1d620e63e976453b5e572ff',
        tx_index: 0,
        block_height: 744401,
        block_time: 1679326775,
      },
      {
        address:
          'addr_test1zrphkx6acpnf78fuvxn0mkew3l0fd058hzquvz7w36x4gten0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgsxj90mg',
        tx_hash: '090c3aecd3698aae8e42aa76c7eb9a4d55d11d118506ae46e30e3e8e0710438f',
        tx_index: 2,
        block_height: 744403,
        block_time: 1679326846,
      },
      {
        address:
          'addr_test1qz2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer3n0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgs68faae',
        tx_hash: 'aee57fc55095c1cf1e34f8fe7d01ad6b45cb3c933f965c2a3ba0aa3e6593b6f3',
        tx_index: 0,
        block_height: 753050,
        block_time: 1679552080,
      },
      {
        address:
          'addr_test1qz2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer3n0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgs68faae',
        tx_hash: 'be3acaed0995ce7cc5f0dd1e2cbbbbe5f82b32c626e8d9566364c0e1e824ecf5',
        tx_index: 0,
        block_height: 771578,
        block_time: 1680018904,
      },
      {
        address:
          'addr_test1zrphkx6acpnf78fuvxn0mkew3l0fd058hzquvz7w36x4gten0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgsxj90mg',
        tx_hash: 'e0aa816f7af9b50102f98dc0b316906e39dfb5002518c2a64f9523e0b1517029',
        tx_index: 2,
        block_height: 771579,
        block_time: 1680018955,
      },
      {
        address:
          'addr_test1qz2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer3n0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgs68faae',
        tx_hash: '3c82a407bdc008f98e0ff57b058b9f9fb6f3814b0f2e4c25ec2af75e43187c7b',
        tx_index: 0,
        block_height: 887800,
        block_time: 1682856318,
      },
      {
        address:
          'addr_test1zrphkx6acpnf78fuvxn0mkew3l0fd058hzquvz7w36x4gten0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgsxj90mg',
        tx_hash: 'f35b360bd89e14be15a49d7bfe5c32b3fc4f763b9ee6f4d4ea46ea7b83da53b3',
        tx_index: 0,
        block_height: 887803,
        block_time: 1682856414,
      },
      {
        address:
          'addr_test1qz2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer3n0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgs68faae',
        tx_hash: '394cc70e110834870ce0d534f38d041154e57c607f06898e964c1d129644abd3',
        tx_index: 0,
        block_height: 1015919,
        block_time: 1685939791,
      },
      {
        address:
          'addr_test1zrphkx6acpnf78fuvxn0mkew3l0fd058hzquvz7w36x4gten0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgsxj90mg',
        tx_hash: '16a35be5f7567d348d6f9eab55ae96261fc4c716ed9a6e6a628145f5436b48f0',
        tx_index: 0,
        block_height: 1015951,
        block_time: 1685940526,
      },
      {
        address:
          'addr_test1qz2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer3n0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgs68faae',
        tx_hash: 'c439cb66397f5fe2dee7ec5c1716c41329967d38ef804c271b85dc58c1c765c6',
        tx_index: 0,
        block_height: 1020575,
        block_time: 1686047183,
      },
      {
        address:
          'addr_test1qz2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer3n0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgs68faae',
        tx_hash: 'aeead34ba8d8f6de4357c8f30649490fed74b4b06b15b0860e83a1aeb73ee653',
        tx_index: 1,
        block_height: 1998936,
        block_time: 1709509384,
      },
      {
        address:
          'addr_test1qz2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer3n0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgs68faae',
        tx_hash: 'ffabd8fabac3fb3ac680fadc335ed04b5ad3b3ee47989c3e217819e9f91f7da9',
        tx_index: 4,
        block_height: 2682418,
        block_time: 1726149469,
      },
      {
        address:
          'addr_test1qz2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer3n0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgs68faae',
        tx_hash: '8219bafcb634c7264eb263f735939ea71579ab72ef4c76391c920a6fb89eeaff',
        tx_index: 2,
        block_height: 3521220,
        block_time: 1748373295,
      },
    ],
  },
  // query params tests
  {
    id: 'accounts-stake-address-transactions-from-to-preprod',
    testName: 'accounts/:stake_address/transactions BF account from&to param',
    endpoints: [
      'accounts/stake_test1uqmgpra4vqgspqga89clrve5qf78vmnsa36hpnqvwkpzjagkstuad/transactions?from=1949748:0&to=1949750:0',
    ],
    response: [
      {
        address:
          'addr_test1qzwuqsd70k70wcm8smxs6jw34r59r83ywm867t5nu3nutceksz8m2cq3qzq36wt37xengqnuweh8pmr4wrxqcavz996sj2cqw8',
        tx_hash: 'ed726da664b0a1a812c8c635230e5efcc29ae7310406287d1134348c5b5b7109',
        tx_index: 0,
        block_height: 1949748,
        block_time: 1708358165,
      },
      {
        address:
          'addr_test1qzwuqsd70k70wcm8smxs6jw34r59r83ywm867t5nu3nutceksz8m2cq3qzq36wt37xengqnuweh8pmr4wrxqcavz996sj2cqw8',
        tx_hash: 'f965fe6c264c06a31dc92d392b029905601ce52c8d63493d4b95b8fc08f45d9d',
        tx_index: 0,
        block_height: 1949750,
        block_time: 1708358196,
      },
    ],
  },
  {
    id: 'accounts-stake-address-transactions-from-to-empty-preprod',
    testName: 'accounts/:stake_address/transactions BF account from&to param empty result',
    endpoints: [
      'accounts/stake_test1uqmgpra4vqgspqga89clrve5qf78vmnsa36hpnqvwkpzjagkstuad/transactions?from=1949749:0&to=1949749:0',
    ],
    response: [],
  },
  ...paginationFixtures,
];
