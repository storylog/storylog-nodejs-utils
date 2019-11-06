import { defaults } from './defaults.util';

describe('defaults', () => {
  it('should assign source properties if missing on `object`', () => {
    const actual = defaults({ a: 1 }, { a: 2, b: 2 });
    expect(actual).toStrictEqual({ a: 1, b: 2 });
  });

  it('should overwrite `undefined` values', () => {
    const actual = defaults({ a: undefined }, { a: 1 });
    expect(actual).toStrictEqual({ a: 1 });
  });

  it('should overwrite `null` values', () => {
    const actual = defaults({ a: null }, { a: 1 });
    expect(actual).toStrictEqual({ a: 1 });
  });
});
