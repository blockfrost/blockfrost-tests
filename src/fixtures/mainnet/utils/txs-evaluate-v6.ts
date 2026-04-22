import { expect } from 'vitest';
import { SUCCESS_TX, SPENT_UTXO_TX, B64_TX } from './evaluate-inputs.js';

export default [
  {
    id: 'utils-txs-evaluate-v6_a6cb628e30af',
    testName: 'utils/txs/evaluate (v6)',
    endpoints: ['utils/txs/evaluate?version=6'],
    ...SUCCESS_TX,
    response: {
      jsonrpc: '2.0',
      method: 'evaluateTransaction',
      result: [
        {
          validator: { index: 0, purpose: 'spend' },
          budget: { memory: 1_765_011, cpu: 384_791_603 },
        },
      ],
      id: expect.any(String),
    },
  },
  {
    id: 'utils-txs-evaluate-with-spent-utxo-v6_a6cb628e30af',
    testName: 'utils/txs/evaluate with spent utxo (v6)',
    endpoints: ['utils/txs/evaluate?version=6'],
    ...SPENT_UTXO_TX,
    response: {
      jsonrpc: '2.0',
      method: 'evaluateTransaction',
      error: {
        code: 3010,
        message: 'Some scripts of the transactions terminated with error(s).',
        data: [
          {
            validator: { index: 0, purpose: 'spend' },
            error: {
              code: 3004,
              message: 'Unable to create the evaluation context from the given transaction.',
              data: {
                reason:
                  'Unknown transaction input (missing from UTxO set): ec6eb047f74e5412c116a819cdd43f1c27a29f2871241453019637b850461b43#0',
              },
            },
          },
        ],
      },
      id: expect.any(String),
    },
  },
  {
    id: 'utils-txs-evaluate-b64-v6_a6cb628e30af',
    testName: 'utils/txs/evaluate b64 (v6)',
    endpoints: ['utils/txs/evaluate?version=6'],
    ...B64_TX,
    response: {
      jsonrpc: '2.0',
      method: 'evaluateTransaction',
      result: [
        {
          validator: { index: 0, purpose: 'spend' },
          budget: { memory: 1_765_011, cpu: 384_791_603 },
        },
      ],
      id: expect.any(String),
    },
  },
];
