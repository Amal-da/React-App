/*import React, { useState } from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from "../styles";
const Pick = ({ navigation }) => {

    const [image, setImage] = useState(null);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4
                , 6],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View style={styles.container}>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />}
        </View>
    );


}
export default Pick;
*/
//
import React, { useState } from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from "../styles";
const Pick = ({ navigation }) => {

    const [image, setImage] = useState(null);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            aspect: [4, 6],
            quality: 1,
        });
        console.log(result);
        setImage(result.uri);

    };

    return (
        <View style={styles.container}>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />}
        </View>
    );


}
export default Pick;
