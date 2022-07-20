import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#062B10',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lightContainer: {
        backgroundColor: '#F9E4D4',
    },
    darkContainer: {
        backgroundColor: '#2C3639',
    },
    scrollView: {
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',


    },
    photoContainer: {
        flex: 1,
      //  backgroundColor: '#062B10', //F9E4D4//2C3639
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    display: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "white",
        width: "70%",
        height: "10%",
        //textAlign:"center",
    },
    camera: {
        flex: 1,
    },
    textstyle: {//Welcome
        fontSize: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginBottom: 20,
        color: '#F4BBBB',
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
        alignSelf: 'flex-start',
        alignItems: 'center',

    },
    text: {//e9leb
        fontSize: 18,
        color: '#F4BBBB',
    },
    preview: {
        alignSelf: 'stretch',
        flex: 0.8,
        margin: 30
    },
    bb: {
        height: 150,
        width: 150,
        borderRadius: 25,
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: '#F4BBBB',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    buttonText: {
        color: '#2C3639',
        fontSize: 20,
        

    },
    Textb:{
        fontSize: 40,
        marginHorizontal: 10,
        marginBottom: 20,
        color: '#F4BBBB',
        marginTop: 15,
        marginBottom: 15,
    },
    vv: {
        height: 35,
        width: 150,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 1,
        backgroundColor: '#F4BBBB',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        flexDirection: 'row-reverse',
    },
    TextVV: {
        color: '#2C3639',
        fontSize: 15

    },
    backk: {
        fontSize: 30,
        color: '#F4BBBB',
        alignSelf: 'flex-start',
        marginLeft: 28

    },
    circle: {
        borderRadius: 50,
        height: 85,
        width: 85,
        backgroundColor: '#F4BBBB',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 20
    },
    icon: {
        margin: '20%',
        position: 'absolute'
    },
    bbj:{
        
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#F4BBBB',
        padding:20,
        marginBottom:30,
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
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

    },
    taswira:{
        width: 300, 
        height: 300,
        
        // overflow:'visible',
        backgroundColor:'pink',
        
        
    },
    inp: {
        height: 50,
        width: '80%',
        borderColor: '#F4BBBB',
        borderWidth: 1,
        marginBottom: 5,
        marginTop: 15,
        borderRadius: 7,
        padding: 10,
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
      },


});

export default styles;
// <Text numberOfLines={1} ellipsizeMode='head'>long long long long text<Text> ---> …long long text