import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Task } from '../../Components/Task';
import { CardNumber } from '../../Components/CardNumber'; 
import { SearchTask } from '../../Components/SearchTask'; 
import  CreateTaskButton  from '../../Components/CreateTaskButton'; 
import { TrashButton } from '../../Components/TrashButton'; 
import { FavButton } from '../../Components/FavButton';
import { useContext, useState } from 'react'; 
import { CardCreateTask } from '../../Components/CardCreateTask';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TaskContext } from '../../Context/TaskContext';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { TaskProps } from '../../Utils/types';

export default function HomeTasks({ navigation }: { navigation: any }) {

    const { tasks,clearTasks,handleTaskStatus } = useContext(TaskContext);
    console.log("tela HomeTasks abriu")


    return (
        <View style={styles.container}>
        <SearchTask/>
        <View style={styles.optionsHomeContainer}>
            <FavButton/>
            <TrashButton onPress={clearTasks}/>
            <CreateTaskButton onPress={() => {
              console.log("Navegando para CreateTask");
              navigation.navigate('CreateTask');
            }} />
        </View>
        <View style={{flexDirection: 'row'}}>
        <CardNumber/>
        <CardNumber/>
        </View>
      
        <FlatList style={{marginTop:16 }}
            data={tasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              console.log(item.title)
              console.log(item.description)
              return <Task title={item.title} isFinished = {item.isFinished} onCheck={()=>handleTaskStatus(item)}/>;
            }}
            ListEmptyComponent={() =>( <View>
                                          <Text> Sem tarefas cadastradas! </Text> 
                                       </View> 
                                      )}

        />
        
        <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    paddingTop: 64,
    gap: 16
  },
  optionsHomeContainer: {
    width:'95%',
    height:42,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
  
});
