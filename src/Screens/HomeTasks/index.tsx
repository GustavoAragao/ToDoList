import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Task } from '../../Components/Task';
import { CardNumber } from '../../Components/CardNumber'; 
import { SearchTask } from '../../Components/SearchTask'; 
import { CreateTask } from '../../Components/CreateTask'; 
import { TrashButton } from '../../Components/TrashButton'; 
import { FavButton } from '../../Components/FavButton';
import { useState } from 'react'; 

export default function App() {
  
    const [tasks, setTask] = useState<{description: String; date: Date; status: Boolean; fav: Boolean}[]>([]);
    const [taskText, setTaskText] = useState("");

    return (
        <View style={styles.container}>
        <SearchTask/>
        <View style={styles.optionsHomeContainer}>
            <FavButton/>
            <TrashButton/>
            <CreateTask/>
    
        </View>
        <View style={{flexDirection: 'row'}}>
        <CardNumber/>
        <CardNumber/>
        </View>

        <FlatList 
            data={tasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={
                ({item}) => (<Task/>)
            }
            ListEmptyComponent={() =>( <View>
                <Text> Sem tarefas cadastradas! </Text> 
                </View> )}

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
