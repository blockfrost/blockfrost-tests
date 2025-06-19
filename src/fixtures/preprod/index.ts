import accountsStakeAddress from './accounts/stake-address.js';
import accountStakeAddressAddresses from './accounts/stake-address-addresses.js';
import accountsStakeAddressAddressesAssets from './accounts/stake-address-addresses-assets.js';
import accountsStakeAddressAddressesTotal from './accounts/stake-address-addresses-total.js';
import accountsStakeAddressDelegations from './accounts/stake-address-delegations.js';
import accountsStakeAddressHistory from './accounts/stake-address-history.js';
import accountsStakeAddressRegistrations from './accounts/stake-address-registrations.js';
import accountStakeAddressRewards from './accounts/stake-address-rewards.js';
import accountsStakeAddressUtxos from './accounts/stake-address-utxos.js';
import accountsStakeAddressWithdrawals from './accounts/stake-address-withdrawals.js';

import address from './addresses/address.js';
import addressExtended from './addresses/address-extended.js';
import addressTotal from './addresses/address-total.js';
import addressTransactions from './addresses/address-transactions.js';
import addressTxs from './addresses/address-txs.js';
import addressUtxos from './addresses/address-utxos.js';
import addressUtxosAsset from './addresses/address-utxos-asset.js';

import asset from './assets/asset.js';
import assetsAsset from './assets/asset.js';
import assetHistory from './assets/asset-history.js';
import assetPolicyPolicyId from './assets/asset-policy-policy-id.js';
import assetTransactions from './assets/asset-transactions.js';
import assetTxs from './assets/asset-txs.js';

import blocksOthers from './blocks/_others.js';
import blocksHashOrNumber from './blocks/hash-or-number.js';
import blocksHashOrNumberAddresses from './blocks/hash-or-number-addresses.js';
import blocksHashOrNumberNext from './blocks/hash-or-number-next.js';
import blocksHashOrNumberPrevious from './blocks/hash-or-number-previous.js';
import blocksHashOrNumberTxs from './blocks/hash-or-number-txs.js';
import blocksHashOrNumberTxsCbor from './blocks/hash-or-number-txs-cbor.js';
import blocksSlotNumber from './blocks/slot-slot-number.js';

import epochNumber from './epochs/number.js';
import epochNumberBlocks from './epochs/number-blocks.js';
import epochNumberBlocksPool from './epochs/number-blocks-pool.js';
import epochNumberNext from './epochs/number-next.js';
import epochsNumberParameters from './epochs/number-parameters.js';
import epochNumberPrevious from './epochs/number-previous.js';
import epochNumberStakes from './epochs/number-stakes.js';
import epochNumberStakePool from './epochs/number-stakes-pool.js';

import ledger from './ledger/root.js';

import metadataTxsLabels from './metadata/txs-labels.js';
import metadataTxsLabelsLabel from './metadata/txs-labels-label.js';
import metadataTxsLabelsLabelCbor from './metadata/txs-labels-label-cbor.js';

import networkRoot from './network/root.js';
import networkEras from './network/eras.js';

import poolsExtended from './pools/extended.js';
import poolsPoolId from './pools/pool-id.js';
import poolsPoolIdBlocks from './pools/pool-id-blocks.js';
import poolsPoolIdHistory from './pools/pool-id-history.js';
import poolsPoolIdMetadata from './pools/pool-id-metadata.js';
import poolsPoolIdRelays from './pools/pool-id-relays.js';
import poolsPoolIdUpdates from './pools/pool-id-updates.js';
import poolsRetired from './pools/retired.js';
import poolsRetiring from './pools/retiring.js';
import poolsRoot from './pools/root.js';
import poolsDelegators from './pools/delegators.js';

import scriptsRoot from './scripts/root.js';
import scriptsDatumHash from './scripts/datum-hash.js';
import scriptsDatumHashCbor from './scripts/datum-hash-cbor.js';
import scriptsHash from './scripts/hash.js';
import scriptsHashJson from './scripts/hash-json.js';
import scriptsHashCbor from './scripts/hash-cbor.js';
import scriptsHashRedeemers from './scripts/hash-redeemers.js';

import tsxMetadata from './txs/tx-metadata.js';
import txsTx from './txs/tx.js';
import txsDelegations from './txs/tx-delegations.js';
import txsMetadataCbor from './txs/tx-metadata-cbor.js';
import txUtxos from './txs/tx-utxos.js';
import txsPoolRetires from './txs/tx-pool-retires.js';
import txsPoolUpdates from './txs/tx-pool-updates.js';
import txStakes from './txs/tx-stakes.js';
import txRedeemers from './txs/tx-redeemers.js';
import txWithdrawals from './txs/tx-withdrawals.js';
import txSubmit from './tx/submit.js';
import txRequiredSigners from './txs/tx-required-signers.js';
import utilsTxsEvaluate from './utils/txs-evaluate.js';
import utilsTxsEvaluateUtxos from './utils/txs-evaluate-utxos.js';

