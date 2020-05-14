import { Dictionary, isUndefined, omitBy } from 'lodash';

export const filterUndefined = <T extends object>(object: T): Dictionary<T> => omitBy(object, isUndefined);
