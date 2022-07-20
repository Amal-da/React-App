import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Caamera from './Sendphoto';
import Home from './home';
import Photo from './photo';
import Chat from './chat';
import Count from './count';
import Reaction from './react';



const MyTabs = () => {
  const Tab = createBottomTabNavigator();

  return (

    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#F4BBBB',
      //  tabBarActiveBackgroundColor: "#F4BBBB",

      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Options"
        component={Photo}
        options={{
          tabBarLabel: 'Options',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="menu" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="photo"//Count
        component={Caamera}
        options={{
          tabBarLabel: 'Camera',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="camera" color={color} size={size} />
          ),
        }}
      />
 <Tab.Screen
        name="Count"
        component={Count}
        options={{
          tabBarLabel: 'counter',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="counter" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Reaction"
        component={Reaction}
        options={{
          tabBarLabel: 'Reaction',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="counter" color={color} size={size} />
          ),
        }}
      />
      



    </Tab.Navigator>
  );
}
//Calculator
export default MyTabs;