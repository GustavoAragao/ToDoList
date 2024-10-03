import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Task } from '../../Components/Task';
import { CardNumber } from '../../Components/CardNumber'; 
import { SearchTask } from '../../Components/SearchTask'; 
import  CreateTaskButton  from '../../Components/CreateTaskButton'; 
import { TrashButton } from '../../Components/TrashButton'; 
import { FavButton } from '../../Components/FavButton';
import { useState } from 'react'; 
import { CardCreateTask } from '../../Components/CardCreateTask';

export default function HomeTasks({ navigation }: { navigation: any }) {
  
    const [tasks, setTask] = useState<{description: String; date: Date; status: Boolean; fav: Boolean}[]>([]);
    const [taskText, setTaskText] = useState("");
    console.log("tela HomeTasks abriu")
    return (
        <View style={styles.container}>
        <SearchTask/>
        <View style={styles.optionsHomeContainer}>
            <FavButton/>
            <TrashButton/>
            <CreateTaskButton onPress={() => {
              console.log("Navegando para CreateTask");
              navigation.navigate('CreateTask');
            }} />
    
        </View>
        <View style={{flexDirection: 'row'}}>
        <CardNumber/>
        <CardNumber/>
        </View>
      
        <CardCreateTask/>
        <FlatList 
            data={tasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={
                ({item}) => (<Task/>)
            }
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
