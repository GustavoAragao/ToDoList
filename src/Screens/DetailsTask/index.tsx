import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { TrashButton } from '../../Components/TrashButton';
import { StartButton } from '../../Components/StartButton';
import FavoriteTaskButton from '../../Components/FavoriteTaskButton';
import {  RouteProp,useRoute } from '@react-navigation/native'; 
import { TaskProps } from '../../Utils/types';
import { TaskContext } from '../../Context/TaskContext';
import {Feather} from '@expo/vector-icons'


type RouteParams = {
  DetailsScreen: {
    task: TaskProps; 
  };
};

export default function DetailsTask({ navigation }: { navigation: any }){
  
  const { deleteTask,tasks,updateTask} = useContext(TaskContext);
  const route = useRoute<RouteProp<RouteParams, 'DetailsScreen'>>();
  const { task } = route.params;

  const [taskText,setTaskText]=useState(task.title);
  const [taskDescription,setTaskDescription]=useState(task.description);
  const [isFavTask, setIsFavTask] = useState(task.isFav);
 
  function removeTesk(){
    return
  };

  function handleRemoveTask(id:number){
    try {
      Alert.alert(
        "Atenção", 
        `Deseja realmente excluir essa tarefa?`, 
        [
          {
            text: "Sim",
            onPress: () => {
              deleteTask(id)
              navigation.navigate("HomeTasks")
            }
          },
          {
            text: "Não",
            style: "cancel"
          }
        ]
      );
    } catch (error) {
      console.error('Failed to delete this task from async storage', error);
    }
  }

  
  const handleUpdateTask = (task: TaskProps) => {
    const newTask: TaskProps = {
      id: task.id,
      title: taskText,
      description: taskDescription,
      isFinished: task.isFinished,
      isFav: isFavTask,
    };
    try {
      Alert.alert(
        "Atenção", 
        `Deseja realmente atualizar essa tarefa?`, 
        [
          {
            text: "Sim",
            onPress: () => {
              updateTask(newTask.id,newTask)
              navigation.navigate("HomeTasks")
            }
          },
          {
            text: "Não",
            style: "cancel"
          }
        ]
      );
    } catch (error) {
      console.error('Failed to update this task from async storage', error);
    }
  };

  return(
    <View style = {styles.container}>
      <View style= {{flexDirection:'row',alignSelf:'center',gap: 10}}>
        <TextInput style = {styles.inputTitle} multiline={true} onChangeText={setTaskText} value={taskText}>
        </TextInput>
        <Feather name="edit" size={24} color="black" />
      </View>

      <Text style={{ alignSelf: 'flex-start', marginTop:15 }}>Descrição: (clique no texto para editá-lo)</Text>
      <View style ={styles.containerDesc}>
        <TextInput style = {{textAlign: 'center', width:'100%',flex:1}} multiline={true} onChangeText={setTaskDescription} value={taskDescription}>
        </TextInput>
      </View>
      <View style={{flex:1,justifyContent:'flex-end', marginBottom: 20}}>
        <FavoriteTaskButton isFav = {isFavTask} onPress={()=>setIsFavTask(!isFavTask)}/>
      </View>
      <View style ={styles.optionsButtons}>
        <TrashButton onPress={() => handleRemoveTask(task.id)} />
        <StartButton isSave={true} onPress={()=> handleUpdateTask(task)}/>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    padding: 16,
    paddingTop: 64,
    gap: 10
  },
  containerDesc: {
    width: '100%',
    height: '30%',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 2, 
    borderColor: 'black', 
    padding: 10,
  },
  optionsButtons:{
    marginBottom: 20,
    paddingHorizontal: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'100%'
  },
  inputTitle:{
    width:'auto',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
