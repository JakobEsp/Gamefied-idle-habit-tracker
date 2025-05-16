import { StyleSheet, View } from "react-native";
import colors from "../../styles/colors";
import Checkbox from 'expo-checkbox';
import { router } from "expo-router";
import { IHabit } from "../../data/models/habit";
import { Card, IconButton } from "react-native-paper";
import { useCallback } from "react";
import { Feather } from "@expo/vector-icons";
import EffortPicker from "../EffortPicker";



export default function HabitCell(props: IHabit) {

const AvatarMaybe = useCallback(() => {
    return (
       <IconButton  icon="file-edit-outline" size={25} onPress={() => router.navigate("/logged-in/home/habitDetails")}/> 
    )
},[props.id])

return(
    <View
        style={styles.container}
    >  
        <View
            style={styles.cardContainer}
        >
            <Card
            mode="outlined"
            style={{
                width: '100%',
                height: '100%'
            }}
            >
                <IconButton  icon="file-edit-outline" size={25}
                    style={{position:'absolute', end:0, zIndex: 99}}
                    onPress={() => router.navigate("/logged-in/home/habitDetails")}
                /> 
                <Card.Title 
                    title={props.name}
                    // left={AvatarMaybe}
                    subtitle={"repeats: " + props.frequency}    
                />
                <Card.Content>
                    <EffortPicker effort={props.effort}/>
                </Card.Content>
            </Card>

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
    cardContainer: {
        flex: 1,
        height: 130,
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