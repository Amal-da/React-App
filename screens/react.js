import { View, TouchableOpacity, Text, ScrollView, useColorScheme, Button, Image } from "react-native";
import styles from "../styles";
import { FontAwesome5 } from '@expo/vector-icons';
import reusable from "../reusable";
import axios from 'axios';
import { useEffect, useState } from "react";
import { TextInput } from "react-native-gesture-handler";


const Reaction = ({ navigation }) => {

    const colorScheme = useColorScheme();
    const themeContainerStyle =
        colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    const [rea, setRea] = useState([]);

    const userToken = 'xoxp-3648565925605-3651406447987-3703989459873-78420bd9825200036d627984e394d567'
    const react = async () => {

        await axios.get(`https://slack.com/api/reactions.list`,
            {
                headers: { "Content-type": "application/x-www-form-urlencoded", "charset": "utf-8", "Authorization": `Bearer ${userToken}` }
            }
        )
            .then((response) => {
                if (response.data && response.data.items) {
                    let res = []

                    console.log('response.data.items');
                    console.log(response.data.items);
                    response.data.items.map(async (el) => {
                        let count = 0
                        el.message.reactions.map((el) => {
                            count = count + el.count
                        })
                        res.push({
                            reactions: el.message.reactions,
                            attachments: el.message.attachments ? el.message?.attachments[0]?.text : null,
                            channel: el.channel,
                            message: el.message.text,
                            file: el.message.files,
                            urlprivate: el.message.files ? el.message?.files[0]?.url_private : null,
                            per: el.message.files ? el.message?.files[0]?.permalink : null,
                            teamId: el.message.files ? el.message?.files[0]?.permalink_public?.split('https://slack-files.com/')[1].split('-')[0] : null,
                            fileId: el.message.files ? el.message?.files[0]?.permalink_public?.split('https://slack-files.com/')[1].split('-')[1] : null,
                            pubSecret: el.message.files ? el.message?.files[0]?.permalink_public?.split('https://slack-files.com/')[1].split('-')[2] : null,
                            fileName: el.message.files ? el.message?.files[0]?.name : null,
                            Count: el.message.reactions ? count : null,
                        })
                        count = 0
                    })

                    setRea(res)
                }
            },
                err => {
                    console.log('*********************error******************** \n', err);
                    return err
                }
            )
    };


    useEffect(() => {
        react();
    }, []);
    const List = rea.map((obj, i) =>
        <View key={i}>
            < Text style={styles.Textb}> {obj.attachments} </Text>
            < Text numberOfLines={1} style={styles.Textb}> {obj.message} </Text>
            <Image source={(obj.teamId && obj.fileId && obj.fileName && obj.pubSecret) ? { uri: "https://files.slack.com/files-pri/" + obj.teamId + "-" + obj.fileId + "/" + obj.fileName + "?pub_secret=" + obj.pubSecret } : require('../assets/Fast_text.png')} style={{ width: 305, height: 159 }} />
            < Text style={styles.Textb}> {obj.Count} </Text>
        </View>

    );
    return (
        <View style={[styles.photoContainer, themeContainerStyle]}>
            <ScrollView>
                <View style={reusable.pt(50)}></View>
                <View style={styles.scrollView}>
                    {/* {rea.map((obj, i) =>
                        <>
                            <View key={i}>
                                <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={{ width: 305, height: 159 }} />
                                <Image source={(obj.teamId && obj.fileId && obj.fileName && obj.pubSecret) ? { uri: "https://files.slack.com/files-pri/" + obj.teamId + "-" + obj.fileId + "/" + obj.fileName + "?pub_secret=" + obj.pubSecret } : require('../assets/icon.png')} style={{ width: 305, height: 159 }} />
                                <Text>https://files.slack.com/files-pri/${obj.teamId}-${obj.fileId}/${obj.fileName}?pub_secret=${obj.pubSecret}</Text>
                                < Text numberOfLines={1} style={styles.Textb}> {obj.message} </Text>
                            </View>
                        </>
                    )} */}
                    {List}
                </View>
                <View style={reusable.pt(50)}></View>
            </ScrollView>
        </View>

    );
}
export default Reaction;




