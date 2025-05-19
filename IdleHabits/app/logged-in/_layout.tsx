import { AntDesign, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import colors from "../../styles/colors";

export default function LoggedInLayout() {
  return (
  <Tabs 
    screenOptions={{
      headerTitleAlign: 'center', 
      tabBarShowLabel: false,
      headerShown: false,
      tabBarActiveTintColor: colors.black,
      animation: 'shift'
    }} 
    backBehavior="order"
  >
    <Tabs.Screen
      name="home"
      options={{
        title: "Home",
        tabBarIcon: ({ color }) => (
          <AntDesign name="book" size={24} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="idle"
      options={{
        title: "Idle",
        tabBarIcon: ({ color }) => (
          <SimpleLineIcons name="cup" size={24} color={color} />
        ),
      }}
      />
  </Tabs>
  );
}
