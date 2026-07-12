import { getPaginationFixtures } from '../../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'governance/dreps/drep14pjm8ytt682wkp4jcegdj2yerkcy9a20xevvp7udlcd0ggjxdud/updates',
);

export default [
  ...paginationFixtures,
  {
    id: 'governance-drep-updates_1ea45021225f',
    testName: 'governance drep updates',
    endpoints: [
      'governance/dreps/drep14pjm8ytt682wkp4jcegdj2yerkcy9a20xevvp7udlcd0ggjxdud/updates',
      'governance/dreps/drep1y25xtvu3d0gaf6cxktr9pkfgnywmqsh4fum93s8m3hlp4aqj3uqdp/updates', // CIP129 id
    ],
    response: [
      {
        tx_hash: '8695cfc5cd1c22cef8eca9673c43894a699946facf48eae4b3cde0b5941bd7f5',
        cert_index: 0,
        action: 'registered',
        deposit: '500000000',
      },
      {
        tx_hash: '2256e05e697ae8a781bdb06e82df8ae246646e802f00f5343c78c1d933a4e6f2',
        cert_index: 0,
        action: 'updated',
        deposit: null,
      },
      {
        tx_hash: '452aaf6cda576fada5125dbe39cccff3549edbd6a4c4e6b6f1215470f66175ff',
        cert_index: 0,
        action: 'updated',
        deposit: null,
      },
      {
        tx_hash: '44a840a7a0fccdee11bdfef4c16349bd383227a2813ca39ae96c76abeb51b1b8',
        cert_index: 0,
        action: 'updated',
        deposit: null,
      },
      {
        tx_hash: 'bfed8bd041d35168d90e1492dcf2c3f1cab07a5d270b715eaab244790b4fd2d2',
        cert_index: 0,
        action: 'updated',
        deposit: null,
      },
      {
        tx_hash: '10a9d2e5f50f0bc80830b18c5d90afadfa7781510e368cb2302cab8b884c126e',
        cert_index: 0,
        action: 'updated',
        deposit: null,
      },
      {
        tx_hash: '4dd1be0ba6653a82f5b51222d4b6a28b43ceaf25ab735e2e6f7378b90419fc2b',
        cert_index: 0,
        action: 'updated',
        deposit: null,
      },
      {
        tx_hash: 'e8b9852ca4800f8602a5d511d1881ce2097504ee8b1c447aa1889b295e14c3b9',
        cert_index: 0,
        action: 'updated',
        deposit: null,
      },
      {
        tx_hash: '9fb513a037fa6b832be5edcea254503e9d0debf8ab454604edfb0fbaed4ea510',
        cert_index: 0,
        action: 'updated',
        deposit: null,
      },
      {
        tx_hash: '0c021290f28178156f6132e59666d2c6a2c83a60a70d61140383c12b5ef0a8ac',
        cert_index: 0,
        action: 'updated',
        deposit: null,
      },
    ],
  },
  {
    id: 'governance-drep-updates-deregistered-with-refund_8a3c1d49ee10',
    testName:
      'governance drep updates - drep with multiple deregistrations (deregistered deposit is null)',
    endpoints: [
      'governance/dreps/drep1wmjtmutl6xrjud6g9ycyn25nww2g8p4xw2qgrqyevpevuv3p4jf/updates?count=4&page=1&order=asc',
    ],
    response: [
      {
        tx_hash: '6f55899c2333014b0476187e005966e3405ab211590928b20748802e87ee87ae',
        cert_index: 0,
        action: 'registered',
        deposit: '500000000',
      },
      {
        tx_hash: 'bb599202c4c0b3e6027de7ad7c47873b69b476f6c86e98a0c9492c02156d0c2e',
        cert_index: 0,
        action: 'deregistered',
        deposit: null,
      },
      {
        tx_hash: 'cd0f3b9e07d53fdc1a6ceb7971a9b5967edf8168024fbf0ad836074aa71d1ea9',
        cert_index: 0,
        action: 'registered',
        deposit: '500000000',
      },
      {
        tx_hash: 'af28e2fc87d98bbc13c06f20eb4e7a7ec4d7058d61a33666620e9dd90c72d72b',
        cert_index: 0,
        action: 'updated',
        deposit: null,
      },
    ],
  },
  {
    id: 'governance-drep-always-abstain-updates_3c9c41e7ad17',
    testName: 'governance drep_always_abstain updates',
    endpoints: ['governance/dreps/drep_always_abstain/updates'],
    response: [],
  },
  {
    id: 'governance-drep-always-no-confidence-updates_8956a995552c',
    testName: 'governance drep_always_no_confidence updates',
    endpoints: ['governance/dreps/drep_always_no_confidence/updates'],
    response: [],
  },
];
