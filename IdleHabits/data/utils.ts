import { useContext, useMemo } from "react"
import { AuthContext } from "../contexts/AuthContext"
import AsyncStorage from "@react-native-async-storage/async-storage"


async function getHeaders(){
    const token = await AsyncStorage.getItem('token')
    return { 
        Accept: "application/json", 
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` 
    }
}

export async function getFetch<T>(path: string){
    const apiUrl = process.env.EXPO_PUBLIC_API_BASE
    return fetch(apiUrl + path, {
        headers: await getHeaders(),
    })
}

export async function postFetch<T>(path: string, params: T){
    const apiUrl = process.env.EXPO_PUBLIC_API_BASE
    return fetch(apiUrl + path, {
        method: 'POST',
        headers: await getHeaders(),
        body: JSON.stringify(params)
    })
}
