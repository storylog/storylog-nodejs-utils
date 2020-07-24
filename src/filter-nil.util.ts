import { isNil, omitBy, PartialObject } from 'lodash';

export const filterNil = <T extends object>(object: T): PartialObject<T> => omitBy<T>(object, isNil);
