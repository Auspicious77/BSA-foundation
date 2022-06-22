import * as React from 'react';
import { View, Button, Text, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AboutVocation from './AboutVocation';
import ListOfVocations from './ListOfVocations';
import SubmitIdeas from './SubmitIdeas';
import Vocationform from './Vocationform';
import index from './index'
// import Whatwedo from './Whatwedo';
import {Head}from '../Head'


const Stack = createStackNavigator();

export default function VocationalStack() {
  return (
  <View style={{flex:1}}>
   <Head /> 
    <Stack.Navigator>
       <Stack.Screen
        name="index"
        component={index}
        options={{
          headerShown:false,
          headerTintColor: 'white',
          headerStyle: {  backgroundColor: '#4266f5',
          
        },
        title:'VOCATIONAL',
          headerTitleStyle: {
            justifyContent:'center',
            alignSelf:'center',
            paddingLeft:'32%'}
        }}
      />
      <Stack.Screen
        name="SubmitIdeas"
        component={SubmitIdeas}
        options={{
          headerTintColor: 'white',
          headerStyle: {  backgroundColor: '#4266f5',
         },
         title:'VOCATIONAL',
         headerTitleStyle: {
           justifyContent:'center',
           alignSelf:'center',
           paddingLeft:'32%'}
        }}
      />

<Stack.Screen
        name="AboutVocation"
        component={AboutVocation}
        options={{
          headerTintColor: 'white',
          headerStyle: {  backgroundColor: '#4266f5',
          
        },
        title:'Apply For Funding',
        headerTitleStyle: {
          justifyContent:'center',
          alignSelf:'center',
          paddingLeft:'10%'}
        }}
      />

<Stack.Screen
        name="ListOfVocations"
        component={ListOfVocations}
        options={{
          headerTintColor: 'white',
          headerStyle: {  backgroundColor: '#4266f5',
           },
           title:'VOCATIONALS',
           headerTitleStyle: {
             justifyContent:'center',
             alignSelf:'center',
             paddingLeft:'10%'}
        }}
      />

<Stack.Screen
        name="Vocationform"
        component={Vocationform}
        options={{
          headerTintColor: 'white',
          headerStyle: {  backgroundColor: '#4266f5',
          
        },
        }}
      />



  
    </Stack.Navigator></View>
  );
}


