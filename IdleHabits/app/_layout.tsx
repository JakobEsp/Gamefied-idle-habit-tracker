import { router, Stack } from "expo-router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { createContext, useEffect, useMemo, useRef, useState } from "react";
import { AuthContext, createAuthContext } from "../contexts/AuthContext";
import Text from "../components/Text";
import { DefaultTheme, PaperProvider } from "react-native-paper";
import * as ScreenOrientation from 'expo-screen-orientation';
import { DeviceMotion, DeviceMotionOrientation } from 'expo-sensors';
import { ThemeProp } from "react-native-paper/lib/typescript/types";


if (__DEV__) {
  require("../ReactotronConfig");
}

const theme: ThemeProp = {
  ...DefaultTheme,
  animation: {
    scale: 2,
    defaultAnimationDuration: 2000
  }
}

const queryClient = new QueryClient()


export default function RootLayout() {

  DeviceMotion.setUpdateInterval(1000);
    DeviceMotion.addListener(async ok => {
      // console.log(ok.accelerationIncludingGravity)
      const {x, y, z} = ok.accelerationIncludingGravity;
      // const test = Math.round(y * 10) / 10;
      const xFloor = Math.floor(x)
      if(xFloor < 9 && xFloor > -9){
        // portrait
        // console.log('portait')
        if(y < 0){
          //normal
          // console.log('normal')
          await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
        }else{
           await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_DOWN)
          //turned around
        }
      }else {
        // console.log('landscape')
        if(x > y){
          //tiltet right
          await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT)
        }else{
          //tiltet left
          await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT)
        }

      }
    
    })

  ScreenOrientation.addOrientationChangeListener(orientatio => {
    console.log('orientation change')
    console.log(orientatio)
  })


  return (
      <QueryClientProvider client={queryClient} >
        <NavigationWithAuthContext/>
      </QueryClientProvider>
  )
}

// extracted because queryclient need to be mounted
function NavigationWithAuthContext(){
  const authContext = createAuthContext();
  const previousUser = useRef(authContext.user)

  useEffect(() => {
    console.log('authcontext changed')
    if(authContext.user && !previousUser.current) // this is ok for now, user just should not be refetched
    {
      previousUser.current = authContext.user
      router.replace('/logged-in/home')
    }else if(previousUser.current && !authContext.user){
      previousUser.current = authContext.user
      router.replace('/')
    }
  }, [authContext])
      
  return (
    <AuthContext.Provider value={authContext}>
      <PaperProvider theme={theme}>
      {authContext.isLoading ?
          <Text>loading..</Text>
        :
          <Stack screenOptions={{headerShown: false}}  initialRouteName={authContext.user ? 'logged-in' : 'index'}>
            <Stack.Screen name="register" options={{title: 'Register', presentation: 'formSheet'}}/>
          </Stack>
        }
      </PaperProvider>
    </AuthContext.Provider>
  )
}