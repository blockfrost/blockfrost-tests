import { expect } from 'vitest';
import {
  CBOR_ONLY_TX,
  MISSING_UTXO_SET_TX,
  ADDITIONAL_UTXO_SUCCESS_TX,
  ADDITIONAL_UTXO_SET_TX,
} from './evaluate-utxos-inputs.js';

export default [
  {
    id: 'utils-txs-evaluate-utxos-with-cbor-only-json_f9b2e7c14cae',
    testName: 'utils/txs/evaluate/utxos with cbor only (JSON)',
    endpoints: ['utils/txs/evaluate/utxos'],
    ...CBOR_ONLY_TX,
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
    id: 'utils-txs-evaluate-utxos-with-missing-additional-utxo-set-json_f9b2e7c14cae',
    testName: 'utils/txs/evaluate/utxos with missing additional utxo set (JSON)',
    endpoints: ['utils/txs/evaluate/utxos'],
    ...MISSING_UTXO_SET_TX,
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

  // success

  {
    id: 'utils-txs-evaluate-utxos-successfully-evaluate-execution-units-when-unknown-inputs-are-provided-as-additional-utxo_f9b2e7c14cae',
    testName:
      'utils/txs/evaluate/utxos successfully evaluate execution units when unknown inputs are provided as additional utxo',
    endpoints: ['utils/txs/evaluate/utxos'],
    ...ADDITIONAL_UTXO_SUCCESS_TX,
    response: {
      type: 'jsonwsp/response',
      version: '1.0',
      servicename: 'ogmios',
      methodname: 'EvaluateTx',
      result: { EvaluationResult: { 'spend:0': { memory: 15_694, steps: 3776833 } } },
      reflection: { id: expect.any(String) },
    },
  },
  {
    id: 'utils-txs-evaluate-utxos-with-additional-utxo-set-json_f9b2e7c14cae',
    testName: 'utils/txs/evaluate/utxos with additional utxo set (JSON)',
    endpoints: ['utils/txs/evaluate/utxos'],
    ...ADDITIONAL_UTXO_SET_TX,
    response: {
      type: 'jsonwsp/response',
      version: '1.0',
      servicename: 'ogmios',
      methodname: 'EvaluateTx',
      result: { EvaluationResult: { 'spend:0': { memory: 1_376_449, steps: 292679291 } } },
      reflection: { id: expect.any(String) },
    },
  },
];
