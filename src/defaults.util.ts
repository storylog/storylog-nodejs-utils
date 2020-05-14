import { assignWith, isPlainObject } from 'lodash';

function customizer(currentValue: any, targetValue: any): boolean {
  return isPlainObject(currentValue)
    ? assignWith({}, currentValue, targetValue, customizer)
    : currentValue ?? targetValue;
}

export const defaults = <TObject extends object, TSource extends object>(
  object: TObject,
  source: TSource,
): TObject & TSource => assignWith({}, object, source, customizer);
