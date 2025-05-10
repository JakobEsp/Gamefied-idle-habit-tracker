import { Button } from "@react-navigation/elements";
import { Link, router } from "expo-router";
import { Text, View } from "react-native";

if (__DEV__) {
  require("../ReactotronConfig");
}

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
      }}
    >
      <Button onPress={login}>Login</Button>
    </View>
  );
}
