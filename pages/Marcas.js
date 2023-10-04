import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';

const Marcas = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <SafeAreaView style={styles.item}>
        <Text style={styles.text}>Nome: {item.nome}</Text>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Marcas de Carro</Text>
      <FlatList
        data={data ? data : []}
        renderItem={renderItem}
        keyExtractor={(item) => item.nome}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  text: {
    fontSize: 19,
    color: 'white'
    },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
});

export default Marcas;

