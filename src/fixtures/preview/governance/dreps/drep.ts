import { expect } from 'vitest';

export default [
  {
    id: 'governance-script-hash-drep_37653fa3de01',
    testName: 'governance scriptHash drep',
    endpoints: ['governance/dreps/drep1yvvxuvh64q9zdqgrjt76d42eclk5wgdxtnsun4808cwg0dquhj65s'],

    response: {
      drep_id: 'drep1yvvxuvh64q9zdqgrjt76d42eclk5wgdxtnsun4808cwg0dquhj65s',
      hex: '23186e32faa80a26810392fda6d559c7ed4721a65ce1c9d4ef3e1c87b4',
      amount: expect.toBeAdaQuantity(),
      active: true,
      active_epoch: 646,
      has_script: true,
      last_active_epoch: 646,
      retired: false,
      expired: true,
    },
  },
  {
    id: 'governance-drep-legacy-drep-id_4f14a4490542',
    testName: 'governance drep legacy drep id',
    endpoints: ['governance/dreps/drep1ss00kf225285yl96gyy850zwv9uq9m2agqz084gff9djgsf7rdy'],

    response: {
      drep_id: 'drep1ss00kf225285yl96gyy850zwv9uq9m2agqz084gff9djgsf7rdy',
      hex: '841efb254aa28f427cba41087a3c4e617802ed5d4004f3d509495b24',
      amount: expect.toBeAdaQuantity(),
      active: true,
      active_epoch: 680,
      has_script: false,
      last_active_epoch: 680,
      retired: false,
      expired: true,
    },
  },
  {
    id: 'governance-drep-cip129-drep-id_726f6660f7ab',
    testName: 'governance drep cip129 drep id',
    endpoints: ['governance/dreps/drep1y2zpa7e9f23g7snuhfqss73ufeshsqhdt4qqfu74p9y4kfqcpsxym'],

    response: {
      drep_id: 'drep1y2zpa7e9f23g7snuhfqss73ufeshsqhdt4qqfu74p9y4kfqcpsxym',
      hex: '22841efb254aa28f427cba41087a3c4e617802ed5d4004f3d509495b24',
      amount: expect.toBeAdaQuantity(),
      active: true,
      active_epoch: 680,
      has_script: false,
      last_active_epoch: 680,
      retired: false,
      expired: true,
    },
  },
  {
    id: 'governance-drep-some-other-random-drep-id_6a9980c69241',
    testName: 'governance drep some other random drep id',
    endpoints: ['governance/dreps/drep1lk47t6ngg76h2w3jknz8kkauzn8vh69vwqev4etgy22sylf2f6e'],

    response: {
      drep_id: 'drep1lk47t6ngg76h2w3jknz8kkauzn8vh69vwqev4etgy22sylf2f6e',
      hex: 'fdabe5ea6847b5753a32b4c47b5bbc14cecbe8ac7032cae568229502',
      amount: expect.toBeAdaQuantity(),
      active: true,
      active_epoch: 708,
      has_script: false,
      last_active_epoch: 725,
      retired: false,
      expired: true,
    },
  },
  {
    id: 'drep-drep-always-abstain_0ecd19881df8',
    testName: 'drep drep_always_abstain',
    endpoints: ['governance/dreps/drep_always_abstain'],

    response: {
      drep_id: 'drep_always_abstain',
      hex: '',
      amount: expect.toBeAdaQuantity(),
      active: true,
      active_epoch: null,
      has_script: false,
      last_active_epoch: null,
      retired: false,
      expired: false,
    },
  },
  {
    id: 'drep-drep-always-no-confidence_e2c640cd755e',
    testName: 'drep drep_always_no_confidence',
    endpoints: ['governance/dreps/drep_always_no_confidence'],

    response: {
      drep_id: 'drep_always_no_confidence',
      hex: '',
      amount: expect.toBeAdaQuantity(),
      active: true,
      active_epoch: null,
      has_script: false,
      last_active_epoch: null,
      retired: false,
      expired: false,
    },
  },
];
