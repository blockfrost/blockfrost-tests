import { expect } from 'vitest';
import type { EvaluationBudget } from './txs-evaluate-protocol11.js';

// These cases check reference-script and datum resolution through supplied UTxOs.
// Synthetic UTxOs use the all-ff transaction hash and require no on-chain state.
// The scripts ignore their arguments; the cases check resolution, not datum contents.
// These transactions test script evaluation only; they are not valid for submission.
// Each network supplies its own expected budgets from its active protocol cost models.
export function createSuppliedUtxoEvaluationFixtures(budgets: {
  referenceScript: EvaluationBudget;
  inlineDatum: EvaluationBudget;
  datumHash: EvaluationBudget;
}) {
  return [
    // The transaction references the synthetic UTxO at all-ff#0 and mints one unnamed asset.
    // Its witness set contains no script; additionalUtxoSet supplies the PlutusV3 reference script.
    // The policy returns unit and ignores its context.
    // This checks reference-input lookup, reference-script decoding, and the mint:0 execution budget.
    {
      id: 'utils-txs-evaluate-utxos-reference-script-supplied-u-tx-o_f9b2e7c14cae',
      testName: 'utils/txs/evaluate/utxos - reference script supplied UTxO',
      endpoints: ['utils/txs/evaluate/utxos'],
      postBody: JSON.stringify({
        cbor: '84a500800180020009a1581c4dd621146cc23200ca53e23dce710abc2447c69d6818f30a43c73342a140011281825820ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00a1058184010000820000f5f6',
        additionalUtxoSet: [
          [
            {
              txId: 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
              index: 0,
            },
            {
              address: 'addr_test1vqqszqgpqyqszqgpqyqszqgpqyqszqgpqyqszqgpqyqszqgasfzjt',
              value: {
                coins: 3000000,
              },
              script: {
                'plutus:v3': '480101002324992601',
              },
            },
          ],
        ],
      }),
      headers: { 'Content-Type': 'application/json' },
      response: {
        type: 'jsonwsp/response',
        version: '1.0',
        servicename: 'ogmios',
        methodname: 'EvaluateTx',
        result: {
          EvaluationResult: {
            'mint:0': budgets.referenceScript,
          },
        },
        reflection: {
          id: expect.any(String),
        },
      },
    },
    // The transaction spends the synthetic script UTxO at all-ff#0.
    // The supplied UTxO contains inline datum 01, which encodes the integer 1.
    // The witness set contains a PlutusV2 script that returns unit and ignores its arguments.
    // This checks supplied-input resolution, inline-datum handling, and the spend:0 execution budget.
    {
      id: 'utils-txs-evaluate-utxos-inline-datum-supplied-u-tx-o_f9b2e7c14cae',
      testName: 'utils/txs/evaluate/utxos - inline datum supplied UTxO',
      endpoints: ['utils/txs/evaluate/utxos'],
      postBody: JSON.stringify({
        cbor: '84a30081825820ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0001800200a206814a49010000222324992601058184000000820000f5f6',
        additionalUtxoSet: [
          [
            {
              txId: 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
              index: 0,
            },
            {
              address: 'addr_test1wql5z3vh409n6694ga6yh3fcpwhgnnj6n6rdnrsu72q776gkxjpdv',
              value: {
                coins: 3000000,
              },
              datum: '01',
            },
          ],
        ],
      }),
      headers: { 'Content-Type': 'application/json' },
      response: {
        type: 'jsonwsp/response',
        version: '1.0',
        servicename: 'ogmios',
        methodname: 'EvaluateTx',
        result: {
          EvaluationResult: {
            'spend:0': budgets.inlineDatum,
          },
        },
        reflection: {
          id: expect.any(String),
        },
      },
    },
    // The transaction spends the synthetic script UTxO at all-ff#0.
    // The supplied UTxO contains the datum hash; the witness set contains datum 01, encoding integer 1.
    // The PlutusV2 spending script returns unit and ignores its arguments.
    // This checks datum-witness lookup by hash and the spend:0 execution budget.
    {
      id: 'utils-txs-evaluate-utxos-hash-datum-supplied-u-tx-o_f9b2e7c14cae',
      testName: 'utils/txs/evaluate/utxos - hash datum supplied UTxO',
      endpoints: ['utils/txs/evaluate/utxos'],
      postBody: JSON.stringify({
        cbor: '84a30081825820ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0001800200a306814a49010000222324992601058184000000820000048101f5f6',
        additionalUtxoSet: [
          [
            {
              txId: 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
              index: 0,
            },
            {
              address: 'addr_test1wql5z3vh409n6694ga6yh3fcpwhgnnj6n6rdnrsu72q776gkxjpdv',
              value: {
                coins: 3000000,
              },
              datumHash: 'ee155ace9c40292074cb6aff8c9ccdd273c81648ff1149ef36bcea6ebb8a3e25',
            },
          ],
        ],
      }),
      headers: { 'Content-Type': 'application/json' },
      response: {
        type: 'jsonwsp/response',
        version: '1.0',
        servicename: 'ogmios',
        methodname: 'EvaluateTx',
        result: {
          EvaluationResult: {
            'spend:0': budgets.datumHash,
          },
        },
        reflection: {
          id: expect.any(String),
        },
      },
    },
  ];
}
