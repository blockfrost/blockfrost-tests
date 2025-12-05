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

  it('handles trailing slashes consistently', () => {
    expect(isUrlMatch('/accounts/stake_address/', '/accounts/{stake_address}')).toBe(true);
    expect(isUrlMatch('/accounts/stake_address', '/accounts/{stake_address}/')).toBe(true);
    expect(isUrlMatch('/accounts/stake_address/', '/accounts/{stake_address}/')).toBe(true);
  });

  it('matches paths with special characters in parameter values', () => {
    expect(isUrlMatch('/assets/asset.id-123', '/assets/{asset}')).toBe(true);
    expect(isUrlMatch('/accounts/stake1_test+special', '/accounts/{stake_address}')).toBe(true);
    expect(isUrlMatch('/txs/hash%20encoded', '/txs/{hash}')).toBe(true);
  });

  it('matches paths with numeric parameter values', () => {
    expect(isUrlMatch('/epochs/123', '/epochs/{number}')).toBe(true);
    expect(isUrlMatch('/blocks/9999999', '/blocks/{hash_or_number}')).toBe(true);
  });

  it('returns false when segment count differs', () => {
    expect(isUrlMatch('/accounts', '/accounts/{stake_address}/transactions')).toBe(false);
    expect(isUrlMatch('/accounts/stake/transactions/hash', '/accounts/{stake_address}')).toBe(
      false,
    );

    expect(isUrlMatch('/a/b/c', '/a/{param}')).toBe(false);
  });

  it('matches exact paths without parameters', () => {
    expect(isUrlMatch('/metrics', '/metrics')).toBe(true);
    expect(isUrlMatch('/health', '/health')).toBe(true);
    expect(isUrlMatch('epochs/123', 'epochs/123')).toBe(true);
  });

  it('handles query parameters with special characters', () => {
    expect(isUrlMatch('/accounts/stake?order=asc&count=10', '/accounts/{stake_address}')).toBe(
      true,
    );
    expect(isUrlMatch('/assets/asset?filter=policy_id:abc123', '/assets/{asset}')).toBe(true);
  });

  it('does not match when literal segments differ', () => {
    expect(isUrlMatch('/accounts/stake', '/account/{stake_address}')).toBe(false);
    expect(isUrlMatch('/blocks/123', '/block/{hash_or_number}')).toBe(false);
  });

  it('matches paths with hash fragments (should ignore them)', () => {
    expect(isUrlMatch('/accounts/stake#fragment', '/accounts/{stake_address}')).toBe(true);
    expect(isUrlMatch('/blocks/123#section', '/blocks/{hash_or_number}')).toBe(true);
  });

  it('returns false for empty strings', () => {
    expect(isUrlMatch('', '/accounts/{stake_address}')).toBe(false);
    expect(isUrlMatch('/accounts/stake', '')).toBe(false);
    expect(isUrlMatch('', '')).toBe(true);
  });

  it('handles URL-encoded parameter values', () => {
    expect(isUrlMatch('/assets/asset%2Fid', '/assets/{asset}')).toBe(true);
    expect(isUrlMatch('/accounts/stake%20address', '/accounts/{stake_address}')).toBe(true);
  });

  it('special case combinations do not interfere with each other', () => {
    expect(isUrlMatch('/pools/retired', '/pools/{pool_id}')).toBe(false);
    expect(isUrlMatch('/blocks/latest', '/blocks/{hash_or_number}')).toBe(false);
    expect(isUrlMatch('/epochs/latest', '/epochs/{number}')).toBe(false);
    expect(isUrlMatch('/pools/pool123', '/pools/{pool_id}')).toBe(true);
    expect(isUrlMatch('/blocks/abc123', '/blocks/{hash_or_number}')).toBe(true);
    expect(isUrlMatch('/epochs/5', '/epochs/{number}')).toBe(true);
  });

  it('matches when both path and pattern have no leading slash', () => {
    expect(isUrlMatch('accounts/stake', 'accounts/{stake_address}')).toBe(true);
    expect(isUrlMatch('blocks/123', 'blocks/{hash_or_number}')).toBe(true);
  });
});
