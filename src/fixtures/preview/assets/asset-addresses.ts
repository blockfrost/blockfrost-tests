import { error_400_assets, error_404 } from '../../errors/index.js';
import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'assets/60d9cf867f96f4395a10730c327903f6fac297ef6c10138df438eb07/addresses',
);

export default [
  ...paginationFixtures,
  {
    id: 'assets-addresses_eb5b8fb1e458',
    testName: 'assets addresses',
    endpoints: ['assets/60d9cf867f96f4395a10730c327903f6fac297ef6c10138df438eb07/addresses'],
    response: [
      {
        address:
          'addr_test1qr3uhus8q7pat5a2h99t4ws4upt9excr5ce5k4fp7lv6qfcjvuw9j2fcs3xpgqxkt5f5zd0rtd8jnnw8n2s5qjswzyfqmyqptf',
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
