import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StartButton } from '../../Components/StartButton';
import { CardCreateTask } from '../../Components/CardCreateTask';
import CreateTaskButton from '../../Components/CreateTaskButton';

export default function CreateTask({ navigation }: { navigation: any }) {
  console.log("Tela CreateTask abriu")
  return (
    <View style={styles.container}>
      <CardCreateTask/>

      <View style = {styles.optionsToCreate}>
        <CreateTaskButton isGreen={true}/>
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