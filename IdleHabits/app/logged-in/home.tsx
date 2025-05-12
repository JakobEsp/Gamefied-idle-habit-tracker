import { FlatList, Text, View } from "react-native";
import HabitCell, { HabitCellProps } from "../../components/cells/HabitCell";


export default function Index() {

  const testData: HabitCellProps[] = [
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
        gap: 10,
      }}
      data={testData}
      renderItem={item => <HabitCell {...item} />}
      />
  );
}
