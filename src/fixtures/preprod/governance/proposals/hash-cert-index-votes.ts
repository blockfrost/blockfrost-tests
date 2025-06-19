import { getPaginationFixtures } from '../../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'governance/proposals/aff2909f8175ee02a8c1bf96ff516685d25bf0c6b95aac91f4dfd53a5c0867cc/0/votes',
);

export default [
  ...paginationFixtures,
  {
    testName: 'governance proposal votes',

    endpoints: [
      'governance/proposals/aff2909f8175ee02a8c1bf96ff516685d25bf0c6b95aac91f4dfd53a5c0867cc/0/votes',
    ],
    response: [
      {
        tx_hash: 'e239058473ab5ab1f5829b9058a93cbd0daaf72f9252cc16b34925cd87b37d35',
        cert_index: 0,
        voter_role: 'drep',
        voter: 'drep1ydmraa6kv8cvmry059v608tehl50nfmg0z764lmsqkvwurs40sw2z',
        vote: 'yes',
      },
      {
        tx_hash: '45f18dec1784d3f98f8c5034fa138f5bfb70a89b0396154fc4d45fe5d3ee8957',
        cert_index: 0,
        voter_role: 'spo',
        voter: 'pool1yzwxetclm2l48xzvmnwwf6x48a5qze0nx4t6glz5k8wk50xl006',
        vote: 'no',
      },
      {
        tx_hash: '60eb71bb8841d32b60c7a91f06490da212de9ccb43fd7330a1e4b4673d1f6e8a',
        cert_index: 0,
        voter_role: 'spo',
        voter: 'pool1vw6fr9agt58djrp3w0t0lsn6t329t6eusqxz5ugd9w7ecyedsdv',
        vote: 'yes',
      },
      {
        tx_hash: 'e2eeaf57af3a400ad8e7a68e9b5bb650cd6e7b87db91144529a44d92d834e647',
        cert_index: 0,
        voter_role: 'spo',
        voter: 'pool1yzwxetclm2l48xzvmnwwf6x48a5qze0nx4t6glz5k8wk50xl006',
        vote: 'no',
      },
      {
        tx_hash: '48b7ab4a9c5f5d3c1f954c9e1a56dec3d48f1331c1bd8a61759bcc8e17efeb2a',
        cert_index: 0,
        voter_role: 'constitutional_committee',
        voter: 'e3a4c41d67592a1b8d87c62e5c5d73f7e8db836171945412d13f40f8',
        vote: 'yes',
      },
      {
        cert_index: 0,
        tx_hash: '278d887adc913416e6851106e7ce6e89f29aa7531b93d11e1986550e7a128a2f',
        vote: 'yes',
        voter: 'drep1ytk3r5ddfk2cq66ygdtkwf9yck6hhy7uzhk2tgl5d53448skyutw7',
        voter_role: 'drep',
      },
    ],
  },
];
