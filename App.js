import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './screens/tab';
import Reaction from './screens/react';
import { View } from 'react-native';


const Stack = createStackNavigator();


export default function App() {
  return (

    
      <NavigationContainer>
      <MyTabs />
    </NavigationContainer>

  );

}




