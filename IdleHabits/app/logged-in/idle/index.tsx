import { View, Text, FlatList } from "react-native";
import ItemCell, { ItemCellProps } from "../../../components/cells/ItemCell";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import IdleItemsView from "../../../views/idle/items";
import IdleUpgradesView from "../../../views/idle/upgrades";
  


export default function Idle() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Items" component={IdleItemsView} />
      <Tab.Screen name="Upgrades" component={IdleUpgradesView} />
    </Tab.Navigator>
  )
}
