import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const data = [
  { id: 1, nome: 'Pacote A', passagem: '120', hotel: '1', ponto: 'seila' },
  { id: 2, nome: 'Pacote B', passagem: '130', hotel: '2', ponto: 'vaisaber' },
  { id: 3, nome: 'Pacote C', passagem: '140', hotel: '3', ponto: 'nemsei' },
  { id: 4, nome: 'Pacote D', passagem: '150', hotel: '4', ponto: 'paia' },
  { id: 5, nome: 'Pacote E', passagem: '160', hotel: '5', ponto: 'aaaaaahhh' },
];


const PacotesScreen = ({navigation}) => {
  const criarPacote = () => {
    navigation.navigate('CriarPacote');
  }
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <View style={styles.column}>
        <Text style={styles.text}>{item.id}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.text}>{item.nome}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.text}>{item.passagem}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.text}>{item.hotel}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.text}>{item.ponto}</Text>
      </View>
    </View>
  );
  return (
    <>
    <TouchableOpacity onPress={criarPacote} style={styles.button}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
    <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.column}>
            <Text style={styles.title}>ID</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.title}>Nome</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.title}>Passagem</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.title}>Hotel</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.title}>Ponto turístico</Text>
          </View>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()} />
      </View>
      </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  column: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    fontSize: 16,
  },
  button: {
    width: '15%',
    backgroundColor: '#007AFF',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PacotesScreen;