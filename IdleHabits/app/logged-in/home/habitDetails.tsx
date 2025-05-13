import { View } from "react-native";
import CustomTextInput from "../../../components/TextInput";
import Button from "../../../components/Button";
import containers from "../../../styles/containers";
import { useEffect } from "react";


export default function HabitDetails() {

    useEffect(() => {
        

    }, [])

    return (
        <View
            style={containers.container}
        >
            <CustomTextInput
            
            />
            {/* Effort picker */}
            <Button title="Create"></Button>
        </View>
    )
}