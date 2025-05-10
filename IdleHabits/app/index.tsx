import { Link, router } from "expo-router";
import { View, Button } from "react-native";
import TextInput from "../components/TextInput";


export default function Index() {

  async function login(){
    router.replace("/logged-in/home");
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
      <TextInput/>
      <TextInput/>
      <Link href="/register" >register</Link>
      <Button onPress={login} title="Login" />
    </View>
  );
}
