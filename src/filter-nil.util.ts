import { Dictionary, isNil, omitBy } from 'lodash';

export const filterNil = <T extends object>(object: T): Dictionary<T> => omitBy(object, isNil);
