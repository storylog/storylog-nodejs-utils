import { isNil, negate, pickBy } from 'lodash';

export const filterNil = <T extends object>(object: T): Partial<T> => {
  return pickBy(object, negate(isNil));
};
