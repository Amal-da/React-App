import React, { useState, useEffect, useRef } from 'react';
import { Text, Button, TouchableOpacity, View, SafeAreaView, Image, Alert, TextInput } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { shareAsync } from 'expo-sharing';
import styles from "../styles";
import Chat from './chat';


const Caamera = ({ navigation }) => {
    let cameraRef = useRef();
    const [hasPermission, setHasPermission] = useState(null);// useEffect bech tekhou l permission //useState bech taaref aamal allow wala lew menou taaref taatih l'acces wala le
    //variable lel state esmou hasPermission w setHasPermission fct leha ; useState(null); athika hya par defaut kifeh
    const [type, setType] = useState(CameraType.back);
    const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
    const [photo, setPhoto] = useState();
    useEffect(() => { //suffit taamalha mara kahw maadech tjik
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
            setHasPermission(status === 'granted');
            setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");


        })();
    }, []);

    //permission camera
    if (hasPermission === undefined) {
        return <Text>Requesting permissions...</Text>
    } else if (!hasPermission) {
        return <Text>Permission for camera not granted. Please change this in settings.</Text>
    }

    let takePic = async () => {
        let options = {
            quality: 1,
            base64: true,
            exif: false
        };

        let newPhoto = await cameraRef.current.takePictureAsync(options);
        setPhoto(newPhoto);
    };

    if (photo) {
        let sharePic = () => {
            shareAsync(photo.uri).then(() => {
                setPhoto(undefined);
            });
        };
        let savePhoto = () => {
            MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
                setPhoto(undefined);
            });
        };
        
        return (
            <SafeAreaView style={styles.container}>
                <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
                <Button title="  Share  " onPress={sharePic} />

                {hasMediaLibraryPermission ? <Button title="   Save    " onPress={savePhoto} /> : undefined}
                <Button title="Go back" onPress={() => setPhoto(undefined)} />
                <Button title="Go Chat"   onPress={() => navigation.navigate('Chat')} />

            </SafeAreaView>
            //
        );

    }
    return (
        <View style={{ flex: 1, display: 'flex' }}>
            <Camera style={styles.camera} type={type} ref={cameraRef}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setType(type === CameraType.back ? CameraType.front : CameraType.back);
                        }}>
                        <Text style={styles.text}> Flip </Text>
                        <MaterialIcons name="flip-camera-android" size={30} color="#371B58" />
                    </TouchableOpacity>
                    <View  >
                        <FontAwesome5 name="camera" size={40} color="#CA82FF" onPress={takePic} />
                    </View>
                </View>
            </Camera>
        </View>
    );

}
export default Caamera;



