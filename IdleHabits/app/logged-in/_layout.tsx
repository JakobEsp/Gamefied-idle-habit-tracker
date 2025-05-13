import { AntDesign, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
  <Tabs 
    screenOptions={{
      headerTitleAlign: 'center', 
      tabBarShowLabel: false,
      headerShown: false,
      tabBarActiveTintColor: "#121212",
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
