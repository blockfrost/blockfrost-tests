import { getPaginationFixtures } from '../../../index.js';

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
      'pool18xykgvvvxej2e5ap04ks72d8fdke4qsqeh30satznyrtj88634d',
      'pool1qqq6qqa0hpzvumv5p87ynczfmdj557xuwlc3289ke42g72z7f74',
      'pool1e556526sqwugxwnmeumt9lhj5jukklg8vv3ynk75xt9vs7adr5y',
      'pool124lm97s6f4satl7xz0ulzgg6tv30tskry3zcntwrz68n60v5yne',
      'pool1vx9tzlkgafernd9vpjpxkenutx2gncj4yn88fpq69823qlwcqrt',
    ],
  },
];
