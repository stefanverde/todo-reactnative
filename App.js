import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddTodo from './AddTodo';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

  const Stack = createNativeStackNavigator();
  
  return (
    <Provider store = {store}>
    <NavigationContainer>
      {/* <LinearGradient colors={['red', 'blue']} style = {styles.global}> */}
      <Stack.Navigator initialRouteName="Home" screenOptions={true}>
        <Stack.Screen name="Home" component={Home}  options={{
          headerLeft: null,            
          title: "",
          headerShown: false,
          headerTransparent:true
        }}/>
        <Stack.Screen name="Add Todo" component={AddTodo} 
        options={{
          headerLeft: null,            
          title: "",
          headerShown: false,
          headerTransparent:true
        }}/>
      </Stack.Navigator>
    {/* </LinearGradient> */}
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create ({
  global:{
    flex: 1,
  }
})

