import { expect } from 'vitest';

export default [
  {
    id: 'blocks-latest-txs-cbor_58c800e2cd27',
    testName: 'blocks/latest/txs/cbor',
    endpoints: ['blocks/latest/txs/cbor'],
    response: expect.toBeOneOf([
      [],
      expect.arrayContaining([
        expect.objectContaining({ tx_hash: expect.toBeBlake2b256Hash(), cbor: expect.any(String) }),
      ]),
    ]),
  },
];
