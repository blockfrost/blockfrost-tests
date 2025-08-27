export default [
  {
    id: 'txs-tx-metadata-cbor-generic-shelley-with-metadata-cbor_814e49f6bdd3',
    testName: 'txs/:tx/metadata/cbor - generic shelley with metadata cbor',

    endpoints: [
      'txs/27076b807853e8678c35bc668661021fed758a96899e715b6af746e0be849e92/metadata/cbor',
    ],

    response: [
      {
        label: '1',
        cbor_metadata:
          '\\xa101a178383931396538613139323261616137363462316436363430376336663632323434653737303831323135663338356236306136323039313439a1694861707079436f696ea265696d61676573697066733a2f2f58585858595959595a5a5a5a646e616d657354657374204e465420234861707079436f696e',
        metadata:
          'a101a178383931396538613139323261616137363462316436363430376336663632323434653737303831323135663338356236306136323039313439a1694861707079436f696ea265696d61676573697066733a2f2f58585858595959595a5a5a5a646e616d657354657374204e465420234861707079436f696e',
      },
    ],
  },
  {
    id: 'txs-tx-all-generic-shelley-with-no-data-blanks_b8b5078873b7',
    testName: 'txs/:tx/all - generic shelley with no data - blanks',

    endpoints: [
      'txs/d6f0e6c6d4d6ce4cb8ca0c72e10bf4cb1d95ca895a0c96b1997ad62afb3bcd09/withdrawals',
      'txs/d6f0e6c6d4d6ce4cb8ca0c72e10bf4cb1d95ca895a0c96b1997ad62afb3bcd09/mirs',
      'txs/d6f0e6c6d4d6ce4cb8ca0c72e10bf4cb1d95ca895a0c96b1997ad62afb3bcd09/stakes',
      'txs/d6f0e6c6d4d6ce4cb8ca0c72e10bf4cb1d95ca895a0c96b1997ad62afb3bcd09/delegations',
      'txs/d6f0e6c6d4d6ce4cb8ca0c72e10bf4cb1d95ca895a0c96b1997ad62afb3bcd09/pool_retires',
      'txs/d6f0e6c6d4d6ce4cb8ca0c72e10bf4cb1d95ca895a0c96b1997ad62afb3bcd09/pool_updates',
    ],

    response: [],
  },
];
