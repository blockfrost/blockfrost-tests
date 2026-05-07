import { expect } from 'vitest';
import {
  SUCCESS_CBOR_ONLY_TX,
  MULTI_PURPOSE_TX,
  UNKNOWN_TX_INPUT,
} from './evaluate-utxos-inputs.js';

export default [
  {
    id: 'utils-txs-evaluate-utxos-success-with-cbor-only-json_f9b2e7c14cae',
    testName: 'utils/txs/evaluate/utxos success with cbor only (JSON)',
    endpoints: ['utils/txs/evaluate/utxos'],
    ...SUCCESS_CBOR_ONLY_TX,
    response: {
      type: 'jsonwsp/response',
      version: '1.0',
      servicename: 'ogmios',
      methodname: 'EvaluateTx',
      result: { EvaluationResult: { 'mint:0': { memory: 585_506, steps: 147_083_646 } } },
      reflection: { id: expect.any(String) },
    },
  },
  {
    id: 'utils-txs-evaluate-cbor-only-multi-purpose_f9b2e7c14cae',
    testName: 'utils/txs/evaluate cbor only, multi purpose',
    endpoints: ['utils/txs/evaluate/utxos'],
    ...MULTI_PURPOSE_TX,
    response: {
      type: 'jsonwsp/response',
      version: '1.0',
      servicename: 'ogmios',
      methodname: 'EvaluateTx',
      result: {
        EvaluationResult: {
          'spend:0': { memory: 8994, steps: 3_193_105 },
          'mint:0': { memory: 713_992, steps: 180_490_034 },
        },
      },
      reflection: { id: expect.any(String) },
    },
  },
  {
    id: 'utils-txs-evaluate-utxos-error-unknown-transaction-input-missing-from-u-tx-o-set_f9b2e7c14cae',
    testName: 'utils/txs/evaluate/utxos - error Unknown transaction input (missing from UTxO set)',
    endpoints: ['utils/txs/evaluate/utxos'],
    ...UNKNOWN_TX_INPUT,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    customExpect: async (response: any) => {
      if (response.type === 'jsonwsp/response') {
        expect(
          response.result.EvaluationFailure.ScriptFailures['spend:0'].CannotCreateEvaluationContext
            .reason,
        ).toBe(
          'Unknown transaction input (missing from UTxO set): 7d67d80bc5b3badcaf02375e428a39aea398dd0438f26899a1b265c6ac87eb6b#0',
        );
      } else {
        expect(response.type).toBe('jsonwsp/fault');
        expect(response.fault.string).toContain('Required Signer Hashes');
      }
    },
  },
];
