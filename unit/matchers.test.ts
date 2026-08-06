import { describe, expect, it } from 'vitest';
import * as jestExtendedMatchers from 'jest-extended';

// matchers.ts builds drepListMetadata with expect.toBeOneOf at module scope,
// so jest-extended must be registered before the module is evaluated
// (same order as src/setup.ts).
expect.extend({ ...jestExtendedMatchers });

const { epochPoolStakeRows, epochStakeRows, toBeAdaQuantity, toBePoolBech32, toBeStakeAddress } =
  await import('../src/matchers.js');

expect.extend({ toBeAdaQuantity, toBePoolBech32, toBeStakeAddress });

describe('epochStakeRows / epochPoolStakeRows', () => {
  it('pins page length and row shape', () => {
    expect([{ stake_address: 'stake_test1xyz', pool_id: 'pool1abc', amount: '123' }]).toStrictEqual(
      epochStakeRows(1),
    );
    expect([{ stake_address: 'stake_test1xyz', amount: '123' }]).toStrictEqual(
      epochPoolStakeRows(1),
    );
    expect([{ stake_address: 'stake_test1xyz', amount: '123' }]).not.toStrictEqual(
      epochPoolStakeRows(2),
    );
  });

  it('rejects rows with unexpected values', () => {
    expect([{ stake_address: 'addr1xyz', amount: '123' }]).not.toStrictEqual(epochPoolStakeRows(1));
    expect([{ stake_address: 'stake_test1xyz', amount: 'xyz' }]).not.toStrictEqual(
      epochPoolStakeRows(1),
    );
  });
});

describe('toIncludeSameMembers as an asymmetric fixture response', () => {
  const rows = [
    { stake_address: 'stake_test1aaa', amount: '1' },
    { stake_address: 'stake_test1bbb', amount: '2' },
  ];

  it('accepts any permutation of the expected rows', () => {
    expect([rows[1], rows[0]]).toStrictEqual(expect.toIncludeSameMembers(rows));
  });

  it('rejects content and length mismatches', () => {
    expect([rows[0], { stake_address: 'stake_test1ccc', amount: '2' }]).not.toStrictEqual(
      expect.toIncludeSameMembers(rows),
    );
    expect([rows[0]]).not.toStrictEqual(expect.toIncludeSameMembers(rows));
    expect([...rows, rows[0]]).not.toStrictEqual(expect.toIncludeSameMembers(rows));
  });
});
