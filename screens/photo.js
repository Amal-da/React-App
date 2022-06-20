import { Button, View } from "react-native";
import styles from "../styles";

const Photo = ({ navigation }) => {
    return (
        
        <View style={styles.container}>
            <Button
                title="Take A photo"
                onPress={() => navigation.navigate('Caamera')}
            />
            <Button
                title="  Go to Chat  "
               onPress={() => navigation.navigate('Chat')}
            />
             <Button
                title="  Pick Photo  "
               onPress={() => navigation.navigate('Pick')}
            />
           
            
        </View>
    );
}

export default Photo;