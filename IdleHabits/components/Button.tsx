import { ButtonProps, Button as NativeButton } from 'react-native';

// TODO build own using pressable or touchable instead for better styling
export default function Button(props: ButtonProps){

    return (
        <NativeButton
            {...props}
        />
    )
}