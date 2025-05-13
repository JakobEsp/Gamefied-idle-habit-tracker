import { StyleSheet, View } from "react-native";
import cells from "../../styles/cells";
import Text from "../Text";

export interface UpgradeCellProps {

}

export default function UpgradeCell(props: UpgradeCellProps) {

    return (
        <View style={styles.cell}>
            <View
                style={styles.image_cell}
            >
            </View>
            <View
                style={styles.info_cell}
            >
                <Text>1</Text>
                <Text>2</Text>
                <Text>3</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cell: {
        ...cells.base_cell,
        flexDirection: "row",
        height: 100,
        gap: 10,
    },
    image_cell:{
        ...cells.base_image_cell
    },
    info_cell:{
        flex: 1,
        justifyContent: "space-around",
        padding: 10,
    }
})