import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import PontoScreen from './screens/PontoScreen';
import HotelScreen from './screens/HotelScreen';
import PacotesScreen from "./screens/PacoteScreen"

//Screen names
const homeName = "Home";
const pontoName = "Pontos Turísticos";
const hotelName = "Hotéis";
const pacotesName = "Pacotes";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === pontoName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === hotelName) {
              iconName = focused ? 'settings' : 'settings-outline';

            } else if (rn === pacotesName) {
            iconName = focused ? '' : '';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={pontoName} component={PontoScreen} />
        <Tab.Screen name={hotelName} component={HotelScreen} />
        <Tab.Screen name={pacotesName} component={PacotesScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;