import { error_400_accounts, error_404 } from '../../errors/index.js';
import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'accounts/stake1u9uz4j024qfud557ucrqw3kqfdndjgaxj7m44x7tamkvmyqzdwe7v/addresses/assets',
);

export default [
  ...paginationFixtures,
  {
    id: 'accounts-stake-address-addresses-assets-bf-account_e6a6afc5c773',
    testName: 'accounts/:stake_address/addresses/assets - BF account',
    endpoints: [
      'accounts/stake1u9uz4j024qfud557ucrqw3kqfdndjgaxj7m44x7tamkvmyqzdwe7v/addresses/assets',
      'accounts/stake1u9uz4j024qfud557ucrqw3kqfdndjgaxj7m44x7tamkvmyqzdwe7v/addresses/assets?order=asc',
      'accounts/stake1u9uz4j024qfud557ucrqw3kqfdndjgaxj7m44x7tamkvmyqzdwe7v/addresses/assets?order=asc&page=1',
      'accounts/stake1u9uz4j024qfud557ucrqw3kqfdndjgaxj7m44x7tamkvmyqzdwe7v/addresses/assets?order=asc&page=1&count=1',
    ],

    response: [
      {
        unit: 'd436d9f6b754582f798fe33f4bed12133d47493f78b944b9cc55fd1853756d6d69744c6f64676534393539',
        quantity: '1',
      },
    ],
  },
  {
    id: 'accounts-stake-address-addresses-assets-nutcoin-stake-address_6ee3b9c5d332',
    testName: 'accounts/:stake_address/addresses/assets - nutcoin stake address',
    endpoints: [
      'accounts/stake1u9e45fvvd4ujpc0kka0pnx9zqdvh9wl96nsg6sje0f5hmfq45lrja/addresses/assets?order=asc&count=6',
      'accounts/stake1u9e45fvvd4ujpc0kka0pnx9zqdvh9wl96nsg6sje0f5hmfq45lrja/addresses/assets?order=asc&page=1&count=6',
    ],
    response: [
      {
        unit: '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae6e7574636f696e',
        quantity: '1',
      },
      {
        unit: 'b43131f2c82825ee3d81705de0896c611f35ed38e48e33a3bdf298dc43727970746f4d6167653033373930',
        quantity: '1',
      },
      {
        unit: 'd5e6bf0500378d4f0da4e8dde6becec7621cd8cbf5cbb9b87013d4cc537061636542756431303433',
        quantity: '1',
      },
      {
        unit: '0e14267a8020229adc0184dd25fa3174c3f7d6caadcb4425c70e7c04756e7369673030343731',
        quantity: '1',
      },
      {
        unit: '432749982ba3bd2d969715860bb27f9efab8ab6ba7bd1e94a1a2982950414e4441',
        quantity: '1000000',
      },
      {
        unit: 'aa1b03c6a49951282e9a68b17133a814f4c603f85be469e22869ecb4726561646d65',
        quantity: '1',
      },
    ],
  },
  {
    id: 'accounts-stake-address-addresses-assets-generic-stake-address-without-tokens_361b73a34537',
    testName: 'accounts/:stake_address/addresses/assets - generic stake address without tokens',
    endpoints: [
      'accounts/stake1uyfckx3mk6rqy6epdfqswhw3p6kpfad83mgcmyez2vacuws8yppkw/addresses/assets',
    ],
    response: [],
  },
  {
    id: 'accounts-stake-address-non-valid-account_ea7670c3d362',
    testName: 'accounts/:stake_address - non-valid account',
    response: error_400_accounts,
    endpoints: ['accounts/stake1kek/addresses/assets'],
  },
  {
    id: 'accounts-stake-address-valid-not-on-chain-account_009962450552',
    testName: 'accounts/:stake_address - valid not on-chain account',
    response: error_404,
    endpoints: [
      'accounts/stake1u9mnvzarrk73dz8gcmrx8lqqqnzfa8zu4zxuymstr6vtvmsutca3h/addresses/assets',
    ],
  },
  {
    id: 'accounts-stake-address-addresses-assets-valid-not-on-chain-account_009962450552',
    testName: 'accounts/:stake_address/addresses/assets - valid not on-chain account',
    response: error_404,
    endpoints: [
      'accounts/stake1u9mnvzarrk73dz8gcmrx8lqqqnzfa8zu4zxuymstr6vtvmsutca3h/addresses/assets',
    ],
  },
  {
    id: 'accounts-stake-address-addresses-assets-nutcoin-stake-address_3f3577bc5212',
    testName: 'accounts/:stake_address/addresses/assets nutcoin stake address',
    endpoints: [
      'accounts/stake1u9e45fvvd4ujpc0kka0pnx9zqdvh9wl96nsg6sje0f5hmfq45lrja/addresses/assets?order=desc',
      'accounts/stake1u9e45fvvd4ujpc0kka0pnx9zqdvh9wl96nsg6sje0f5hmfq45lrja/addresses/assets?order=desc&page=1',
      'accounts/stake1u9e45fvvd4ujpc0kka0pnx9zqdvh9wl96nsg6sje0f5hmfq45lrja/addresses/assets?order=desc&count=8',
      'accounts/stake1u9e45fvvd4ujpc0kka0pnx9zqdvh9wl96nsg6sje0f5hmfq45lrja/addresses/assets?order=desc&page=1&count=8',
    ],
    response: [
      {
        unit: '27fa5cc3d1c2ed825f799ee41c04621d8b6703d86e66390748e7b2484255445a',
        quantity: '21531',
      },
      {
        unit: '1d76557b2e2df0c19d23513081c1916a92f7ab313d7c06b1e3998283756e7369676e6564746f6b656e',
        quantity: '1',
      },
      {
        unit: 'aa1b03c6a49951282e9a68b17133a814f4c603f85be469e22869ecb4726561646d65',
        quantity: '1',
      },
      {
        unit: '432749982ba3bd2d969715860bb27f9efab8ab6ba7bd1e94a1a2982950414e4441',
        quantity: '1000000',
      },
      {
        unit: '0e14267a8020229adc0184dd25fa3174c3f7d6caadcb4425c70e7c04756e7369673030343731',
        quantity: '1',
      },
      {
        unit: '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae6e7574636f696e',
        quantity: '1',
      },
      {
        unit: 'b43131f2c82825ee3d81705de0896c611f35ed38e48e33a3bdf298dc43727970746f4d6167653033373930',
        quantity: '1',
      },
      {
        unit: 'd5e6bf0500378d4f0da4e8dde6becec7621cd8cbf5cbb9b87013d4cc537061636542756431303433',
        quantity: '1',
      },
    ],
  },
  {
    id: 'accounts-stake-address-addresses-assets-generic-stake-address-without-tokens_361b73a34537',
    testName: 'accounts/:stake_address/addresses/assets generic stake address without tokens',
    endpoints: [
      'accounts/stake1uyfckx3mk6rqy6epdfqswhw3p6kpfad83mgcmyez2vacuws8yppkw/addresses/assets',
    ],
    response: [],
  },
];
