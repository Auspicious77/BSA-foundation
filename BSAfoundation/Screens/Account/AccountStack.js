import * as React from 'react';
import { View, Button, Text, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EditProfile from './EditProfile';
import Profile from './Profile';
import Index from './Index';
// import Sponsorship from './Sponsorship';
// import Whatwedo from './Whatwedo';





const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <View style={{flex:1,}}>
   
    <Stack.Navigator>
      <Stack.Screen
        name="index"
        component={Index}
        options={{
          headerTintColor: 'white',
          headerLeft: false,
          headerStyle: {  backgroundColor: '#4266f5',
          
        },
        title:'My Profile',
          headerTitleStyle: {
            justifyContent:'center',
            alignSelf:'center',
            paddingLeft:'32%'}
        }}
      />

<Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerTintColor: 'white',
          headerStyle: {  backgroundColor: '#4266f5',
          
        },
        title:'Edit Profile',
          headerTitleStyle: {
            justifyContent:'center',
            alignSelf:'center',
            paddingLeft:'32%'}
        }}
      />

<Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTintColor: 'white',
          headerStyle: {  backgroundColor: '#4266f5',
          
        },
        title:'Profile',
          headerTitleStyle: {
            justifyContent:'center',
            alignSelf:'center',
            paddingLeft:'32%'}
        }}
      />



  
    </Stack.Navigator></View>
  );
}


