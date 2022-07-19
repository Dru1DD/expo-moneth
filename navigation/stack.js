import React from 'react'
import { TouchableOpacity } from 'react-native'

import { Icon } from '../components';

import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../screens/HomeScreen";
import { TransactionDetail } from "../screens/TransactionDetail";
import { TransactionForm } from "../screens/TransactionForm";


import { SettingsScreen } from '../screens/SettingsScreen'
import { SettingsGeneral } from '../screens/Settings/SettingsGeneral';
import { About } from "../screens/Settings/About";

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ 
            headerShown: false
        }} 
        />

      <Stack.Screen 
        name="AddTransaction" 
        component={TransactionForm} 
        options={{
            title: '',
            headerBackTitle: 'Back'
        }}
        />
      <Stack.Screen 
        name="TransactionDetail" 
        component={TransactionDetail} 
        options={{
            title: '',
            headerBackTitle: 'Back'
        }}
        />
    </Stack.Navigator>
  );
};


export const SettingsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
    >
      <Stack.Screen 
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name="SettingsGeneral"
        component={SettingsGeneral}
        options={{
          title: '',
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen 
        name="About"
        component={About}
        options={{
          title: '',
          headerBackTitle: 'Back',
        }}
      />
    </Stack.Navigator>
  )
}