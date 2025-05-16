import { TextInputProps, TextInput as NativeTextInput } from "react-native-paper";


export default function CustomTextInput(props: TextInputProps){

    return(
        <NativeTextInput
            {...props}
            style={{
                backgroundColor: "#e8e8e8",
                width: '100%'
            }}
        />
    )
}