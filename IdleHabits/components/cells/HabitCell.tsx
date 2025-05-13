import { StyleSheet, View } from "react-native";
import colors from "../../styles/colors";
import Checkbox from 'expo-checkbox';
import { router } from "expo-router";


export interface HabitCellProps {

}

export default function HabitCell(props: HabitCellProps) {

return(
    <View
        style={styles.container}
    >  

        <View 
            style={styles.cell}
        >

        </View>
        
       <Checkbox
            style={styles.checkbox}
            value={false}
            onValueChange={() => router.navigate("/logged-in/home/completeHabit")}
            color={colors.black}
            disabled={false}
       />
    </View>
)
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "row",
        paddingHorizontal: 20,
        gap: 10,
        alignItems: "center",
    },
    cell: {
        flex: 1,
        height: 200,
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 5
    },
    checkbox: {
        borderWidth: 1,
        borderColor: colors.black,
        width: 30,
        height: 30,
        borderRadius: 5,
        backgroundColor: colors.white
    }
})