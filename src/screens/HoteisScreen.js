import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const data = [
  { id: 1, nome: 'Hotel A', cidade: 'São Paulo', estado: 'SP' },
  { id: 2, nome: 'Hotel B', cidade: 'Rio de Janeiro', estado: 'RJ' },
  { id: 3, nome: 'Hotel C', cidade: 'Curitiba', estado: 'PR' },
  { id: 4, nome: 'Hotel D', cidade: 'Porto Alegre', estado: 'RS' },
  { id: 5, nome: 'Hotel E', cidade: 'Belo Horizonte', estado: 'MG' },
];

const HoteisScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <View style={styles.column}>
        <Text style={styles.text}>{item.id}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.text}>{item.nome}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.text}>{item.cidade}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.text}>{item.estado}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.column}>
          <Text style={styles.title}>ID</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.title}>Nome</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.title}>Cidade</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.title}>Estado</Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
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
});

export default HoteisScreen;