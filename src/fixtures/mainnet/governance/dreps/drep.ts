import { expect } from 'vitest';

export default [
  {
    testName: 'governance drep legacy drep id',

    endpoints: ['governance/dreps/drep1000002hneyj7jl9y95m0zxdsg6dp9n9y59lvlm7xjqp4qh2jx7h'],
    response: {
      drep_id: 'drep1000002hneyj7jl9y95m0zxdsg6dp9n9y59lvlm7xjqp4qh2jx7h',
      hex: '7bdef7aaf3c925e97ca42d36f119b0469a12cca4a17ecfefc6900350',
      amount: expect.toBeAdaQuantity(),
      active: true,
      active_epoch: 507,
      has_script: false,
      last_active_epoch: expect.toBeEpochNumber(),
      retired: false,
      expired: false,
    },
  },
  {
    testName:
      'governance drep cip129 drep id (same as legacy drep1000002hneyj7jl9y95m0zxdsg6dp9n9y59lvlm7xjqp4qh2jx7h)',

    endpoints: ['governance/dreps/drep1yfaaaaa270yjt6tu5skndugekprf5ykv5jshanl0c6gqx5qpstskf'],
    response: {
      drep_id: 'drep1yfaaaaa270yjt6tu5skndugekprf5ykv5jshanl0c6gqx5qpstskf',
      hex: '227bdef7aaf3c925e97ca42d36f119b0469a12cca4a17ecfefc6900350',
      amount: expect.toBeAdaQuantity(),
      active: true,
      active_epoch: 507,
      has_script: false,
      last_active_epoch: expect.toBeEpochNumber(),
      retired: false,
      expired: false,
    },
  },
  {
    testName: 'governance drep random scriptHash drep id',

    endpoints: ['governance/dreps/drep_script190xv8v32n43luhu9ag05s5mvcs6079lg4zghzyg3j9vlgle68y3'],
    response: {
      drep_id: 'drep190xv8v32n43luhu9ag05s5mvcs6079lg4zghzyg3j9vlgsm80cs',
      hex: '2bccc3b22a9d63fe5f85ea1f48536cc434ff17e8a8917111119159f4',
      amount: expect.toBeAdaQuantity(),
      active: true,
      active_epoch: 517,
      has_script: true,
      last_active_epoch: expect.toBeEpochNumber(),
      retired: false,
      expired: false,
    },
  },
  {
    testName:
      'governance drep cip129 scriptHash drep id (same as legacy drep_script190xv8v32n43luhu9ag05s5mvcs6079lg4zghzyg3j9vlgle68y3)',

    endpoints: ['governance/dreps/drep1yv4uesaj92wk8ljlsh4p7jzndnzrflchaz5fzug3zxg4naqkpeas3'],
    response: {
      drep_id: 'drep1yv4uesaj92wk8ljlsh4p7jzndnzrflchaz5fzug3zxg4naqkpeas3',
      hex: '232bccc3b22a9d63fe5f85ea1f48536cc434ff17e8a8917111119159f4',
      amount: expect.toBeAdaQuantity(),
      active: true,
      active_epoch: 517,
      has_script: true,
      last_active_epoch: expect.toBeEpochNumber(),
      retired: false,
      expired: false,
    },
  },
  {
    testName: 'governance drep some other random drep id',

    endpoints: ['governance/dreps/drep1zmymjy8xyzmxvxuz4mptxpam52exdq4chmwuqsesr2se57jz0v0'],
    response: {
      drep_id: 'drep1zmymjy8xyzmxvxuz4mptxpam52exdq4chmwuqsesr2se57jz0v0',
      hex: '16c9b910e620b6661b82aec2b307bba2b26682b8beddc043301aa19a',
      amount: expect.toBeAdaQuantity(),
      active: true,
      active_epoch: 507,
      has_script: false,
      last_active_epoch: expect.toBeEpochNumber(),
      retired: false,
      expired: false,
    },
  },
  {
    testName: 'governance drep with drep update after registration',

    endpoints: ['governance/dreps/drep16tsw66jtrver8ur3y3zzq2fl0m4swl4lwk88fvu8d4z4ydukrj0'],
    response: {
      drep_id: 'drep16tsw66jtrver8ur3y3zzq2fl0m4swl4lwk88fvu8d4z4ydukrj0',
      hex: 'd2e0ed6a4b1b3233f071244420293f7eeb077ebf758e74b3876d4552',
      amount: expect.toBeAdaQuantity(),
      active: true,
      active_epoch: 507,
      has_script: false,
      last_active_epoch: expect.toBeEpochNumber(),
      retired: false,
      expired: false,
    },
  },
  {
    testName: 'governance drep with multiple registrations and deregistrations (inactive)',

    endpoints: ['governance/dreps/drep1wmjtmutl6xrjud6g9ycyn25nww2g8p4xw2qgrqyevpevuv3p4jf'],
    response: {
      drep_id: 'drep1wmjtmutl6xrjud6g9ycyn25nww2g8p4xw2qgrqyevpevuv3p4jf',
      hex: '76e4bdf17fd1872e3748293049aa9373948386a672808180996072ce',
      amount: expect.toBeAdaQuantity(),
      active: false,
      active_epoch: null,
      has_script: false,
      last_active_epoch: 521,
      retired: true,
      expired: false,
    },
  },
  {
    testName: 'governance drep with multiple registrations and deregistrations (active)',

    endpoints: ['governance/dreps/drep1ygkfv2u7aazrfhqgh0qssramjd6av09rsh3ejd0rd95cmusezderl'],
    response: {
      drep_id: 'drep1ygkfv2u7aazrfhqgh0qssramjd6av09rsh3ejd0rd95cmusezderl',
      hex: '222c962b9eef4434dc08bbc1080fbb9375d63ca385e39935e369698df2',
      amount: expect.toBeAdaQuantity(),
      active: true,
      active_epoch: 507,
      has_script: false,
      last_active_epoch: expect.toBeEpochNumber(),
      retired: false,
      expired: false,
    },
  },
  {
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
