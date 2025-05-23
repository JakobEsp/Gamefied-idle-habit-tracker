import { effort, frequency, IHabit } from "../models/habit"
import { IBaseFormValidationResponse } from "../models/responses"
import { deleteFetch, getFetch, postFetch } from "../utils"



export interface ICreateHabitParams {
    name: string
    effort: effort
    frequency: frequency
} 

export interface ICreateHabitResponse extends IBaseFormValidationResponse<ICreateHabitParams> {}

export interface IGetHabitsResponse {
    habits: IHabit[]
}

export interface ICompleteHabitParams {
    value: string
}

export async function postHabit(params: ICreateHabitParams){
    const response = await postFetch('/habits', params)
    const json = await response.json()
    return json as ICreateHabitResponse
}

export async function getHabits(){
    const response = await getFetch('/habits')
    const json = await response.json()
    return json as IGetHabitsResponse
}


export async function postComplete({ id, ...params }: { id: IHabit['id'] } & ICompleteHabitParams){
    const response = await postFetch(`/habits/${id}/complete`, params)
    return !!(response.status == 200)
}

export async function deleteHabit({id}: {id: IHabit['id']}){
    const response = await deleteFetch(`/habits/${id}`);
    return !!(response.status == 200)
}