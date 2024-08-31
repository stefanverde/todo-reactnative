import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddTodo from './AddTodo';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export default function App() {

  const Stack = createNativeStackNavigator();
  
  return (
    <Provider store = {store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}  options={{
          headerLeft: null,            
          title: "",
          headerShown: false,
        }}/>
        <Stack.Screen name="Add Todo" component={AddTodo} 
        options={{
          headerLeft: null,            
          title: "",
          headerShown: false,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

