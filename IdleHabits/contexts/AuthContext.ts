import AsyncStorage from "@react-native-async-storage/async-storage"
import { createContext, Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from "react"
import { IUser } from "../data/models/user"
import useLoginMutation from "../data/query/useAuth"

interface IAuthContext {
    token?: string
    setToken: Dispatch<SetStateAction<IAuthContext['token']>>
    isLoading: boolean
    setIsLoading: Dispatch<SetStateAction<IAuthContext['isLoading']>>
    user?: IUser,
    setUser: Dispatch<SetStateAction<IAuthContext['user']>>
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function createAuthContext(): IAuthContext{
    
    const [isLoading, setIsLoading] = useState<IAuthContext['isLoading']>(true)
    const [token, setToken] = useState<IAuthContext['token']>();
    const [user, setUser] = useState<IUser>()

    useEffect(() => {
        async function checkLocalStorage(){
            const localToken = await AsyncStorage.getItem('token')
            if(localToken){
                console.log('found local token')
                setToken(localToken)
                await attemptLogin()
            }
            setIsLoading(false)
        }
        checkLocalStorage()
    }, [])

    const attemptLogin = useCallback(async () => {
        //get user, if success set user with resposne
    }, [])

    const context = useMemo<IAuthContext>(() => ({
        token,
        setToken,
        isLoading,
        setIsLoading,
        user,
        setUser
    }), [token, setToken, isLoading, setIsLoading, user, setUser])

    return context;
}