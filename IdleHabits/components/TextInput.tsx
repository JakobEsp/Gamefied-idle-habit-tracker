import { TextInputProps, TextInput as NativeTextInput } from "react-native";


export default function CustomTextInput(props: TextInputProps){

    return(
        <NativeTextInput
            {...props}
            placeholder="Type here..."
            style={{
                padding: 10,
                backgroundColor: "#e8e8e8",
                width: '100%'
            }}
        />
    )
}