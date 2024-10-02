import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PresentationApp from '../ToDoList/src/Screens/PresentationApp'
import HomeTasks from '../ToDoList/src/Screens/HomeTasks'
const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName='PresentationApp' screenOptions={{headerShown:false}}>
          <Stack.Screen 
            name="Home" 
            component={PresentationApp} 
          />
          <Stack.Screen 
            name="HomeTasks" 
            component={HomeTasks} 
          />
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}