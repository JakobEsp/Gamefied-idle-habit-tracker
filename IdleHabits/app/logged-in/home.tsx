import { FlatList, Text, View } from "react-native";
import HabitCell, { HabitCellProps } from "../../components/cells/HabitCell";
import Button from "../../components/Button";
import colors from "../../styles/colors";


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
    <>
      <FlatList
      contentContainerStyle={{
        padding: 20,
        gap: 10,
        paddingBottom: 120,
      }}
      data={testData}
      renderItem={item => <HabitCell {...item} />}
      />
      <View
       style={{
        width: 100,
        position: "absolute",
        bottom: 0,
        right: 0,
        marginBottom: 20,
        justifyContent: "center",
       }}
      >
        <Button
        title="+"
        color={colors.white}
        ></Button>
      </View>
    </>
  );
}
