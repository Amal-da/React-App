import React from 'react';
import {  Text, Button, View } from 'react-native';
import styles from '../styles';


const Home = ({navigation})  => {
    return (
        <View style={styles.container}>
            <Text style={styles.textstyle}>Welcome To our app !</Text>
            <Button 
                title="Go Take A Photo"
                onPress={() => navigation.navigate('Photo')}
            />
        </View>
    );
}

export default Home;



