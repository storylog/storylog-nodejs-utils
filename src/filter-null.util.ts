import { isNull, negate, pickBy } from 'lodash';

export const filterNull = <T extends object>(object: T): Partial<T> => {
  return pickBy(object, negate(isNull));
};
