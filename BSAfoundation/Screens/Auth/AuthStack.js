import * as React from 'react';
import { View, Button, Text, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ForgetPassword from './ForgetPassword';
import Login from './Login';
import SignUp from './SignUp';
import Index from './Index';
import BottomStack from '../BottomStack';




const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator >
    <Stack.Screen
        name="Index"
        component={Login}
        options={{
          headerTintColor: 'white',
            headerStyle: {  backgroundColor: '#4266f5', 
          
        },
        title:'LOGIN',
          headerTitleStyle: {
            // justifyContent:'center',
            // alignSelf:'center',
            paddingLeft:'35%',
          fontSize:30}
        }}
      />

      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerTintColor: 'white',
            headerStyle: {  backgroundColor: '#4266f5',
          
        },
        title:'Sign Up',
          headerTitleStyle: {
            justifyContent:'center',
            alignSelf:'center',
            paddingLeft:'32%'}
        }}
      />
      <Stack.Screen
        name="BottomStack"
        component={BottomStack}
        options={{
          headerShown:false,
          
        }}
      />

<Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{
          headerTintColor: 'white',
            headerStyle: {  backgroundColor: '#4266f5',
          
        },
        title:'Forget Password',
          headerTitleStyle: {
            justifyContent:'center',
            alignSelf:'center',
            alignSelf:'center',
            paddingLeft:'20%'
          }
        }}
      />

<Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTintColor: 'white',
            headerStyle: {  backgroundColor: '#4266f5',
          
        },
        title:'Login Page',
          headerTitleStyle: {
            justifyContent:'center',
            alignSelf:'center',
            paddingLeft:'25%'}
        }}
      />



  
    </Stack.Navigator>
  );
}


