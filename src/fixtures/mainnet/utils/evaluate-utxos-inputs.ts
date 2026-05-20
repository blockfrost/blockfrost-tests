import { SUCCESS_TX, SPENT_UTXO_TX } from './evaluate-inputs.js';

// v5 inputs

export const CBOR_ONLY_TX = {
  postBody: JSON.stringify({ cbor: SUCCESS_TX.postBody }),
  headers: { 'Content-Type': 'application/json' } as const,
};

export const MISSING_UTXO_SET_TX = {
  postBody: JSON.stringify({
    cbor: SPENT_UTXO_TX.postBody,
  }),
  headers: { 'Content-Type': 'application/json' } as const,
};

export const ADDITIONAL_UTXO_SUCCESS_TX = {
  postBody: JSON.stringify({
    cbor: '84A30081825820FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00018182581D70C40F9129C2684046EB02325B96CA2899A6FA6478C1DDE9B5C53206A51A00D59F800200A10581840000D8799F4D48656C6C6F2C20576F726C6421FF820000F5F6',
    additionalUtxoSet: [
      [
        { txId: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF', index: 0 },
        {
          address: 'addr_test1wrzqlyffcf5yq3htqge9h9k29zv6d7ny0rqam6d4c5eqdfgg0h7yw',
          value: { coins: 14_000_000 },
          datum: 'd87980',
          script: {
            'plutus:v2':
              '59010601000032323232323232323232322223253330083371e6eb8cc014c01c00520004890d48656c6c6f2c20576f726c642100149858cc020c94ccc020cdc3a400000226464a66601e60220042930a99806249334c6973742f5475706c652f436f6e73747220636f6e7461696e73206d6f7265206974656d73207468616e2065787065637465640016375c601e002600e0062a660149212b436f6e73747220696e64657820646964206e6f74206d6174636820616e7920747970652076617269616e740016300a37540040046600200290001111199980319b8700100300c233330050053370000890011807000801001118031baa0015734ae6d5ce2ab9d5573caae7d5d0aba201',
          },
        },
      ],
    ],
  }),
  headers: { 'Content-Type': 'application/json' } as const,
};

export const ADDITIONAL_UTXO_SET_TX = {
  postBody: JSON.stringify({
    cbor: SPENT_UTXO_TX.postBody,
    additionalUtxoSet: [
      [
        // this utxo is already spent on blockchain, but it will work for ogmios if passed as additional utxo set
        { txId: 'ec6eb047f74e5412c116a819cdd43f1c27a29f2871241453019637b850461b43', index: 0 },
        {
          address:
            'addr1qxvduldkktan65x4dg5gkfaaehc798pjg755yckuk5tjcedre5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qgcyhcc',
          value: { coins: 1_300_000_000 },
        },
      ],
    ],
  }),

  headers: { 'Content-Type': 'application/json' } as const,
};
