import { getPaginationFixtures } from '../../../index.js';

// cardano-swaps v1 beacon tokens on preprod
const V1_ONE_WAY_BEACON =
  '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd' +
  'dbc1b4c900ffe48d575b5da5c638040125f65db0fe3e24494b76ea986457d986';

const V1_TWO_WAY_BEACON =
  '84662c22dc5c0cadad7b2ebf9757ce9ea61dbd8fe64bc8c43c112a40' +
  '7e504de0b28639b87d803b36e2526675bc3848cd4e28339880fd9da2bbc2fe72';

const paginationFixtures = getPaginationFixtures(`swaps/${V1_ONE_WAY_BEACON}`, {
  fromToPagination: { format: 'height' },
});

export default [
  ...paginationFixtures,

  // --- Success (200) - sorted by swap price ---
  // v1 one-way asc — cheapest first (may shift if swaps are filled)

  {
    id: 'swaps-asset-v1-one-way-price-asc_4d5e6f1a2b3c',
    testName: 'swaps/:asset - cardano-swaps v1 one-way price asc',
    endpoints: [`swaps/${V1_ONE_WAY_BEACON}?order_by=price&order=asc&count=2`],
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

  // v1 one-way desc — most expensive first (more stable, verifies reversed price sort)

  {
    id: 'swaps-asset-v1-one-way-price-desc_6e7f1a2b3c4d',
    testName: 'swaps/:asset - cardano-swaps v1 one-way price desc',
    endpoints: [`swaps/${V1_ONE_WAY_BEACON}?order_by=price&order=desc&count=2`],
    response: [
      {
        address:
          'addr_test1zqql5djxthlrdcnvy87m7uswf0d0es9cdw6nvl72gcqj745vp8kxqll99268k090k5kkfh49tf6p55pscu2zgg0m5u6qydlsc4',
        tx_hash: '1de7dc742d5c889b6aa1b0f4d0f14e197df10b0206a880310633966d85a0af12',
        output_index: 1,
        amount: [
          { unit: 'lovelace', quantity: '12590310' },
          {
            unit: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd10e00786b9a1381cfe09e7a733aec1a9e784ffa9367b0994a202f8b899909d96',
            quantity: '1',
          },
          {
            unit: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd9954199c45c96678b50f240788e94b8b7d9d7100c056a6fcc8874652164f97be',
            quantity: '1',
          },
          {
            unit: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fddbc1b4c900ffe48d575b5da5c638040125f65db0fe3e24494b76ea986457d986',
            quantity: '1',
          },
          {
            unit: 'bd976e131cfc3956b806967b06530e48c20ed5498b46a5eb836b61c2744d494c4b7632',
            quantity: '9',
          },
        ],
        block: '481634cd145e2adf4a0fee6aa6ed2a5daa02bef1ac8c330b76c5a9c78034cb46',
        block_height: 3_045_812,
        block_time: 1_735_775_988,
        data_hash: '1ba59db803a30c44b6a70eb869a50471a2ce2eb85e5d2ec9d8002793176b624a',
        inline_datum:
          'd8799f581c47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd58209954199c45c96678b50f240788e94b8b7d9d7100c056a6fcc8874652164f97be581cbd976e131cfc3956b806967b06530e48c20ed5498b46a5eb836b61c247744d494c4b7632582010e00786b9a1381cfe09e7a733aec1a9e784ffa9367b0994a202f8b899909d9640405820dbc1b4c900ffe48d575b5da5c638040125f65db0fe3e24494b76ea986457d986d8799f1a0098968001ffd8799fd8799fd8799f5820a66cf6bd46f9dc8d82331087f5f61e0a85bae53d61c9cbe34ed7cd722ce2d8eeff01ffffff',
        inline_datum_json: {
          fields: [
            { bytes: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd' },
            { bytes: '9954199c45c96678b50f240788e94b8b7d9d7100c056a6fcc8874652164f97be' },
            { bytes: 'bd976e131cfc3956b806967b06530e48c20ed5498b46a5eb836b61c2' },
            { bytes: '744d494c4b7632' },
            { bytes: '10e00786b9a1381cfe09e7a733aec1a9e784ffa9367b0994a202f8b899909d96' },
            { bytes: '' },
            { bytes: '' },
            { bytes: 'dbc1b4c900ffe48d575b5da5c638040125f65db0fe3e24494b76ea986457d986' },
            { fields: [{ int: 10000000 }, { int: 1 }], constructor: 0 },
            {
              fields: [
                {
                  fields: [
                    {
                      fields: [
                        {
                          bytes: 'a66cf6bd46f9dc8d82331087f5f61e0a85bae53d61c9cbe34ed7cd722ce2d8ee',
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
      {
        address:
          'addr_test1zqql5djxthlrdcnvy87m7uswf0d0es9cdw6nvl72gcqj74skfedku5jmmz0amt8jnpv7qu40m39mx54jhh7x3vh3tsasc0ykq0',
        tx_hash: 'e1b8f1664482c8bce0de32baf1c8c8311b06549cd851f16f22128a0ba6ed10a0',
        output_index: 1,
        amount: [
          { unit: 'lovelace', quantity: '2659270' },
          {
            unit: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd10e00786b9a1381cfe09e7a733aec1a9e784ffa9367b0994a202f8b899909d96',
            quantity: '1',
          },
          {
            unit: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd9954199c45c96678b50f240788e94b8b7d9d7100c056a6fcc8874652164f97be',
            quantity: '1',
          },
          {
            unit: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fddbc1b4c900ffe48d575b5da5c638040125f65db0fe3e24494b76ea986457d986',
            quantity: '1',
          },
          {
            unit: 'bd976e131cfc3956b806967b06530e48c20ed5498b46a5eb836b61c2744d494c4b7632',
            quantity: '100',
          },
        ],
        block: '2271fa740182b9f451e0bb3a39c6d57d487f9393227198842541d01c5bec515e',
        block_height: 3_045_861,
        block_time: 1_735_777_831,
        data_hash: '4523f75e885cf3b58710d16ae08c820da72cb232cfa5f1cbd79fbc6bdab7a83f',
        inline_datum:
          'd8799f581c47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd58209954199c45c96678b50f240788e94b8b7d9d7100c056a6fcc8874652164f97be581cbd976e131cfc3956b806967b06530e48c20ed5498b46a5eb836b61c247744d494c4b7632582010e00786b9a1381cfe09e7a733aec1a9e784ffa9367b0994a202f8b899909d9640405820dbc1b4c900ffe48d575b5da5c638040125f65db0fe3e24494b76ea986457d986d8799fc24a04ac49ffffffffffdb611b0008000000000000ffd87a80ff',
        inline_datum_json: {
          fields: [
            { bytes: '47cec2a1404ed91fc31124f29db15dc1aae77e0617868bcef351b8fd' },
            { bytes: '9954199c45c96678b50f240788e94b8b7d9d7100c056a6fcc8874652164f97be' },
            { bytes: 'bd976e131cfc3956b806967b06530e48c20ed5498b46a5eb836b61c2' },
            { bytes: '744d494c4b7632' },
            { bytes: '10e00786b9a1381cfe09e7a733aec1a9e784ffa9367b0994a202f8b899909d96' },
            { bytes: '' },
            { bytes: '' },
            { bytes: 'dbc1b4c900ffe48d575b5da5c638040125f65db0fe3e24494b76ea986457d986' },
            {
              fields: [{ int: 2.206763817411543e22 }, { int: 2251799813685248 }],
              constructor: 0,
            },
            { fields: [], constructor: 1 },
          ],
          constructor: 0,
        },
        reference_script_hash: null,
      },
    ],
  },

  // v1 two-way (price sorted)

  {
    id: 'swaps-asset-v1-two-way-price-asc_5e6f1a2b3c4d',
    testName: 'swaps/:asset - cardano-swaps v1 two-way price asc',
    endpoints: [`swaps/${V1_TWO_WAY_BEACON}?order_by=price&order=asc&count=1`],
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
];
