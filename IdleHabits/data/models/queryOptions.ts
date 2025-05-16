import { UndefinedInitialDataOptions } from "@tanstack/react-query";


export interface IQueryOptions<T> extends Omit<UndefinedInitialDataOptions<T, Error, T, string[]>, 'queryKey' | 'queryFn'> {}