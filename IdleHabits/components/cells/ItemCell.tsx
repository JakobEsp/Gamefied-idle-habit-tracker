import { StyleSheet, View } from "react-native";
import colors from "../../styles/colors";
import Text from "../Text";


export interface ItemCellProps {

}

export default function ItemCell(props: ItemCellProps) {

    return(
        <View
            style={styles.cell}
        >
            <View
                style={styles.image_cell}
            >
            </View>
            <Text
            
            >Fat fish</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cell:{
        flex: 1,
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 5,
        padding: 10,
    },
    image_cell:{
        aspectRatio: 1,
        borderWidth: 1,
        borderColor: colors.black
    }
})