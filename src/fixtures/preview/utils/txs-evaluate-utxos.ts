import { expect } from 'vitest';

export default [
  {
    testName: 'utils/txs/evaluate/utxos success',
    endpoints: ['utils/txs/evaluate/utxos'],
    postBody: JSON.stringify({
      cbor: '84A300818258204E9A66B7E310F004893EEF615E11F8AE6C3328CF2BFDB32F6E40063636D42D7C00018182581D70C40F9129C2684046EB02325B96CA2899A6FA6478C1DDE9B5C53206A51A00D59F800200A10581840000D8799F4D48656C6C6F2C20576F726C6421FF820000F5F6',
    }),
    headers: { 'Content-Type': 'application/json' },
    response: {
      type: 'jsonwsp/response',
      version: '1.0',
      servicename: 'ogmios',
      methodname: 'EvaluateTx',
      result: {
        EvaluationResult: {
          'spend:0': {
            memory: 15_694,
            steps: 3776833,
          },
        },
      },
      reflection: { id: expect.any(String) },
    },
  },
  {
    testName: 'utils/txs/evaluate/utxos success with cbor only (JSON)',
    endpoints: ['utils/txs/evaluate/utxos'],
    postBody: JSON.stringify({
      cbor:
        '84A300818258204E9A66B7E310F004893EEF615E11F8AE6C3328CF2BFDB3' +
        '2F6E40063636D42D7C00018182581D70C40F9129C2684046EB02325B96CA' +
        '2899A6FA6478C1DDE9B5C53206A51A00D59F800200A10581840000D8799F' +
        '4D48656C6C6F2C20576F726C6421FF820000F5F6',
    }),
    headers: { 'Content-Type': 'application/json' },
    response: {
      type: 'jsonwsp/response',
      version: '1.0',
      servicename: 'ogmios',
      methodname: 'EvaluateTx',
      result: {
        EvaluationResult: {
          'spend:0': {
            memory: 15_694,
            steps: 3776833,
          },
        },
      },
      reflection: { id: expect.any(String) },
    },
  },
  {
    testName: 'utils/txs/evaluate/utxos - error Unknown transaction input (missing from UTxO set)',
    endpoints: ['utils/txs/evaluate/utxos'],
    postBody: JSON.stringify({
      cbor:
        '84A60082825820000000000000000000000000000000000000000000000000' +
        '0000000000000000182A8258207D67D80BC5B3BADCAF02375E428A39AEA398' +
        'DD0438F26899A1B265C6AC87EB6B000D81825820DB7DBF9EAA6094982ED4B9' +
        'B735CE275345F348194A7E8E9200FEC7D1CAD008EB010181825839004A294F' +
        '1EF53B30CDBF7CAF17798422A90227224F9FBF037FCF6C47A5BC2EC1952D11' +
        '89886FE018214EED45F83AB04171C41F373D530CA7A61A3BB94E8002000E80' +
        '0B58206DF8859EC92C3FF6BC0E2964793789E44E4C5ABBCC9FF6F2387B94F4' +
        'C2020E6EA303814E4D01000033222220051200120011048180058184000018' +
        '2A820000F5F6',
      additionalUtxoSet: [
        [
          {
            txId: '0000000000000000000000000000000000000000000000000000000000000000',
            index: 42,
          },
          {
            address: 'addr_test1wpnlxv2xv9a9ucvnvzqakwepzl9ltx7jzgm53av2e9ncv4sysemm8',
            value: { coins: 200_000 },
            datumHash: '45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0',
          },
        ],
      ],
    }),
    headers: { 'Content-Type': 'application/json' },
    response: {
      type: 'jsonwsp/response',
      version: '1.0',
      servicename: 'ogmios',
      methodname: 'EvaluateTx',
      result: {
        EvaluationFailure: {
          ScriptFailures: {
            'spend:0': {
              CannotCreateEvaluationContext: {
                reason:
                  'Unknown transaction input (missing from UTxO set): 7d67d80bc5b3badcaf02375e428a39aea398dd0438f26899a1b265c6ac87eb6b#0',
              },
            },
          },
        },
      },
      reflection: { id: expect.any(String) },
    },
  },
];
