import { View } from "react-native";
import TextInput from "../../../components/TextInput";
import Button from "../../../components/Button";
import containers from "../../../styles/containers";
import { useEffect, useState } from "react";
import EffortPicker from "../../../components/EffortPicker";
import { effort } from "../../../data/models/habit";


export default function HabitDetails() {

    const [effort, setEffort] = useState<effort>(1)

    useEffect(() => {
        

    }, [])

    return (
        <View
            style={containers.container}
        >
            <TextInput
                label="name"
            />
            <EffortPicker effort={effort} setEffort={effort => setEffort(effort)}/>
            {/* Effort picker */}
            <Button>Create</Button>
        </View>
    )
}