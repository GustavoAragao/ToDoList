import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';

export default function DetailsTask({ navigation }: { navigation: any }){
  return(
    <View style = {styles.container}>
      <Text></Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    paddingTop: 64,
    gap: 16
  }
});
