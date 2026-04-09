import { getPaginationFixtures } from '../../../index.js';

// cardano-swaps v1 beacon tokens on preview
const V1_ONE_WAY_BEACON =
  '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd' +
  '016e1bc9aafb50bf22059a36db003e16e3e43d415cf8eae5f122d251f66ca307';

const V1_TWO_WAY_BEACON =
  '84662c22dc5c0cadad7b2ebf9757ce9ea61dbd8fe64bc8c43c112a40' +
  '29bfb1978aa7aa9edda9bdf0fb68a79cc3957c7a217960a12da70204dadf0d87';

const paginationFixtures = getPaginationFixtures(`swaps/${V1_ONE_WAY_BEACON}`, {
  fromToPagination: { format: 'height' },
});

export default [
  ...paginationFixtures,

  // --- Success (200) - sorted by swap price ---
  // cardano-swaps v1 one-way (price sorted)

  {
    id: 'swaps-asset-v1-one-way-price-asc_4d5e6f1a2b3c',
    testName: 'swaps/:asset - cardano-swaps v1 one-way price asc',
    endpoints: [`swaps/${V1_ONE_WAY_BEACON}?order_by=price&order=asc&count=1`],
    response: [
      {
        address:
          'addr_test1zqql5djxthlrdcnvy87m7uswf0d0es9cdw6nvl72gcqj74s0zqdvmxnr2rt83mgncgs4nxawhjtpqyrn6hf65c25322s9n8nf4',
        tx_hash: '2b8eb0208140b0323f4018e92dcb3f729e41b42b05644b8287337d12c77ae466',
        output_index: 0,
        amount: [
          { unit: 'lovelace', quantity: '2758400' },
          {
            unit: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd016e1bc9aafb50bf22059a36db003e16e3e43d415cf8eae5f122d251f66ca307',
            quantity: '1',
          },
          {
            unit: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd461e1f087114b671d83b7b461fb93ac6c89b3ee5491deae6a91039bef997a9b6',
            quantity: '1',
          },
          {
            unit: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fddf91e329aa5a47288aca86568d24d4c1dbd69c8483934d0795fdc2c4fd13ec2c',
            quantity: '1',
          },
          {
            unit: '91d4f382273f442f15e9da48cb23349ba275f8818e4c7ac5d1004a164d79555344',
            quantity: '1000000000',
          },
        ],
        block: 'efec0870e24e3ac8b750f42e707afdcdafe61e9cf9ed830860de65b9fd66bb8c',
        block_height: 1_925_050,
        block_time: 1_711_622_956,
        data_hash: '0e63ab7d1f19b326b07c0076f4f50b73bbf46164e17db25f37ae1e657840b54f',
        inline_datum:
          'd8799f581c47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd5820df91e329aa5a47288aca86568d24d4c1dbd69c8483934d0795fdc2c4fd13ec2c581c91d4f382273f442f15e9da48cb23349ba275f8818e4c7ac5d1004a16454d795553445820461e1f087114b671d83b7b461fb93ac6c89b3ee5491deae6a91039bef997a9b6581ccd453198b8056208716e175e2638f99465712d79d1f39b34248c8bee4c446a65644d6963726f5553445820016e1bc9aafb50bf22059a36db003e16e3e43d415cf8eae5f122d251f66ca307d8799f18641864ffd87a80ff',
        inline_datum_json: {
          fields: [
            { bytes: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd' },
            { bytes: 'df91e329aa5a47288aca86568d24d4c1dbd69c8483934d0795fdc2c4fd13ec2c' },
            { bytes: '91d4f382273f442f15e9da48cb23349ba275f8818e4c7ac5d1004a16' },
            { bytes: '4d79555344' },
            { bytes: '461e1f087114b671d83b7b461fb93ac6c89b3ee5491deae6a91039bef997a9b6' },
            { bytes: 'cd453198b8056208716e175e2638f99465712d79d1f39b34248c8bee' },
            { bytes: '446a65644d6963726f555344' },
            { bytes: '016e1bc9aafb50bf22059a36db003e16e3e43d415cf8eae5f122d251f66ca307' },
            { fields: [{ int: 100 }, { int: 100 }], constructor: 0 },
            { fields: [], constructor: 1 },
          ],
          constructor: 0,
        },
        reference_script_hash: null,
      },
    ],
  },

  // cardano-swaps v1 two-way (price sorted)

  {
    id: 'swaps-asset-v1-two-way-price-asc_5e6f1a2b3c4d',
    testName: 'swaps/:asset - cardano-swaps v1 two-way price asc',
    endpoints: [`swaps/${V1_TWO_WAY_BEACON}?order_by=price&order=asc&count=1`],
    response: [
      {
        address:
          'addr_test1zzrns8ct7stw9kh8f97nlnvqsl8kw7eukje2aw3kak8c77vdkd5qnky7dxlj8wqcj36v0kp5lylk06nvc59gwgc4ug4qzajw67',
        tx_hash: '146af4fbb10b73d686966ec10968803450b7490f624d48c1bb8a0b10fa47f890',
        output_index: 0,
        amount: [
          { unit: 'lovelace', quantity: '101500000' },
          {
            unit: '84662c22dc5c0cadad7b2ebf9757ce9ea61dbd8fe64bc8c43c112a4029bfb1978aa7aa9edda9bdf0fb68a79cc3957c7a217960a12da70204dadf0d87',
            quantity: '1',
          },
          {
            unit: '84662c22dc5c0cadad7b2ebf9757ce9ea61dbd8fe64bc8c43c112a402cba67d1842e0eeabc82308d428aae28c4299afbb09dfaafaba4901f3dd86082',
            quantity: '1',
          },
          {
            unit: '84662c22dc5c0cadad7b2ebf9757ce9ea61dbd8fe64bc8c43c112a40e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
            quantity: '1',
          },
          {
            unit: '91d4f382273f442f15e9da48cb23349ba275f8818e4c7ac5d1004a164d79555344',
            quantity: '99999999',
          },
        ],
        block: 'b1e6fe2fabf272479bf45b24d5d31cce8d72c2b27c889ee73deb25e199ada3e3',
        block_height: 1_815_864,
        block_time: 1_708_983_861,
        data_hash: 'd9791268b46b4287647f0fe43d1afd70807d17855aed55f1e6ab1defd02bcef1',
        inline_datum:
          'd8799f581c84662c22dc5c0cadad7b2ebf9757ce9ea61dbd8fe64bc8c43c112a4058202cba67d1842e0eeabc82308d428aae28c4299afbb09dfaafaba4901f3dd8608240405820e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855581c91d4f382273f442f15e9da48cb23349ba275f8818e4c7ac5d1004a16454d79555344582029bfb1978aa7aa9edda9bdf0fb68a79cc3957c7a217960a12da70204dadf0d87d8799f011a000f4240ffd8799f1a0016e36001ffd8799fd8799fd8799f58206d8632241fe53245815c558ba1a8b719c3b513d67f04283add24dd9b2fe5d567ff00ffffff',
        inline_datum_json: {
          fields: [
            { bytes: '84662c22dc5c0cadad7b2ebf9757ce9ea61dbd8fe64bc8c43c112a40' },
            { bytes: '2cba67d1842e0eeabc82308d428aae28c4299afbb09dfaafaba4901f3dd86082' },
            { bytes: '' },
            { bytes: '' },
            { bytes: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855' },
            { bytes: '91d4f382273f442f15e9da48cb23349ba275f8818e4c7ac5d1004a16' },
            { bytes: '4d79555344' },
            { bytes: '29bfb1978aa7aa9edda9bdf0fb68a79cc3957c7a217960a12da70204dadf0d87' },
            { fields: [{ int: 1 }, { int: 1000000 }], constructor: 0 },
            { fields: [{ int: 1500000 }, { int: 1 }], constructor: 0 },
            {
              fields: [
                {
                  fields: [
                    {
                      fields: [
                        {
                          bytes:
                            '6d8632241fe53245815c558ba1a8b719c3b513d67f04283add24dd9b2fe5d567',
                        },
                      ],
                      constructor: 0,
                    },
                    { int: 0 },
                  ],
                  constructor: 0,
                },
              ],
              constructor: 0,
            },
          ],
          constructor: 0,
        },
        reference_script_hash: null,
      },
    ],
  },
];
