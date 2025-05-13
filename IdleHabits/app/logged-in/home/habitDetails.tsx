import { View } from "react-native";
import CustomTextInput from "../../../components/TextInput";
import Button from "../../../components/Button";
import containers from "../../../styles/containers";


export default function HabitDetails() {

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