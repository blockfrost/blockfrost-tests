import {
  error_400_cc_id,
  error_400_drep_id,
  error_400_gov_action_id,
  error_400_integer_param,
  error_404,
} from '../../errors/index.js';

// Network-independent error paths of /governance/*.
export default [
  {
    id: 'governance-dreps-drep-id-malformed-drep-id_99b45b476f8a',
    testName: 'governance/dreps/:drep_id/* - malformed drep id',
    endpoints: [
      'governance/dreps/drep1kek',
      'governance/dreps/drep1kek/delegators',
      'governance/dreps/drep1kek/metadata',
      'governance/dreps/drep1kek/updates',
      'governance/dreps/drep1kek/votes',
      'governance/dreps/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2',
      'governance/dreps/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2/delegators',
      'governance/dreps/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2/metadata',
      'governance/dreps/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2/updates',
      'governance/dreps/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2/votes',
    ],
    response: error_400_drep_id,
  },
  {
    id: 'governance-dreps-drep-id-cip-129-id-with-a-committee-header_cc8661f9e644',
    testName: 'governance/dreps/:drep_id/* - CIP-129 id with a committee header',
    endpoints: [
      'governance/dreps/drep1q2cseuzhkyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4c0qlqm4',
      'governance/dreps/drep1q2cseuzhkyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4c0qlqm4/delegators',
      'governance/dreps/drep1q2cseuzhkyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4c0qlqm4/metadata',
      'governance/dreps/drep1q2cseuzhkyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4c0qlqm4/updates',
      'governance/dreps/drep1q2cseuzhkyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4c0qlqm4/votes',
    ],
    response: error_400_drep_id,
  },
  {
    id: 'governance-dreps-drep-id-metadata-drep-not-on-chain_11a407f05d1a',
    testName: 'governance/dreps/:drep_id{,/metadata} - drep not on-chain',
    endpoints: [
      'governance/dreps/drep1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wm4n5fs',
      'governance/dreps/drep1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wm4n5fs/metadata',
      'governance/dreps/drep1y2cseuzhkyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4caswqu4',
      'governance/dreps/drep1y2cseuzhkyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4caswqu4/metadata',
      'governance/dreps/drep_script1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9w5hwu43',
      'governance/dreps/drep_script1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9w5hwu43/metadata',
    ],
    response: error_404,
  },
  {
    id: 'governance-dreps-drep-id-delegators-updates-votes-drep-not-on-chain-returns-empty-list_173b7ae0b5b2',
    testName:
      'governance/dreps/:drep_id/{delegators,updates,votes} - drep not on-chain returns empty list',
    endpoints: [
      'governance/dreps/drep1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wm4n5fs/delegators',
      'governance/dreps/drep1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wm4n5fs/updates',
      'governance/dreps/drep1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wm4n5fs/votes',
      'governance/dreps/drep1y2cseuzhkyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4caswqu4/delegators',
      'governance/dreps/drep1y2cseuzhkyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4caswqu4/updates',
      'governance/dreps/drep1y2cseuzhkyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4caswqu4/votes',
    ],
    response: [],
  },
  {
    id: 'governance-proposals-gov-action-id-malformed-gov-action-id_cb7690bcb749',
    testName: 'governance/proposals/:gov_action_id/* - malformed gov action id',
    endpoints: [
      'governance/proposals/gov_action1kek',
      'governance/proposals/gov_action1kek/parameters',
      'governance/proposals/gov_action1kek/votes',
      'governance/proposals/gov_action1kek/metadata',
      'governance/proposals/gov_action1kyx0q4ccz72fg',
      'governance/proposals/gov_action1kyx0q4ccz72fg/parameters',
      'governance/proposals/gov_action1kyx0q4ccz72fg/votes',
      'governance/proposals/gov_action1kyx0q4ccz72fg/metadata',
      'governance/proposals/drep1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wm4n5fs',
      'governance/proposals/drep1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wm4n5fs/parameters',
      'governance/proposals/drep1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wm4n5fs/votes',
      'governance/proposals/drep1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wm4n5fs/metadata',
    ],
    response: error_400_gov_action_id,
  },
  {
    id: 'governance-proposals-gov-action-id-metadata-proposal-not-on-chain_3bd9bd21a7c7',
    testName: 'governance/proposals/:gov_action_id{,/metadata} - proposal not on-chain',
    endpoints: [
      'governance/proposals/gov_action1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc90vgv7ptsn4ggz4',
      'governance/proposals/gov_action1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc90vgv7ptsn4ggz4/metadata',
    ],
    response: error_404,
  },
  {
    id: 'governance-proposals-gov-action-id-votes-proposal-not-on-chain-returns-empty-list_82e5a0a212b1',
    testName:
      'governance/proposals/:gov_action_id/votes - proposal not on-chain returns empty list',
    endpoints: [
      'governance/proposals/gov_action1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc90vgv7ptsn4ggz4/votes',
    ],
    response: [],
  },
  {
    id: 'governance-proposals-tx-hash-cert-index-non-integer-cert-index_e391b697ed36',
    testName: 'governance/proposals/:tx_hash/:cert_index/* - non-integer cert_index',
    endpoints: [
      'governance/proposals/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/stonks',
      'governance/proposals/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/stonks/parameters',
      'governance/proposals/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/stonks/votes',
      'governance/proposals/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/stonks/metadata',
    ],
    response: error_400_integer_param('cert_index'),
  },
  {
    id: 'governance-proposals-tx-hash-cert-index-proposal-not-on-chain_846d1f0f9f7c',
    testName: 'governance/proposals/:tx_hash/:cert_index - proposal not on-chain',
    endpoints: [
      'governance/proposals/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/0',
    ],
    response: error_404,
  },
  {
    id: 'governance-proposals-tx-hash-cert-index-votes-proposal-not-on-chain-returns-empty-list_cb349b15f84e',
    testName:
      'governance/proposals/:tx_hash/:cert_index/votes - proposal not on-chain returns empty list',
    endpoints: [
      'governance/proposals/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057/0/votes',
    ],
    response: [],
  },
  {
    id: 'governance-committee-cc-id-votes-cc-hot-prefix-with-a-cold-key-header_eadba3ca849e',
    testName: 'governance/committee/:cc_id/votes - cc_hot prefix with a cold key header',
    endpoints: [
      'governance/committee/cc_hot1z2cseuzhkyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4cxvq2cc/votes',
    ],
    response: error_400_cc_id,
  },
  {
    id: 'governance-committee-cc-id-votes-committee-member-not-on-chain-returns-empty-list_f9853573ae6c',
    testName:
      'governance/committee/:cc_id/votes - committee member not on-chain returns empty list',
    endpoints: [
      'governance/committee/cc_hot1q2cseuzhkyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4c0yu20c/votes',
      'governance/committee/cc_cold1z2cseuzhkyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4cecgk43/votes',
    ],
    response: [],
  },
];
