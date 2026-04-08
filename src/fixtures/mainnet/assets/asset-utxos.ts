import { getPaginationFixtures } from '../../../index.js';

// WingRiders (WRT) token on mainnet — locked at DEX script address since July 2022, very stable
const WRT_TOKEN = 'c0ee29a85b13209423b10447d3c2e6a50641a15c57770e27cb9d507357696e67526964657273';

// HOSKY token — most heavily distributed asset on mainnet, stress test
const HOSKY_TOKEN = 'a0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235484f534b59';

const paginationFixtures = getPaginationFixtures(`assets/${WRT_TOKEN}/utxos`, {
  fromToPagination: { format: 'height' },
});

export default [
  ...paginationFixtures,

  // --- Success (200) ---
  // WingRiders WRT token locked at DEX script address (validator-locked, stable since 2022)

  {
    id: 'assets-utxos-wingriders-count-2_2b3c4d5e6f1a',
    testName: 'assets/:asset/utxos - WingRiders WRT script-locked (from/to pinned)',
    endpoints: [`assets/${WRT_TOKEN}/utxos?count=2&order=asc&from=7493134&to=7493134`],
    response: [
      {
        address: 'addr1wy9z0v8mrkhtyll43fu6mnhu0p87tna48xt4p56496x9f7g940jft',
        tx_hash: 'dfb8471fdc6e9d90dd66007b2119c9b0b5b067e4b81ca811890f224be3b921b0',
        output_index: 2,
        amount: [
          { unit: 'lovelace', quantity: '1724100' },
          {
            unit: 'c0ee29a85b13209423b10447d3c2e6a50641a15c57770e27cb9d507357696e67526964657273',
            quantity: '377777778',
          },
        ],
        block: '27644e6125ba16745026f79567628fb05c64cd8fed06b430d8d3f0c8b654685a',
        block_height: 7_493_134,
        block_time: 1_657_715_570,
        data_hash: '73492aac42baf78e15360ed16b3789d7fcb8c0ca548173dfbb74f460b92b435f',
        inline_datum: null,
        inline_datum_json: null,
        reference_script_hash: null,
      },
      {
        address: 'addr1wy9z0v8mrkhtyll43fu6mnhu0p87tna48xt4p56496x9f7g940jft',
        tx_hash: 'dfb8471fdc6e9d90dd66007b2119c9b0b5b067e4b81ca811890f224be3b921b0',
        output_index: 7,
        amount: [
          { unit: 'lovelace', quantity: '1724100' },
          {
            unit: 'c0ee29a85b13209423b10447d3c2e6a50641a15c57770e27cb9d507357696e67526964657273',
            quantity: '377777778',
          },
        ],
        block: '27644e6125ba16745026f79567628fb05c64cd8fed06b430d8d3f0c8b654685a',
        block_height: 7_493_134,
        block_time: 1_657_715_570,
        data_hash: '3cb9829a81e033923e9f098e50cd3b49acff1e6aad6240aeba163b4dcb4213c6',
        inline_datum: null,
        inline_datum_json: null,
        reference_script_hash: null,
      },
    ],
  },
  {
    id: 'assets-utxos-wingriders-page-2_4d5e6f1a2b3c',
    testName: 'assets/:asset/utxos - WingRiders WRT script-locked page 2 (from/to pinned)',
    endpoints: [`assets/${WRT_TOKEN}/utxos?count=2&page=2&from=7493134&to=7493134`],
    response: [
      {
        address: 'addr1wy9z0v8mrkhtyll43fu6mnhu0p87tna48xt4p56496x9f7g940jft',
        tx_hash: 'dfb8471fdc6e9d90dd66007b2119c9b0b5b067e4b81ca811890f224be3b921b0',
        output_index: 8,
        amount: [
          { unit: 'lovelace', quantity: '1724100' },
          {
            unit: 'c0ee29a85b13209423b10447d3c2e6a50641a15c57770e27cb9d507357696e67526964657273',
            quantity: '377777778',
          },
        ],
        block: '27644e6125ba16745026f79567628fb05c64cd8fed06b430d8d3f0c8b654685a',
        block_height: 7_493_134,
        block_time: 1_657_715_570,
        data_hash: '565a923912e28d2736d05d34aef0306b60e0d50212d17c5c5f708985d5f09d05',
        inline_datum: null,
        inline_datum_json: null,
        reference_script_hash: null,
      },
      {
        address: 'addr1wy9z0v8mrkhtyll43fu6mnhu0p87tna48xt4p56496x9f7g940jft',
        tx_hash: 'dfb8471fdc6e9d90dd66007b2119c9b0b5b067e4b81ca811890f224be3b921b0',
        output_index: 9,
        amount: [
          { unit: 'lovelace', quantity: '1724100' },
          {
            unit: 'c0ee29a85b13209423b10447d3c2e6a50641a15c57770e27cb9d507357696e67526964657273',
            quantity: '377777778',
          },
        ],
        block: '27644e6125ba16745026f79567628fb05c64cd8fed06b430d8d3f0c8b654685a',
        block_height: 7_493_134,
        block_time: 1_657_715_570,
        data_hash: '3b57f877eadf466cf2ed9c17579d1d18cbf32c6761a9bf2c5a2a60e9cb6953bd',
        inline_datum: null,
        inline_datum_json: null,
        reference_script_hash: null,
      },
    ],
  },
  {
    id: 'assets-utxos-order-asc-first_5e6f1a2b3c4d',
    testName: 'assets/:asset/utxos - WingRiders WRT asc count=1 (from/to pinned)',
    endpoints: [`assets/${WRT_TOKEN}/utxos?order=asc&count=1&from=7493134&to=7493134`],
    response: [
      {
        address: 'addr1wy9z0v8mrkhtyll43fu6mnhu0p87tna48xt4p56496x9f7g940jft',
        tx_hash: 'dfb8471fdc6e9d90dd66007b2119c9b0b5b067e4b81ca811890f224be3b921b0',
        output_index: 2,
        amount: [
          { unit: 'lovelace', quantity: '1724100' },
          {
            unit: 'c0ee29a85b13209423b10447d3c2e6a50641a15c57770e27cb9d507357696e67526964657273',
            quantity: '377777778',
          },
        ],
        block: '27644e6125ba16745026f79567628fb05c64cd8fed06b430d8d3f0c8b654685a',
        block_height: 7_493_134,
        block_time: 1_657_715_570,
        data_hash: '73492aac42baf78e15360ed16b3789d7fcb8c0ca548173dfbb74f460b92b435f',
        inline_datum: null,
        inline_datum_json: null,
        reference_script_hash: null,
      },
    ],
  },
  {
    id: 'assets-utxos-from-high-block-empty_7a1b2c3d4e5f',
    testName: 'assets/:asset/utxos - from=99999999 returns empty array',
    endpoints: [`assets/${WRT_TOKEN}/utxos?from=99999999`],
    response: [],
  },

  // --- Stress test: HOSKY (most heavily distributed mainnet asset) ---

  {
    id: 'assets-utxos-hosky-oldest-2_8a1b2c3d4e5f',
    testName: 'assets/:asset/utxos - HOSKY oldest 2 UTxOs (stress test)',
    endpoints: [`assets/${HOSKY_TOKEN}/utxos?count=2&order=asc`],
    customTimeout: 60_000,
    response: [
      {
        address:
          'addr1qxutk662th4n7rvvsec862jv2g684el64jmd8j2vqhggqmqruy45ux73lwk89tnscamqc6uk24uvxnpsk9pfukrnwylq7jd20y',
        tx_hash: '79be318c5e60cdf3d9c6335a7639db5d790b2ef68985d17ab24a383c8c2ade3d',
        output_index: 1,
        amount: [
          { unit: 'lovelace', quantity: '1500000' },
          {
            unit: 'a0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235484f534b59',
            quantity: '5189853',
          },
        ],
        block: 'f1287ff0b9e3f6e46c83b28473435d8992fbf7663503f090c51cf9cebb013b23',
        block_height: 6_470_847,
        block_time: 1_636_287_139,
        data_hash: null,
        inline_datum: null,
        inline_datum_json: null,
        reference_script_hash: null,
      },
      {
        address:
          'addr1qx9d4dgmmn7c64s25mvdavnhm2yptj09tlx7pncyk4vx5mkge74mje4ur5e6rm0nc06sy486qdk46n0mmsg42dupdtxsjdmj5d',
        tx_hash: '3e5802671f4d21dc62111207fc87ea55c1f76afd3da523d62018bd3652eb310a',
        output_index: 0,
        amount: [
          { unit: 'lovelace', quantity: '1500000' },
          {
            unit: 'a0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235484f534b59',
            quantity: '3820233',
          },
        ],
        block: '300c0e024fd86b3b0b16fc81976d1a907097417e3969bec75c6cbda85df52e99',
        block_height: 6_470_849,
        block_time: 1_636_287_195,
        data_hash: null,
        inline_datum: null,
        inline_datum_json: null,
        reference_script_hash: null,
      },
    ],
  },
];
