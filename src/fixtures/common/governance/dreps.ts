import { expect } from 'vitest';
import { Got } from 'got';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DrepListItem = { amount: string; retired: boolean; expired: boolean } & Record<string, any>;

const expectDrepArray = (response: unknown): DrepListItem[] => {
  expect(Array.isArray(response)).toBe(true);

  return response as DrepListItem[];
};

const isSorted = (amounts: bigint[], direction: 'asc' | 'desc') =>
  amounts.every((amount, index) => {
    if (index === 0) return true;
    const previous = amounts[index - 1];

    return direction === 'asc' ? previous <= amount : previous >= amount;
  });

// Fetches the first two pages and asserts the concatenation is sorted. Spanning
// two pages ensures sorting is applied across the whole result set, not just
// within a single page.
const assertSortedAcrossPages = async (
  endpoint: string,
  client: Got,
  direction: 'asc' | 'desc',
) => {
  const [page1, page2] = await Promise.all([
    client.get(endpoint).json<DrepListItem[]>(),
    client.get(`${endpoint}&page=2`).json<DrepListItem[]>(),
  ]);

  expect(page1.length).toBeGreaterThan(0);

  const amounts = [...page1, ...page2].map(drep => BigInt(drep.amount));

  expect(isSorted(amounts, direction)).toBe(true);
};

export default [
  {
    id: 'governance-dreps-order-by-amount-desc_5d8f1c0a2b34',
    testName: 'governance/dreps order_by=amount (desc)',
    endpoints: ['governance/dreps?count=100&order_by=amount&order=desc'],
    customTest: async (endpoint: string, client: Got) =>
      assertSortedAcrossPages(endpoint, client, 'desc'),
  },
  {
    id: 'governance-dreps-order-by-amount-asc_9a1e7b4c6d20',
    testName: 'governance/dreps order_by=amount (asc)',
    endpoints: ['governance/dreps?count=100&order_by=amount&order=asc'],
    customTest: async (endpoint: string, client: Got) =>
      assertSortedAcrossPages(endpoint, client, 'asc'),
  },
  {
    id: 'governance-dreps-retired-true_3f6c2d9e8a17',
    testName: 'governance/dreps retired=true',
    endpoints: ['governance/dreps?count=100&retired=true'],
    customExpect: async (response: unknown) => {
      const dreps = expectDrepArray(response);

      expect(dreps.every(drep => drep.retired === true)).toBe(true);
    },
  },
  {
    id: 'governance-dreps-retired-false_71b0e4a5c2d9',
    testName: 'governance/dreps retired=false',
    endpoints: ['governance/dreps?count=100&retired=false'],
    customExpect: async (response: unknown) => {
      const dreps = expectDrepArray(response);

      expect(dreps.every(drep => drep.retired === false)).toBe(true);
    },
  },
  {
    id: 'governance-dreps-expired-true_2c8d5f1a9b46',
    testName: 'governance/dreps expired=true',
    endpoints: ['governance/dreps?count=100&expired=true'],
    customExpect: async (response: unknown) => {
      const dreps = expectDrepArray(response);

      expect(dreps.every(drep => drep.expired === true)).toBe(true);
    },
  },
  {
    id: 'governance-dreps-expired-false_8e3a1d7c4f02',
    testName: 'governance/dreps expired=false',
    endpoints: ['governance/dreps?count=100&expired=false'],
    customExpect: async (response: unknown) => {
      const dreps = expectDrepArray(response);

      expect(dreps.every(drep => drep.expired === false)).toBe(true);
    },
  },
  {
    id: 'governance-dreps-retired-false-expired-false_4a9f0b2e6c81',
    testName: 'governance/dreps retired=false&expired=false',
    endpoints: ['governance/dreps?count=100&retired=false&expired=false'],
    customExpect: async (response: unknown) => {
      const dreps = expectDrepArray(response);

      expect(dreps.every(drep => drep.retired === false && drep.expired === false)).toBe(true);
    },
  },
];
