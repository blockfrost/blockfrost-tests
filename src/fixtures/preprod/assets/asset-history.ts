import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'assets/00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae6e7574636f696e/history'
);

export default [
  ...paginationFixtures,
  {
    testName: 'assets/:asset/history - BF CIP68 NFT',
    endpoints: ['assets/fbbd966dcd5587510aa81863f53a1bb1d4ddd3d61cfa2041598e7fcd000de140426c6f636b66726f7374/history'],
    response: [
      {
        tx_hash: 'd714b17463879b3c861529d3d2f70a1b04158c36f7c60a6bcf7be5e173861313',
        action: 'minted',
        amount: '1',
      },
    ],
  },
  {
    testName: 'assets/:asset/history?queryparams - general asset',
    endpoints: [
      'assets/7ec46775633de62f167a4290cce196a3778971159df7bacd0067044754657374546f6b656e50726570726f64/history?count=1',
      'assets/7ec46775633de62f167a4290cce196a3778971159df7bacd0067044754657374546f6b656e50726570726f64/history?count=1&page=1',
    ],
    response: [
      {
        tx_hash: 'a1a98b98b571ce7b79ce3e639f766e76901d99ef7aabd7e01624f584b4f4b264',
        action: 'minted',
        amount: '10',
      },
    ],
  },
];
