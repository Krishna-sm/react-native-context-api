 import React from 'react' 
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddTodo from './pages/AddTodo';
import AllTodo from './pages/AllTodo';
import SingleTodo from './pages/SingleTodo';
import Toast from 'react-native-toast-message';
import { TodoContextProvider } from './context/Todo.context';
const Stack = createNativeStackNavigator();
const App = () => {
  return ( 
     <TodoContextProvider>
        <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="AddTodo" component={AddTodo} /> 
      <Stack.Screen name="AllTodo" component={AllTodo} /> 
      <Stack.Screen name="SingleTodo" initialParams={{id:0}} component={SingleTodo} /> 
    </Stack.Navigator>
     </NavigationContainer>
     <Toast/>
     </TodoContextProvider> 
  )
}

export default App