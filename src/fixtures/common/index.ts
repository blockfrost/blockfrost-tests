import healthRoot from './health/root.js';
import healthClock from './health/clock.js';
import root from './root/root.js';
import blocksLatest from './blocks/latest/root.js';
import blocksLatestTxs from './blocks/latest/txs/index.js';
import blocksLatestTxsCbor from './blocks/latest/txs/cbor.js';
import epochsLatest from './epochs/latest.js';
import utilsTxsEvaluate from './utils/txs-evaluate.js';
import utilsTxsEvaluateUtxos from './utils/txs-evaluate-utxos.js';
import assetUtxos from './assets/asset-utxos.js';
import swapsAsset from './swaps/asset.js';

export const commonFixtures = {
  health: [...healthRoot, ...healthClock],
  root: [...root],
  assets: [...assetUtxos],
  swaps: [...swapsAsset],
  blocks: [...blocksLatest, ...blocksLatestTxs, ...blocksLatestTxsCbor],
  epochs: [...epochsLatest],
  utils: [...utilsTxsEvaluate, ...utilsTxsEvaluateUtxos],
};
