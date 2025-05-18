import { StyleSheet, View } from "react-native";
import colors from "../../styles/colors";
import { router } from "expo-router";
import { IHabit } from "../../data/models/habit";
import { Card, Checkbox, IconButton, Menu } from "react-native-paper";
import { useCallback, useState } from "react";
import { Feather } from "@expo/vector-icons";
import EffortPicker from "../EffortPicker";
import { GetHabitsQueryKey, useCompleteHabitMutation, useDeleteHabitMutation } from "../../data/query/useHabits";
import { useQueryClient } from "@tanstack/react-query";



export default function HabitCell(props: IHabit) {
const queryClient = useQueryClient()
const {mutateAsync: completeApiCall} = useCompleteHabitMutation({
    onSuccess:() => {
    }
})
const {mutateAsync: deleteHabit} = useDeleteHabitMutation({
    onSuccess: () => {
        queryClient.invalidateQueries({
            queryKey: GetHabitsQueryKey
        })
    }
}) 
const [showMenu, setShowMenu] = useState(false)
const [completed, setCompleted] = useState(!!props.completed)

async function completeHabit(){
    setCompleted(true)
    completeApiCall({id: props.id, value: 'true'})
}

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

                <Card.Title 
                    title={props.name}
                    // left={AvatarMaybe}
                    subtitle={"repeats: " + props.frequency}    
                />
                <Card.Content>
                    <EffortPicker effort={props.effort}/>
                </Card.Content>

                <View 
                    style={{
                        position: 'absolute',
                        alignSelf:'flex-end'
                    }}
                >
                <Menu
                    visible={showMenu}
                    onDismiss={() => setShowMenu(false)}
                    anchorPosition="bottom"
                    anchor={
                        <IconButton
                            icon="file-edit-outline"
                            size={25}
                            onPress={() => setShowMenu(true)}
                        />
                    }
                >
                    <Menu.Item title="Delete" onPress={() => {deleteHabit({id: props.id})}} />
                </Menu>
                </View>

            </Card>

        </View>

        <Checkbox
            disabled={completed}
            status={completed ? 'checked':'unchecked'}
                onPress={() => completeHabit()}
        />
       {/* <Checkbox
            style={styles.checkbox}
            value={false}
            onValueChange={() => router.navigate("/logged-in/home/completeHabit")}
            color={colors.black}
            disabled={false}
       /> */}
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