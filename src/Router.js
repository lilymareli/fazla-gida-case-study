import React from 'react'
import {SafeAreaView, View, Text} from 'react-native'
import {Main, Details} from './pages'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


function Router() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default Router
