import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StartHome } from '../../Components/StartHome'; 
import { StartButton } from '../../Components/StartButton';

export default function PresentationHome({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <StartHome>
      </StartHome>
      <View style={styles.containerBottom}>
        <Text style={styles.textInvite}>Planeje seu tempo</Text>
        <StartButton  onPress={() => navigation.navigate('HomeTasks')}>
        </StartButton>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
    paddingTop: 64,
    gap: 16
  },
  
  containerBottom: {
    width: '112%',
    height: '50%',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderColor: '#5C0F8B',
    borderRadius: 50,
    borderWidth: 3,
    marginTop:'80%',
    gap: 30
  },
  textInvite:{
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  }
});