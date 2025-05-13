import { StyleSheet } from "react-native";
import colors from "./colors";



const cells = StyleSheet.create({
    base_cell:{
        flex: 1,
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 5,
        padding: 10,
    },
    base_image_cell:{
        aspectRatio: 1,
        borderWidth: 1,
        borderColor: colors.black
    }
})

export default cells;