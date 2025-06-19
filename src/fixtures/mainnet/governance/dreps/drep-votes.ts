import { getPaginationFixtures } from '../../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'governance/dreps/drep14pjm8ytt682wkp4jcegdj2yerkcy9a20xevvp7udlcd0ggjxdud/votes'
);

export default [
  ...paginationFixtures,
  {
    testName: 'governance drep votes',

    endpoints: [
      'governance/dreps/drep14pjm8ytt682wkp4jcegdj2yerkcy9a20xevvp7udlcd0ggjxdud/votes?count=8',
      'governance/dreps/drep1y25xtvu3d0gaf6cxktr9pkfgnywmqsh4fum93s8m3hlp4aqj3uqdp/votes?count=8', //CIP129 id
    ],
    response: [
      {
        tx_hash: 'dfe4ead3170e0de0e14ad40d6e83571282c5d2d17b7243260e02f9882149937f',
        cert_index: 0,
        vote: 'no',
      },
      {
        tx_hash: 'ede02fea5e6165c14914090776088a0dfeca8ae0682070af8b224f5e8b3ac62e',
        cert_index: 0,
        vote: 'yes',
      },
      {
        cert_index: 0,
        tx_hash: '8c96c4a7d6a2bea8c787baa0109b71a0b13a3fde3d53141bc3160eed7904a8d7',
        vote: 'abstain',
      },
      {
        cert_index: 0,
        tx_hash: 'dae2e70b5504891d2a80b563a832491c296201dcbb715d1160061093f385518a',
        vote: 'yes',
      },
      {
        cert_index: 0,
        tx_hash: '33d759fc86c0f046a628badeababf7b13d6536e3482f1ed4696efda732986624',
        vote: 'yes',
      },
      {
        cert_index: 0,
        tx_hash: '23f0cd33df839ab449784e113b072418f7f143badf7ff7552b36d6d39c25823f',
        vote: 'yes',
      },
      {
        cert_index: 0,
        tx_hash: 'b60959c01edeaf6b51a3ee658108a61054232554d59a1c89253a971b2d9d9026',
        vote: 'no',
      },
      {
        cert_index: 0,
        tx_hash: '3aae396bd291bd2f86486bca6e72353444056641836981a164d770b1ff58cc2e',
        vote: 'no',
      },
    ],
  },
  {
    testName: 'governance drep_always_no_confidence votes',

    endpoints: ['governance/dreps/drep_always_no_confidence/votes'],
    response: [],
  },
  {
    testName: 'governance drep_always_abstain votes',

    endpoints: ['governance/dreps/drep_always_abstain/votes'],
    response: [],
  },
];
