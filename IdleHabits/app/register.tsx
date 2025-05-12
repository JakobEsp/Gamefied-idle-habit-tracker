import { View, Text } from "react-native";
import TextInput from "../components/TextInput";
import { Link, router } from "expo-router";
import Button from "../components/Button";

export default function Register() {

    async function submit(){
        router.push("/logged-in/home");
    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 20,
                gap: 10,
            }}
        >
            <TextInput/>
            <TextInput/>
            <TextInput/>
            <TextInput/>
            <Button onPress={submit} title="Register" />
            
        </View>
    )
}