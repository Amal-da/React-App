import axios from 'axios';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, useColorScheme, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as mime from 'mime';
import { Entypo, Feather } from '@expo/vector-icons';
import styles from '../styles';


const Chat = ({ navigation }) => {
    const [conversationMessage, setConversationMessage] = useState(null)
    const [conversationText, setConversationText] = useState('')
    const userToken = 'xoxp-3648565925605-3651406447987-3703989459873-78420bd9825200036d627984e394d567'

    

//mode 
const colorScheme = useColorScheme();
const themeContainerStyle =
  colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    //pick
    const [image, setImage] = useState("hello");
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All, //all yaani tsawer , vidéos ...
            // allowsEditing: true,
            aspect: [4, 6],
            quality: 1,
        });


        setImage(result.uri);
        console.log(result.uri)
        setConversationMessage({ ...result, name: 'file' })
    };

    //

    const postMessageToChannel = async (conversationMessage) => {
        let photo = conversationMessage
        const trimmedURI = (Platform.OS === "android") ? photo.uri : photo.uri.replace("file://", "");
        const fileName = trimmedURI.split("/").pop();
        console.log('fileName', fileName);
        const media = {
            name: fileName,
            height: photo.height,
            width: photo.width,
            type: mime.getType(trimmedURI),
            uri: trimmedURI
        };
        console.log('media', media);
        console.log('photo', photo);
        var fdata = new FormData();
        fdata.append('file', media);
        fdata.append('channels', 'C03MWHD43EY');//C03MWHD43EY
    //  fdata.append('channels',  'D03KT5LJ1RP'); //nour
        fdata.append('initial_comment', "Here's my file")
        await axios
            .post("https://slack.com/api/files.upload", fdata, {
                headers: {
                    "Content-Type": "multipart/form-data", Authorization: `Bearer ${userToken}`
                },
            })
            .then((res) => {
                console.log('res');
                console.log(res);
            })
            .catch((err) => {
                console.log('err');
                console.log(err);

            });

    }
    //txt
    const postTextToChannel = async (text) => {
        await axios.post('https://slack.com/api/chat.postMessage',
            {
                channel: "C03MWHD43EY",// C03JZB8CCR5
                //channel:"D03KT5LJ1RP",//nour 
                attachments: [{ pretext: "A Message from the App", text: text }]
            },
            {
                headers: { "Content-type": "application/json", "charset": "utf-8", "Authorization": `Bearer ${userToken}` }
            }
        ).then((response) => {
            console.log('*********************response******************** \n', response.data);
            return response.data
        },
            err => {
                console.log('*********************error******************** \n', err);
                return err
            })
            .then((responseJson) => {
                if (responseJson.ok)
                    alert("votre image est ajoutée avec succés");
                else
                    alert('erreur');

                console.log(responseJson);
            })
            .catch((error) => {
                alert(JSON.stringify(error));
                console.error(error);
            });
    }
    const onPress = () => {
        postMessageToChannel(conversationMessage);
        postTextToChannel(conversationText);
    };

    return (
        <View style={[styles.container, themeContainerStyle]}>

            <Text style={{  fontSize: 25, color: '#F4BBBB', marginBottom: 45 }}>Send Your Picture To Slack !</Text>

            <Image

                source={{ uri: image }} style={{ width: 300, height: 300 }}
                onChange={file => setConversationMessage(file)}
                value={conversationMessage}
            />
            <TextInput
                placeholder='Conversation Message'
                onChangeText={text => setConversationText(text)}
                value={conversationText}
                style={style.input}
            />
            <TouchableOpacity onPress={() => pickImage()} style={style.button}>
                <Entypo name="images" size={24} color="#2C3639" />
                <Text style={style.buttonText}>      Pick an image from camera roll    </Text>
                <Entypo name="images" size={24} color="#2C3639" />
            </TouchableOpacity>



            <TouchableOpacity onPress={onPress} style={style.button}>
                <Feather name="slack" size={24} color="#2C3639" />
                <Text style={style.buttonText}>      Post Image to Conversation          </Text>
                <Feather name="slack" size={24} color="#2C3639" />
            </TouchableOpacity>

        </View>
    );
}
const style = StyleSheet.create({
   

    button: {
        height: 40,
        width: '80%',
        borderRadius: 7,
        marginTop: 10,
        backgroundColor: '#F4BBBB',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row-reverse',
    },
    buttonText: {
        color: '#062C30'
    },


    input: {
        height: 50,
        width: '80%',
        borderColor: '#F4BBBB',
        borderWidth: 1,
        marginBottom: 5,
        marginTop: 15,
        borderRadius: 7,
        padding: 10,

    }

});
export default Chat;

