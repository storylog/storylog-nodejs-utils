import { assignWith, isNil } from 'lodash';

export const defaults = <TObject extends object, TSource extends object>(
  object: TObject,
  source: TSource,
): TObject & TSource => {
  return assignWith({}, object, source, (objValue, srcValue) => (isNil(objValue) ? srcValue : objValue));
};
