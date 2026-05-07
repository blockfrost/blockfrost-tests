import { expect } from 'vitest';
import { INCOMPATIBLE_ERA_TX, ILL_FORMED_TX } from './evaluate-inputs.js';

export default [
  {
    id: 'utils-txs-evaluate-v6-fails-to-evaluate-incompatible-era_c8f5a92b1d3e',
    testName: 'utils/txs/evaluate - fails to evaluate - incompatible era (v6)',
    endpoints: ['utils/txs/evaluate?version=6'],
    ...INCOMPATIBLE_ERA_TX,
    response: {
      jsonrpc: '2.0',
      method: 'evaluateTransaction',
      error: {
        code: 3000,
        message: 'Trying to evaluate a transaction from an old era (prior to Alonzo).',
        data: {
          incompatibleEra: 'mary',
        },
      },
      id: expect.any(String),
    },
  },
  {
    id: 'utils-txs-evaluate-v6-fails-client-fault-to-submit-on-ill-formed-tx_c8f5a92b1d3e',
    testName: 'utils/txs/evaluate - fails (client fault) to submit on ill-formed tx (v6)',
    endpoints: ['utils/txs/evaluate?version=6'],
    ...ILL_FORMED_TX,
    response: {
      jsonrpc: '2.0',
      method: 'evaluateTransaction',
      error: {
        code: -32602,
        message: expect.stringContaining(
          "Invalid transaction; It looks like the given transaction wasn't well-formed.",
        ),
        data: expect.objectContaining({
          conway: expect.any(String),
        }),
      },
      id: expect.any(String),
    },
  },
];
