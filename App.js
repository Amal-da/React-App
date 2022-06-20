import React  from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Caamera from './screens/Sendphoto';
import Home from './screens/home';
import Photo from './screens/photo';
import Chat from './screens/chat';
import Pick from './screens/PickPhoto'

const Stack = createStackNavigator();


export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
       <Stack.Screen name="Photo" component={Photo}  />
       <Stack.Screen name="Caamera" component={Caamera}  />
       <Stack.Screen name="Chat" component={Chat}  />
       <Stack.Screen name="Pick" component={Pick}  />
      </Stack.Navigator>
    </NavigationContainer>
  );

  }

