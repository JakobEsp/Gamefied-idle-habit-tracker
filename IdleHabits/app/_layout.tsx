import { Stack } from "expo-router";


if (__DEV__) {
  require("../ReactotronConfig");
}

export default function RootLayout() {
  //TODO: use 
  return <Stack screenOptions={{headerShown: false}}/>
}
