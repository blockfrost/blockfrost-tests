import { expect } from 'vitest';

export default [
  {
    testName: 'utils/txs/evaluate - fails to evaluate - incompatible era',
    endpoints: ['utils/txs/evaluate'],
    postBody:
      '83a300818258200ac82ea5bc0967a17d4a60e2474b01df72440673429ff89b2802d3bd2a38ec3e01018282583900e2fbc47df26fcd065c074c451e792599ea8fc159f76163ca4c2b520b58adbef896164ee7456ccb4eaa965a87a602b0e3b2825d7b4ee789b01a000f4240825839003c77cd7f3c07b3b0ba72044848592d2e5687569ad25b93a926392f5e83892080b40900e146e1c68f12ef6811773bd8740196cd211f3211de1af9b0595d021a0002c5bda10081825820da818bbf3a082945884681d062147ca7dc3111d87fab415268749124a3ed1d31584059ca300a7d38abf454482a57281acdbbaab740b868978131f36117a224e6ba2be5248da0205296d7a8211506d6430a2873c201831e326e5db68ac9e1403e520ef6',
    headers: { 'Content-Type': 'application/cbor' },
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
    testName: 'utils/txs/evaluate - fails (client fault) to submit on ill-formed tx',
    endpoints: ['utils/txs/evaluate'],
    postBody: '80',
    headers: { 'Content-Type': 'application/cbor' },
    response: {
      type: 'jsonwsp/fault',
      version: '1.0',
      servicename: 'ogmios',
      fault: {
        code: 'client',
        string:
          'Invalid request: Deserialisation failure while decoding serialised transaction. CBOR failed with error: DeserialiseFailure 0 "expected tag".',
      },
      reflection: { id: expect.any(String) },
    },
  },
];
