import { getPaginationFixtures } from '../../../utils.js';

const paginationFixtures = getPaginationFixtures(
  'assets/policy/104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21',
);

export default [
  ...paginationFixtures,
  {
    testName: 'assets/policy/:policy_id?queryparams - general asset',
    endpoints: [
      'assets/policy/104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21',
      'assets/policy/104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21?page=1',
      'assets/policy/104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21?page=1&count=100',
      'assets/policy/104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21?page=1&count=100&order=asc',
    ],
    response: [
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21806241eb1fed60ddb47cef909dc8704a5e736f75e76811f19c454831c50d7a38',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b212f73386c3ee203f6a02e9f9d9049777b7ec84c575b543a0b4c950c85f487708c',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21919cc41897054dea6000afecab50d02dea4070ec963721917dcc7b5cacb5fa0f',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21e316a9cc3833e8dd5904956d31d76c0367795532f4eb329fbb1ade14c87ee4bf',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21c1515ac5ff73a604310f78f0a03a7c93d6729abe85fba086e4c0d9e70a928e68',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b2185e828ebf8bd0fafdb186eee7838773f0543875b1a98b6f076bab81244cd72c7',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21152f6400f7724359073c3dc5fe933980ff72548896d25c446b07172da70c3ff0',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b2115e346c9567faf4fd0a890b96388537cb97ac60d50e8f4450ccb64f1b103ed71',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21f44a1e732fdc78cb07c588dad8fe6f56ccbfef9d426b61806df5656c5841719d',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b216768423871c9dcaf38865c3c2ade2850606874bd99c7ebf9d72156a5fb94d186',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21d3730e1ae9caf1d631dcfc05f2eb543cf76462e8e6ba0b60ef1e670d4cb37486',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b2139cd6fafd4603e1fa128c06f7ab4f46d0dd09fa87339e3e86133b6916825fe5d',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21d8fcc7c42c617cef0f36720fea55409936ffda4710adcd5e278d18d342e95c1b',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21be5e8fd9542a1fb3aa70299966bdd02bd9886d9075d1c200b470a2a06f668037',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b218fd34c7129f1aa4250d845f8587d886fb5bf64641820f40ffb111c8ef919c41c',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21e825ba066c21afc6875d7fdf37bf682686490f6d467ad6982e7862db8a5a03c7',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21ff97abc2e008548b4dc654dac760c710e142f6cf568562babbc13a06a076ed39',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21cfb1434dd95acafe694b9eed0924ddaaa498d603c8e68e00ad8ea5ecfd34a814',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b2127ef626abeca6757d5daca84d30c40ec30c755b133c4d0e6dbbbbe68f8c209d4',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b216e91e00e3c43bc50e4b25c0a4700e0754fc25cf7639d9e4096d3019671722379',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b218495abefbbcea7d42318841f30ed722e66eed0e87aa9ac877d5a7a70ab9cbb91',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21c988889d81af6358e1aea7d75f1bce88ffff74235496adfaa2aaac914348ad83',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b2153b44cdee60be20972578a4fd0d3944dda1ce9aa5c3d12b8190c5ef0f8c7a0c2',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21cc02c72cb3ef8e389956799585c0590453f3eccf704fe5d7dda2cb622f8b3275',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21d3869a512aa11a33893348cf6cd4bebe991ffc6226f8397d9813c66187248a35',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b214e9273ab65952bde521b99d2c1c8681409ab12e64b8c93dd33682bc0c7d28603',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21bfefb79f6e62b0875c77fb4702a898f5fe3e2a760c70731ea590405f4d85478e',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b219503a24d66439990047720649e09d5df133751ebebb102dc87ef7dca516fd369',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21eaf31710d07d61d4610238f59e0156aafc7dbed33836b887e3a9e8eb6f524dcb',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21e7f3f66d739c8b2811f2671037801fd206f7a5d04dfcee24e09376fddb92ab3a',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21b6dddd17c7529234ccccf74508f94953f3459bb48d8f1bd997adc5590b281385',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21a437f8e9632e00a56412a1c3a0c6cb74c6b87b47e91eaa42b6c6f7740731cc34',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21183d7130141a0c3c4a87478f67987dec666b8b423c179968fcccb59d2e8aa373',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b218fde31bc556e0c8f80817d95e8aa86fbcff6a0a433b8a1ca59123a8383268ea3',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21080bba9f9339b6928dab0ada88dcb502cbbab5b496fc2d64471caef7cec01306',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b213e2f6b06db229b2f12262666d43eb6d36736183b4e1851fa920ec12e9806ae00',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21898005ab8a826e5164a20dcba9ff6437da76b7aaa2de632254a0277de6a90ae4',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b216ee2fe2666583513504551b28d1c82584343874533fe325dc086a461f55ba2ee',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21f85cd0822694f2747f5d570ada2c523256ee87311945f7c9cc10d18908ad8cb7',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21d5691abcf8b916454ad35dcf92bdff5c4533f382ba85cead252fe98169352879',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21fd5705d22d8453eb86a3518e3868b2942978a50fdab0cc3a0514a0fab9f419ba',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21c9eba90952b60e97f27bdbb743b9e49753c7cd41736ff34dd9518784bfea6da0',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21d4ed2beee813b82f1bf78b8106c4b12eb8c039af552549250922fe2c4577de95',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21dcf807ead9939fbbf23069769df3b89b91e5d86ac949fff680f8e09bf6424e00',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21fb24f2bb05af6b93e3d7629fa97394d45a424492fb5741abe3c29e536f3a4b8a',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b2172864b3d4187cc9c135bdb4a515a02ef6c902b5a1d73a38dc0312f1ac231a12d',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21c0fc7c8f89a16091297851589b80fc9db1aba0cb85f4ec7883f8e1cc4a9e43f2',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b211abbbb6687abe3513e44726a05e4a1e372acea124915b92e09e9502fbba01051',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b216a755b1674730774650744a47f592b238df178b3c36e9edca76663ae255aa7bb',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21b81e6a93cd214e75ea3bf3b3a85937689ee3538c22d7a8963a0ee494719b7e34',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21f8f85844461a1e74bd4c68087f964300151908f3d82adc58ae6055c45099ce11',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b2198c500eea11da86de0ee23cd5bca95d5835040a02255076f47db43d863f2a379',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21985a4e2498326397c56e05f86168f0102abb64c560043b4501544d3a88acf173',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21f44a7304836d149837da45889b630170f738002d278973f7ef09665b1d972d00',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21050e7ab9729fc9b72c22c8c21322181e1bbeaf81f38eaa0eb3254f0b26ad2037',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21d92a9478d1bdb2d05243f991cfdff5c1ebd31bea11f6522db89260c6b89f7ffe',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b2103c10c8b4fb3b6928441f48bf93f06f8bbbc06b245b8b9b6d7c13b2a805ec078',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21e5255ba9d0cce2418a00fa301fb0642e537cab4adb5f59850c47fea9e6c30848',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21edda820fed246e15ca9e9c90335912d0e28414a9824bc7767e8cb6d088c0ad50',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21fef58f11bd0f60684e4073afbe2ec9055e06202e8e38869bae443b4c4dc6f16f',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b210ad857fad5e7baca4d298aee806046a421fd0e7f97fe746b05fbe58bf8750738',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21a745fa59d07436130ad585f0de29303be8b179f0edf8c843a20f714240971fac',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b219ca2cf38f066602c4e64dcb90539b8206b168fda2db0bfdf7c9c0e6ae56f0dd8',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b210a5c2cd5bdf7ec01fcbb4167c55a189a5e2f53084734aa76d6e0c3b493f920d3',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b214b041c0f67dcb5efc0c6ec7a217968e3e8c98c05d8cecbe2164a2413034b6616',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b214944be2f30b11521449dd106983992ca0bc1990ef162683395be8acb6bceb3ba',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b2119407bd049448fa47d4054b0ece66f446cee70f8c7451ee9fe15a14776301316',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b211ee70c126923284267ad0b99a01f85fc5a1b7cb40779c6ce502ed3fc958e33c6',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b2199382b3e0c0e81bdaf084608071b3b75f8a81d3fb71a759e5d93ce7ef5068e91',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21343791328ecdaad01417e467bd34e1832a893f0ec07050acb749c78ade7b8712',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b2106f8ba7be31f5af528fc05258a5d0a6ca627e73a58048a7260ed54d1b851b7b1',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b2128a57667419f84829d4316d221a335ee16fbed6e684f3f96c1514019884a2e57',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21e58384d9ef1b7b555f6314250ac4ebfbcd87bb515bd5422d88ce189813afe079',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b2190916783d8544ef8c3798b0f752d8012dc1c0a4314744f8463f550ecb6086a2b',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b216c27360952b55cefb1e187397c5e7bd10697ffed5c31d7c4c9d5d87fe36cc2e1',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b210ac15481eaaab68bca8bc110128adab8e2c802a14ea1e44c2a460170a06daa64',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21eea016fb025610c959c78c2bae2c22f4748dcda3b89e4b1d5a9d2b5007f61f3f',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b211b553a2da3e0ed69e2990fd88ae444de44cf563ebc610d99ca11648e5afb8ec3',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21131c7ded6bda7e92baf2cc40dab6c75c2e31f9e0731065440ab2f403f6dcfc51',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b2111dce25d37d44ed2f2356d49967bc0e3f5d4fdee6d145db63d09542ca0f0a0c9',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b211195d3a20fc34b8d4b14762443c7d7bdfc21b91be24ba884cdd6bc34ed5eaaed',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21ed30d182d0e22990c87251093b91f6a4d8824d371af8ede727a2c099f95e3496',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b215a829f85d9756520c07a02319c2b7a20a6c60631bee8c257a7da3013e47afcb6',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b212a7a943f89ec50a7c1ec27ac25214bdd7b9f8d1ea289123a2055ce0aacd3df08',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21630eb5af0e8add8f1719d73bb3572ed4866f50fc459535da81b29350af963ca8',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b211829122d0ae4d5e81bc22048687d74b3ec4d4c2a79fe3ef5ba56ba2d51314d14',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b216f2061307c722c06a2cfebf7f7acf69323d6991283bca8b687bcdfa85697163d',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b210782a9926f4edb01b58f19be1e47e9a09e85a275b61ccca1e1662a2fb8b7df06',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b216d4714cc8c6a1fbfad02c1aa0d5296a55856745b96de9308ae7756b6d6f85c63',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b2159345b0d69879afd4b899ea0fa167fefc7f7192a59a38a8ad341e8a11d21b0cc',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21613207bd83bf2c366c31804b911799cb54f88c37c12cbe91c403ca243a425033',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b210df0e59513eb0b5a398e34942ca7cfd33d1bd5f4b1c6e71633ce9d6fe4eb0e88',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21406c238d2a4e227514d70f28bec6659fad384edec8dcba6df297b9f1c425e982',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b21268712e2586c87b724295ff9d1ba1d58d5ac4e98b806fa0d001dcde65958a861',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b212ac5439bba0cc33e44cffe88dd75f898d348c77b0dd65eb05413379d2f59067b',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b2180cd103f9064b5fb65cae547a2c65e22a8db8ad93d0040f462b621e91472ad06',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b216e46895b52efd3b35464c63f534442780f09e16456f95b9f47ffb8a92614b07e',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b210dfa5735f3e9e79849c4a3e68653960b998f23ad08dfbdf269e6ff5d84335dd9',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b212e9c4275242f5b0e84be6098995b87e0dd1d25501a999c16d48158bdec5609cc',
        quantity: '0',
      },
      {
        asset:
          '104d51dd927761bf5d50d32e1ede4b2cff477d475fe32f4f780a4b2176f16c99d4a62267a3dc870b18200435bdfd4e09bb30e2869950b3fe69146f2a',
        quantity: '0',
      },
    ],
  },
];
