import { describe, expect, it } from 'vitest';
import { isUrlMatch } from '../src/index.js';

describe('isUrlMatch', () => {
  it('matches simple parameterized paths', () => {
    expect(isUrlMatch('accounts/stake_address', 'accounts/{stake_address}')).toBe(true);
    expect(isUrlMatch('accounts/stake_address', '/accounts/{stake_address}')).toBe(true);
    expect(isUrlMatch('/accounts/stake_address', '/accounts/{stake_address}')).toBe(true);
    expect(isUrlMatch('/assets/asset_id', '/assets/{asset}')).toBe(true);
  });

  it('ignores query parameters when matching', () => {
    expect(isUrlMatch('/accounts/stake_address?foo=bar', '/accounts/{stake_address}')).toBe(true);
    expect(isUrlMatch('/assets/asset_id?count=1&page=1', '/assets/{asset}')).toBe(true);
  });

  it('returns false for non‐matching paths', () => {
    expect(isUrlMatch('/accounts', '/accounts/{stake_address}')).toBe(false);
    expect(isUrlMatch('/blocks/1/txs', '/blocks/{hash_or_number}/previous')).toBe(false);
  });

  it('special cases pools retired/retiring to not match pool_id', () => {
    const pattern = '/pools/{pool_id}';

    expect(isUrlMatch('/pools/retired', pattern)).toBe(false);
    expect(isUrlMatch('/pools/retiring', pattern)).toBe(false);
  });

  it('handles completely unrelated URLs gracefully', () => {
    expect(isUrlMatch('/metrics', '/accounts/{stake_address}')).toBe(false);
    expect(isUrlMatch('metrics/endpoints', '/metrics')).toBe(false);
  });

  it('does not throw on malformed patterns', () => {
    expect(isUrlMatch('/foo', '/[invalid][')).toBe(false);
  });

  it('special cases pools extended to not match pool_id', () => {
    const pattern = '/pools/{pool_id}';

    expect(isUrlMatch('/pools/extended', pattern)).toBe(false);
  });

  it('special cases blocks latest to not match hash_or_number', () => {
    const pattern = '/blocks/{hash_or_number}';

    expect(isUrlMatch('/blocks/latest', pattern)).toBe(false);
  });

  it('special cases epochs latest to not match number', () => {
    const pattern = '/epochs/{number}';

    expect(isUrlMatch('/epochs/latest', pattern)).toBe(false);
  });

  it('still matches literal endpoints for blocks/epochs/pools', () => {
    expect(isUrlMatch('/blocks/latest', '/blocks/latest')).toBe(true);
    expect(isUrlMatch('/epochs/latest', '/epochs/latest')).toBe(true);
    expect(isUrlMatch('/pools/extended', '/pools/extended')).toBe(true);
    expect(isUrlMatch('/pools/retired', '/pools/retired')).toBe(true);
    expect(isUrlMatch('/pools/retiring', '/pools/retiring')).toBe(true);
  });
});
