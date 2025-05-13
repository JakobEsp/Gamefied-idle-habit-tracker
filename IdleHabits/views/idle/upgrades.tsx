import { FlatList } from "react-native";
import ItemCell, { ItemCellProps } from "../../components/cells/ItemCell";
import UpgradeCell, { UpgradeCellProps } from "../../components/cells/UpgradeCell";



export default function IdleUpgradesView(){
  const testData: UpgradeCellProps[] = [
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
      renderItem={item => <UpgradeCell {...item} />}
    />
  );
}