import governanceDrep from './governance/dreps/drep.js';
import governanceDreps from './governance/dreps/index.js';
import governanceDrepDelegators from './governance/dreps/drep-metadata.js';
import governanceDrepMetadata from './governance/dreps/drep-delegators.js';
import governanceDrepUpdates from './governance/dreps/drep-updates.js';
import governanceDrepVotes from './governance/dreps/drep-votes.js';

import governanceProposals from './governance/proposals/index.js';
import governanceProposalsHashIndex from './governance/proposals/hash-cert-index.js';
import governanceProposalsHashIndexVotes from './governance/proposals/hash-cert-index-votes.js';
import governanceProposalsHashIndexMetadata from './governance/proposals/hash-cert-index-metadata.js';
import governanceProposalsHashIndexParameters from './governance/proposals/hash-cert-index-parameters.js';

export const preprodFixtures = {
  accounts: [
    ...accountsStakeAddress,
    ...accountStakeAddressAddresses,
    ...accountsStakeAddressAddressesAssets,
    ...accountsStakeAddressAddressesTotal,
    ...accountsStakeAddressDelegations,
    ...accountsStakeAddressHistory,
    ...accountsStakeAddressRegistrations,
    ...accountStakeAddressRewards,
    ...accountsStakeAddressUtxos,
    ...accountsStakeAddressWithdrawals,
  ],
  addresses: [
    ...address,
    ...addressExtended,
    ...addressTotal,
    ...addressTransactions,
    ...addressTxs,
    ...addressUtxosAsset,
    ...addressUtxos,
  ],
  assets: [
    ...asset,
    ...assetsAsset,
    ...assetHistory,
    ...assetPolicyPolicyId,
    ...assetTransactions,
    ...assetTxs,
  ],
  blocks: [
    ...blocksOthers,
    ...blocksHashOrNumber,
    ...blocksHashOrNumberTxs,
    ...blocksHashOrNumberAddresses,
    ...blocksHashOrNumberNext,
    ...blocksHashOrNumberPrevious,
    ...blocksSlotNumber,
    ...blocksHashOrNumberTxsCbor,
  ],
  epochs: [
    ...epochNumber,
    ...epochNumberBlocks,
    ...epochNumberBlocksPool,
    ...epochNumberStakes,
    ...epochNumberNext,
    ...epochNumberStakePool,
    ...epochsNumberParameters,
    ...epochNumberPrevious,
  ],
  governance: [
    ...governanceDrep,
    ...governanceDreps,
    ...governanceDrepDelegators,
    ...governanceDrepMetadata,
    ...governanceDrepUpdates,
    ...governanceDrepVotes,
    ...governanceProposals,
    ...governanceProposalsHashIndex,
    ...governanceProposalsHashIndexVotes,
    ...governanceProposalsHashIndexMetadata,
    ...governanceProposalsHashIndexParameters,
  ],
  network: [...networkRoot, ...networkEras],
  ledger: [...ledger],
  metadata: [...metadataTxsLabelsLabelCbor, ...metadataTxsLabelsLabel, ...metadataTxsLabels],
  pools: [
    ...poolsExtended,
    ...poolsPoolId,
    ...poolsPoolIdBlocks,
    ...poolsPoolIdHistory,
    ...poolsPoolIdMetadata,
    ...poolsPoolIdRelays,
    ...poolsPoolIdUpdates,
    ...poolsRetired,
    ...poolsRoot,
    ...poolsRetiring,
    ...poolsDelegators,
  ],
  scripts: [
    ...scriptsRoot,
    ...scriptsDatumHash,
    ...scriptsDatumHashCbor,
    ...scriptsHash,
    ...scriptsHashJson,
    ...scriptsHashCbor,
    ...scriptsHashRedeemers,
  ],
  tx: [...txSubmit],
  txs: [
    ...txsTx,
    ...txsDelegations,
    ...tsxMetadata,
    ...txsMetadataCbor,
    ...txsPoolRetires,
    ...txWithdrawals,
    ...txsPoolUpdates,
    ...txRequiredSigners,
    ...txStakes,
    ...txWithdrawals,
    ...txUtxos,
    ...txRedeemers,
  ],
  utils: [...utilsTxsEvaluate, ...utilsTxsEvaluateUtxos],
};
