import { IBaseFormValidationResponse } from "../models/responses";
import { IUser } from "../models/user";
import { postFetch } from "../utils";


interface ILoginParams {
    email: string,
    password: string,
    device_name: string
}

interface  ILoginResponse extends IBaseFormValidationResponse<ILoginParams> {
    token: string
    user: IUser
}

export async function postLogin(params: ILoginParams){
    const apiUrl = process.env.EXPO_PUBLIC_API_BASE ?? "";
    const response = await postFetch(`${apiUrl}/user/login`, params)
    const json = await response.json();
    console.log(json)
    return json as ILoginResponse;
}

export async function postRegister(){
    return await fetch("");
}

export async function getUser(){

}