export default [
  {
    testName: 'accounts/:stake_address generic dormant stake address with one address',
    endpoints: [
      'accounts/stake_test1uprndrzzjwcacy4kzt9u9y2uh8zusqkak6glcphxay472fszzgeyu/addresses',
    ],

    response: [
      {
        address:
          'addr_test1qrgemp9su54uxt4mjn8rgf3fuqy4w360f8mhl9pn5n86lyj8x6xy9ya3msftvyktc2g4eww9eqpdmd53lsrwd6ftu5nqt9vlzq',
      },
    ],
  },
  {
    testName: 'accounts/:stake_address generic stake address with zero addresses',
    endpoints: [
      'accounts/stake_test1uzkdwx64sjkt6xxtzye00y3k2m9wn5zultsguadaf4ggmssadyunp/addresses',
    ],

    response: [],
  },
];
