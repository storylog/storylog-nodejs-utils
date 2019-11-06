import { filterNil } from './filter-nil.util';

describe('filterNil', () => {
  it('should filter `null` values', () => {
    const actual = filterNil({ a: 1, b: null });
    expect(actual).toStrictEqual({ a: 1 });
  });

  it('should filter `undefined` values', () => {
    const actual = filterNil({ a: 1, b: undefined });
    expect(actual).toStrictEqual({ a: 1 });
  });

  it('should return same object', () => {
    const actual = filterNil({ a: 1, b: 2 });
    expect(actual).toStrictEqual({ a: 1, b: 2 });
  });
});
