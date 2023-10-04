import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Escolha(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Escolha uma marca para ver seus modelos:</Text>
      <View style={styles.box_btn}>

        <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('Fiat')}>
          <Text style={styles.btn_text}>Fiat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('VolksWagen')}>
          <Text style={styles.btn_text}>VolksWagen</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('Chevrolet')}>
          <Text style={styles.btn_text}>Chevrolet</Text>
        </TouchableOpacity>

      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flex: 1,

  },
  box_btn:{
    margin: 20,
    padding: 10,

  },
  btn:{ 
    display: 'flex',
    margin: 20,
    padding: 10,
    marginVertical: 8,
    borderRadius: 5,
    backgroundColor: 'black',
    alignItems:'center'
    },
  text:{
    fontSize: 20,
    fontWeight: 400,
    margin: 10
  },
  btn_text:{
    fontSize: 19,
    color: 'white',
  },

})