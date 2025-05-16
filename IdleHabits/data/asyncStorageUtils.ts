import AsyncStorage from "@react-native-async-storage/async-storage";


export async function setTokenAsync(token: string){
    await AsyncStorage.setItem('token', token)
}

export  async function getTokenAsync(){
    return await AsyncStorage.getItem('token')
}