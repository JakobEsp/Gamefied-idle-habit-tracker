import { QueryClient, UndefinedInitialDataOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser, IGetUserResponse, ILoginParams, ILoginResponse, IRegisterParams, IRegisterResponse, postLogin, postRegister } from "../api/authApi";
import { useState } from "react";
import { IMutationOptions, IQueryOptions } from "../models/queryOptions";


export default function useLoginMutation(options?: IMutationOptions<ILoginResponse, ILoginParams>){
    return useMutation({
        mutationFn: postLogin,
        ...options
    })
}

export function useRegisterMutation(options?: IMutationOptions<IRegisterResponse, IRegisterParams>){
    return useMutation({
        mutationFn: postRegister,
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
