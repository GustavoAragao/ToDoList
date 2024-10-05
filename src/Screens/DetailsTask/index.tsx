import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useContext } from 'react';
import { TrashButton } from '../../Components/TrashButton';
import { StartButton } from '../../Components/StartButton';
import FavoriteTaskButton from '../../Components/FavoriteTaskButton';

export default function DetailsTask({ navigation }: { navigation: any }){
  
  function removeTesk(){
    return
  };


  return(
    <View style = {styles.container}>
      <TextInput style = {styles.inputTitle} multiline={true}>
        Estudar Álgebra abstrada BlaBlab
      </TextInput>

      <Text style={{ alignSelf: 'flex-start', marginTop:15 }}>Descrição:</Text>
      <View style ={styles.containerDesc}>
        <TextInput style = {{textAlign: 'justify'}} multiline={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu dignissim velit. Sed eleifend ante ipsum, at feugiat enim pretium eget. Integer venenatis, augue ut vulputate commodo, nibh magna mollis nisi,tyuhijktgyuhijcftvgbhntcfvgybhnsxdcfvgbhdfh.
        </TextInput>
      </View>

      <FavoriteTaskButton/>
      <View style ={styles.optionsButtons}>
        <TrashButton onPress={()=>{removeTesk}}/>
        <StartButton onPress={removeTesk}/>
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
    height: 160,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 2, 
    borderColor: 'black', 
    padding: 10,
  },
  optionsButtons:{
    marginTop: '80%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'100%'
  },
  inputTitle:{
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
