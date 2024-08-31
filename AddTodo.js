import { useState } from "react";
import { Button, View, StyleSheet, TextInput } from "react-native"
import {useNavigation} from '@react-navigation/native';
const AddTodo = () => {
    const navigator = useNavigation();
    const [value,setValue] = useState('');

    
    return <View style = {styles.container}>
        <View style = {styles.spacing}>
        <View>
        <TextInput placeholder = 'Type here: ' onChangeText={newText => setValue(newText)} value={value}/>
        {/* <Button title='add todo' onPress={addElem}/> */}
        </View>
        <View>
            <Button title = 'back to list' onPress = {() => navigator.navigate('Home')}/>
            {/* <Button title = 'add task ' onPress = {addTask}/> */}
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
        marginTop:'40%'
    }
  });