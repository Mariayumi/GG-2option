import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity, Button } from 'react-native';

const data = [
  { id: 1, nome: 'Praia de Copacabana', categoria: 'Praia', estado: 'Rio de Janeiro', cidade: 'Rio de Janeiro' },
  { id: 2, nome: 'Cristo Redentor', categoria: 'Monumento', estado: 'Rio de Janeiro', cidade: 'Rio de Janeiro' },
  { id: 3, nome: 'Museu do Amanhã', categoria: 'Museu', estado: 'Rio de Janeiro', cidade: 'Rio de Janeiro' },
  { id: 4, nome: 'Teatro Amazonas', categoria: 'Teatro', estado: 'Amazonas', cidade: 'Manaus' },
  { id: 5, nome: 'Cachoeira do Buracão', categoria: 'Cachoeira', estado: 'Bahia', cidade: 'Ibicoara' },
];

const PontosScreen = ({ navigation }) => {
  const criarPonto = () => {
    navigation.navigate('CriarPonto');
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
        <Text style={styles.text}>{item.categoria}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.text}>{item.estado}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.text}>{item.cidade}</Text>
      </View>
    </View>
  );
  return (
    <>
    <View>
      <TouchableOpacity onPress={criarPonto} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.column}>
            <Text style={styles.title}>ID</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.title}>Nome</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.title}>Categoria</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.title}>Estado</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.title}>Cidade</Text>
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


export default PontosScreen;
