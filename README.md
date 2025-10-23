<img src="https://blockfrost.io/images/logo.svg" width="250" align="right" height="90">

# Blockfrost Tests

## Environment Variables

```bash
# Blockfrost Project ID – get your API key at https://blockfrost.io/dashboard
PROJECT_ID=""

# Wallet mnemonic phrase (12- or 24-word seed) used to sign test transactions
SUBMIT_MNEMONIC=""

# Your backend URL, e.g. http://localhost:3000
SERVER_URL=""

# Target network: "mainnet", "preview", or "preprod"
NETWORK=""
```

> If present, the `.env` file will be automatically loaded (e.g. via `dotenv`).

## Running the tests

- **mainnet** – `yarn test:mainnet`
- **preview** – `yarn test:preview`
- **preprod** – `yarn test:preprod`

### Full command example

```bash
SERVER_URL=https://cardano-mainnet.blockfrost.io/api/v0 \
PROJECT_ID=mainnetLZgT76GL3subckxt9Y1G8nsouSCVwWtn \
SUBMIT_MNEMONIC="canyon february excess nominee tube alcohol client coach cruise antenna cabbage unusual" \
yarn test:preview
```

## Fixture example

```javascript
import { expect } from 'vitest';

export default [
  {
    testName:
      'blocks/slot/:slot_number and blocks/epoch/:epoch_number/slot/:slot_number – generic Shelley',
    endpoints: ['blocks/slot/16019999', 'blocks/epoch/234/slot/295199'],
    response: {
      time: 1607586290,
      height: 5058628,
      hash: '5d3df361b77ba7aff50a00ace1f00cec23126aa3b67af775dbf70c88c7e85ca4',
      slot: 16019999,
      epoch: 234,
      epoch_slot: 295199,
      slot_leader: 'pool1x0qm7xsyh2za3ltprxsgael544je4hg8tc3q3v5gv232z8jt4wp',
      size: 392,
      tx_count: 1,
      output: '6225908',
      fees: '173025',
      block_vrf: 'vrf_vk17hff333krucx82wjdhnwnfvusg8p4zn22lwmf2pmd2e5mghu52hqvpf8qj',
      previous_block: '7ee80a3c33b7ebb876671a936f57ec79f02a8b44a5132033c8860137e1c01c13',
      next_block: '94f96c20547b47e9668d5f42c88d0d3b92700c2614ec9bb3ad683bb0bba471f6',
      confirmations: expect.confirmations({ height: 5058628 }),
    },
  },
];
```

---

## Endpoint Allowlist Configuration

There is `endpoints-allowlist.json` file in the project root.
If this file is **empty**, **all** endpoints will be allowed by default.

```json
[
  "/accounts/{stake_address}",
  "/accounts/{stake_address}/rewards",
  "/accounts/{stake_address}/history",
  "/accounts/{stake_address}/delegations",
  "/accounts/{stake_address}/registrations",
  "/accounts/{stake_address}/withdrawals",
  "/accounts/{stake_address}/mirs",
  "/accounts/{stake_address}/addresses",
  "/accounts/{stake_address}/addresses/assets",
  "/accounts/{stake_address}/addresses/total",
  "/accounts/{stake_address}/utxos",
  "/accounts/{stake_address}/transactions",
  "/addresses/{address}",
  "/addresses/{address}/extended",
  "/addresses/{address}/total",
  "/addresses/{address}/txs",
  "/addresses/{address}/utxos",
  "/addresses/{address}/utxos/{asset}",
  "/addresses/{address}/transactions",
  "/assets",
  "/assets/{asset}",
  "/assets/{asset}/history",
  "/assets/{asset}/transactions",
  "/assets/{asset}/txs",
  "/assets/{asset}/addresses",
  "/assets/policy/{policy_id}",
  "/blocks/latest",
  "/blocks/latest/txs",
  "/blocks/{hash_or_number}",
  "/blocks/{hash_or_number}/addresses",
  "/blocks/{hash_or_number}/next",
  "/blocks/{hash_or_number}/previous",
  "/blocks/{hash_or_number}/txs",
  "/epochs/latest",
  "/epochs/latest/parameters",
  "/epochs/{number}",
  "/epochs/{number}/next",
  "/epochs/{number}/previous",
  "/epochs/{number}/stakes",
  "/epochs/{number}/stakes/{pool_id}",
  "/epochs/{number}/blocks",
  "/epochs/{number}/blocks/{pool_id}",
  "/epochs/{number}/parameters",
  "/health",
  "/health/clock",
  "/genesis",
  "/governance/dreps",
  "/governance/dreps/{drep_id}",
  "/governance/dreps/{drep_id}/delegators",
  "/governance/dreps/{drep_id}/metadata",
  "/governance/dreps/{drep_id}/updates",
  "/governance/dreps/{drep_id}/votes",
  "/governance/proposals",
  "/governance/proposals/{tx_hash}/{cert_index}",
  "/governance/proposals/{tx_hash}/{cert_index}/parameters",
  "/governance/proposals/{tx_hash}/{cert_index}/withdrawals",
  "/governance/proposals/{tx_hash}/{cert_index}/votes",
  "/governance/proposals/{tx_hash}/{cert_index}/metadata",
  "/metadata/txs/labels",
  "/metadata/txs/labels/{label}",
  "/metadata/txs/labels/{label}/cbor",
  "/network",
  "/network/eras",
  "/pools",
  "/pools/extended",
  "/pools/retired",
  "/pools/retiring",
  "/pools/{pool_id}",
  "/pools/{pool_id}/history",
  "/pools/{pool_id}/metadata",
  "/pools/{pool_id}/relays",
  "/pools/{pool_id}/delegators",
  "/pools/{pool_id}/blocks",
  "/pools/{pool_id}/updates",
  "/pools/{pool_id}/votes",
  "/tx/submit",
  "/scripts",
  "/scripts/{script_hash}",
  "/scripts/{script_hash}/json",
  "/scripts/{script_hash}/cbor",
  "/scripts/{script_hash}/redeemers",
  "/scripts/datum/{datum_hash}",
  "/scripts/datum/{datum_hash}/cbor",
  "/txs/{hash}",
  "/txs/{hash}/utxos",
  "/txs/{hash}/stakes",
  "/txs/{hash}/delegations",
  "/txs/{hash}/withdrawals",
  "/txs/{hash}/mirs",
  "/txs/{hash}/pool_updates",
  "/txs/{hash}/pool_retires",
  "/txs/{hash}/metadata",
  "/txs/{hash}/metadata/cbor",
  "/txs/{hash}/redeemers",
  "/txs/{hash}/required_signers",
  "/txs/{hash}/cbor",
  "/utils/tx/evaluate",
  "/utils/tx/evaluate/utxos",
  "/metrics"
]
```
