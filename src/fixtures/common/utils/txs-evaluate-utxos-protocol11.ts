import { expect } from 'vitest';

// Protocol 11 scripts also run through the JSON evaluation route.
// Supplied UTxOs test reference scripts, inline datums, and datum witnesses.
// Budgets match Preview, Preprod, and Mainnet on 2026-10-14.
export default [
  {
    id: 'utils-txs-evaluate-utxos-protocol-11-plutus-v1-exp-mod-integer-utxos_f9b2e7c14cae',
    testName: 'utils/txs/evaluate/utxos - protocol 11 PlutusV1 expModInteger utxos',
    endpoints: ['utils/txs/evaluate/utxos'],
    postBody: JSON.stringify({
      cbor: '84a400800180020009a1581c3a05b7ce806d9641dfd2cff1c8a34720a212c67f565dc8753e247278a14001a2038151500100002232498ccdeba4008900324015058184010000820000f5f6',
    }),
    headers: { 'Content-Type': 'application/json' },
    response: {
      type: 'jsonwsp/response',
      version: '1.0',
      servicename: 'ogmios',
      methodname: 'EvaluateTx',
      result: {
        EvaluationResult: {
          'mint:0': {
            memory: 1701,
            steps: 1148094,
          },
        },
      },
      reflection: {
        id: expect.any(String),
      },
    },
  },
  {
    id: 'utils-txs-evaluate-utxos-protocol-11-plutus-v2-exp-mod-integer-utxos_f9b2e7c14cae',
    testName: 'utils/txs/evaluate/utxos - protocol 11 PlutusV2 expModInteger utxos',
    endpoints: ['utils/txs/evaluate/utxos'],
    postBody: JSON.stringify({
      cbor: '84a400800180020009a1581cd7b98ee22e1f5fe527af363fc6c6f93829306bcbd387af530ac551e0a14001a2068151500100002232498ccdeba4008900324015058184010000820000f5f6',
    }),
    headers: { 'Content-Type': 'application/json' },
    response: {
      type: 'jsonwsp/response',
      version: '1.0',
      servicename: 'ogmios',
      methodname: 'EvaluateTx',
      result: {
        EvaluationResult: {
          'mint:0': {
            memory: 1701,
            steps: 1148094,
          },
        },
      },
      reflection: {
        id: expect.any(String),
      },
    },
  },
  {
    id: 'utils-txs-evaluate-utxos-protocol-11-plutus-v1-ripemd160-utxos_f9b2e7c14cae',
    testName: 'utils/txs/evaluate/utxos - protocol 11 PlutusV1 ripemd160 utxos',
    endpoints: ['utils/txs/evaluate/utxos'],
    postBody: JSON.stringify({
      cbor: '84a400800180020009a1581c22d2d775175b8c41b680637673780e986de0f2c817775b8f3d13ac36a14001a203815818570100002232498deb24410a626c6f636b66726f73740001058184010000820000f5f6',
    }),
    headers: { 'Content-Type': 'application/json' },
    response: {
      type: 'jsonwsp/response',
      version: '1.0',
      servicename: 'ogmios',
      methodname: 'EvaluateTx',
      result: {
        EvaluationResult: {
          'mint:0': {
            memory: 1303,
            steps: 2205359,
          },
        },
      },
      reflection: {
        id: expect.any(String),
      },
    },
  },
  {
    id: 'utils-txs-evaluate-utxos-protocol-11-plutus-v2-ripemd160-utxos_f9b2e7c14cae',
    testName: 'utils/txs/evaluate/utxos - protocol 11 PlutusV2 ripemd160 utxos',
    endpoints: ['utils/txs/evaluate/utxos'],
    postBody: JSON.stringify({
      cbor: '84a400800180020009a1581c28a0e44f7d8140be77a8adffc5bb6069f29d0db5a46473e462d81b5ea14001a206815818570100002232498deb24410a626c6f636b66726f73740001058184010000820000f5f6',
    }),
    headers: { 'Content-Type': 'application/json' },
    response: {
      type: 'jsonwsp/response',
      version: '1.0',
      servicename: 'ogmios',
      methodname: 'EvaluateTx',
      result: {
        EvaluationResult: {
          'mint:0': {
            memory: 1303,
            steps: 2205359,
          },
        },
      },
      reflection: {
        id: expect.any(String),
      },
    },
  },
  {
    id: 'utils-txs-evaluate-utxos-protocol-11-plutus-v3-length-of-array-utxos_f9b2e7c14cae',
    testName: 'utils/txs/evaluate/utxos - protocol 11 PlutusV3 lengthOfArray utxos',
    endpoints: ['utils/txs/evaluate/utxos'],
    postBody: JSON.stringify({
      cbor: '84a400800180020009a1581cb081dc7f2ab2a92bb2db703d2d3dd0b486e0412d61558f31ecff01afa14001a20781504f010100232498d5eca5f9040a090601058184010000820000f5f6',
    }),
    headers: { 'Content-Type': 'application/json' },
    response: {
      type: 'jsonwsp/response',
      version: '1.0',
      servicename: 'ogmios',
      methodname: 'EvaluateTx',
      result: {
        EvaluationResult: {
          'mint:0': {
            memory: 1110,
            steps: 391983,
          },
        },
      },
      reflection: {
        id: expect.any(String),
      },
    },
  },
  {
    id: 'utils-txs-evaluate-utxos-protocol-11-plutus-v3-list-to-array-index-array-utxos_f9b2e7c14cae',
    testName: 'utils/txs/evaluate/utxos - protocol 11 PlutusV3 listToArrayIndexArray utxos',
    endpoints: ['utils/txs/evaluate/utxos'],
    postBody: JSON.stringify({
      cbor: '84a400800180020009a1581c276129feafdabd68509b0b9b4b9948a55f62cb48a31b7adb6b56deefa14001a207815554010100232498cd5ed9abda4bd60814120c480081058184010000820000f5f6',
    }),
    headers: { 'Content-Type': 'application/json' },
    response: {
      type: 'jsonwsp/response',
      version: '1.0',
      servicename: 'ogmios',
      methodname: 'EvaluateTx',
      result: {
        EvaluationResult: {
          'mint:0': {
            memory: 1642,
            steps: 547624,
          },
        },
      },
      reflection: {
        id: expect.any(String),
      },
    },
  },
  {
    id: 'utils-txs-evaluate-utxos-protocol-11-plutus-v2-drop-list-utxos_f9b2e7c14cae',
    testName: 'utils/txs/evaluate/utxos - protocol 11 PlutusV2 dropList utxos',
    endpoints: ['utils/txs/evaluate/utxos'],
    postBody: JSON.stringify({
      cbor: '84a400800180020009a1581c9dd2af04f45006aa227a8b73556f5fd423d99a1358a80e5a85dd3208a14001a2068153520100002232498cd5ec2400497ac102824181058184010000820000f5f6',
    }),
    headers: { 'Content-Type': 'application/json' },
    response: {
      type: 'jsonwsp/response',
      version: '1.0',
      servicename: 'ogmios',
      methodname: 'EvaluateTx',
      result: {
        EvaluationResult: {
          'mint:0': {
            memory: 1604,
            steps: 358768,
          },
        },
      },
      reflection: {
        id: expect.any(String),
      },
    },
  },
  {
    id: 'utils-txs-evaluate-utxos-reference-script-supplied-u-tx-o_f9b2e7c14cae',
    testName: 'utils/txs/evaluate/utxos - reference script supplied UTxO',
    endpoints: ['utils/txs/evaluate/utxos'],
    postBody: JSON.stringify({
      cbor: '84a500800180020009a1581c4dd621146cc23200ca53e23dce710abc2447c69d6818f30a43c73342a140011281825820ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00a1058184010000820000f5f6',
      additionalUtxoSet: [
        [
          {
            txId: 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
            index: 0,
          },
          {
            address: 'addr_test1vqqszqgpqyqszqgpqyqszqgpqyqszqgpqyqszqgpqyqszqgasfzjt',
            value: {
              coins: 3000000,
            },
            script: {
              'plutus:v3': '480101002324992601',
            },
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
        EvaluationResult: {
          'mint:0': {
            memory: 800,
            steps: 112100,
          },
        },
      },
      reflection: {
        id: expect.any(String),
      },
    },
  },
  {
    id: 'utils-txs-evaluate-utxos-inline-datum-supplied-u-tx-o_f9b2e7c14cae',
    testName: 'utils/txs/evaluate/utxos - inline datum supplied UTxO',
    endpoints: ['utils/txs/evaluate/utxos'],
    postBody: JSON.stringify({
      cbor: '84a30081825820ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0001800200a206814a49010000222324992601058184000000820000f5f6',
      additionalUtxoSet: [
        [
          {
            txId: 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
            index: 0,
          },
          {
            address: 'addr_test1wql5z3vh409n6694ga6yh3fcpwhgnnj6n6rdnrsu72q776gkxjpdv',
            value: {
              coins: 3000000,
            },
            datum: '01',
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
        EvaluationResult: {
          'spend:0': {
            memory: 1400,
            steps: 208100,
          },
        },
      },
      reflection: {
        id: expect.any(String),
      },
    },
  },
  {
    id: 'utils-txs-evaluate-utxos-hash-datum-supplied-u-tx-o_f9b2e7c14cae',
    testName: 'utils/txs/evaluate/utxos - hash datum supplied UTxO',
    endpoints: ['utils/txs/evaluate/utxos'],
    postBody: JSON.stringify({
      cbor: '84a30081825820ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0001800200a306814a49010000222324992601058184000000820000048101f5f6',
      additionalUtxoSet: [
        [
          {
            txId: 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
            index: 0,
          },
          {
            address: 'addr_test1wql5z3vh409n6694ga6yh3fcpwhgnnj6n6rdnrsu72q776gkxjpdv',
            value: {
              coins: 3000000,
            },
            datumHash: 'ee155ace9c40292074cb6aff8c9ccdd273c81648ff1149ef36bcea6ebb8a3e25',
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
        EvaluationResult: {
          'spend:0': {
            memory: 1400,
            steps: 208100,
          },
        },
      },
      reflection: {
        id: expect.any(String),
      },
    },
  },
];
