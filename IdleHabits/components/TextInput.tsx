import { TextInputProps, TextInput as NativeTextInput, HelperText } from "react-native-paper";

interface ITextInputProps extends TextInputProps {
    errorText?: string
}

export default function CustomTextInput({errorText, ...props}: ITextInputProps ){

    return(
        <>
        <NativeTextInput
            {...props}
            style={{
                backgroundColor: "#e8e8e8",
                width: '100%'
            }}
            />
        {errorText && <HelperText type="error" visible={!!errorText}>
            {errorText}
        </HelperText>}
        </>
    )
}