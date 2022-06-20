import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B4E197',
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
    },
    textstyle: {//Welcome
        fontSize: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginBottom: 150,
        color: '#990000',
    },
    buttonContainer: { //l container mtaa l cam
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,// li aal ajneb
    },
    button: {//e9leb
        flex: 0,
        //alignSelf: 'flex-end',
        alignSelf: 'flex-end',
        alignItems: 'center',

    },
    text: {//e9leb
        fontSize: 18,
        color: '#CAB8FF',
    },
    preview: {
        alignSelf: 'stretch',
        flex: 0.8,
        margin: 30
    },

});
export default styles;