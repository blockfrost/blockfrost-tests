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
      'pool1l8ywwf6nfrfmrg6edj2qjh6rxpuepnzlsq9mhvjk9xr9swkht93',
      'pool132jxjzyw4awr3s75ltcdx5tv5ecv6m042306l630wqjckhfm32r',
      'pool1hghdaa7chn4hykkf9h0g0yqpz6j93gexvllz0w6p93y72saukmp',
      'pool1uhkxzvt9rj5s9emzr3uklwg2wdt7uky3aatgv9amhn2yz59laey',
      'pool144pedg8hc3lr660w30te9jqv5zllaesegh8vt3ptft5s7qu45re',
    ],
  },
];
