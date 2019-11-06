import { filterNull } from './filter-null.util';

describe('filterNull', () => {
  it('should filter `null` values', () => {
    const actual = filterNull({ a: 1, b: null });
    expect(actual).toStrictEqual({ a: 1 });
  });

  it('should return same object', () => {
    const actual = filterNull({ a: 1, b: 2 });
    expect(actual).toStrictEqual({ a: 1, b: 2 });
  });

  it('should not filter `undefined` values', () => {
    const actual = filterNull({ a: undefined });
    expect(actual).toStrictEqual({ a: undefined });
  });
});
