import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { postLogin } from "../api/authApi";
import { useState } from "react";


export default function useLoginMutation(){
    return useMutation({
        mutationFn: postLogin
    })
}
