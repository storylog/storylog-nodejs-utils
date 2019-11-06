import { filterUndefined } from './filter-undefined.util';

describe('filterUndefined', () => {
  it('should filter `undefined` values', () => {
    const actual = filterUndefined({ a: 1, b: undefined });
    expect(actual).toStrictEqual({ a: 1 });
  });

  it('should return same object', () => {
    const actual = filterUndefined({ a: 1, b: 2 });
    expect(actual).toStrictEqual({ a: 1, b: 2 });
  });

  it('should not filter `null` values', () => {
    const actual = filterUndefined({ a: null });
    expect(actual).toStrictEqual({ a: null });
  });
});
