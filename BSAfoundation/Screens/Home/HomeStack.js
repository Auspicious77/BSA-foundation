import * as React from 'react';
import { View, Button, Text, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Index from './Index';
// import Sponsorship from './Sponsorship';
import Whatwedo from './Whatwedo';
import Administration from './Administration';


const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="index"
        component={Index}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#4266f5'},
          title:'BSA FOUNDATION',
          // headerShown:false,
          headerTitleStyle: {
            fontWeight: 'bold',
            justifyContent:'center',
            alignSelf:'center',
            paddingLeft:'25%'
            },
        
        }}
      />

<Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#4266f5',
        
        },
        }}
      />

<Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#4266f5',
        
        },
        }}
      />
{/* 
<Stack.Screen
        name="Sponsorship"
        component={Sponsorship}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#4266f5',
        
        },
        }}
      /> */}

<Stack.Screen
        name="Whatwedo"
        component={Whatwedo}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#4266f5',
        
        },
        }}
      />

<Stack.Screen
        name="Administration"
        component={Administration}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#4266f5',
        
        },
        }}
      />


  
    </Stack.Navigator>
  );
}


