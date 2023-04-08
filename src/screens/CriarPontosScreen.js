import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const CriarPontoScreen = () => {
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');

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
        placeholder="Categoria"
        value={categoria}
        onChangeText={setCategoria}
      />
      <TextInput
        style={styles.input}
        placeholder="Estado"
        value={estado}
        onChangeText={setEstado}
      />
      <TextInput
        style={styles.input}
        placeholder="Cidade"
        value={cidade}
        onChangeText={setCidade}
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

export default CriarPontoScreen;
