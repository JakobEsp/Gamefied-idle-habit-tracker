import { router, Stack } from "expo-router";
import { useCallback, useContext, useState } from "react";
import { View } from "react-native";
import { IconButton, Menu } from "react-native-paper";
import { AuthContext } from "../../../contexts/AuthContext";

const headerLeft = useCallback(() => {
  const authContext = useContext(AuthContext)
  const [showMenu, setShowMenu] = useState(false)
    return (
      <View>
        <Menu
        visible={showMenu}
        onDismiss={() => setShowMenu(false)}
          anchor={
            <IconButton  icon="account" size={25} onPress={() => setShowMenu(true)}/> 
          }
          anchorPosition="bottom"
        >
          <Menu.Item title="Logout" onPress={authContext.logout}/>
        </Menu>
      </View>
    )
},[])

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen name="index" options={{title: 'Home', headerLeft}}/>
      <Stack.Screen name="habitDetails"  options={{title: 'Habit', presentation: 'formSheet'}}/>
    </Stack>
  );
}
