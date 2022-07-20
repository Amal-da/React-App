import React from 'react';
import {  Text, SafeAreaView, useColorScheme,View } from 'react-native';
import styles from '../styles';
//import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';


const Home = ({navigation})  => {
  //  let [fontsLoaded] = useFonts({
  //   Inter_900Black,
  // });
  const colorScheme = useColorScheme();
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    return (
    
        <SafeAreaView style={[styles.container, themeContainerStyle]}>
              <Text style={{  fontSize: 40, color:'#F4BBBB' }}>Welcome To our app!</Text>
              <Text style={{ fontSize: 30,color:'#F4BBBB' }}>Discover our Options </Text>
              {/* <Text style={{  fontSize: 40, color:'#2C3639' }}>Welcome To our app!</Text>
              <Text style={{ fontSize: 30,color:'#2C3639' }}>Discover our Options </Text> */}
        
           
        </SafeAreaView>
        
        
    );
}

export default Home;

