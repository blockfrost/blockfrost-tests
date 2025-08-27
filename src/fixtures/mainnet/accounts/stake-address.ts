import { expect } from 'vitest';
import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'accounts/stake1u9fzg77vrgfqlplkjqe9hntdcvsurpvxd60yp2fhn73002qsv9pdk/rewards',
);

export default [
  ...paginationFixtures,
  {
    id: 'accounts-stake-address-bf-account_03f2a20a12c5',
    testName: 'accounts/:stake_address - BF account',
    endpoints: ['accounts/stake1u9uz4j024qfud557ucrqw3kqfdndjgaxj7m44x7tamkvmyqzdwe7v'],
    response: {
      stake_address: 'stake1u9uz4j024qfud557ucrqw3kqfdndjgaxj7m44x7tamkvmyqzdwe7v',
      active: true,
      active_epoch: 385,
      controlled_amount: expect.toBeInRange('2879554', '4879554'),
      rewards_sum: expect.toBeGreaterThan('122187'),
      withdrawals_sum: '0',
      drep_id: null,
      reserves_sum: '0',
      treasury_sum: '0',
      withdrawable_amount: expect.toBeGreaterThan('122187'),
      pool_id: 'pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
    },
  },
  {
    id: 'accounts-stake-address-generic-stake-address-1-case_37b4c7d97926',
    testName: 'accounts/:stake_address generic stake address 1. case',
    endpoints: ['accounts/stake1u9fzg77vrgfqlplkjqe9hntdcvsurpvxd60yp2fhn73002qsv9pdk'],
    response: {
      stake_address: 'stake1u9fzg77vrgfqlplkjqe9hntdcvsurpvxd60yp2fhn73002qsv9pdk',
      active: expect.any(Boolean),
      drep_id: 'drep1yf2jzhuc4f7eu2yay9d9ta3dykxxcwn34wz8kak7nhd7vcgrxn7ns',
      active_epoch: expect.toBeOneOf([expect.toBeGreaterThan(223), null]),
      controlled_amount: expect.toBeGreaterThanOrEqual('0'),
      rewards_sum: expect.toBeGreaterThanOrEqual('0'),
      withdrawals_sum: expect.toBeGreaterThan('0'),
      reserves_sum: '0',
      treasury_sum: '0',
      withdrawable_amount: expect.toBeGreaterThanOrEqual('0'),
      pool_id: expect.toBeOneOf([expect.stringContaining('pool1'), null]),
    },
  },
  {
    id: 'accounts-stake-address-generic-stake-address-2-case_70dc64cab75f',
    testName: 'accounts/:stake_address generic stake address 2. case',
    endpoints: ['accounts/stake1u8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkgs46q0w'],
    response: {
      stake_address: 'stake1u8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkgs46q0w',
      active: expect.any(Boolean),
      active_epoch: expect.toBeOneOf([expect.toBeGreaterThan(223), null]),
      controlled_amount: expect.toBeGreaterThanOrEqual('0'),
      rewards_sum: expect.toBeGreaterThanOrEqual('0'),
      withdrawals_sum: expect.toBeGreaterThanOrEqual('0'),
      reserves_sum: '0',
      drep_id: null,
      treasury_sum: '0',
      withdrawable_amount: expect.toBeGreaterThanOrEqual('0'),
      pool_id: expect.toBeOneOf([expect.stringContaining('pool1'), null]),
    },
  },
  // https://github.com/input-output-hk/cardano-db-sync/issues/474
  /*
  stake1u8fne2lfh3a8v33y8splqc5gr5r8gjea2wvrsgch39emnvqny8wlm = (0) 2 pools, pool1g60m45m23f5vta30x5z7e0n2gc02yc4wyz6darfeluy2kgu65fa, pool1y9tz9enfcrcvpxpga3qspfxx3xclns2g74ptqxftdmgq6ghyrn0
  stake1uxzjdz34g596yt9dyprjse0yr775xszuyal3ltyqsx2k9wcjhvvke = (0) pool1av0amckqhv85qxctwg2hj4jcgdgfhpmvvw3c5evrkg9a76tr7jh
  stake1uyluup0rh6r2cc7kcw8nudqz990ezf5ltagxmw3u8deukvqwq7etq = (3.669389) pool1tz9k09jylmnk74z74v2t384smfypr7cwpzvs5sd2w537wu5jlrk
  stake1u80x0vdf8kwvptk7nar24d805p7wnlj4vm22cl0q8jngs9q5k2suq // 3 pools, two of them retired in the same epoch pool10ehxcuxmryvg5ae6g8krdvhaj3m07a6rzdtv8a0grtxpv7fnrpu, pool1qu4gywwxgdgep3t3pdgd92nclz9khr645dhn6fzyrmkuu4jk6th, pool1x6pcty09rx70ujg5lkxl7tdenamzh002y3uppkk0qczzcxyguyd
  */
  {
    id: 'accounts-stake-address-reward-account-for-deregistered-pool_cc669d56e243',
    testName: 'accounts/:stake_address reward account for deregistered pool ',
    endpoints: ['accounts/stake1uyluup0rh6r2cc7kcw8nudqz990ezf5ltagxmw3u8deukvqwq7etq'],
    response: {
      stake_address: 'stake1uyluup0rh6r2cc7kcw8nudqz990ezf5ltagxmw3u8deukvqwq7etq',
      active: true,
      active_epoch: 219,
      controlled_amount: '1848501',
      rewards_sum: '0',
      drep_id: null,
      withdrawals_sum: '1000000000',
      reserves_sum: '0',
      treasury_sum: '0',
      withdrawable_amount: '0',
      pool_id: 'pool1tz9k09jylmnk74z74v2t384smfypr7cwpzvs5sd2w537wu5jlrk',
    },
  },
  {
    id: 'accounts-stake-address-reward-account-for-2-pools-deregistered-pools_d70e88bd6001',
    testName: 'accounts/:stake_address reward account for 2 pools deregistered pools',
    endpoints: ['accounts/stake1u8fne2lfh3a8v33y8splqc5gr5r8gjea2wvrsgch39emnvqny8wlm'],
    response: {
      stake_address: 'stake1u8fne2lfh3a8v33y8splqc5gr5r8gjea2wvrsgch39emnvqny8wlm',
      active: true,
      active_epoch: 208,
      controlled_amount: '0',
      drep_id: null,
      rewards_sum: '0',
      withdrawals_sum: '1000000000',
      reserves_sum: '0',
      treasury_sum: '0',
      withdrawable_amount: '0',
      pool_id: 'pool1y9tz9enfcrcvpxpga3qspfxx3xclns2g74ptqxftdmgq6ghyrn0',
    },
  },
  {
    id: 'accounts-stake-address-reward-account-for-pool-deregistered-2-times_1f50bfd39b83',
    testName: 'accounts/:stake_address reward account for pool deregistered 2 times',
    endpoints: ['accounts/stake1uxzjdz34g596yt9dyprjse0yr775xszuyal3ltyqsx2k9wcjhvvke'],
    response: {
      stake_address: 'stake1uxzjdz34g596yt9dyprjse0yr775xszuyal3ltyqsx2k9wcjhvvke',
      active: true,
      active_epoch: 224,
      drep_id: null,
      controlled_amount: '0',
      rewards_sum: '0',
      withdrawals_sum: '1000000000',
      reserves_sum: '0',
      treasury_sum: '0',
      withdrawable_amount: '0',
      pool_id: 'pool1av0amckqhv85qxctwg2hj4jcgdgfhpmvvw3c5evrkg9a76tr7jh',
    },
  },
  {
    id: 'accounts-stake-address-reward-account-for-3-pools-2-of-them-retired-in-the-same-epoch_e8c34d1795f0',

    testName:
      'accounts/:stake_address reward account for 3 pools, 2 of them retired in the same epoch',

    endpoints: ['accounts/stake1u80x0vdf8kwvptk7nar24d805p7wnlj4vm22cl0q8jngs9q5k2suq'],

    response: {
      stake_address: 'stake1u80x0vdf8kwvptk7nar24d805p7wnlj4vm22cl0q8jngs9q5k2suq',
      active: true,
      active_epoch: 229,
      drep_id: null,
      controlled_amount: '0',
      rewards_sum: '0',
      withdrawals_sum: '1500000000',
      reserves_sum: '0',
      treasury_sum: '0',
      withdrawable_amount: '0',
      pool_id: 'pool10ehxcuxmryvg5ae6g8krdvhaj3m07a6rzdtv8a0grtxpv7fnrpu',
    },
  },
  // registered drep
  {
    id: 'accounts-stake-address-registered-drep_215421638ada',
    testName: 'accounts/:stake_address registered drep',
    endpoints: ['accounts/stake1ux3dy2p970cv2lsqvl4nqxwj7c878tgs6a6h9yekk3pr27g70l5g4'],
    response: {
      stake_address: 'stake1ux3dy2p970cv2lsqvl4nqxwj7c878tgs6a6h9yekk3pr27g70l5g4',
      active: false,
      active_epoch: 508,
      controlled_amount: expect.toBeAdaQuantity(),
      rewards_sum: '0',
      withdrawals_sum: '0',
      reserves_sum: '0',
      treasury_sum: '0',
      drep_id: 'drep1yf4r255tphufjz0g4vfh29aq4mz4udf4rsp5jy59yvd8s7qmejhpj',
      withdrawable_amount: expect.toBeAdaQuantity(),
      pool_id: null,
    },
  },
  {
    id: 'accounts-stake-address-huge-account_c72e1fc5be25',
    // This was a bug affecting lace, we've returned drep_id: null for all accounts
    testName: 'accounts/:stake_address huge account',
    endpoints: ['accounts/stake1uygt23qnfwel5y6vl65mlzwzjf6wvjflnp3k23fj6l4qwngdjy4yn'],
    response: {
      stake_address: 'stake1uygt23qnfwel5y6vl65mlzwzjf6wvjflnp3k23fj6l4qwngdjy4yn',
      active: true,
      active_epoch: 313,
      controlled_amount: expect.toBeAdaQuantity(),
      rewards_sum: expect.toBeAdaQuantity(),
      withdrawals_sum: expect.toBeAdaQuantity(),
      reserves_sum: '0',
      treasury_sum: '0',
      drep_id: expect.toBeDrepId(),
      withdrawable_amount: expect.toBeAdaQuantity(),
      pool_id: expect.toBePoolBech32(),
    },
  },
  {
    id: 'accounts-stake-address-registered-drep-legacy-drep-script_fbcfb1c63326',
    testName: 'accounts/:stake_address registered drep (legacy drep_script)',
    endpoints: ['accounts/stake1u9ng9m2wvcldpryt860hr29gflr3y9nh72k4k6h3dzu36pqprkt36'],
    response: {
      stake_address: 'stake1u9ng9m2wvcldpryt860hr29gflr3y9nh72k4k6h3dzu36pqprkt36',
      active: expect.any(Boolean),
      active_epoch: expect.toBeEpochNumber(),
      // not our account we are just testing the drep_id here
      controlled_amount: expect.any(String),
      // not our account we are just testing the drep_id here
      rewards_sum: expect.any(String),
      // not our account we are just testing the drep_id here
      withdrawals_sum: expect.any(String),
      reserves_sum: expect.any(String),
      treasury_sum: expect.any(String),
      drep_id: 'drep1yv4uesaj92wk8ljlsh4p7jzndnzrflchaz5fzug3zxg4naqkpeas3',
      // not our account we are just testing the drep_id here
      withdrawable_amount: expect.any(String),
      pool_id: expect.any(String),
    },
  },
  {
    id: 'accounts-stake-address-when-d-rep-is-retired-all-delegators-to-that-d-rep-should-have-their-drep-id-cleared_215421638ada',

    testName:
      'accounts/:stake_address when DRep is retired all delegators to that DRep should have their drep_id cleared.',

    endpoints: ['accounts/stake1ux3dy2p970cv2lsqvl4nqxwj7c878tgs6a6h9yekk3pr27g70l5g4'],

    response: {
      stake_address: 'stake1ux3dy2p970cv2lsqvl4nqxwj7c878tgs6a6h9yekk3pr27g70l5g4',
      active: false,
      active_epoch: 508,
      controlled_amount: expect.toBeAdaQuantity(),
      rewards_sum: expect.toBeAdaQuantity(),
      withdrawals_sum: expect.toBeAdaQuantity(),
      reserves_sum: '0',
      treasury_sum: '0',
      drep_id: null,
      withdrawable_amount: expect.toBeAdaQuantity(),
      pool_id: null,
    },
  },
];
