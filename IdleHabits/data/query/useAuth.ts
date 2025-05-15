import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { postLogin } from "../api/authApi";
import { useState } from "react";


export default function useLoginMutation(){
    const [mutation] = useState(
        useMutation({
        mutationFn: postLogin
    })
    )
    return mutation;
}
