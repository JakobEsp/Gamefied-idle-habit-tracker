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

  return (
    <QueryClientProvider client={queryClient} >
      <NavigationWithAuthContext/>
    </QueryClientProvider>
  )
}

// extracted because queryclient need to be mounted
function NavigationWithAuthContext(){
  const authContext = createAuthContext();

  // useEffect(() => {
  //   console.log('authcontext changed')
  //   if(authContext.user) // this is ok for now, user just should not be refetched
  //     router.replace('/logged-in/home')
  // }, [authContext])
      
  return (
    <AuthContext.Provider value={authContext}>
      {authContext.isLoading ?
        <Text>loading..</Text>
        :
        <Stack screenOptions={{headerShown: false}} initialRouteName={authContext.user ? 'logged-in' : 'index'}/>
      }
    </AuthContext.Provider>
  )
}