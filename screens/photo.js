import { View, TouchableOpacity, Text, ScrollView, useColorScheme } from "react-native";
import styles from "../styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import reusable from "../reusable";



const Photo = ({ navigation }) => {
    //mode
    const colorScheme = useColorScheme();
    const themeContainerStyle =
        colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    //btn
    const arr = [
        {
            id: 1,
            icon: 'camera-plus',
            text: 'Take A photo',
            comp: 'photo',
            styles: {
                height: 150,
                width: 150,
                borderTopLeftRadius: 25,
                marginTop: 15,
                marginBottom: 15,
                backgroundColor: '#F4BBBB',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 20,
            }
        },
        {
            id: 2,
            icon: 'chat',
            text: ' Go to Chat',
            comp: 'Chat',
            styles: {
                height: 150,
                width: 150,
                borderTopRightRadius: 25,
                marginTop: 15,
                marginBottom: 15,
                backgroundColor: '#F4BBBB',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 20,
            },
        },
        {
            id: 3,
            icon: 'counter',
            text: 'Counter',
            comp: 'Count',
            styles: {
                height: 150,
                width: 150,
                marginTop: 15,
                marginBottom: 15,
                backgroundColor: '#F4BBBB',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 20,
            },

        },
        {
            id: 4,
            icon: 'calculator',
            text: 'Calculator',
            comp: 'Chat',
            styles: {
                height: 150,
                width: 150,
                marginTop: 15,
                marginBottom: 15,
                backgroundColor: '#F4BBBB',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 20,
            },
        },
        {
            id: 5,
            icon: 'calendar',
            text: 'calendar',
            comp: 'Chat',
            styles: {
                height: 150,
                width: 150,
                marginTop: 15,
                marginBottom: 15,
                backgroundColor: '#F4BBBB',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 20,
            },
        },
        {
            id: 6,
            icon: 'phone',
            text: 'Phone',
            comp: 'Chat',
            styles: {
                height: 150,
                width: 150,
                marginTop: 15,
                marginBottom: 15,
                backgroundColor: '#F4BBBB',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 20,
            },

        },
        {
            id: 7,
            icon: 'netflix',
            text: 'Netflix',
            comp: 'Chat',
            styles: {
                height: 150,
                width: 150,
                marginTop: 15,
                marginBottom: 15,
                backgroundColor: '#F4BBBB',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 20,
            },
        },
        {
            id: 8,
            icon: 'shopping',
            text: 'Shop',
            comp: 'Chat',
            styles: {
                height: 150,
                width: 150,
                marginTop: 15,
                marginBottom: 15,
                backgroundColor: '#F4BBBB',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 20,
            },
        },
        {
            id: 9,
            icon: 'account',
            text: 'Profil',
            comp: 'Chat',
            styles: {
                height: 150,
                width: 150,
                borderBottomLeftRadius: 25,
                marginTop: 15,
                marginBottom: 15,
                backgroundColor: '#F4BBBB',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 20,
            },
        },
        {
            id: 10,
            icon: 'account-circle',
            text: 'Account',
            comp: 'Chat',
            styles: {
                height: 150,
                width: 150,
                borderBottomRightRadius: 25,
                marginTop: 15,
                marginBottom: 15,
                backgroundColor: '#F4BBBB',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 20,
            },
        },

    ];
    buttonsListArr = arr.map(obj =>
        <TouchableOpacity onPress={() => navigation.navigate(obj.comp)} key={obj.id} style={obj.styles} >
            <MaterialCommunityIcons name={obj.icon} size={64} color="#2C3639" />
            < Text style={styles.buttonText}> {obj.text}  </Text>
        </TouchableOpacity>
    );

    return (

        <View style={[styles.photoContainer, themeContainerStyle]}>
            <ScrollView>
                <View style={reusable.pt(50)}></View>
                <View style={styles.scrollView}>
                    {buttonsListArr}
                </View>
                <View style={reusable.pt(50)}></View>
            </ScrollView>
        </View>
    );
}

export default Photo;





















































































































































































































//original barcha 
/*import { Button, View, TouchableOpacity, Text, ScrollView } from "react-native";
import styles from "../styles";
import { Fontisto, FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';
import reusable from "../reusable";

const Photo = ({ navigation }) => {
    return (

        <View style={styles.photoContainer}>
            <ScrollView>
                <View style={reusable.pt(50)}></View>
                <View style={styles.scrollView}>
                    <TouchableOpacity onPress={() => navigation.navigate('photo')} style={styles.bb} >
                        <MaterialIcons name="add-a-photo" size={64} color="#062B10" />
                        < Text style={styles.buttonText}> Take A photo </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={styles.bbr} >
                        <Entypo name="chat" size={64} color="#062B10" />
                        < Text style={styles.buttonText}> Go to Chat </Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={styles.bb3} >
                        <Entypo name="list" size={64} color="#062B10" />
                        < Text style={styles.buttonText}> To Do Liste </Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={styles.bb3} >
                        <Entypo name="calculator" size={64} color="#062B10" />
                        < Text style={styles.buttonText}>  calculator  </Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={styles.bb3} >
                        <FontAwesome name="calendar" size={64} color="#062B10" />
                        < Text style={styles.buttonText}> calendar  </Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={styles.bb3} >
                        <Fontisto name="phone" size={58} color="#062B10" />
                        < Text style={styles.buttonText}> Phone </Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={styles.bb3} >
                        <Fontisto name="netflix" size={62} color="#062B10" />
                        < Text style={styles.buttonText}> Netflix </Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={styles.bb3} >
                        <Fontisto name="shopify" size={64} color="#062B10" />
                        < Text style={styles.buttonText}> Shop </Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={styles.bbbl} >
                        <FontAwesome name="user" size={64} color="#062B10" />
                        < Text style={styles.buttonText}> Profil  </Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={styles.bbb} >
                        <Fontisto name="player-settings" size={64} color="#062B10" />
                        < Text style={styles.buttonText}> Settings </Text>

                    </TouchableOpacity>
                </View>
                <View style={reusable.pt(50)}></View>
            </ScrollView>
        </View>
    );
}

export default Photo;
*/






































































































































