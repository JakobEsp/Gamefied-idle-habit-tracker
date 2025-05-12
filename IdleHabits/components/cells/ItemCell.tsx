import { StyleSheet, View } from "react-native";


export interface ItemCellProps {

}

export default function ItemCell(props: ItemCellProps) {

    return(
        <View
            style={styles.cell}
        >

        </View>
    )
}

const styles = StyleSheet.create({
    cell:{
        flex: 1,
        height: 200,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5
    }
})