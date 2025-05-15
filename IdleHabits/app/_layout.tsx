import { router, Stack } from "expo-router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { createContext, useEffect, useMemo, useState } from "react";
import { AuthContext, createAuthContext } from "../contexts/AuthContext";
import Text from "../components/Text";

if (__DEV__) {
  require("../ReactotronConfig");
}
const queryClient = new QueryClient()


export default function RootLayout() {
  const authContext = createAuthContext();

  useEffect(() => {
    console.log('authcontext changed')
    if(authContext.user)
      router.replace('/logged-in/home')
  }, [authContext])

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={authContext}>
        {authContext.isLoading ?
          <Text>loading..</Text>
          :
          <Stack screenOptions={{headerShown: false}} initialRouteName={'index'}/>
        }
      </AuthContext.Provider>
    </QueryClientProvider>
  )
}
