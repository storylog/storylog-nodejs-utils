import { isArray, isNil } from 'lodash';

export const convertToArray = <T>(value: T | T[]): T[] => {
  if (isNil(value)) return [];
  return isArray(value) ? value : [value];
};
