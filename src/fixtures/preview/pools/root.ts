import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures('pools');

export default [
  ...paginationFixtures,
  {
    id: 'pools-queryparams-we-are-not-there-yet_5da7ab665f2b',
    testName: 'pools?queryparams - we are not there yet',
    endpoints: ['pools?page=694269'],
    response: [],
  },
  {
    id: 'pools-queryparams_cf8cccbd48e4',
    testName: 'pools?queryparams',
    endpoints: ['pools?count=5&page=3', 'pools?count=5&page=3&order=asc'],
    response: [
      'pool10c40pnzz3e00kuej05xfcs2ptkekhys48q7qc4jjcsysypj46qv',
      'pool1wwh3k3ldzujdvgxllfwlnnkxyheafkacqlufnvpr77n5q72f9hw',
      'pool1w75ukvh77hhz8c2u6rhfjvqlxyptwg37yrkddzatu99qxwwlqhd',
      'pool14rn9dq87dgj2z8g3lp4n0a78fewxff3gkgjkmz72ew44ym79xpp',
      'pool17wdfwsyksx7femcxzx7ycf84maqvdf3fmr7z92h2xguy7eanvdf',
    ],
  },
];
