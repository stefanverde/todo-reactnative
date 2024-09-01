import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { clearTasks, taskAdded } from "../redux/slices/tasksSlice";
import {useNavigation} from '@react-navigation/native';

const GeneralButton = ({name, value, onClick}) => {
    const navigator = useNavigation();
    const dispatch = useDispatch();
    const functionalities = () => {
        if(name === 'Clear Tasks'){
            dispatch(clearTasks())
        }
        if(name === 'Go Back'){
            navigator.navigate('Home')
        }
        if(name === 'Add Task'){
            dispatch(taskAdded(value)); onClick();
        }
    }

    return <Pressable onPress={functionalities}>
    <View>
        <Text style = {style.press}> {name}</Text>
    </View>
</Pressable>
}

export default GeneralButton;

const style = StyleSheet.create({
    press: {
      fontSize:20,
      alignSelf:'center',
    //   backgroundColor:'red',
      paddingHorizontal:10,
      paddingVertical:10,
      borderWidth:2,
      borderRadius:20
    },
  });