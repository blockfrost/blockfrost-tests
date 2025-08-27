export default [
  {
    id: 'accounts-stake-address-queryparams-generic-stake-address-rewards_656eac387ab9',
    testName: 'accounts/:stake_address?queryparams generic stake address rewards',

    endpoints: [
      'accounts/stake_test1uqhgtcy3p6fq4r3erflllxmmvw907vujg9gkzppcn3ja90c3zu3yy/rewards?count=3&page=2',
      'accounts/stake_test1uqhgtcy3p6fq4r3erflllxmmvw907vujg9gkzppcn3ja90c3zu3yy/rewards?count=3&page=2&order=asc',
    ],

    response: [
      {
        epoch: 34,
        amount: '1043061038',
        pool_id: 'pool1lgd9u8nshsh60asqszepfaalt2c5c5w6fvc85xne9st3g3fwtvm',
        type: 'leader',
      },
      {
        epoch: 35,
        amount: '1213320438',
        pool_id: 'pool1lgd9u8nshsh60asqszepfaalt2c5c5w6fvc85xne9st3g3fwtvm',
        type: 'leader',
      },
      {
        epoch: 36,
        amount: '961240233',
        pool_id: 'pool1lgd9u8nshsh60asqszepfaalt2c5c5w6fvc85xne9st3g3fwtvm',
        type: 'leader',
      },
    ],
  },
  {
    id: 'accounts-stake-address-queryparams-generic-stake-address-rewards-with-multiple-types_13a8d32b168d',

    testName:
      'accounts/:stake_address?queryparams generic stake address rewards with multiple types',

    endpoints: [
      'accounts/stake_test1uz55sf04mkd29tehvf4pu95vjhd6e72a50tcycje88jgcysxnh7d8/rewards?count=5&page=1',
      'accounts/stake_test1uz55sf04mkd29tehvf4pu95vjhd6e72a50tcycje88jgcysxnh7d8/rewards?count=5&page=1&order=asc',
    ],

    response: [
      {
        epoch: 39,
        amount: '366188272',
        pool_id: 'pool1kzfkwxsw2f68gk0pp4cc5r3sfejxgpnp9tcygtxqnm0lgnyv0ea',
        type: 'leader',
      },
      {
        epoch: 39,
        amount: '30469980',
        pool_id: 'pool1kzfkwxsw2f68gk0pp4cc5r3sfejxgpnp9tcygtxqnm0lgnyv0ea',
        type: 'member',
      },
      {
        epoch: 40,
        amount: '641449505',
        pool_id: 'pool1kzfkwxsw2f68gk0pp4cc5r3sfejxgpnp9tcygtxqnm0lgnyv0ea',
        type: 'leader',
      },
      {
        epoch: 41,
        amount: '597689112',
        pool_id: 'pool1kzfkwxsw2f68gk0pp4cc5r3sfejxgpnp9tcygtxqnm0lgnyv0ea',
        type: 'leader',
      },
      {
        epoch: 42,
        amount: '757519170',
        pool_id: 'pool1kzfkwxsw2f68gk0pp4cc5r3sfejxgpnp9tcygtxqnm0lgnyv0ea',
        type: 'leader',
      },
    ],
  },
  {
    id: 'accounts-stake-address-generic-empty-list_58380b5c192d',
    testName: 'accounts/:stake_address generic empty list',

    endpoints: [
      'accounts/stake_test1uprndrzzjwcacy4kzt9u9y2uh8zusqkak6glcphxay472fszzgeyu/rewards',
    ],

    response: [],
  },
];
