import { QueryClient, UndefinedInitialDataOptions, useMutation, useQuery } from "@tanstack/react-query";
import { getHabits, ICompleteHabitParams, ICreateHabitParams, ICreateHabitResponse, IGetHabitsResponse, postComplete, postHabit } from "../api/habitApi";
import { IMutationOptions, IQueryOptions } from "../models/queryOptions";



export function useCreateHabitMutation(options?: IMutationOptions<ICreateHabitResponse, ICreateHabitParams>){
    return useMutation({
        mutationFn: postHabit,
        ...options
    })
}

const GetHabitsQueryKey = ['habits']
export function useGetHabitsQuery(options?: IQueryOptions<IGetHabitsResponse>){
    return useQuery({
        queryKey: GetHabitsQueryKey,
        queryFn: getHabits,
        ...options
    })
}
 
export function useCompleteHabitMutation(options?: IMutationOptions<boolean, ICompleteHabitParams>){
    return useMutation({
        mutationFn: postComplete,
        ...options
    })
}

