import { assignWith, isPlainObject } from 'lodash';

function customizer(currentValue: any, targetValue: any): boolean {
  if (isPlainObject(currentValue)) {
    return assignWith({}, currentValue, targetValue, customizer);
  }
  return currentValue ?? targetValue;
}

export const defaults = <TObject extends object, TSource extends object>(
  object: TObject,
  source: TSource,
): TObject & TSource => {
  return assignWith({}, object, source, customizer);
};
