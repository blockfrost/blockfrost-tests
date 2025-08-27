import { getPaginationFixtures } from '../../../index.js';

const policyId = '7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d';

const paginationFixtures = getPaginationFixtures(`assets/policy/${policyId}`);

export default [
  ...paginationFixtures,
  {
    id: 'assets-policy-policy-id-queryparams-general-asset_4f53cda18c2b',
    testName: 'assets/policy/:policy_id?queryparams - general asset',

    endpoints: [
      `assets/policy/${policyId}`,
      `assets/policy/${policyId}?page=1`,
      `assets/policy/${policyId}?page=1&count=100`,
      `assets/policy/${policyId}?page=1&count=100&order=asc`,
    ],

    response: [
      {
        asset: '7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d48454c4c4f574f524c44',
        quantity: '0',
      },
      {
        asset: '7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d54657374546f6b656e',
        quantity: '0',
      },
      {
        asset: '7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d4144415f555344435f4c50',
        quantity: '55340232221128654842',
      },
      {
        asset:
          '7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d4144415f555344435f4944454e54495459',
        quantity: '4',
      },
      {
        asset: '7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d55534443',
        quantity: '4000000000000000',
      },
      {
        asset: '7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d4144415f544544595f4c50',
        quantity: '18446744073709551614',
      },
      {
        asset:
          '7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d4144415f544544595f4944454e54495459',
        quantity: '2',
      },
      {
        asset: '7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d54454459',
        quantity: '2000000000000000',
      },
      {
        asset: '7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d4144415f695553445f4c50',
        quantity: '9223372036854775807',
      },
      {
        asset:
          '7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d4144415f695553445f4944454e54495459',
        quantity: '1',
      },
      {
        asset: '7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d69555344',
        quantity: '1000000000000000',
      },
      {
        asset:
          '7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d4144415f544544595354414b45315f4c50',
        quantity: '9223372036854775807',
      },
      {
        asset:
          '7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d4144415f544544595354414b45315f4944454e54495459',
        quantity: '1',
      },
      {
        asset: '7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d544544595354414b4531',
        quantity: '1000000000000000',
      },
      {
        asset: '7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d4144415f444a45445f4c50',
        quantity: '9223372036854775807',
      },
      {
        asset:
          '7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d4144415f444a45445f4944454e54495459',
        quantity: '1',
      },
      {
        asset: '7c833f1eb9b70c2e700d028e0ee28d421edad2af4222061be525382d444a4544',
        quantity: '1000000000000000',
      },
    ],
  },
];
