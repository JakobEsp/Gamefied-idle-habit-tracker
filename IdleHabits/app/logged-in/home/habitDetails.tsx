import { View } from "react-native";
import TextInput from "../../../components/TextInput";
import Button from "../../../components/Button";
import containers from "../../../styles/containers";
import { useEffect, useState } from "react";
import EffortPicker from "../../../components/EffortPicker";
import { effort, frequency } from "../../../data/models/habit";
import { GetHabitsQueryKey, useCreateHabitMutation } from "../../../data/query/useHabits";
import { SegmentedButtons } from "react-native-paper";
import { useQueryClient } from "@tanstack/react-query";
import { router } from "expo-router";


export default function HabitDetails() {
    const queryClient = useQueryClient()
    const {mutateAsync: submit, data, isPending} = useCreateHabitMutation({
        onError:(error) => {
            console.log("error",error)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: GetHabitsQueryKey
            });
            router.back()            
        }
    });
    const [effort, setEffort] = useState<effort>(1)
    const [name, setName] = useState("");
    const [frequency, setFrequency] = useState<frequency>('daily')

    return (
        <View
            style={containers.container}
        >
            <TextInput
                label="name"
                value={name}
                onChangeText={text => setName(text)}
                errorText={data?.errors?.name}
            />
            <EffortPicker effort={effort} setEffort={effort => setEffort(effort)}/>
            <SegmentedButtons
                value={frequency}
                onValueChange={setFrequency}
                buttons={[{value: 'daily', label:'Daily'},{value: 'weekly', label:'Weekly'}]}
            />
            {/* Effort picker */}
            <Button onPress={() => submit({effort, name, frequency})} disabled={isPending}>Create</Button>
        </View>
    )
}