import { expect } from 'vitest';
import { INCOMPATIBLE_ERA_TX, ILL_FORMED_TX } from './evaluate-inputs.js';

export default [
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
];
