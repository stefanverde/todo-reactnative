import { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native"
import GeneralButton from "./components/GeneralButton";
const AddTodo = () => {
    const [value,setValue] = useState('');
    
    return <View style = {styles.container}>
        <View style = {styles.spacing}>
        <TextInput style = {{fontSize:20, alignSelf:'center'}}placeholder = 'Clear your mind: ' onChangeText={newText => setValue(newText)} value={value} />
        <View style = {{marginTop:'auto'}}>
            <GeneralButton name = 'Add Task' value = {value} onClick={() => setValue("")}/>
            <GeneralButton name = 'Go Back'/>
        </View>
        </View>
        </View>
}

export default AddTodo;

const styles = StyleSheet.create({
    container: {
      flex: 1,                 
      backgroundColor: '#FFFFFF', 
      padding: 16,
    },
    spacing: {
        marginTop:'30%',
        height:'90%'
    }
  });