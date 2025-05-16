import { View } from "react-native";
import { effort } from "../data/models/habit";
import { Icon, IconButton, Surface } from "react-native-paper";
import Text from "./Text";


export default function EffortPicker(props: {effort: effort, setEffort?: (effort: effort) => void}){

    function getText() {
        switch (props.effort) {
            case 1:
                return "+100";
            case 2:
                return "+300";
            case 3:
                return "+500";
            default:
                return "0";
        }
    }

    const IconOrButton = ({effort}:{effort: effort}) => {
        if(props.setEffort){
            return(
            <IconButton
                icon={props.effort >= effort ? "star" : "star-outline"}
                onPress={() => props.setEffort!(effort)}
            />
            )
        }else{
            return (
                <Icon
                    size={25}
                    source={props.effort >= effort ? "star" : "star-outline"}
                />
            )
        }
    }

    return(
        <View style={{flexDirection:'row', alignItems: 'center', gap:4}}>
            <IconOrButton effort={1}/>
            <IconOrButton effort={2}/>
            <IconOrButton effort={3}/>
           <Surface style={{padding:2, borderRadius: 5}}><Text>{getText()}</Text></Surface>
        </View>
    )
}