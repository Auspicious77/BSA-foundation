import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen'
import { enableScreens } from 'react-native-screens'
enableScreens()
const Stack = createStackNavigator()
const Navigator = props => {
    const baseHeaderSettings = {mainStack,secondStack }
         
       const mainStack = () => {
            return(
             <Stack.Navigator screenOptions={baseHeaderOptions}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Details" component={DetailsScreen}/>
             </Stack.Navigator>
          )
       }
       const secondStack = () => { //Import the other screens you use!
            return(
             <Stack.Navigator screenOptions={baseHeaderOptions}>
              <Stack.Screen name="Other" component={OtherScreen} />
              <Stack.Screen name="Screens" component={DiffScreen}/>
             </Stack.Navigator>
          )
       }
       return (
          <NavigationContainer>          </NavigationContainer>
       )
    }