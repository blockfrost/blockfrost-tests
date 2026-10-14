import { createProtocol11EvaluationFixtures } from '../../common/utils/txs-evaluate-protocol11.js';
import { createSuppliedUtxoEvaluationFixtures } from '../../common/utils/txs-evaluate-utxos-protocol11.js';

// Expected budgets captured on Preprod with protocol 11 on 2026-10-14.
// Update this network independently when its protocol or cost models change.
export default [
  ...createProtocol11EvaluationFixtures({
    v1ExpModInteger: { memory: 1701, steps: 1148094 },
    v2ExpModInteger: { memory: 1701, steps: 1148094 },
    v3Array: { memory: 1642, steps: 547624 },
  }),
  ...createSuppliedUtxoEvaluationFixtures({
    referenceScript: { memory: 800, steps: 112100 },
    inlineDatum: { memory: 1400, steps: 208100 },
    datumHash: { memory: 1400, steps: 208100 },
  }),
];
