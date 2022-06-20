import axios from 'axios';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput ,Button, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const Chat = ({ navigation }) => {
    const [conversationMessage, setConversationMessage] = useState(null)
    const userToken = 'xoxp-3648565925605-3651406447987-3688212663504-e228377677a364f3ce296e6488bf6295'
    const conversationName = '1-2-test'
    
    
    //pick
    const [image, setImage] = useState("hello");
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All, //all yaani tsawer , vidéos ...
            allowsEditing: true,
            aspect: [4, 6],
            quality: 1,
        });
        setConversationMessage({...result,name:'hello'})

        setImage(result.uri);        
    };
   
    const postMessageToChannel = async (conversationMessage) => {
       let file = conversationMessage
       console.log('file',file)
        const data = new FormData();
       data.append({
        name: file.name,
        type: file.type,
        uri:image
       });
       console.log('===>',data["_parts"][0]);

        await axios.post('https://slack.com/api/files.upload',data["_parts"][0] , {
            
        headers:{"Content-type": "multipart/form-data", "charset" :"utf-8", "Authorization" : `Bearer ${userToken}`},
        channel: conversationName 
        
       
    })
    .then((response) => {
                console.log('*********************response******************** \n', response.data);
                return response.data
            },
                err => {
                    console.log('*********************error******************** \n', err);
                    return err
                })
}

return (
    <View style={styles.container}>
        
        <Button title="Pick an image from camera roll" onPress={pickImage}  />
        <Image 
            source={{ uri: image }} style={{ width: 300, height: 300 }} />
        {/* <TextInput
            onChange={image => setConversationMessage(image)}
            value={conversationMessage}
            //style={styles.input}
        /> */}
        
        <TouchableOpacity onPress={() => postMessageToChannel(conversationMessage)} style={styles.button}>
            <Text style={styles.buttonText}> Post Image to Conversation</Text>
        </TouchableOpacity>
      
    </View>
); 
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B4E197',
    },

    button: {
        height: 40,
        width: '80%',
        borderRadius: 7,
        marginTop: 10,
        backgroundColor: '#990000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white'
    },
    input: {
        height: 50,
        width: '80%',
        borderColor: '#990000',
        borderWidth: 1,
        marginTop: 30,
        borderRadius: 7,
        padding: 10
    }
});
export default Chat;

/*
import axios from 'axios';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { Text, View, TouchableOpacity, StyleSheet, Alert, TextInput } from 'react-native';
const Chat = ({ navigation }) => {

    let selectedFile; 

    const fileChangedHandler = event => {
        console.log(event.target.files[0]);

    }
    const uploadHandler = () => {
        console.log(selectedFile)
      }
    const [conversationMessage, setConversationMessage] = useState('')
    const userToken = 'xoxp-3648565925605-3651406447987-3688212663504-e228377677a364f3ce296e6488bf6295'
    const conversationName = '1-2-test'
    const postMessageToChannel = async (text) => {
        await axios.post('https://slack.com/api/chat.postMessage',
            {
                channel: conversationName,
                attachments: [{ pretext: "a Message from the App", text: text }]
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
                alert(JSON.stringify(responseJson));
                console.log(responseJson);
            })
            .catch((error) => {
                alert(JSON.stringify(error));
                console.error(error);
            });
    }


    return (
        <>
            <View style={styles.container}>
                <input type='file'
                    onChange={fileChangedHandler} />
                <button onClick={uploadHandler}>Upload!</button>
            </View>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B4E197',
    },

    button: {
        height: 40,
        width: '80%',
        borderRadius: 7,
        marginTop: 10,
        backgroundColor: '#990000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white'
    },
    input: {
        height: 50,
        width: '80%',
        borderColor: '#990000',
        borderWidth: 1,
        marginTop: 30,
        borderRadius: 7,
        padding: 10
    }
});
export default Chat;

*/

