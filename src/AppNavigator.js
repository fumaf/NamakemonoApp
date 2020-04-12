import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TopScreen from './Screen/TopScreen';
import NamakemonoListScreen from './Screen/NamakemonoListScreen';
import DoneListScreen from './Screen/DoneListScreen';

const Stack = createStackNavigator();

export default AppNavigator = () => {

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="TopScreen"
            component={ TopScreen }
            options={{ title: 'Top' }}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NamakemonoListScreen"
            component={ NamakemonoListScreen }
            options={{ title: 'NamakemonoListScreen' }}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DoneListScreen"
            component={ DoneListScreen }
            options={{ title: 'DoneListScreen' }}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }