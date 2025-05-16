import { QueryClient, UndefinedInitialDataOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser, IGetUserResponse, postLogin } from "../api/authApi";
import { useState } from "react";
import { IQueryOptions } from "../models/queryOptions";


export default function useLoginMutation(){
    return useMutation({
        mutationFn: postLogin
    })
}


const GetUserQueryKey = ['user']
export function useGetUserQuery(options: IQueryOptions<IGetUserResponse>, queryClient?: QueryClient){
    return useQuery({
        queryKey: GetUserQueryKey,
        queryFn: getUser,
        ...options
    })
}
