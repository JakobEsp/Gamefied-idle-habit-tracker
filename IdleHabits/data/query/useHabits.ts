import { QueryClient, UndefinedInitialDataOptions, useMutation, useQuery } from "@tanstack/react-query";
import { getHabits, IGetHabitsResponse } from "../api/habitApi";
import { IQueryOptions } from "../models/queryOptions";



export function useCreateHabitMutation(){
    return useMutation
}

const GetHabitsQueryKey = ['habits']
export function useGetHabitsQuery(options: IQueryOptions<IGetHabitsResponse>, queryClient?: QueryClient){
    return useQuery({
        queryKey: GetHabitsQueryKey,
        queryFn: getHabits,
        ...options
    })
}