import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Administration from './Administration';
import Departments from './Departments';



const Tab = createMaterialTopTabNavigator();

export default function AboutUs() {
  return (
    // <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Administration" component={Administration} />
        <Tab.Screen name="Departments" component={Departments} />
      </Tab.Navigator>
    // </NavigationContainer> 
  );
}
