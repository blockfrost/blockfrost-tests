import { expect } from 'vitest';

// Protocol 11 scripts evaluate the named builtin, then return unit.
// Each transaction mints one unnamed asset with one policy and one mint redeemer.
// These unsigned transactions have no inputs, outputs, or validity bounds, and pay zero fees.
// The policies ignore their arguments and discard builtin results after execution.
// Assertions check execution budgets and response formats, not the computed builtin values.
// These transactions test script evaluation only; they are not valid for submission.
// Budgets match Preview, Preprod, and Mainnet on 2026-10-14.
export default [
  // The minting policy executes expModInteger(2, 3, 5), then returns unit.
  // This checks protocol-11 builtin support and execution costs in this Plutus version.
  // The default route must return the v5 mint:0 budget with memory and steps.
  {
    id: 'utils-txs-evaluate-protocol-11-plutus-v1-exp-mod-integer-v5_a6cb628e30af',
    testName: 'utils/txs/evaluate - protocol 11 PlutusV1 expModInteger v5',
    endpoints: ['utils/txs/evaluate'],
    postBody:
      '84a400800180020009a1581c3a05b7ce806d9641dfd2cff1c8a34720a212c67f565dc8753e247278a14001a2038151500100002232498ccdeba4008900324015058184010000820000f5f6',
    headers: { 'Content-Type': 'application/cbor' },
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
  // The minting policy executes expModInteger(2, 3, 5), then returns unit.
  // This checks protocol-11 builtin support and execution costs in this Plutus version.
  // Version 6 must return the same budget with purpose mint, index 0, memory, and cpu.
  {
    id: 'utils-txs-evaluate-protocol-11-plutus-v1-exp-mod-integer-v6_ea88a1f9c249',
    testName: 'utils/txs/evaluate - protocol 11 PlutusV1 expModInteger v6',
    endpoints: ['utils/txs/evaluate?version=6'],
    postBody:
      '84a400800180020009a1581c3a05b7ce806d9641dfd2cff1c8a34720a212c67f565dc8753e247278a14001a2038151500100002232498ccdeba4008900324015058184010000820000f5f6',
    headers: { 'Content-Type': 'application/cbor' },
    response: {
      jsonrpc: '2.0',
      method: 'evaluateTransaction',
      result: [
        {
          validator: {
            index: 0,
            purpose: 'mint',
          },
          budget: {
            memory: 1701,
            cpu: 1148094,
          },
        },
      ],
      id: expect.any(String),
    },
  },
  // The minting policy executes expModInteger(2, 3, 5), then returns unit.
  // This checks protocol-11 builtin support and execution costs in this Plutus version.
  // The default route must return the v5 mint:0 budget with memory and steps.
  {
    id: 'utils-txs-evaluate-protocol-11-plutus-v2-exp-mod-integer-v5_a6cb628e30af',
    testName: 'utils/txs/evaluate - protocol 11 PlutusV2 expModInteger v5',
    endpoints: ['utils/txs/evaluate'],
    postBody:
      '84a400800180020009a1581cd7b98ee22e1f5fe527af363fc6c6f93829306bcbd387af530ac551e0a14001a2068151500100002232498ccdeba4008900324015058184010000820000f5f6',
    headers: { 'Content-Type': 'application/cbor' },
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
  // The minting policy executes expModInteger(2, 3, 5), then returns unit.
  // This checks protocol-11 builtin support and execution costs in this Plutus version.
  // Version 6 must return the same budget with purpose mint, index 0, memory, and cpu.
  {
    id: 'utils-txs-evaluate-protocol-11-plutus-v2-exp-mod-integer-v6_ea88a1f9c249',
    testName: 'utils/txs/evaluate - protocol 11 PlutusV2 expModInteger v6',
    endpoints: ['utils/txs/evaluate?version=6'],
    postBody:
      '84a400800180020009a1581cd7b98ee22e1f5fe527af363fc6c6f93829306bcbd387af530ac551e0a14001a2068151500100002232498ccdeba4008900324015058184010000820000f5f6',
    headers: { 'Content-Type': 'application/cbor' },
    response: {
      jsonrpc: '2.0',
      method: 'evaluateTransaction',
      result: [
        {
          validator: {
            index: 0,
            purpose: 'mint',
          },
          budget: {
            memory: 1701,
            cpu: 1148094,
          },
        },
      ],
      id: expect.any(String),
    },
  },
  // The minting policy hashes the UTF-8 bytes of "blockfrost" with ripemd_160, then returns unit.
  // This checks protocol-11 builtin support and execution costs in this Plutus version.
  // The default route must return the v5 mint:0 budget with memory and steps.
  {
    id: 'utils-txs-evaluate-protocol-11-plutus-v1-ripemd160-v5_a6cb628e30af',
    testName: 'utils/txs/evaluate - protocol 11 PlutusV1 ripemd160 v5',
    endpoints: ['utils/txs/evaluate'],
    postBody:
      '84a400800180020009a1581c22d2d775175b8c41b680637673780e986de0f2c817775b8f3d13ac36a14001a203815818570100002232498deb24410a626c6f636b66726f73740001058184010000820000f5f6',
    headers: { 'Content-Type': 'application/cbor' },
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
  // The minting policy hashes the UTF-8 bytes of "blockfrost" with ripemd_160, then returns unit.
  // This checks protocol-11 builtin support and execution costs in this Plutus version.
  // Version 6 must return the same budget with purpose mint, index 0, memory, and cpu.
  {
    id: 'utils-txs-evaluate-protocol-11-plutus-v1-ripemd160-v6_ea88a1f9c249',
    testName: 'utils/txs/evaluate - protocol 11 PlutusV1 ripemd160 v6',
    endpoints: ['utils/txs/evaluate?version=6'],
    postBody:
      '84a400800180020009a1581c22d2d775175b8c41b680637673780e986de0f2c817775b8f3d13ac36a14001a203815818570100002232498deb24410a626c6f636b66726f73740001058184010000820000f5f6',
    headers: { 'Content-Type': 'application/cbor' },
    response: {
      jsonrpc: '2.0',
      method: 'evaluateTransaction',
      result: [
        {
          validator: {
            index: 0,
            purpose: 'mint',
          },
          budget: {
            memory: 1303,
            cpu: 2205359,
          },
        },
      ],
      id: expect.any(String),
    },
  },
  // The minting policy hashes the UTF-8 bytes of "blockfrost" with ripemd_160, then returns unit.
  // This checks protocol-11 builtin support and execution costs in this Plutus version.
  // The default route must return the v5 mint:0 budget with memory and steps.
  {
    id: 'utils-txs-evaluate-protocol-11-plutus-v2-ripemd160-v5_a6cb628e30af',
    testName: 'utils/txs/evaluate - protocol 11 PlutusV2 ripemd160 v5',
    endpoints: ['utils/txs/evaluate'],
    postBody:
      '84a400800180020009a1581c28a0e44f7d8140be77a8adffc5bb6069f29d0db5a46473e462d81b5ea14001a206815818570100002232498deb24410a626c6f636b66726f73740001058184010000820000f5f6',
    headers: { 'Content-Type': 'application/cbor' },
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
  // The minting policy hashes the UTF-8 bytes of "blockfrost" with ripemd_160, then returns unit.
  // This checks protocol-11 builtin support and execution costs in this Plutus version.
  // Version 6 must return the same budget with purpose mint, index 0, memory, and cpu.
  {
    id: 'utils-txs-evaluate-protocol-11-plutus-v2-ripemd160-v6_ea88a1f9c249',
    testName: 'utils/txs/evaluate - protocol 11 PlutusV2 ripemd160 v6',
    endpoints: ['utils/txs/evaluate?version=6'],
    postBody:
      '84a400800180020009a1581c28a0e44f7d8140be77a8adffc5bb6069f29d0db5a46473e462d81b5ea14001a206815818570100002232498deb24410a626c6f636b66726f73740001058184010000820000f5f6',
    headers: { 'Content-Type': 'application/cbor' },
    response: {
      jsonrpc: '2.0',
      method: 'evaluateTransaction',
      result: [
        {
          validator: {
            index: 0,
            purpose: 'mint',
          },
          budget: {
            memory: 1303,
            cpu: 2205359,
          },
        },
      ],
      id: expect.any(String),
    },
  },
  // The PlutusV3 minting policy executes lengthOfArray([1, 2, 3]), then returns unit.
  // This checks array builtin support and the active protocol-11 cost model.
  // The default route must return the v5 mint:0 budget with memory and steps.
  {
    id: 'utils-txs-evaluate-protocol-11-plutus-v3-length-of-array-v5_a6cb628e30af',
    testName: 'utils/txs/evaluate - protocol 11 PlutusV3 lengthOfArray v5',
    endpoints: ['utils/txs/evaluate'],
    postBody:
      '84a400800180020009a1581cb081dc7f2ab2a92bb2db703d2d3dd0b486e0412d61558f31ecff01afa14001a20781504f010100232498d5eca5f9040a090601058184010000820000f5f6',
    headers: { 'Content-Type': 'application/cbor' },
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
  // The PlutusV3 minting policy executes lengthOfArray([1, 2, 3]), then returns unit.
  // This checks array builtin support and the active protocol-11 cost model.
  // Version 6 must return the same budget with purpose mint, index 0, memory, and cpu.
  {
    id: 'utils-txs-evaluate-protocol-11-plutus-v3-length-of-array-v6_ea88a1f9c249',
    testName: 'utils/txs/evaluate - protocol 11 PlutusV3 lengthOfArray v6',
    endpoints: ['utils/txs/evaluate?version=6'],
    postBody:
      '84a400800180020009a1581cb081dc7f2ab2a92bb2db703d2d3dd0b486e0412d61558f31ecff01afa14001a20781504f010100232498d5eca5f9040a090601058184010000820000f5f6',
    headers: { 'Content-Type': 'application/cbor' },
    response: {
      jsonrpc: '2.0',
      method: 'evaluateTransaction',
      result: [
        {
          validator: {
            index: 0,
            purpose: 'mint',
          },
          budget: {
            memory: 1110,
            cpu: 391983,
          },
        },
      ],
      id: expect.any(String),
    },
  },
  // The PlutusV3 minting policy converts [1, 2, 3] with listToArray.
  // It executes indexArray at index 1, then returns unit.
  // This checks both array builtins and their protocol-11 execution costs.
  // The default route must return the v5 mint:0 budget with memory and steps.
  {
    id: 'utils-txs-evaluate-protocol-11-plutus-v3-list-to-array-index-array-v5_a6cb628e30af',
    testName: 'utils/txs/evaluate - protocol 11 PlutusV3 listToArrayIndexArray v5',
    endpoints: ['utils/txs/evaluate'],
    postBody:
      '84a400800180020009a1581c276129feafdabd68509b0b9b4b9948a55f62cb48a31b7adb6b56deefa14001a207815554010100232498cd5ed9abda4bd60814120c480081058184010000820000f5f6',
    headers: { 'Content-Type': 'application/cbor' },
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
  // The PlutusV3 minting policy converts [1, 2, 3] with listToArray.
  // It executes indexArray at index 1, then returns unit.
  // This checks both array builtins and their protocol-11 execution costs.
  // Version 6 must return the same budget with purpose mint, index 0, memory, and cpu.
  {
    id: 'utils-txs-evaluate-protocol-11-plutus-v3-list-to-array-index-array-v6_ea88a1f9c249',
    testName: 'utils/txs/evaluate - protocol 11 PlutusV3 listToArrayIndexArray v6',
    endpoints: ['utils/txs/evaluate?version=6'],
    postBody:
      '84a400800180020009a1581c276129feafdabd68509b0b9b4b9948a55f62cb48a31b7adb6b56deefa14001a207815554010100232498cd5ed9abda4bd60814120c480081058184010000820000f5f6',
    headers: { 'Content-Type': 'application/cbor' },
    response: {
      jsonrpc: '2.0',
      method: 'evaluateTransaction',
      result: [
        {
          validator: {
            index: 0,
            purpose: 'mint',
          },
          budget: {
            memory: 1642,
            cpu: 547624,
          },
        },
      ],
      id: expect.any(String),
    },
  },
  // The PlutusV2 minting policy executes dropList(1, [1, 2, 3]), then returns unit.
  // This checks protocol-11 builtin support and execution costs for dropping one list element.
  // The default route must return the v5 mint:0 budget with memory and steps.
  {
    id: 'utils-txs-evaluate-protocol-11-plutus-v2-drop-list-v5_a6cb628e30af',
    testName: 'utils/txs/evaluate - protocol 11 PlutusV2 dropList v5',
    endpoints: ['utils/txs/evaluate'],
    postBody:
      '84a400800180020009a1581c9dd2af04f45006aa227a8b73556f5fd423d99a1358a80e5a85dd3208a14001a2068153520100002232498cd5ec2400497ac102824181058184010000820000f5f6',
    headers: { 'Content-Type': 'application/cbor' },
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
  // The PlutusV2 minting policy executes dropList(1, [1, 2, 3]), then returns unit.
  // This checks protocol-11 builtin support and execution costs for dropping one list element.
  // Version 6 must return the same budget with purpose mint, index 0, memory, and cpu.
  {
    id: 'utils-txs-evaluate-protocol-11-plutus-v2-drop-list-v6_ea88a1f9c249',
    testName: 'utils/txs/evaluate - protocol 11 PlutusV2 dropList v6',
    endpoints: ['utils/txs/evaluate?version=6'],
    postBody:
      '84a400800180020009a1581c9dd2af04f45006aa227a8b73556f5fd423d99a1358a80e5a85dd3208a14001a2068153520100002232498cd5ec2400497ac102824181058184010000820000f5f6',
    headers: { 'Content-Type': 'application/cbor' },
    response: {
      jsonrpc: '2.0',
      method: 'evaluateTransaction',
      result: [
        {
          validator: {
            index: 0,
            purpose: 'mint',
          },
          budget: {
            memory: 1604,
            cpu: 358768,
          },
        },
      ],
      id: expect.any(String),
    },
  },
];
