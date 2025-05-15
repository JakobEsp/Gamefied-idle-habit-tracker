import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser, postLogin } from "../api/authApi";
import { useState } from "react";


export default function useLoginMutation(){
    return useMutation({
        mutationFn: postLogin
    })
}



export function useGetUserQuery(){
    return useQuery({
        queryKey: ['user'],
        queryFn: getUser
    })
}
