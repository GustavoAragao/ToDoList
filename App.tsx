import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Task } from './src/Components/Task';
import { CardNumber } from './src/Components/CardNumber';
import { SearchButton } from './src/Components/SearchTask/styles';
import { SearchTask } from './src/Components/SearchTask';
export default function App() {
  return (
    <View style={styles.container}>
      <SearchTask/>
      <View style={{flexDirection: 'row'}}>
      <CardNumber/>
      <CardNumber/>
      </View>
      <Task/>
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
});
