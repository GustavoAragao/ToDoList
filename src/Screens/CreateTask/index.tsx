import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StartButton } from '../../Components/StartButton';

export default function CreateTask({ navigation }: { navigation: any }) {
  console.log("Tela CreateTask abriu")
  return (
    <View style={styles.container}>
      <StartButton onPress={()=>navigation.pop()}></StartButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});