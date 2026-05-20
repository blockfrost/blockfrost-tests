import { expect } from 'vitest';
import {
  CBOR_ONLY_TX_V6,
  MISSING_UTXO_SET_TX_V6,
  ADDITIONAL_UTXO_SUCCESS_TX_V6,
  ADDITIONAL_UTXO_SET_TX_V6,
} from './evaluate-utxos-inputs-v6.js';

export default [
  {
    id: 'utils-txs-evaluate-utxos-v6-with-cbor-only-json_f9b2e7c14cae',
    testName: 'utils/txs/evaluate/utxos with cbor only (JSON) (v6)',
    endpoints: ['utils/txs/evaluate/utxos?version=6'],
    ...CBOR_ONLY_TX_V6,
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
    id: 'utils-txs-evaluate-utxos-v6-with-missing-additional-utxo-set-json_f9b2e7c14cae',
    testName: 'utils/txs/evaluate/utxos with missing additional utxo set (JSON) (v6)',
    endpoints: ['utils/txs/evaluate/utxos?version=6'],
    ...MISSING_UTXO_SET_TX_V6,
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
    id: 'utils-txs-evaluate-utxos-v6-successfully-evaluate-execution-units-when-unknown-inputs-are-provided-as-additional-utxo_f9b2e7c14cae',
    testName:
      'utils/txs/evaluate/utxos successfully evaluate execution units when unknown inputs are provided as additional utxo (v6)',
    endpoints: ['utils/txs/evaluate/utxos?version=6'],
    ...ADDITIONAL_UTXO_SUCCESS_TX_V6,
    response: {
      jsonrpc: '2.0',
      method: 'evaluateTransaction',
      result: [
        {
          validator: { index: 0, purpose: 'spend' },
          budget: { memory: 15_694, cpu: 3_776_833 },
        },
      ],
      id: expect.any(String),
    },
  },
  {
    id: 'utils-txs-evaluate-utxos-v6-with-additional-utxo-set-json_f9b2e7c14cae',
    testName: 'utils/txs/evaluate/utxos with additional utxo set (JSON) (v6)',
    endpoints: ['utils/txs/evaluate/utxos?version=6'],
    ...ADDITIONAL_UTXO_SET_TX_V6,
    response: {
      jsonrpc: '2.0',
      method: 'evaluateTransaction',
      result: [
        {
          validator: { index: 0, purpose: 'spend' },
          budget: { memory: 1_376_449, cpu: 292_679_291 },
        },
      ],
      id: expect.any(String),
    },
  },
];
