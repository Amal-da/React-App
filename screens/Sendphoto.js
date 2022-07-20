import React, { useState, useEffect, useRef } from 'react';
import { Text, Button, TouchableOpacity, View, SafeAreaView, Image, useColorScheme, TextInput } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { shareAsync } from 'expo-sharing';
import styles from "../styles";
import { Feather } from '@expo/vector-icons';
import reusable from '../reusable';

const Caamera = ({ navigation }) => {
    //mode 
    const colorScheme = useColorScheme();
    const themeContainerStyle =
        colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
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
            <SafeAreaView style={[styles.container, themeContainerStyle]}>

                <Feather name="arrow-left-circle" style={styles.backk} onPress={() => setPhoto(undefined)} />

                <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />

                <TouchableOpacity onPress={() => sharePic()} style={reusable.button('nini')}>
                    <Text style={styles.TextVV}>      Share   </Text>
                    <Feather name="share" size={24} color="#2C3639" />
                </TouchableOpacity>

                {hasMediaLibraryPermission ? <TouchableOpacity onPress={savePhoto} style={reusable.button('nini')}>
                    <Text style={styles.TextVV}>       Save   </Text>
                    <Feather name="save" size={24} color="#2C3639" />
                </TouchableOpacity> : undefined}


            </SafeAreaView>
            //
        );

    }
    return (
        <View style={{ flex: 1, display: 'flex' }}>
            <Camera style={styles.camera} type={type} ref={cameraRef}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        setType(type === CameraType.back ? CameraType.front : CameraType.back);
                    }}>
                    <Text style={styles.text}> Flip </Text>
                    <MaterialIcons name="flip-camera-android" size={30} color="#F4BBBB" />
                </TouchableOpacity>
                <View style={styles.buttonContainer}>
                </View>

                <View style={styles.circle}>
                    <View style={styles.icon}>
                        <FontAwesome5 name="camera" size={50} color="white" onPress={takePic} />
                    </View>
                </View>
            </Camera>
        </View>
    );

}
export default Caamera;



