import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const AppCar = () => {
  return (
    <View>
      <View style={styles.topbar}>
        <Text style={styles.title}>AppCar</Text>
        <Image source={require('../img/3pontos.png')} style={styles.pts} />
      </View>
      <View style={styles.view}>
        <Text style={{ fontSize: 20, fontWeight: '400' }}>
          Aqui você aprende tudo sobre carros:
        </Text>
        <Image
          source={require('../img/carros.png')}
          style={{ width: 350, height: 350, margin: 20, borderRadius: 10 }}
        />
        <Text style={{ fontSize: 17, fontWeight: '400', margin: 20 }}>
          Bem-vindo ao nosso app sobre carros! Aqui você encontrará informações
          sobre diversas marcas e modelos de veículos. Desde os clássicos
          icônicos até os mais modernos e tecnológicos, nosso app é o seu guia
          confiável para o mundo automotivo. Explore, descubra e apaixone-se
          pelos carros que fazem parte da nossa paixão pelas estradas.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 
  view: {
    width: '100%',
    position: 'absolute',
    top: 140,
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    marginBottom: 10,
    color: 'white',
    marginLeft: 10,
  },
  pts: {
    position: 'absolute',
    left: 340,
    width: 30,
    height: 30,
  },
  topbar: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    backgroundColor: 'black',
    marginTop: 20,
    position: 'absolute',
    top: 20,
  },
});

export default AppCar;
