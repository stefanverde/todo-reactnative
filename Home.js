import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import {  useSelector } from "react-redux";
import PressableAdd from "./components/PressableAdd";
import GeneralButton from "./components/GeneralButton";

const Home = () => {
  const taskList = useSelector((state) => state.tasks.taskList);

    return <SafeAreaView style={MainPage.safeArea}>
      <PressableAdd/>
      <View style = {MainPage.listContainer}>
        <Text style = {MainPage.header}>Your things to be done: </Text>
        <FlatList
        data={taskList}
        keyExtractor={(item, index) => index.toString()} // Use index as key if tasks don't have unique IDs
        renderItem={({ item }) => <Text style={MainPage.item}>{item}</Text>}
      />
      <View style = {{marginTop:'auto'}}>
      <GeneralButton name = 'Clear Tasks'/></View>
      </View>
        

    </SafeAreaView>
}


export default Home;


const MainPage = StyleSheet.create({
  safeArea:{
    flex:1,
  },
  item: {
    padding: 10,
    fontSize: 15,
    alignSelf:'center',
    borderWidth:1,
    borderRadius:8,
    marginTop:5
  },
  header: {
    padding:5,
    fontSize:24,
    alignSelf:'center'
  },
  listContainer:{
  height:'90%',
  },
});