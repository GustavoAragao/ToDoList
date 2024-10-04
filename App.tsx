import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PresentationApp from '../ToDoList/src/Screens/PresentationApp'
import HomeTasks from '../ToDoList/src/Screens/HomeTasks'
import CreateTask from '../ToDoList/src/Screens/CreateTask';
import {TaskProvider} from './src/Context/TaskContext';
import { Task } from './src/Components/Task';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <TaskProvider>
    <NavigationContainer>
        <Stack.Navigator initialRouteName='PresentationApp' screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={PresentationApp} />
          <Stack.Screen name="HomeTasks" component={HomeTasks} />
          <Stack.Screen name="CreateTask" component={CreateTask}/>
        </Stack.Navigator>
    </NavigationContainer>
    </TaskProvider>
  )
}