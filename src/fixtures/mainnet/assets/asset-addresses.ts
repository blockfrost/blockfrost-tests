import { error_400_assets, error_404 } from '../../errors/index.js';
import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'assets/e74066b78958ebe744dfdd9157141f515453fd213d94ce2d66c073c5707261736961746b6f/addresses',
);

export default [
  ...paginationFixtures,
  {
    id: 'assets-addresses_53aebb87e827',
    testName: 'assets addresses',
    endpoints: [
      'assets/e74066b78958ebe744dfdd9157141f515453fd213d94ce2d66c073c5707261736961746b6f/addresses',
    ],
    response: [
      {
        address:
          'addr1qxztvk58qg47e6z2fth5us6nm9lwnpe9u9dl6xwj6faqrzredw45r6kf23ktzztc6n8jud9j0nm3qq5sjpmmgalu7jss2jpxzf',
        quantity: '1',
      },
    ],
  },
  {
    id: 'assets-addresses-gimbal_4e57595f1210',
    testName: 'assets addresses - gimbal',
    endpoints: [
      'assets/d3501d9531fcc25e3ca4b6429318c2cc374dbdbcf5e99c1c1e5da1ff444f4e545350414d/addresses',
    ],
    response: [
      {
        address:
          'addr1q8h22z0n3zqecr9n4q9ysds2m2ms3dqesz575accjpc3jclw55yl8zypnsxt82q2fqmq4k4hpz6pnq9fafm33yr3r93sgnpdw6',
        quantity: '100000',
      },
      {
        address:
          'addr1qxeal3u4jlknqpmpkswyqmq58ggzrytu6v5rg73p64eppaxgvhcs6e4zud6jg267l8c940yggr2pxssestmzcdwwf7lsswrvnt',
        quantity: '9900000',
      },
    ],
  },
  {
    id: 'assets-asset-addresses-all-hail-nutcoin_e65b1069b9aa',
    testName: 'assets/:asset/addresses - all hail nutcoin!',
    endpoints: [
      'assets/00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae6e7574636f696e/addresses',
    ],
    response: [
      {
        address:
          'addr1qxxfwz7n3lnduxxgff6smhwlxkcw3gcax3q39363cpq4axnntgjccmteyrsldd67rxv2yq6ew2a7t48q34p9j7nf0kjq4rdx3w',
        quantity: '1',
      },
    ],
  },
  {
    id: 'assets-addresses-invalid-asset_69058bf7c16e',
    testName: 'assets addresses - invalid asset',
    endpoints: ['assets/stonksasset/addresses'],
    response: error_400_assets,
  },
  {
    id: 'assets-addresses-valid-not-on-chain-asset_3ad55423382f',
    testName: 'assets addresses - valid not on-chain asset',
    endpoints: [
      'assets/ddd01d9531fcc25e3ca4b6429318c2cc374dbdbcf5e99c1c1e5da1ff444f4e545350414d/addresses',
    ],
    response: error_404,
  },
];
