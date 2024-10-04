import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StartButton } from '../../Components/StartButton';
import { CardCreateTask } from '../../Components/CardCreateTask';
import CreateTaskButton from '../../Components/CreateTaskButton';
import { useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TaskProps } from '../../Utils/types';
import { useContext } from 'react';
import { TaskContext } from '../../Context/TaskContext';


export default function CreateTask({ navigation }: { navigation: any }){
    console.log("Tela CreateTask abriu")

    const { createTask,tasks } = useContext(TaskContext);
    const [nameTask, setNameTask] = useState('');
    const [descriptionTask, setDescriptionTask] = useState('');

    const handleCreateTask =  () => {
      const newTask: TaskProps = {
        title: nameTask,
        description: descriptionTask,
        isFinished: false,
      };
      if(tasks.some((task)=>task.title == newTask.title)){
        Alert.alert("Tarefa já existe, tente outro nome")
        return
      }
      else{
        createTask(newTask);
      }
      navigation.navigate("HomeTasks"); // Volta para a tela anterior após criar a tarefa
    };
    
    return (
      <View style={styles.container}>
        <CardCreateTask setTaskName={setNameTask} setTaskDescription={setDescriptionTask} taskName ={nameTask} taskDescription ={descriptionTask}/>

        <View style = {styles.optionsToCreate}>
          <CreateTaskButton isGreen={true} onPress={handleCreateTask}/>
          <StartButton onPress={()=>navigation.pop()}></StartButton>
        </View>
      
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 16,
  },
  optionsToCreate:{
    paddingTop: 400,
    gap: 16,
    justifyContent: 'center',
    alignItems:'center',
    flexDirection: 'row'
  }
});