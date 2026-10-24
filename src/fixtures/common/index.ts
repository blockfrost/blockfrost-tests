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
import governanceDreps from './governance/dreps.js';
import accountsErrors from './accounts/_errors.js';
import addressesErrors from './addresses/_errors.js';
import assetsErrors from './assets/_errors.js';
import blocksErrors from './blocks/_errors.js';
import epochsErrors from './epochs/_errors.js';
import governanceErrors from './governance/_errors.js';
import metadataErrors from './metadata/_errors.js';
import poolsErrors from './pools/_errors.js';
import scriptsErrors from './scripts/_errors.js';
import txsErrors from './txs/_errors.js';
import utilsErrors from './utils/_errors.js';

export const commonFixtures = {
  health: [...healthRoot, ...healthClock],
  root: [...root],
  assets: [...assetUtxos, ...assetsErrors],
  swaps: [...swapsAsset],
  blocks: [...blocksLatest, ...blocksLatestTxs, ...blocksLatestTxsCbor, ...blocksErrors],
  epochs: [...epochsLatest, ...epochsErrors],
  utils: [...utilsTxsEvaluate, ...utilsTxsEvaluateUtxos, ...utilsErrors],
  governance: [...governanceDreps, ...governanceErrors],
  accounts: [...accountsErrors],
  addresses: [...addressesErrors],
  metadata: [...metadataErrors],
  pools: [...poolsErrors],
  scripts: [...scriptsErrors],
  txs: [...txsErrors],
};
