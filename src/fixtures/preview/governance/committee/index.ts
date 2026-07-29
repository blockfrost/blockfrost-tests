import { expect } from 'vitest';

// Committee membership changes with every new committee gov action, so the
// snapshot only verifies the shape of the response and its members.
export default [
  {
    id: 'governance-committee-snapshot_c1a2b3d4e5f9',
    testName: 'governance/committee snapshot',
    endpoints: ['governance/committee'],
    response: {
      proposal_tx_hash: expect.toBeBlake2b256Hash(),
      proposal_index: expect.any(Number),
      gov_action_id: expect.stringMatching(/^gov_action1/),
      is_dissolved: expect.any(Boolean),
      quorum: { numerator: expect.any(Number), denominator: expect.any(Number) },
      members: expect.arrayContaining([
        {
          cc_cold_id: expect.stringMatching(/^cc_cold1/),
          cc_cold_hex: expect.stringMatching(/^[0-9a-f]{56}$/),
          cc_cold_has_script: expect.any(Boolean),
          cc_hot_id: expect.toBeOneOf([expect.stringMatching(/^cc_hot1/), null]),
          cc_hot_hex: expect.toBeOneOf([expect.stringMatching(/^[0-9a-f]{56}$/), null]),
          cc_hot_has_script: expect.toBeOneOf([expect.any(Boolean), null]),
          status: expect.toBeOneOf(['authorized', 'not_authorized', 'resigned']),
          expiration_epoch: expect.any(Number),
        },
      ]),
    },
  },
];
