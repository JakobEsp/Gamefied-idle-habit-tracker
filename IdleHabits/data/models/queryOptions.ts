import { UndefinedInitialDataOptions, UseMutationOptions } from "@tanstack/react-query";


export interface IQueryOptions<T> extends Omit<UndefinedInitialDataOptions<T, Error, T, string[]>, 'queryKey' | 'queryFn'> {}

export interface IMutationOptions<T, M> extends Omit<UseMutationOptions<T, Error, M, unknown>, 'mutationFn'> {}