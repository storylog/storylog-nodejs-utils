import { isNull, omitBy, PartialObject } from 'lodash';

export const filterNull = <T extends object>(object: T): PartialObject<T> => omitBy<T>(object, isNull);
