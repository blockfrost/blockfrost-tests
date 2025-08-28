import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'addresses/addr_test1vryy0xmvalxpv2n5cpx8wuvq0cf8mahkp5hr2fr3uh7f3jgejq7x8/transactions',
);

export default [
  ...paginationFixtures,
  {
    id: 'addresses-address-transactions-generic-dormant-shelley-script-address_f79e61a5d6c1',
    testName: 'addresses/:address/transactions generic dormant shelley script address',

    endpoints: [
      'addresses/addr_test1xznnmfk43w5cag3m7e9nnfe0wcsg5lx8afv4u9utjk3zxv9zj64kndceuuncuu2gqklnhjrcadgqjy9gsedww6ktq0hsgr6uxf/transactions?page=40&count=4',
      'addresses/addr_test1xznnmfk43w5cag3m7e9nnfe0wcsg5lx8afv4u9utjk3zxv9zj64kndceuuncuu2gqklnhjrcadgqjy9gsedww6ktq0hsgr6uxf/transactions?page=40&count=4&order=asc',
      'addresses/addr_test1xznnmfk43w5cag3m7e9nnfe0wcsg5lx8afv4u9utjk3zxv9zj64kndceuuncuu2gqklnhjrcadgqjy9gsedww6ktq0hsgr6uxf/transactions?count=4&from=2871888:0&to=2872828:2',
      'addresses/addr_test1xznnmfk43w5cag3m7e9nnfe0wcsg5lx8afv4u9utjk3zxv9zj64kndceuuncuu2gqklnhjrcadgqjy9gsedww6ktq0hsgr6uxf/transactions?from=2871888:0&to=2872828:2',
    ],
    response: [
      {
        tx_hash: '36cb40e3a12fb5821fadcb4747dc57e50e7ec89bae245ab00dddf4707b1cc61b',
        tx_index: +0,
        block_height: 2871888,
        block_time: 1736871257,
      },
      {
        tx_hash: '3d8b9c68fc96117d1ccfb2cd114f641c818fdfbb89af04dc6c3ddb2288808031',
        tx_index: +0,
        block_height: 2872641,
        block_time: 1736895542,
      },
      {
        tx_hash: '8cfe2a70db3f585febba8dfb47a4743b87c5bbf4f5baa63f22b7d248f38aa621',
        tx_index: 1,
        block_height: 2872784,
        block_time: 1736899894,
      },
      {
        tx_hash: '51c3d97a28a1ca1722946bb6cc5c62bf2e988a69608caa0686437d7e8bfee89e',
        tx_index: 2,
        block_height: 2872828,
        block_time: 1736901064,
      },
    ],
  },
  {
    id: 'addresses-address-transactions-generic-dormant-shelley-address_a99f171ad600',
    testName: 'addresses/:address/transactions generic dormant shelley address',

    endpoints: [
      'addresses/addr_test1qqge9dt82fkvch0tqr44zf9msc4x70ualsdqmr7s7fhflzmqh5jv6xejejee287zpkfpaqt7yk6fk46xsfppgnece2nqtfhkjt/transactions?page=30&count=5',
      'addresses/addr_test1qqge9dt82fkvch0tqr44zf9msc4x70ualsdqmr7s7fhflzmqh5jv6xejejee287zpkfpaqt7yk6fk46xsfppgnece2nqtfhkjt/transactions?page=30&count=5&order=asc',
      'addresses/addr_test1qqge9dt82fkvch0tqr44zf9msc4x70ualsdqmr7s7fhflzmqh5jv6xejejee287zpkfpaqt7yk6fk46xsfppgnece2nqtfhkjt/transactions?count=5&from=558320:9&to=571941:3',
      'addresses/addr_test1qqge9dt82fkvch0tqr44zf9msc4x70ualsdqmr7s7fhflzmqh5jv6xejejee287zpkfpaqt7yk6fk46xsfppgnece2nqtfhkjt/transactions?from=558320:9&to=571941:3',
      'addresses/addr_vkh1zxft2e6jdnx9m6cqadgjfwux9fhnl80urgxcl58jd60ckt4g3w6/transactions?page=30&count=5',
      'addresses/addr_vkh1zxft2e6jdnx9m6cqadgjfwux9fhnl80urgxcl58jd60ckt4g3w6/transactions?page=30&count=5&order=asc',
      'addresses/addr_vkh1zxft2e6jdnx9m6cqadgjfwux9fhnl80urgxcl58jd60ckt4g3w6/transactions?count=5&from=558320:9&to=571941:3',
      'addresses/addr_vkh1zxft2e6jdnx9m6cqadgjfwux9fhnl80urgxcl58jd60ckt4g3w6/transactions?from=558320:9&to=571941:3',
    ],
    response: [
      {
        tx_hash: '1ca15ff821ca2b4ea9d69d1aa16e4ab0b6437761d5314a6bb9fc4494050d395e',
        tx_index: 9,
        block_height: 558320,
        block_time: 1679184005,
      },
      {
        tx_hash: 'd1fdbf6af600517f5f3f3d666182e2373e237f27b3766fec646bc728eb1467f9',
        tx_index: 2,
        block_height: 561817,
        block_time: 1679270448,
      },
      {
        tx_hash: '3eb9879182449b60377bacb09b2cedb18da6492bedc939b68d7402bb744ef91f',
        tx_index: 4,
        block_height: 565151,
        block_time: 1679356810,
      },
      {
        tx_hash: 'b6bfb9e547bd2e351a23e76586926c588e8a6c3302bd7850062bfef9122af621',
        tx_index: 7,
        block_height: 568550,
        block_time: 1679443213,
      },
      {
        tx_hash: 'b39a11c773c154da5772ec3866e1e823679302f1ece470b98c507cc910fa3ca7',
        tx_index: 3,
        block_height: 571941,
        block_time: 1679529626,
      },
    ],
  },
  {
    id: 'addresses-address-transactions-generic-dormant-shelley-address-desc_d8b232d360c4',
    testName: 'addresses/:address/transactions generic dormant shelley address desc',

    endpoints: [
      'addresses/addr_test1qqge9dt82fkvch0tqr44zf9msc4x70ualsdqmr7s7fhflzmqh5jv6xejejee287zpkfpaqt7yk6fk46xsfppgnece2nqtfhkjt/transactions?page=30&count=10&order=desc',
      'addresses/addr_vkh1zxft2e6jdnx9m6cqadgjfwux9fhnl80urgxcl58jd60ckt4g3w6/transactions?page=30&count=10&order=desc',
    ],
    response: [
      {
        tx_hash: '34b39075581e4c53d3e63ced9996b6c60de564e1b0c3a7898cd71776da42d974',
        tx_index: 8,
        block_height: 480371,
        block_time: 1677196815,
      },
      {
        tx_hash: '595bbfe30143fecdc70d38c6e37fee93355656a9912f4795b50e848ad06e42fc',
        tx_index: 4,
        block_height: 476716,
        block_time: 1677110482,
      },
      {
        tx_hash: '62cdb71c560437e5f1a01adaa5f07d8ac8719d320e7b0f2d6e4cce319ca950d0',
        tx_index: +0,
        block_height: 473148,
        block_time: 1677024019,
      },
      {
        tx_hash: '206159dcf66eb6a5151d370c355dd44e47d4cfe1e770096080a97ab31504f279',
        tx_index: 3,
        block_height: 469586,
        block_time: 1676937620,
      },
      {
        tx_hash: 'f570ab16e4e2d4ee78e379291f10011a91b17dbf926a122e6fa5064cce3c7d5f',
        tx_index: +0,
        block_height: 466053,
        block_time: 1676851245,
      },
      {
        tx_hash: 'a4c70907fd2007718d0e7c1cf79bf62c56505e91778a3fa7b228878a81a4698c',
        tx_index: 6,
        block_height: 462542,
        block_time: 1676764863,
      },
      {
        tx_hash: '76e9a8f3f95194fad587833615fdbf653121e654be883f5d32eef5a5fc39ca44',
        tx_index: +0,
        block_height: 458918,
        block_time: 1676678420,
      },
      {
        tx_hash: 'd21c22169197c10aff39241d6cb9518aa22f8ea397fa98bacdbba948fd29ebf0',
        tx_index: 5,
        block_height: 455226,
        block_time: 1676592080,
      },
      {
        tx_hash: '9bc8f82ae12bca79798ff70ba91670f26c86f1e237579b1df8e044a4b4f83262',
        tx_index: 4,
        block_height: 451638,
        block_time: 1676505622,
      },
      {
        tx_hash: '56f4246aa9e2edf4debe7417231455189a72589d43622bc636d46f39e9c35b70',
        tx_index: 3,
        block_height: 448121,
        block_time: 1676419225,
      },
    ],
  },
  {
    id: 'addresses-address-transactions-generic-payment-cred-1_9ea0048125af',
    testName: 'addresses/:address/transactions generic payment_cred 1',

    endpoints: [
      'addresses/addr_vkh1zxft2e6jdnx9m6cqadgjfwux9fhnl80urgxcl58jd60ckt4g3w6/transactions?order=asc&page=5',
    ],
    response: [
      {
        tx_hash: 'dc97d7535c077ecf5258a78e8f7060b2dbcd61de987bc4afac3214953a05de74',
        tx_index: 1,
        block_height: 1523419,
        block_time: 1701820808,
      },
      {
        tx_hash: '2d1de6a743eef8cbe5a51728afc8a5fd6d044f395b5dff6e63f7f2e30bfadecb',
        tx_index: 1,
        block_height: 1527204,
        block_time: 1701907255,
      },
      {
        tx_hash: 'd3e8ecac31614cb5eddc195fe2ac2855ee5204178e71921914ca79a63430ba58',
        tx_index: 1,
        block_height: 1530914,
        block_time: 1701993713,
      },
      {
        tx_hash: '7921eeb248b4e718041dd3c0e29783aa65573c03e2bbede7d741d163984a10ad',
        tx_index: 1,
        block_height: 1534634,
        block_time: 1702080029,
      },
      {
        tx_hash: '45de1b18cdf213fa4d894088b98300285ea9096961a0ebf91949c3b454fecc7a',
        tx_index: 2,
        block_height: 1538080,
        block_time: 1702166427,
      },
      {
        tx_hash: 'ae92eb82a46baee4c313bb5317478ae5d6ff1838ac6fc78741356333da1834fc',
        tx_index: 4,
        block_height: 1541470,
        block_time: 1702252871,
      },
      {
        tx_hash: '2139614756caced9ce534b1a92f8affb12702aa21aaa4a5c894d48f3ddb96f4b',
        tx_index: 2,
        block_height: 1545046,
        block_time: 1702339212,
      },
      {
        tx_hash: '0e59b0e9cb134c9f4384194f6466fe2470ac898bc4329a5cac858042813f304a',
        tx_index: +0,
        block_height: 1548595,
        block_time: 1702425611,
      },
      {
        tx_hash: 'f9ddd8bc6aa4627471a7759d326fb8720a7cdd8d79be11f5ae86f25ad76ef3c0',
        tx_index: 1,
        block_height: 1552239,
        block_time: 1702512071,
      },
      {
        tx_hash: '4be9669d63498d531ef652d1c45d9f3ca8aae2ecbf2ea4f2bfdba7db7d412d7a',
        tx_index: +0,
        block_height: 1555872,
        block_time: 1702598415,
      },
      {
        tx_hash: '1cfadfde93f757ca79f89784fe75317f80dc615b8e21ee2a181481cc3fb786d8',
        tx_index: 1,
        block_height: 1559499,
        block_time: 1702684813,
      },
      {
        tx_hash: 'd14e0c9bac6d8c1b77de31f3d208966776b579501b3a919441098a655a0edc35',
        tx_index: +0,
        block_height: 1562875,
        block_time: 1702771233,
      },
      {
        tx_hash: '02342e636aaa4b64a6cff69066f36d871464e04b47c09ff36b8d38886934a683',
        tx_index: 1,
        block_height: 1566341,
        block_time: 1702857613,
      },
    ],
  },
  {
    id: 'addresses-address-transactions-generic-payment-cred-2_3ab7686e48df',
    testName: 'addresses/:address/transactions generic payment_cred 2',

    endpoints: [
      'addresses/addr_vkh1zxft2e6jdnx9m6cqadgjfwux9fhnl80urgxcl58jd60ckt4g3w6/transactions?order=asc&page=25&count=1',
    ],
    response: [
      {
        tx_hash: 'd82701603c6434c5fee368f50bc79cff07721dba74dd0e3082170e46672e428d',
        tx_index: 4,
        block_height: 111741,
        block_time: 1669023408,
      },
    ],
  },
];
