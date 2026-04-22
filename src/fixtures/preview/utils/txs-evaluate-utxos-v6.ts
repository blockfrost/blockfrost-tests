import { expect } from 'vitest';
import {
  SUCCESS_TX_V6,
  SUCCESS_CBOR_ONLY_TX_V6,
  UNKNOWN_TX_INPUT_V6,
} from './evaluate-utxos-inputs-v6.js';

export default [
  {
    id: 'utils-txs-evaluate-utxos-v6-success_d9a6b03c2e4f',
    testName: 'utils/txs/evaluate/utxos success (v6)',
    endpoints: ['utils/txs/evaluate/utxos?version=6'],
    ...SUCCESS_TX_V6,
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
    id: 'utils-txs-evaluate-utxos-v6-success-with-cbor-only-json_d9a6b03c2e4f',
    testName: 'utils/txs/evaluate/utxos success with cbor only (JSON) (v6)',
    endpoints: ['utils/txs/evaluate/utxos?version=6'],
    ...SUCCESS_CBOR_ONLY_TX_V6,
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
    id: 'utils-txs-evaluate-utxos-v6-error-unknown-transaction-input-missing-from-u-tx-o-set_d9a6b03c2e4f',
    testName:
      'utils/txs/evaluate/utxos - error Unknown transaction input (missing from UTxO set) (v6)',
    endpoints: ['utils/txs/evaluate/utxos?version=6'],
    ...UNKNOWN_TX_INPUT_V6,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    customExpect: async (response: any) => {
      if (response.error?.code === 3010) {
        // Script evaluation failure (expected)
        expect(response.error.data[0].error.data.reason).toBe(
          'Unknown transaction input (missing from UTxO set): 7d67d80bc5b3badcaf02375e428a39aea398dd0438f26899a1b265c6ac87eb6b#0',
        );
      } else {
        // testgen-hs Conway decoder cannot decode this tx (empty required_signers)
        expect(response.error?.code).toBe(-32602);
      }
    },
  },
];
