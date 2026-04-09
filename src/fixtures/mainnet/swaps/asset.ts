import { getPaginationFixtures } from '../../../index.js';

// HOSKY — most heavily distributed asset on mainnet, generic token test
const HOSKY_TOKEN = 'a0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235484f534b59';

const paginationFixtures = getPaginationFixtures(`swaps/${HOSKY_TOKEN}`, {
  fromToPagination: { format: 'height' },
});

export default [
  ...paginationFixtures,

  // --- Success (200) ---
  // Generic token (not a swap beacon) - verifies endpoint works for any asset

  {
    id: 'swaps-asset-hosky-asc_1a2b3c4d5e6f',
    testName: 'swaps/:asset - HOSKY generic token asc',
    endpoints: [`swaps/${HOSKY_TOKEN}?order_by=price&order=asc&count=2`],
    response: [
      {
        address: 'addr1w9dq9yvgkn7zmf8ulzv4fqg9eslsal03rr9j28v03h50wusay059n',
        tx_hash: '26ce8b3a381e57cf9e216b593dea3861790f4cacff919350bf1ae023ab319f58',
        output_index: 0,
        amount: [
          { unit: 'lovelace', quantity: '2098970' },
          {
            unit: '3a888d65f16790950a72daee1f63aa05add6d268434107cfa5b67712746f6b656e31',
            quantity: '1',
          },
          {
            unit: '627c22b8a13e0f7dad08ea3cc25ac6f254822acf9ded1b52b8578b41dd253d38fced3e0bc198d76fc8aaa40496a69c501d3d67304d6d81e3ecf0b8b5',
            quantity: '9223372036854775707',
          },
          {
            unit: 'a0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235484f534b59',
            quantity: '15936',
          },
          {
            unit: 'c9be273c5a9ce0be453f5c40f47edf8d27f45b47f4acac7a96c8a129706f6f6c',
            quantity: '1',
          },
        ],
        block: 'f91bbda281ebc27e2404a50976674e84f7e7a09210d3f32f7608c95cef44b160',
        block_height: 8_642_289,
        block_time: 1_681_400_376,
        data_hash: 'fe1d30e2e47b9f7f80f2b2d84a6e374f05094566603957915da0379550fc401a',
        inline_datum:
          'd8799fd8799f581c3a888d65f16790950a72daee1f63aa05add6d268434107cfa5b6771246746f6b656e31ffd8799f581ca0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c23545484f534b59ff01193e40ff',
        inline_datum_json: {
          fields: [
            {
              fields: [
                { bytes: '3a888d65f16790950a72daee1f63aa05add6d268434107cfa5b67712' },
                { bytes: '746f6b656e31' },
              ],
              constructor: 0,
            },
            {
              fields: [
                { bytes: 'a0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235' },
                { bytes: '484f534b59' },
              ],
              constructor: 0,
            },
            { int: 1 },
            { int: 15936 },
          ],
          constructor: 0,
        },
        reference_script_hash: null,
      },
      {
        address: 'addr1w9dq9yvgkn7zmf8ulzv4fqg9eslsal03rr9j28v03h50wusay059n',
        tx_hash: 'af1e5300fd7bccba37cfc99cdcbe5a3db464aff60c10f58a757f76bcdfd6743a',
        output_index: 0,
        amount: [
          { unit: 'lovelace', quantity: '2133450' },
          {
            unit: '627c22b8a13e0f7dad08ea3cc25ac6f254822acf9ded1b52b8578b4197eaf4843779232ad15fb31411753356d37d51a02e4ea64446b51f471a40701e',
            quantity: '9223372036853475797',
          },
          {
            unit: '6ac8ef33b510ec004fe11585f7c5a9f0c07f0c23428ab4f29c1d7d104d454c44',
            quantity: '5161143',
          },
          {
            unit: 'a0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235484f534b59',
            quantity: '329549',
          },
          {
            unit: 'c9be273c5a9ce0be453f5c40f47edf8d27f45b47f4acac7a96c8a129706f6f6c',
            quantity: '1',
          },
        ],
        block: '7934debce0cfbd43eecd95ff4b6a0beb8139796ab31fd119f73064a3c86e5a75',
        block_height: 8_690_185,
        block_time: 1_682_384_616,
        data_hash: 'dc3f7e3368dfbc737355b02079616d9c10d9cc69ebfebdbb7de745f203bc52b1',
        inline_datum:
          'd8799fd8799f581c6ac8ef33b510ec004fe11585f7c5a9f0c07f0c23428ab4f29c1d7d10444d454c44ffd8799f581ca0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c23545484f534b59ff1a004ec0b71a0005074dff',
        inline_datum_json: {
          fields: [
            {
              fields: [
                { bytes: '6ac8ef33b510ec004fe11585f7c5a9f0c07f0c23428ab4f29c1d7d10' },
                { bytes: '4d454c44' },
              ],
              constructor: 0,
            },
            {
              fields: [
                { bytes: 'a0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235' },
                { bytes: '484f534b59' },
              ],
              constructor: 0,
            },
            { int: 5161143 },
            { int: 329549 },
          ],
          constructor: 0,
        },
        reference_script_hash: null,
      },
    ],
  },
];
