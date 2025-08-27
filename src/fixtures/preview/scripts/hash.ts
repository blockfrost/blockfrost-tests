export default [
  {
    id: 'scripts-hash-timelock_ec11bb6ad58c',
    testName: 'scripts/:hash - timelock',
    endpoints: ['scripts/6c969320597b755454ff3653ad09725d590c570827a129aeb4385526'],

    response: {
      script_hash: '6c969320597b755454ff3653ad09725d590c570827a129aeb4385526',
      type: 'timelock',
      serialised_size: null,
    },
  },
  {
    id: 'scripts-hash-plutus-v1_a6826acdedad',
    testName: 'scripts/:hash - PlutusV1',
    endpoints: ['scripts/c22560ac64be051102d6d1cfe5b9b82eb6af4f00dd3806e5cd82e837'],

    response: {
      script_hash: 'c22560ac64be051102d6d1cfe5b9b82eb6af4f00dd3806e5cd82e837',
      type: 'plutusV1',
      serialised_size: 5649,
    },
  },
  {
    id: 'scripts-hash-plutus-v2_1880f416b04e',
    testName: 'scripts/:hash - PlutusV2',
    endpoints: ['scripts/8d73f125395466f1d68570447e4f4b87cd633c6728f3802b2dcfca20'],

    response: {
      script_hash: '8d73f125395466f1d68570447e4f4b87cd633c6728f3802b2dcfca20',
      type: 'plutusV2',
      serialised_size: 5228,
    },
  },
];
