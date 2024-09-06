import { useState } from "react";
import { View, StyleSheet, TextInput, SafeAreaView } from "react-native"
import GeneralButton from "./components/GeneralButton";
const AddTodo = () => {
    const [value,setValue] = useState('');
    
    return <SafeAreaView style = {styles.container}>
        <View style = {styles.spacing}>
        <TextInput style = {styles.input}placeholder = 'Clear your mind: ' onChangeText={newText => setValue(newText)} value={value} />
        <View style = {styles.directionView}>
            <GeneralButton name = 'Add Task' value = {value} onClick={() => setValue("")}/>
            <GeneralButton name = 'Go Back'/>
        </View>
        </View>
        </SafeAreaView>
}

export default AddTodo;

const styles = StyleSheet.create({
    container: {
      flex: 1,                 
      backgroundColor: '#FFFFFF', 
    //   padding: 16,
    },
    spacing: {
        marginTop:'30%',
        height:'80%'
    },
    directionView: {
        marginTop:'auto',
        justifyContent:'center',
        flexDirection:'row'
    },
    input:{fontSize:20, alignSelf:'center', borderBottomWidth:1, padding:20}
  });