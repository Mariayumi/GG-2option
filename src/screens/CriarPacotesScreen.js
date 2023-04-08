import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const CriarPacotesScreen = () => {
  const [nome, setNome] = useState('');
  const [passagem, setPassagem] = useState('');
  const [hotel, setHotel] = useState('');
  const [ponto, setPonto] = useState('');

  const enviarDados = () => {
    // Lógica para enviar os dados para o servidor
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor da passagem"
        value={passagem}
        onChangeText={setPassagem}
      />
      <TextInput
        style={styles.input}
        placeholder="Hotel"
        value={hotel}
        onChangeText={setHotel}
      />
      <TextInput
        style={styles.input}
        placeholder="Pontos turísticos"
        value={ponto}
        onChangeText={setPonto}
      />

      <Button title="Enviar" onPress={enviarDados} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
});

export default CriarPacotesScreen;
