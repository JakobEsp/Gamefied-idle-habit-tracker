import { QueryClient, UndefinedInitialDataOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser, IGetUserResponse, ILoginParams, ILoginResponse, postLogin } from "../api/authApi";
import { useState } from "react";
import { IMutationOptions, IQueryOptions } from "../models/queryOptions";


export default function useLoginMutation(options: IMutationOptions<ILoginResponse, ILoginParams>){
    return useMutation({
        mutationFn: postLogin,
        ...options
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
