import { convertToArray } from './convert-to-array.util';

describe('convertToArray', () => {
  it('should return empty array, if value is null', () => {
    const converted: any[] = convertToArray(null);
    expect(converted).toEqual([]);
  });

  it('should return empty array, if value is undefined', () => {
    const converted: any[] = convertToArray(undefined);
    expect(converted).toEqual([]);
  });

  it('should return array of value, if value is not array', () => {
    const converted: number[] = convertToArray<number>(1);
    expect(converted).toEqual([1]);
  });

  it('should return value, if value is array', () => {
    const converted: number[] = convertToArray<number>([1, 2]);
    expect(converted).toEqual([1, 2]);
  });
});
