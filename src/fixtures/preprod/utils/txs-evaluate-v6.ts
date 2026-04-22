import { expect } from 'vitest';
import {
  SUCCESS_TX,
  MULTI_PURPOSE_TX,
  NO_SCRIPT_TX,
  INCOMPATIBLE_ERA_TX,
  ILL_FORMED_TX,
  ILL_FORMED_NOT_BASE64_TX,
} from './evaluate-inputs.js';

export default [
  {
    id: 'utils-txs-evaluate-v6-success_c8f5a92b1d3e',
    testName: 'utils/txs/evaluate success (v6)',
    endpoints: ['utils/txs/evaluate?version=6'],
    ...SUCCESS_TX,
    response: {
      jsonrpc: '2.0',
      method: 'evaluateTransaction',
      result: [
        {
          validator: { index: 0, purpose: 'mint' },
          budget: { memory: 585_506, cpu: 147_083_646 },
        },
      ],
      id: expect.any(String),
    },
  },
  {
    id: 'utils-txs-evaluate-v6-multi-purpose_c8f5a92b1d3e',
    testName: 'utils/txs/evaluate multi purpose (v6)',
    endpoints: ['utils/txs/evaluate?version=6'],
    ...MULTI_PURPOSE_TX,
    response: {
      jsonrpc: '2.0',
      method: 'evaluateTransaction',
      result: [
        {
          validator: { index: 0, purpose: 'spend' },
          budget: { memory: 8994, cpu: 3_193_105 },
        },
        {
          validator: { index: 0, purpose: 'mint' },
          budget: { memory: 713_992, cpu: 180_490_034 },
        },
      ],
      id: expect.any(String),
    },
  },
  {
    id: 'utils-txs-evaluate-v6-no-script_c8f5a92b1d3e',
    testName: 'utils/txs/evaluate no script (v6)',
    endpoints: ['utils/txs/evaluate?version=6'],
    ...NO_SCRIPT_TX,
    response: {
      jsonrpc: '2.0',
      method: 'evaluateTransaction',
      result: [],
      id: expect.any(String),
    },
  },
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
        data: { incompatibleEra: 'mary' },
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
  {
    id: 'utils-txs-evaluate-v6-fails-client-fault-to-submit-on-ill-formed-tx-not-base64-16_c8f5a92b1d3e',
    testName:
      'utils/txs/evaluate - fails (client fault) to submit on ill-formed tx (not base64/16) (v6)',
    endpoints: ['utils/txs/evaluate?version=6'],
    ...ILL_FORMED_NOT_BASE64_TX,
    response: {
      jsonrpc: '2.0',
      method: 'evaluateTransaction',
      error: {
        code: -32600,
        data: null,
        message: 'Invalid request: failed to decode payload from base64 or base16.',
      },
      id: expect.any(String),
    },
  },
];
