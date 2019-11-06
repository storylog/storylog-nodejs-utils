import { isUndefined, negate, pickBy } from 'lodash';

export const filterUndefined = <T extends object>(object: T): Partial<T> => {
  return pickBy(object, negate(isUndefined));
};
