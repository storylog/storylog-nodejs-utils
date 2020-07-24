import { isUndefined, omitBy, PartialObject } from 'lodash';

export const filterUndefined = <T extends object>(object: T): PartialObject<T> => omitBy<T>(object, isUndefined);
