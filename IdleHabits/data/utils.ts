import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

const headers: HeadersInit = { Accept: "application/json", "Content-Type": "application/json" }

export async function getFetch<T>(url: string, params: T){
    return fetch(url, {
        headers,
        body: JSON.stringify(params)
    })
}

export async function postFetch<T>(url: string, params: T){
    return fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(params)
    })
}