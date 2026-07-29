import { expect } from 'vitest';
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

// Swap UTxOs come and go as orders are created and filled, so only the
// response shape and the presence of the queried beacon are verified.
const swapUtxo = (beacon: string) => ({
  address: expect.any(String),
  tx_hash: expect.toBeBlake2b256Hash(),
  output_index: expect.any(Number),
  amount: expect.arrayContaining([
    { unit: 'lovelace', quantity: expect.toBeAdaQuantity() },
    { unit: beacon, quantity: '1' },
  ]),
  block: expect.toBeBlake2b256Hash(),
  block_height: expect.any(Number),
  block_time: expect.toBeUnixTimestamp(),
  data_hash: expect.toBeBlake2b256Hash(),
  inline_datum: expect.any(String),
  inline_datum_json: expect.any(Object),
  reference_script_hash: null,
});

export default [
  ...paginationFixtures,

  // --- Success (200) - sorted by swap price ---

  {
    id: 'swaps-asset-v1-one-way-price-asc_4d5e6f1a2b3c',
    testName: 'swaps/:asset - cardano-swaps v1 one-way price asc',
    endpoints: [`swaps/${V1_ONE_WAY_BEACON}?order_by=price&order=asc&count=2`],
    response: expect.arrayContaining([swapUtxo(V1_ONE_WAY_BEACON)]),
  },
  {
    id: 'swaps-asset-v1-one-way-price-desc_6e7f1a2b3c4d',
    testName: 'swaps/:asset - cardano-swaps v1 one-way price desc',
    endpoints: [`swaps/${V1_ONE_WAY_BEACON}?order_by=price&order=desc&count=2`],
    response: expect.arrayContaining([swapUtxo(V1_ONE_WAY_BEACON)]),
  },

  // v1 two-way (price sorted)

  {
    id: 'swaps-asset-v1-two-way-price-asc_5e6f1a2b3c4d',
    testName: 'swaps/:asset - cardano-swaps v1 two-way price asc',
    endpoints: [`swaps/${V1_TWO_WAY_BEACON}?order_by=price&order=asc&count=1`],
    response: expect.arrayContaining([swapUtxo(V1_TWO_WAY_BEACON)]),
  },
];
