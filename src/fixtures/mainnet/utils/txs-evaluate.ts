import { expect } from 'vitest';
import { SUCCESS_TX, SPENT_UTXO_TX, B64_TX } from './evaluate-inputs.js';

export default [
  {
    id: 'utils-txs-evaluate_a6cb628e30af',
    testName: 'utils/txs/evaluate',
    endpoints: ['utils/txs/evaluate'],
    ...SUCCESS_TX,
    response: {
      type: 'jsonwsp/response',
      version: '1.0',
      servicename: 'ogmios',
      methodname: 'EvaluateTx',
      result: { EvaluationResult: { 'spend:0': { memory: 1_765_011, steps: 384791603 } } },
      reflection: { id: expect.any(String) },
    },
  },
  {
    id: 'utils-txs-evaluate-with-spent-utxo_a6cb628e30af',
    testName: 'utils/txs/evaluate with spent utxo',
    endpoints: ['utils/txs/evaluate'],
    ...SPENT_UTXO_TX,
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
                  'Unknown transaction input (missing from UTxO set): ec6eb047f74e5412c116a819cdd43f1c27a29f2871241453019637b850461b43#0',
              },
            },
          },
        },
      },
      reflection: { id: expect.any(String) },
    },
  },
  {
    id: 'utils-txs-evaluate-b64_a6cb628e30af',
    testName: 'utils/txs/evaluate b64',
    endpoints: ['utils/txs/evaluate'],
    ...B64_TX,
    response: {
      type: 'jsonwsp/response',
      version: '1.0',
      servicename: 'ogmios',
      methodname: 'EvaluateTx',
      result: { EvaluationResult: { 'spend:0': { memory: 1_765_011, steps: 384791603 } } },
      reflection: { id: expect.any(String) },
    },
  },
];
