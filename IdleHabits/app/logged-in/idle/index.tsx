import { View, Text, FlatList } from "react-native";
import ItemCell, { ItemCellProps } from "../../../components/cells/ItemCell";



export default function Idle() {


  const testData: ItemCellProps[] = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]

  return (
    <FlatList
      contentContainerStyle={{
        padding: 20,
        gap: 10
      }}
      data={testData}
      numColumns={2}
      columnWrapperStyle={{
         gap: 10,
      }}
      renderItem={item => <ItemCell {...item} />}
    />
  );
}
