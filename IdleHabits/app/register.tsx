import { View, Text } from "react-native";
import TextInput from "../components/TextInput";
import { Link, router } from "expo-router";
import Button from "../components/Button";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { IRegisterParams } from "../data/api/authApi";
import { useRegisterMutation } from "../data/query/useAuth";
import { setTokenAsync } from "../data/asyncStorageUtils";

export default function Register() {
    const {mutateAsync: register, data, isPending} = useRegisterMutation()
    const authContext = useContext(AuthContext);
    const [form, setForm] = useState<IRegisterParams>({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    })

    useEffect(() => {
        async function handleData(){
          if(data?.token && data.user){
            await setTokenAsync(data.token)
            authContext.setUser(data.user)
          }
        }
        if(data)handleData();
      }, [data])

    async function submit(){
        register(form)
    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 20,
                gap: 10,
            }}
        >
            <TextInput label="Name" value={form.name} onChangeText={text => setForm(previous => ({...previous, name: text}))} errorText={data?.errors?.name}/>
            <TextInput label="Email" value={form.email} onChangeText={text => setForm(previous => ({...previous, email: text}))} errorText={data?.errors?.email} inputMode="email"/>
            <TextInput label="Password" value={form.password} onChangeText={text => setForm(previous => ({...previous, password: text}))} errorText={data?.errors?.password} secureTextEntry/>
            <TextInput label="Confirm Password" value={form.password_confirmation} onChangeText={text => setForm(previous => ({...previous, password_confirmation: text}))} errorText={data?.errors?.password_confirmation} secureTextEntry/>
            <Button onPress={submit} disabled={isPending}>Register</Button>
        </View>
    )   
}