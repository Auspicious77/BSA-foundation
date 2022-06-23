import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './Home/HomeStack';
import ElearningStack from './E-learning/ElearningStack'

import AccountStack from './Account/AccountStack';
import VocationalStack from './VocationalTraining/VocatioalStack';

import { icons, COLORS } from "../constants";


const Tab = createBottomTabNavigator();

const tabOptions = {
    
  // showLabel: false,
  
  style: {
            
      height: 90,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 10,
      },
      shadowOpacity: 0.53,
      shadowRadius: 13.97,

      elevation: 21,
  },
};

 function BottomStack() {
  return (
    <Tab.Navigator
    
    
    tabBarOptions={tabOptions}
    screenOptions={({ route }) => ({
        
        
        tabBarIcon: ({ focused }) => {
            const tintColor = focused ? COLORS.primary : COLORS.gray;

            switch (route.name) {
                
                case "Home":
                    return (
                        <Image
                            source={icons.home}
                            resizeMode="contain"
                            style={{
                                // tintColor: tintColor,
                                width: 30,
                                height: 30
                            }}
                        />
                    );
                case "Elearning":
                    return (
                        <Image
                            source={icons.elearning}
                            resizeMode="contain"
                            style={{
                                // tintColor: tintColor,
                                width: 30,
                                height: 30
                            }}
                        />
                    );
                case "Auth":
                    return (
                        <Image
                            source={icons.About}
                            resizeMode="contain"
                            style={{
                                // tintColor: tintColor,
                                width: 30,
                                height: 30
                            }}
                        />
                    );
                    case "Account":
                        return (
                            <Image
                                source={icons.address}
                                resizeMode="contain"
                                style={{
                                    // tintColor: tintColor,
                                    width: 30,
                                    height: 30
                                }}
                            />
                        );
                        case "Vocation":
                            return (
                                <Image
                                    source={icons.vocation}
                                    resizeMode="contain"
                                    style={{
                                        // tintColor: tintColor,
                                        width: 30,
                                        height: 30
                                    }}
                                />
                            );
            }
        }
    })}
>
     
      <Tab.Screen name="Home" 
      component={HomeStack} 
      options={{headerShown:false,}}
      
      />
      <Tab.Screen name="Elearning" 
      component={ElearningStack} 
      options={{headerShown:false,}}
      />
     
      
      <Tab.Screen name="Vocation" 
      component={VocationalStack} 
      options={{headerShown:false,}}
      />
      <Tab.Screen name="Account" 
      component={AccountStack} 
      options={{headerShown:false,}}
      />
    </Tab.Navigator>
  );
}

export default BottomStack;
