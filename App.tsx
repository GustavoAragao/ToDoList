import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PresentationApp from '../appRestic36Mobile/src/Screens/PresentationApp'
import HomeTasks from '../appRestic36Mobile/src/Screens/HomeTasks'
import CreateTask from '../appRestic36Mobile/src/Screens/CreateTask';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName='PresentationApp' screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={PresentationApp} />
          <Stack.Screen name="HomeTasks" component={HomeTasks} />
          <Stack.Screen name="CreateTask" component={CreateTask}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}