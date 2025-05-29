import healthRoot from './health/root.js';
import healthClock from './health/clock.js';
import root from './root/root.js';
import mempoolRoot from './mempool/root.js';
import metricsRoot from './metrics/root.js';
import metricsEndpoints from './metrics/endpoints.js';
import mempoolHash from './mempool/hash.js';
import mempoolAddressesAddress from './mempool/addresses/address.js';
import blocksLatest from './blocks/latest/root.js';
import blocksLatestTxs from './blocks/latest/txs/index.js';
import blocksLatestTxsCbor from './blocks/latest/txs/cbor.js';
import epochsLatest from './epochs/latest.js';
import address from './addresses/address.js';
import addressExtended from './addresses/address-extended.js';
import addressTotal from './addresses/address-total.js';
import addressTransactions from './addresses/address-transactions.js';
import addressTxs from './addresses/address-txs.js';
import addressUtxosAsset from './addresses/address-utxos-asset.js';
import addressUtxos from './addresses/address-utxos.js';
import utilsTxsEvaluate from './utils/txs-evaluate.js';
import utilsTxsEvaluateUtxos from './utils/txs-evaluate-utxos.js';
import poolsExtended from './pools/extended.js';

export const commonFixtures = {
  addresses: [
    ...address,
    ...addressExtended,
    ...addressTotal,
    ...addressTransactions,
    ...addressTxs,
    ...addressUtxosAsset,
    ...addressUtxos,
  ],
  health: [...healthRoot, ...healthClock],
  root: [...root],
  metrics: [...metricsRoot, ...metricsEndpoints],
  mempool: [...mempoolRoot, ...mempoolHash, ...mempoolAddressesAddress],
  blocks: [...blocksLatest, ...blocksLatestTxs, ...blocksLatestTxsCbor],
  epochs: [...epochsLatest],
  pools: [...poolsExtended],
  utils: [...utilsTxsEvaluate, ...utilsTxsEvaluateUtxos],
};
