import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreenComponent from '../screens/SplashScreen';
import SearchScreen from '../screens/SearchScreen';
import BottomTabNavigator from './BottomTabNavigator';
import EmergencyScreen from '../screens/EmergencyScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreenComponent} />
      <Stack.Screen name="Main" component={BottomTabNavigator} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="EmergencyScreen" component={EmergencyScreen} />
    </Stack.Navigator>
  );
}
