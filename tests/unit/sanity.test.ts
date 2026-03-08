import { describe, it, expect } from 'vitest';
import { tubas } from '../../src/data';

describe('tuba data', () => {
  it('has entries with buy links', () => {
    expect(tubas.length).toBeGreaterThan(3);
    expect(tubas.every((t) => t.whereToBuy.length > 0)).toBe(true);
  });
});
