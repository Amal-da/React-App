import axios from 'axios';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import RNFS from 'react-native-fs';
import * as mime from 'mime';


const Chat = ({ navigation }) => {
    const [conversationMessage, setConversationMessage] = useState(null)
   const userToken = 'xoxp-3648565925605-3651406447987-3703989459873-78420bd9825200036d627984e394d567'
    const botToken = 'xoxb-3648565925605-3664400776051-MAicSmNe99c8yATuMRGVCMIq'
    
    const conversationName = '1-2-test'
  
  
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
        setConversationMessage({ ...result, name: 'file' })
    };

    //
    
    const postMessageToChannel = async (conversationMessage) => {  
     let photo = conversationMessage
        const trimmedURI = (Platform.OS === "android") ? photo.uri : photo.uri.replace("file://", "");
        const fileName = trimmedURI.split("/").pop();
        console.log('fileName',fileName);
        const media = {
            name: fileName,
            height: photo.height,
            width: photo.width,
            type: mime.getType(trimmedURI),
            uri: trimmedURI
       };
       console.log('media',media);
       console.log('photo',photo);
       var fdata = new FormData();
       fdata.append('file',media );
       fdata.append('channels',  'C03JZB8CCR5'); 
       //fdata.append('channels',  'D03KT5LJ1RP');//nour
       fdata.append('initial_comment',  'second try');
      await axios
      .post("https://slack.com/api/files.upload", fdata, {
        headers: {
          "Content-Type": "multipart/form-data",  Authorization : `Bearer ${userToken}`
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

    return (
        <View style={styles.container}>

            <Button title="Pick an image from camera roll" onPress={pickImage} />
            <Image
                // source={{uri: `data:image/gif;base64,${encodedBase64}`}} 
                source={{ uri: image }} style={{ width: 300, height: 300 }}
                onChange={file => setConversationMessage(file)}
                value={conversationMessage}
            />

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

