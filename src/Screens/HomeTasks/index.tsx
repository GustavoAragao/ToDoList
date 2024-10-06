import { StatusBar } from 'expo-status-bar';
import { FlatList, NativeEventEmitter, StyleSheet, Text, View } from 'react-native';
import { Task } from '../../Components/Task';
import { CardNumber } from '../../Components/CardNumber'; 
import { SearchTask } from '../../Components/SearchTask'; 
import  CreateTaskButton  from '../../Components/CreateTaskButton'; 
import { TrashButton } from '../../Components/TrashButton'; 
import { FavButtonFilter } from '../../Components/FavButtonFilter';
import { useContext, useEffect, useState } from 'react'; 
import { TaskContext } from '../../Context/TaskContext';
import React from 'react';
import { TaskProps } from '../../Utils/types';

export default function HomeTasks({ navigation }: { navigation: any }) {

    const { tasks, clearTasks, handleTaskStatus } = useContext(TaskContext);
    const [finishedTasks, setFinishedTasks] = useState(0);
    const [pendingTasks, setPendingTasks] = useState(0);
    const [favoriteTasks, setFavoriteTasks] = useState(0);
    const [cardNumberFinishedIsPressed, setCardNumberFinishedIsPressed] = useState(false);
    const [cardNumberPendingIsPressed, setCardNumberPendingIsPressed] = useState(false);
    const [favButtonIsPressed, setFavButtonIsPressed] = useState(false);
    const [filteredTasks, setFilteredTasks] = useState<TaskProps[]>(tasks);
    const [wordSearch, setWordSearch]= useState("");

    const [nameTask, setNameTask] = useState('');

    console.log("tela HomeTasks abriu");

    useEffect(() => {
        let finishedTasksCount = tasks.filter((task) => task.isFinished).length; 
        let pendingTasksCount = tasks.filter((task) => !task.isFinished).length; 
        let favTasksCount = tasks.filter((task)=> task.isFav).length;

        setFinishedTasks(finishedTasksCount);
        setPendingTasks(pendingTasksCount);
        setFavoriteTasks(favTasksCount);

        if (cardNumberFinishedIsPressed) {
            setFilteredTasks(tasks.filter((task) => task.isFinished));
        } else if (cardNumberPendingIsPressed) {
            setFilteredTasks(tasks.filter((task) => !task.isFinished));
        } 
        else if(favButtonIsPressed){
            setFilteredTasks(tasks.filter((task) => task.isFav));
        }
        else if(wordSearch!=""){
            setFilteredTasks(tasks.filter((task)=>task.title==wordSearch))
            if(nameTask == ''){
              setWordSearch("");
              setFilteredTasks(tasks);
            }
        }
        else {
            setFilteredTasks(tasks);
        }
    }, [tasks, cardNumberFinishedIsPressed, cardNumberPendingIsPressed,favButtonIsPressed,wordSearch,nameTask]);

    const handlePressFinishedTasksCard = () => {
        if (cardNumberFinishedIsPressed) {
            setCardNumberFinishedIsPressed(false);
            setFilteredTasks(tasks);
        } else {
            setCardNumberFinishedIsPressed(true);
            setFavButtonIsPressed(false);
            setCardNumberPendingIsPressed(false); 
        }
    };

    const handlePressPendingTasksCard = () => {
        if (cardNumberPendingIsPressed) {
            setCardNumberPendingIsPressed(false);
            setFilteredTasks(tasks);
        } else {
            setCardNumberPendingIsPressed(true);
            setFavButtonIsPressed(false);
            setCardNumberFinishedIsPressed(false); 
        }
    };

    const handlePressFavButtonFilter = () => {
      if (favButtonIsPressed) {
          setFavButtonIsPressed(false);
          setFilteredTasks(tasks);
      } else {
          setFavButtonIsPressed(true);
          setCardNumberFinishedIsPressed(false);
          setCardNumberPendingIsPressed(false);
      }
  };
    
    const handlePressSearchTaskButton = () => {
          setWordSearch(nameTask);
          setCardNumberFinishedIsPressed(false);
          setCardNumberPendingIsPressed(false);
          setFavButtonIsPressed(false);
    }
    
    return (
        <View style={styles.container}>
          <SearchTask setTaskName={setNameTask} taskName={nameTask} onPress={handlePressSearchTaskButton}/>
          <View style={styles.optionsHomeContainer}>
              <FavButtonFilter isPress = {favButtonIsPressed} onPress={handlePressFavButtonFilter}/>
              <TrashButton onPress={clearTasks} />
              <CreateTaskButton onPress={() => {
                console.log("Navegando para CreateTask");
                navigation.navigate('CreateTask');
              }} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <CardNumber 
              onPress={handlePressFinishedTasksCard} 
              isPress={cardNumberFinishedIsPressed} 
              isFinished={true} 
              finishedTasks={finishedTasks} 
            />
            <CardNumber 
              onPress={handlePressPendingTasksCard} 
              isPress={cardNumberPendingIsPressed} 
              isFinished={false} 
              pendingTasks={pendingTasks} 
            />
          </View>
      
          <FlatList
              style={{ marginTop: 16 }}
              data={filteredTasks}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                return (
                  <Task 
                    id={item.id}
                    onPress={() => navigation.navigate("DetailsTask", { task: item })}
                    title={item.title} 
                    isFinished={item.isFinished} 
                    onCheck={() => handleTaskStatus(item)} 
                  />
                );
              }}
              ListEmptyComponent={() => (
                <View>
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
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    paddingTop: 64,
    gap: 16,
  },
  optionsHomeContainer: {
    width: '95%',
    height: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
