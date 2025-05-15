import { Link, router } from "expo-router";
import { View } from "react-native";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import useLoginMutation from "../data/query/useAuth";
import { useContext, useEffect, useState } from "react";
import * as Device from 'expo-device';
import Text from "../components/Text";
import { StackActions } from "@react-navigation/native";
import { AuthContext } from "../contexts/AuthContext";


export default function Index() {
  const {mutateAsync, data, isPending} = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log("data")
    console.log(data)
    if(data?.token && data.user){
      authContext.setToken(data.token)
      authContext.setUser(data.user)
    }
  }, [data])

  async function login(){
    console.log("tihi")
    mutateAsync({
      email,
      password,
      device_name: Device.modelName ?? "NoName"
    });
    // router.replace("/logged-in/home");
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
      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        />
      <Text >{data?.errors?.email}</Text>

      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        />
      <Text>{data?.errors?.password}</Text>
      <Link href="/register" >register</Link>
      <Button onPress={login} title="Login" disabled={isPending}/>
    </View>
  );
}
