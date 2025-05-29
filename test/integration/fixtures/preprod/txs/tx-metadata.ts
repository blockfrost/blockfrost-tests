export default [
  {
    testName: 'txs/:tx - generic shelley with metadata',
    endpoints: ['txs/0acadcce0e878b088bb7b856db7da4ef1fcd4505a5008becc13208440b3a601f/metadata'],
    response: [
      {
        label: '6862',
        json_metadata: {
          pools: [
            {
              id: '8aa469088eaf5c38c3d4faf0d3516ca670cd6df5545fafea2f70258b',
              weight: 100,
            },
          ],
        },
      },
    ],
  },
];
