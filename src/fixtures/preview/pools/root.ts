import { getPaginationFixtures } from '../../../utils.js';

const paginationFixtures = getPaginationFixtures('pools');

export default [
  ...paginationFixtures,
  {
    testName: 'pools?queryparams - we are not there yet',

    endpoints: ['pools?page=694269'],
    response: [],
  },
  {
    testName: 'pools?queryparams',

    endpoints: ['pools?count=5&page=3', 'pools?count=5&page=3&order=asc'],
    response: [
      'pool10c40pnzz3e00kuej05xfcs2ptkekhys48q7qc4jjcsysypj46qv',
      'pool1cv9fr477zeznqrk8uxa5hh72tsjukkuqtnet7wgyxx3rq700kl5',
      'pool1wwh3k3ldzujdvgxllfwlnnkxyheafkacqlufnvpr77n5q72f9hw',
      'pool1w75ukvh77hhz8c2u6rhfjvqlxyptwg37yrkddzatu99qxwwlqhd',
      'pool14rn9dq87dgj2z8g3lp4n0a78fewxff3gkgjkmz72ew44ym79xpp',
    ],
  },
];
