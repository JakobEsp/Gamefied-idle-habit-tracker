import { ButtonProps, Button as NativeButton } from 'react-native';

export default function Button(props: ButtonProps){

    return (
        <NativeButton
            {...props}
        />
    )
}