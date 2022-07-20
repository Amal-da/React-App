import { View, TouchableOpacity, Text, ScrollView, useColorScheme, TextInput } from "react-native";
import styles from "../styles";
import { FontAwesome5 } from '@expo/vector-icons';
import reusable from "../reusable";
import axios from 'axios';
import { useEffect, useState } from "react";
import Reaction from "./react";


const Count = ({ navigation }) => {
    
    //mode
    const colorScheme = useColorScheme();
    const themeContainerStyle =
        colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    const [users, setUsers] = useState([]);
    const userToken = 'xoxp-3648565925605-3651406447987-3703989459873-78420bd9825200036d627984e394d567'
    const fetchData = async () => {

        await axios.get(`https://slack.com/api/conversations.list?types=public_channel,private_channel`,
            {
                headers: { "Content-type": "application/x-www-form-urlencoded", "charset": "utf-8", "Authorization": `Bearer ${userToken}` }
            }
        ).then((response) => {

            if (response.data && response.data.channels) {
                let result = []
                response.data.channels.map((el) => {
                    result.push({
                        id: el.id,
                        name: el.name,
                    })

                })
                console.log('result', result)
                setUsers(result)
            }
            
        },
            err => {
                console.log('*********************error******************** \n', err);
                return err
            })
    };
    useEffect(() => {
        fetchData();
    }, []);

    const buttonsList = users.map((obj, i) =>
        <TouchableOpacity style={styles.bbj} key={i} id={obj.id} onPress={() => navigation.navigate('Reaction')}  >
            < Text numberOfLines={1} style={styles.buttonText}> {obj.name} </Text>
            <FontAwesome5 name="hashtag" size={15} color="black" />
        </TouchableOpacity>
    );

    return (
        <View style={[styles.photoContainer, themeContainerStyle]}>
            <ScrollView>
                <View style={reusable.pt(50)}></View>
               
                <View style={styles.scrollView}>
                     {buttonsList} 
                </View>
                <View style={reusable.pt(50)}></View>
            </ScrollView>
        </View>

    );
};


export default Count;



















































































































































