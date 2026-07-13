import { expect } from 'vitest';

export default [
  {
    id: 'network-test_2e08306ecd5d',
    testName: 'network test',
    endpoints: ['network'],
    response: {
      supply: {
        max: '45000000000000000',
        total: expect.toBeInRange('20902404169602261', '45000000000000000'),
        circulating: expect.toBeInRange('20017173912752741', '45000000000000000'),
        locked: expect.toBeInRange('48294280548343', '45000000000000000'),
        treasury: expect.toBeInRange('150694111896623', '45000000000000000'),
        reserves: expect.toBeInRange('817289797904362', '45000000000000000'),
      },
      stake: {
        live: expect.toBeInRange('2266233513522799', '45000000000000000'),
        active: expect.toBeInRange('2265453421756235', '45000000000000000'),
      },
    },
  },
];
