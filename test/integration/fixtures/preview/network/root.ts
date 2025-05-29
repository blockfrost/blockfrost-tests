import { expect } from 'vitest';

export default [
  {
    testName: 'network test',
    endpoints: ['network'],
    response: {
      supply: {
        max: '45000000000000000',
        total: expect.toBeInRange('20902404169602261', '45000000000000000'),
        circulating: expect.toBeInRange('20017173912752741', '45000000000000000'),
        locked: expect.toBeInRange('299823497167492', '45000000000000000'),
        treasury: expect.toBeInRange('3711983567389342', '45000000000000000'),
        reserves: expect.toBeInRange('817289797904362', '11235173082162498'),
      },
      stake: {
        live: expect.toBeInRange('285135860556274', '45000000000000000'),
        active: expect.toBeInRange('346053121167647', '45000000000000000'),
      },
    },
  },
];
