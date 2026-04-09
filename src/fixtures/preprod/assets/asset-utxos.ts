import { getPaginationFixtures } from '../../../index.js';

// cardano-swaps v1 one-way beacon token on preprod (script-locked, stable UTxOs)
const V1_ONE_WAY_BEACON =
  '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd' +
  'dbc1b4c900ffe48d575b5da5c638040125f65db0fe3e24494b76ea986457d986';

// cardano-swaps v1 two-way beacon token on preprod (script-locked, stable UTxOs)
const V1_TWO_WAY_BEACON =
  '84662c22dc5c0cadad7b2ebf9757ce9ea61dbd8fe64bc8c43c112a40' +
  '7e504de0b28639b87d803b36e2526675bc3848cd4e28339880fd9da2bbc2fe72';

const paginationFixtures = getPaginationFixtures(`assets/${V1_ONE_WAY_BEACON}/utxos`, {
  fromToPagination: { format: 'height' },
});

export default [
  ...paginationFixtures,

  // --- Success (200) ---
  // cardano-swaps v1 one-way swap beacon (locked by swap validator)

  {
    id: 'assets-utxos-cardano-swaps-v1-one-way_2b3c4d5e6f1a',
    testName: 'assets/:asset/utxos - cardano-swaps v1 one-way swap beacon',
    endpoints: [`assets/${V1_ONE_WAY_BEACON}/utxos?count=2&order=asc`],
    response: [
      {
        address:
          'addr_test1zqql5djxthlrdcnvy87m7uswf0d0es9cdw6nvl72gcqj74h0c7g4mfe8tn70pveep8eep4dzuu0f784unh4wk5p7jkaszryq59',
        tx_hash: '2c18502901002e61f03350d5dd390a0c3875e0d151d5f0f8b380aad38a0cc155',
        output_index: 2,
        amount: [
          { unit: 'lovelace', quantity: '2629100' },
          {
            unit: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd01ef62249bb72641bc1b52e26166f2bbcb6daa9afcb49b061479800bf0ea9519',
            quantity: '1',
          },
          {
            unit: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd5e09a478610895febe6afe42db300dd3bb985f3ff2e26125dbd4bf966d473350',
            quantity: '1',
          },
          {
            unit: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fddbc1b4c900ffe48d575b5da5c638040125f65db0fe3e24494b76ea986457d986',
            quantity: '1',
          },
          {
            unit: 'c0f8644a01a6bf5db02f4afe30d604975e63dd274f1098a1738e561d4f74686572546f6b656e0a',
            quantity: '58',
          },
        ],
        block: 'f6089e9a44e8a4caef8f8bbe28a74489d484593d2edbef1b5cca047a8779c93d',
        block_height: 2_459_932,
        block_time: 1_720_721_870,
        data_hash: 'e9614c4860b5ce8e870044d1912be6daa3fbd64c8ed5ed437b7910fcea2198d9',
        inline_datum:
          'd8799f581c47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd58205e09a478610895febe6afe42db300dd3bb985f3ff2e26125dbd4bf966d473350581cc0f8644a01a6bf5db02f4afe30d604975e63dd274f1098a1738e561d4b4f74686572546f6b656e0a582001ef62249bb72641bc1b52e26166f2bbcb6daa9afcb49b061479800bf0ea951940405820dbc1b4c900ffe48d575b5da5c638040125f65db0fe3e24494b76ea986457d986d8799f1a0001e84803ffd87a80ff',
        inline_datum_json: {
          fields: [
            { bytes: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd' },
            { bytes: '5e09a478610895febe6afe42db300dd3bb985f3ff2e26125dbd4bf966d473350' },
            { bytes: 'c0f8644a01a6bf5db02f4afe30d604975e63dd274f1098a1738e561d' },
            { bytes: '4f74686572546f6b656e0a' },
            { bytes: '01ef62249bb72641bc1b52e26166f2bbcb6daa9afcb49b061479800bf0ea9519' },
            { bytes: '' },
            { bytes: '' },
            { bytes: 'dbc1b4c900ffe48d575b5da5c638040125f65db0fe3e24494b76ea986457d986' },
            { fields: [{ int: 125000 }, { int: 3 }], constructor: 0 },
            { fields: [], constructor: 1 },
          ],
          constructor: 0,
        },
        reference_script_hash: null,
      },
      {
        address:
          'addr_test1zqql5djxthlrdcnvy87m7uswf0d0es9cdw6nvl72gcqj74h0c7g4mfe8tn70pveep8eep4dzuu0f784unh4wk5p7jkaszryq59',
        tx_hash: '08f5f26643c40712243548184c25cdb3f584cf21c0094e3fc8cb533ef1c5dc5b',
        output_index: 2,
        amount: [
          { unit: 'lovelace', quantity: '3420480' },
          {
            unit: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd01ef62249bb72641bc1b52e26166f2bbcb6daa9afcb49b061479800bf0ea9519',
            quantity: '1',
          },
          {
            unit: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd5e09a478610895febe6afe42db300dd3bb985f3ff2e26125dbd4bf966d473350',
            quantity: '1',
          },
          {
            unit: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fddbc1b4c900ffe48d575b5da5c638040125f65db0fe3e24494b76ea986457d986',
            quantity: '1',
          },
          {
            unit: 'c0f8644a01a6bf5db02f4afe30d604975e63dd274f1098a1738e561d4f74686572546f6b656e0a',
            quantity: '43',
          },
        ],
        block: '77bbd45ddb1d094ca7416000b7e93d73fc6b3fc44d04dcfa6a98d06376317e62',
        block_height: 2_485_574,
        block_time: 1_721_307_629,
        data_hash: '5ec13826a7d0c88ae19742e671b02454bd61c7c28e6f3438a67a0ae1a272713a',
        inline_datum:
          'd8799f581c47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd58205e09a478610895febe6afe42db300dd3bb985f3ff2e26125dbd4bf966d473350581cc0f8644a01a6bf5db02f4afe30d604975e63dd274f1098a1738e561d4b4f74686572546f6b656e0a582001ef62249bb72641bc1b52e26166f2bbcb6daa9afcb49b061479800bf0ea951940405820dbc1b4c900ffe48d575b5da5c638040125f65db0fe3e24494b76ea986457d986d8799f199c4001ffd8799fd8799fd8799f58202c18502901002e61f03350d5dd390a0c3875e0d151d5f0f8b380aad38a0cc155ff03ffffff',
        inline_datum_json: {
          fields: [
            { bytes: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd' },
            { bytes: '5e09a478610895febe6afe42db300dd3bb985f3ff2e26125dbd4bf966d473350' },
            { bytes: 'c0f8644a01a6bf5db02f4afe30d604975e63dd274f1098a1738e561d' },
            { bytes: '4f74686572546f6b656e0a' },
            { bytes: '01ef62249bb72641bc1b52e26166f2bbcb6daa9afcb49b061479800bf0ea9519' },
            { bytes: '' },
            { bytes: '' },
            { bytes: 'dbc1b4c900ffe48d575b5da5c638040125f65db0fe3e24494b76ea986457d986' },
            { fields: [{ int: 40000 }, { int: 1 }], constructor: 0 },
            {
              fields: [
                {
                  fields: [
                    {
                      fields: [
                        {
                          bytes: '2c18502901002e61f03350d5dd390a0c3875e0d151d5f0f8b380aad38a0cc155',
                        },
                      ],
                      constructor: 0,
                    },
                    { int: 3 },
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

  // cardano-swaps v1 two-way swap beacon (locked by swap validator)

  {
    id: 'assets-utxos-cardano-swaps-v1-two-way_3c4d5e6f1a2b',
    testName: 'assets/:asset/utxos - cardano-swaps v1 two-way swap beacon',
    endpoints: [`assets/${V1_TWO_WAY_BEACON}/utxos?count=1&order=asc`],
    response: [
      {
        address:
          'addr_test1zzrns8ct7stw9kh8f97nlnvqsl8kw7eukje2aw3kak8c77fualkqngnmdz2w9mv60zuucq0sswtn6lq2lwxwez76x0aq3y05nq',
        tx_hash: 'f004a740e9cf0751ab6cfad9e50ec951b656ebc00e7cb636040821d7a06b75c2',
        output_index: 1,
        amount: [
          { unit: 'lovelace', quantity: '142548169' },
          {
            unit: '84662c22dc5c0cadad7b2ebf9757ce9ea61dbd8fe64bc8c43c112a400007bf259b66284aa1de9c6307009b94062edc79ed7f1d01cf208eadbd38896c',
            quantity: '1',
          },
          {
            unit: '84662c22dc5c0cadad7b2ebf9757ce9ea61dbd8fe64bc8c43c112a407e504de0b28639b87d803b36e2526675bc3848cd4e28339880fd9da2bbc2fe72',
            quantity: '1',
          },
          {
            unit: '84662c22dc5c0cadad7b2ebf9757ce9ea61dbd8fe64bc8c43c112a40e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
            quantity: '1',
          },
          {
            unit: 'c0f8644a01a6bf5db02f4afe30d604975e63dd274f1098a1738e561d546573745553444d',
            quantity: '18089',
          },
        ],
        block: 'df0473757694ec6cad57b6cc27b99d229e77a9f76d62e7f145560d92ccc1000b',
        block_height: 2_970_150,
        block_time: 1_733_764_601,
        data_hash: '385de8a14ba74ad991882230e6ab9457d5cdce8cdaad4a8ceaac3f18d9c60cae',
        inline_datum:
          'd8799f581c84662c22dc5c0cadad7b2ebf9757ce9ea61dbd8fe64bc8c43c112a4058200007bf259b66284aa1de9c6307009b94062edc79ed7f1d01cf208eadbd38896c40405820e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855581cc0f8644a01a6bf5db02f4afe30d604975e63dd274f1098a1738e561d48546573745553444d58207e504de0b28639b87d803b36e2526675bc3848cd4e28339880fd9da2bbc2fe72d8799f18641a000c1931ffd8799f1a000d6da11864ffd87a80ff',
        inline_datum_json: {
          fields: [
            { bytes: '84662c22dc5c0cadad7b2ebf9757ce9ea61dbd8fe64bc8c43c112a40' },
            { bytes: '0007bf259b66284aa1de9c6307009b94062edc79ed7f1d01cf208eadbd38896c' },
            { bytes: '' },
            { bytes: '' },
            { bytes: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855' },
            { bytes: 'c0f8644a01a6bf5db02f4afe30d604975e63dd274f1098a1738e561d' },
            { bytes: '546573745553444d' },
            { bytes: '7e504de0b28639b87d803b36e2526675bc3848cd4e28339880fd9da2bbc2fe72' },
            { fields: [{ int: 100 }, { int: 792881 }], constructor: 0 },
            { fields: [{ int: 880033 }, { int: 100 }], constructor: 0 },
            { fields: [], constructor: 1 },
          ],
          constructor: 0,
        },
        reference_script_hash: null,
      },
    ],
  },
  // --- order_by=swap_price (sorts by price ratio from inline datum) ---

  {
    id: 'assets-utxos-v1-one-way-order-by-swap-price_4d5e6f1a2b3c',
    testName: 'assets/:asset/utxos - cardano-swaps v1 one-way order_by=swap_price asc',
    endpoints: [`assets/${V1_ONE_WAY_BEACON}/utxos?order_by=swap_price&order=asc&count=2`],
    response: [
      {
        address:
          'addr_test1zqql5djxthlrdcnvy87m7uswf0d0es9cdw6nvl72gcqj74h0c7g4mfe8tn70pveep8eep4dzuu0f784unh4wk5p7jkaszryq59',
        tx_hash: '08f5f26643c40712243548184c25cdb3f584cf21c0094e3fc8cb533ef1c5dc5b',
        output_index: 2,
        amount: [
          { unit: 'lovelace', quantity: '3420480' },
          {
            unit: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd01ef62249bb72641bc1b52e26166f2bbcb6daa9afcb49b061479800bf0ea9519',
            quantity: '1',
          },
          {
            unit: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd5e09a478610895febe6afe42db300dd3bb985f3ff2e26125dbd4bf966d473350',
            quantity: '1',
          },
          {
            unit: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fddbc1b4c900ffe48d575b5da5c638040125f65db0fe3e24494b76ea986457d986',
            quantity: '1',
          },
          {
            unit: 'c0f8644a01a6bf5db02f4afe30d604975e63dd274f1098a1738e561d4f74686572546f6b656e0a',
            quantity: '43',
          },
        ],
        block: '77bbd45ddb1d094ca7416000b7e93d73fc6b3fc44d04dcfa6a98d06376317e62',
        block_height: 2_485_574,
        block_time: 1_721_307_629,
        data_hash: '5ec13826a7d0c88ae19742e671b02454bd61c7c28e6f3438a67a0ae1a272713a',
        inline_datum:
          'd8799f581c47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd58205e09a478610895febe6afe42db300dd3bb985f3ff2e26125dbd4bf966d473350581cc0f8644a01a6bf5db02f4afe30d604975e63dd274f1098a1738e561d4b4f74686572546f6b656e0a582001ef62249bb72641bc1b52e26166f2bbcb6daa9afcb49b061479800bf0ea951940405820dbc1b4c900ffe48d575b5da5c638040125f65db0fe3e24494b76ea986457d986d8799f199c4001ffd8799fd8799fd8799f58202c18502901002e61f03350d5dd390a0c3875e0d151d5f0f8b380aad38a0cc155ff03ffffff',
        inline_datum_json: {
          fields: [
            { bytes: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd' },
            { bytes: '5e09a478610895febe6afe42db300dd3bb985f3ff2e26125dbd4bf966d473350' },
            { bytes: 'c0f8644a01a6bf5db02f4afe30d604975e63dd274f1098a1738e561d' },
            { bytes: '4f74686572546f6b656e0a' },
            { bytes: '01ef62249bb72641bc1b52e26166f2bbcb6daa9afcb49b061479800bf0ea9519' },
            { bytes: '' },
            { bytes: '' },
            { bytes: 'dbc1b4c900ffe48d575b5da5c638040125f65db0fe3e24494b76ea986457d986' },
            { fields: [{ int: 40000 }, { int: 1 }], constructor: 0 },
            {
              fields: [
                {
                  fields: [
                    {
                      fields: [
                        {
                          bytes: '2c18502901002e61f03350d5dd390a0c3875e0d151d5f0f8b380aad38a0cc155',
                        },
                      ],
                      constructor: 0,
                    },
                    { int: 3 },
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
      {
        address:
          'addr_test1zqql5djxthlrdcnvy87m7uswf0d0es9cdw6nvl72gcqj74h0c7g4mfe8tn70pveep8eep4dzuu0f784unh4wk5p7jkaszryq59',
        tx_hash: 'f4a32c383eadaca0fb91b18a55fafa27419d3ae50a196abbb586df2f76af9cad',
        output_index: 1,
        amount: [
          { unit: 'lovelace', quantity: '2620480' },
          {
            unit: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd01ef62249bb72641bc1b52e26166f2bbcb6daa9afcb49b061479800bf0ea9519',
            quantity: '1',
          },
          {
            unit: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd5e09a478610895febe6afe42db300dd3bb985f3ff2e26125dbd4bf966d473350',
            quantity: '1',
          },
          {
            unit: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fddbc1b4c900ffe48d575b5da5c638040125f65db0fe3e24494b76ea986457d986',
            quantity: '1',
          },
          {
            unit: 'c0f8644a01a6bf5db02f4afe30d604975e63dd274f1098a1738e561d4f74686572546f6b656e0a',
            quantity: '100',
          },
        ],
        block: 'e0ec57ac29e5b6723fefe00859e7b3a6f8af9e203028c7404fe11053e2a25b72',
        block_height: 3_981_096,
        block_time: 1_759_755_705,
        data_hash: '7e6ef9d1711b537bad60c312648e512e4a2a8cc6660a2563a4ad857fcfc61c64',
        inline_datum:
          'd8799f581c47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd58205e09a478610895febe6afe42db300dd3bb985f3ff2e26125dbd4bf966d473350581cc0f8644a01a6bf5db02f4afe30d604975e63dd274f1098a1738e561d4b4f74686572546f6b656e0a582001ef62249bb72641bc1b52e26166f2bbcb6daa9afcb49b061479800bf0ea951940405820dbc1b4c900ffe48d575b5da5c638040125f65db0fe3e24494b76ea986457d986d8799f199c4001ffd87a80ff',
        inline_datum_json: {
          fields: [
            { bytes: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd' },
            { bytes: '5e09a478610895febe6afe42db300dd3bb985f3ff2e26125dbd4bf966d473350' },
            { bytes: 'c0f8644a01a6bf5db02f4afe30d604975e63dd274f1098a1738e561d' },
            { bytes: '4f74686572546f6b656e0a' },
            { bytes: '01ef62249bb72641bc1b52e26166f2bbcb6daa9afcb49b061479800bf0ea9519' },
            { bytes: '' },
            { bytes: '' },
            { bytes: 'dbc1b4c900ffe48d575b5da5c638040125f65db0fe3e24494b76ea986457d986' },
            { fields: [{ int: 40000 }, { int: 1 }], constructor: 0 },
            { fields: [], constructor: 1 },
          ],
          constructor: 0,
        },
        reference_script_hash: null,
      },
    ],
  },
  {
    id: 'assets-utxos-v1-two-way-order-by-swap-price_5e6f1a2b3c4d',
    testName: 'assets/:asset/utxos - cardano-swaps v1 two-way order_by=swap_price asc',
    endpoints: [`assets/${V1_TWO_WAY_BEACON}/utxos?order_by=swap_price&order=asc&count=1`],
    response: [
      {
        address:
          'addr_test1zzrns8ct7stw9kh8f97nlnvqsl8kw7eukje2aw3kak8c77fualkqngnmdz2w9mv60zuucq0sswtn6lq2lwxwez76x0aq3y05nq',
        tx_hash: 'cd8908a437ce8f9e47083aa7094905e10efcb096ae1a0ef6b49b8ce765eaaecf',
        output_index: 2,
        amount: [
          { unit: 'lovelace', quantity: '311635606' },
          {
            unit: '84662c22dc5c0cadad7b2ebf9757ce9ea61dbd8fe64bc8c43c112a400007bf259b66284aa1de9c6307009b94062edc79ed7f1d01cf208eadbd38896c',
            quantity: '1',
          },
          {
            unit: '84662c22dc5c0cadad7b2ebf9757ce9ea61dbd8fe64bc8c43c112a407e504de0b28639b87d803b36e2526675bc3848cd4e28339880fd9da2bbc2fe72',
            quantity: '1',
          },
          {
            unit: '84662c22dc5c0cadad7b2ebf9757ce9ea61dbd8fe64bc8c43c112a40e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
            quantity: '1',
          },
        ],
        block: '88e1ec49ea9d8ec682fce55ec246eb9ea3ff10d6106e05bf4e1424f183da6a34',
        block_height: 3_045_990,
        block_time: 1_735_781_481,
        data_hash: '2bf96c61076d00952490689d1eca11b95b41096db0e30dbef91e839e790aa49f',
        inline_datum:
          'd8799f581c84662c22dc5c0cadad7b2ebf9757ce9ea61dbd8fe64bc8c43c112a4058200007bf259b66284aa1de9c6307009b94062edc79ed7f1d01cf208eadbd38896c40405820e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855581cc0f8644a01a6bf5db02f4afe30d604975e63dd274f1098a1738e561d48546573745553444d58207e504de0b28639b87d803b36e2526675bc3848cd4e28339880fd9da2bbc2fe72d8799f031961a8ffd8799f1a000f42401875ffd8799fd8799fd8799f58206109a0801f19a899837696d1d99967ecaceb38538511987465b7da7b590efcacff01ffffff',
        inline_datum_json: {
          fields: [
            { bytes: '84662c22dc5c0cadad7b2ebf9757ce9ea61dbd8fe64bc8c43c112a40' },
            { bytes: '0007bf259b66284aa1de9c6307009b94062edc79ed7f1d01cf208eadbd38896c' },
            { bytes: '' },
            { bytes: '' },
            { bytes: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855' },
            { bytes: 'c0f8644a01a6bf5db02f4afe30d604975e63dd274f1098a1738e561d' },
            { bytes: '546573745553444d' },
            { bytes: '7e504de0b28639b87d803b36e2526675bc3848cd4e28339880fd9da2bbc2fe72' },
            { fields: [{ int: 3 }, { int: 25000 }], constructor: 0 },
            { fields: [{ int: 1000000 }, { int: 117 }], constructor: 0 },
            {
              fields: [
                {
                  fields: [
                    {
                      fields: [
                        {
                          bytes: '6109a0801f19a899837696d1d99967ecaceb38538511987465b7da7b590efcac',
                        },
                      ],
                      constructor: 0,
                    },
                    { int: 1 },
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
  {
    id: 'assets-utxos-from-high-block-empty_5e6f1a2b3c4d',
    testName: 'assets/:asset/utxos - from=99999999 returns empty array',
    endpoints: [`assets/${V1_ONE_WAY_BEACON}/utxos?from=99999999`],
    response: [],
  },
];
