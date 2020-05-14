import { Dictionary, isNull, omitBy } from 'lodash';

export const filterNull = <T extends object>(object: T): Dictionary<T> => omitBy(object, isNull);
