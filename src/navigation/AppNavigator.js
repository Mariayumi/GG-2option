import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import BottomNavbar from '../components/BottomNavbar';
import CriarPontoScreen from '../screens/CriarPontosScreen';
import CriarHoteisScreen from '../screens/CriarHoteisScreen';
import CriarPacotesScreen from '../screens/CriarPacotesScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={BottomNavbar} options={{ headerTitle: 'Administrador' }}/>
        <Stack.Screen name="CriarPonto" component={CriarPontoScreen} options={{ headerTitle: 'Cadastrar Ponto Turístico' }}/>
        <Stack.Screen name="CriarHotel" component={CriarHoteisScreen} options={{ headerTitle: 'Cadastrar Hotel' }}/>
        <Stack.Screen name="CriarPacote" component={CriarPacotesScreen} options={{ headerTitle: 'Cadastrar Pacote' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
