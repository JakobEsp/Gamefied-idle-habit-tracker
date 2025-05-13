import { Stack } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";



export default function RootLayout(){
    const insets = useSafeAreaInsets();
    return (
        <Stack screenOptions={{headerShown: false, contentStyle: {paddingTop: insets.top}}}>
            <Stack.Screen name="index" options={{title: "It's time to play the game"}}/>
        </Stack>
    )
}