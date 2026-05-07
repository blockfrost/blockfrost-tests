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
    id: 'utils-txs-evaluate-success_a6cb628e30af',
    testName: 'utils/txs/evaluate success',
    endpoints: ['utils/txs/evaluate'],
    ...SUCCESS_TX,
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
    id: 'utils-txs-evaluate-multi-purpose_a6cb628e30af',
    testName: 'utils/txs/evaluate multi purpose',
    endpoints: ['utils/txs/evaluate'],
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
    id: 'utils-txs-evaluate-no-script_a6cb628e30af',
    testName: 'utils/txs/evaluate no script',
    endpoints: ['utils/txs/evaluate'],
    ...NO_SCRIPT_TX,
    response: {
      type: 'jsonwsp/response',
      version: '1.0',
      servicename: 'ogmios',
      methodname: 'EvaluateTx',
      result: { EvaluationResult: {} },
      reflection: { id: expect.any(String) },
    },
  },
  {
    id: 'utils-txs-evaluate-fails-to-evaluate-incompatible-era_a6cb628e30af',
    testName: 'utils/txs/evaluate - fails to evaluate - incompatible era',
    endpoints: ['utils/txs/evaluate'],
    ...INCOMPATIBLE_ERA_TX,
    response: {
      type: 'jsonwsp/response',
      version: '1.0',
      servicename: 'ogmios',
      methodname: 'EvaluateTx',
      result: { EvaluationFailure: { IncompatibleEra: 'Mary' } },
      reflection: { id: expect.any(String) },
    },
  },
  {
    id: 'utils-txs-evaluate-fails-client-fault-to-submit-on-ill-formed-tx_a6cb628e30af',
    testName: 'utils/txs/evaluate - fails (client fault) to submit on ill-formed tx',
    endpoints: ['utils/txs/evaluate'],
    ...ILL_FORMED_TX,
    response: {
      type: 'jsonwsp/fault',
      version: '1.0',
      servicename: 'ogmios',
      fault: {
        code: 'client',
        string: expect.stringContaining(
          'Invalid request: Deserialisation failure while decoding serialised transaction. CBOR failed with error:',
        ),
      },
      reflection: { id: expect.any(String) },
    },
  },
  {
    id: 'utils-txs-evaluate-fails-client-fault-to-submit-on-ill-formed-tx-not-base64-16_a6cb628e30af',
    testName:
      'utils/txs/evaluate - fails (client fault) to submit on ill-formed tx (not base64/16)',
    endpoints: ['utils/txs/evaluate'],
    ...ILL_FORMED_NOT_BASE64_TX,
    response: {
      type: 'jsonwsp/fault',
      version: '1.0',
      servicename: 'ogmios',
      fault: {
        code: 'client',
        string: 'Invalid request: failed to decode payload from base64 or base16.',
      },
      reflection: { id: expect.any(String) },
    },
  },
];
