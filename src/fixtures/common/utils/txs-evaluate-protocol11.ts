import { expect } from 'vitest';

// These cases check protocol-11 builtin costs in PlutusV1, PlutusV2, and PlutusV3.
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
];
