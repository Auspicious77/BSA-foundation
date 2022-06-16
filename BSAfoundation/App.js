import 'react-native-gesture-handler';
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// screens
// import { PlantDetail } from "./screens/";
// extra screens
// import Tabs from "./navigation/tabs";
import BottomStack from './Screens/BottomStack';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <BottomStack />
      </NavigationContainer>
    );
  }