import { Stack } from "expo-router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

if (__DEV__) {
  require("../ReactotronConfig");
}
const queryClient = new QueryClient()

export default function RootLayout() {
  //TODO: use 
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{headerShown: false}}/>
    </QueryClientProvider>
  )
}
