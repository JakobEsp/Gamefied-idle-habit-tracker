import { IBaseFormValidationResponse } from "../models/responses";
import { IUser } from "../models/user";
import { getFetch, postFetch } from "../utils";


export interface ILoginParams {
    email: string,
    password: string,
    device_name: string
}

export interface  ILoginResponse extends IBaseFormValidationResponse<ILoginParams> {
    token: string
    user: IUser
}

export interface IGetUserResponse extends Omit<ILoginResponse, 'token'> {}

export async function postLogin(params: ILoginParams){
    const response = await postFetch(`/user/login`, params)
    const json = await response.json();
    return json as ILoginResponse;
}

export async function postRegister(){
    return await fetch("");
}

export async function getUser(){
    const response = await getFetch('/user');
    const json = await response.json();
    console.log(json);
    return json as IGetUserResponse
}