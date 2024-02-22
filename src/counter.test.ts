import { describe, expect, it } from 'vitest';

describe('__GLOBAL__', () => {
  it('should be undefined', () => {
    expect(__GLOBAL__).toBe(undefined);
  });
})
