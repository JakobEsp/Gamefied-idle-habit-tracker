import AsyncStorage from "@react-native-async-storage/async-storage"
import { createContext, Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from "react"
import { IUser } from "../data/models/user"
import useLoginMutation, { useGetUserQuery } from "../data/query/useAuth"
import { getTokenAsync, setTokenAsync } from "../data/asyncStorageUtils"

interface IAuthContext {

    isLoading: boolean
    setIsLoading: Dispatch<SetStateAction<IAuthContext['isLoading']>>
    user?: IUser
    setUser: Dispatch<SetStateAction<IAuthContext['user']>>
    logout: () => Promise<void>
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function createAuthContext(): IAuthContext{
    const {refetch} = useGetUserQuery({
        enabled: false
    });
    const [isLoading, setIsLoading] = useState<IAuthContext['isLoading']>(true)
    const [user, setUser] = useState<IUser>()

    useEffect(() => {
        async function checkLocalStorage(){
            const localToken = await getTokenAsync();
            if(localToken){
                await attemptGetUser()
            }
            setIsLoading(false)
        }
        checkLocalStorage()
    }, [])

    const attemptGetUser = useCallback(async () => {
        //get user, if success set user with response
        const response = await refetch()
        if(response.data?.user){
            setUser(response.data.user)
        }
    }, [])

    const logout = useCallback(async () => {
        setUser(undefined)
        setTokenAsync("")
    }, [user])

    const context = useMemo<IAuthContext>(() => ({
        isLoading,
        setIsLoading,
        user,
        setUser,
        logout
    }), [isLoading, setIsLoading, user, setUser, logout])

    return context;
}