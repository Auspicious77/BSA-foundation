import * as React from 'react';
import { View, Button, Text, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AboutElearning from './AboutElearning';
import HowtoUse from './HowtoUse';
import Index from './Index';
import Video from './Video';
// import Howtouse from './Howtouse';
import Listofcourses from './Listofcourses';
import {Head}from '../Head'


const Stack = createStackNavigator();

export default function ElearningStack({navigation}) {
  return (
     <View style={{flex:1,}}>
    <Head/>
    <Stack.Navigator 
    ScreenOptions={{headerShown:false}}
>
      <Stack.Screen
        name="Index"
        component={Listofcourses}
        options={{
          headerTintColor: 'white',
          headerShown:false,
          headerStyle: { 
            backgroundColor: '#4266f5'},
          title:'LIST OF COURSES',
          headerTitleStyle: {
            justifyContent:'center',
            alignSelf:'center',
            paddingLeft:'27%',
            
             },
        
        }}
      />

<Stack.Screen
        name="HowtoUse"
        component={HowtoUse}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#4266f5',
          
        },
        }}
      />

<Stack.Screen
        name="AboutElearning"
        component={AboutElearning}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#4266f5',
          
        },
        }}
      />

<Stack.Screen
        name="Listofcourses"
        component={Listofcourses}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#4266f5',
          
        },
        }}
      />

<Stack.Screen
        name="Video"
        component={Video}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#4266f5',
          
        },
        }}
      />

  
    </Stack.Navigator></View>
  );
}


