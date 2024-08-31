import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { RootState } from './redux/store';
import { useSelector } from "react-redux";

const Home = () => {
  const navigation = useNavigation();
  const taskList = useSelector((state) => state.initialState.taskList);


    return <View style={MainPage.global}>
      
      <View>
        <Text>List of goals:</Text>
        <Text>{taskList.map((item,index)=> <Text key={index}> {item} </Text>)}</Text>
      </View>
      <View>
          <Button 
            title="Add todos" 
            onPress={() => navigation.navigate('Add Todo')}
          />
        </View>
        {/* <View  style = {{marginTop:'auto'}}><Button onPress={clearArray} title = 'clear array'/></View> */}

    </View>
}


export default Home;


const MainPage = StyleSheet.create({
  global:{
    padding: 50,
    marginTop: '50%',
    backgroundColor:'#FFFFF'
  }
});