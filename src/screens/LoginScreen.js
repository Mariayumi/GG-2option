import React from 'react';
import { View, Text, Button } from 'react-native';
import HomeScreen from '../screens/HomeScreen';

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};


export default LoginScreen;
