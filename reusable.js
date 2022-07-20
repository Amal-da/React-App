import { StyleSheet } from 'react-native';
const Reusable = StyleSheet.create({
    container: {
        marginLeft: '10%',
        marginRight: '10%',
        width: '100%'
    },
    Title1:
    {
        fontSize: 36,
    },
    Title2:
    {
        fontSize: 28,
    },
    Title3:
    {
        fontSize: 20,
    },
    btnBlock: {
        width: '100%',
        borderRadius: 10,
    },

})

const padding = function (padding) {
    return {
        padding: padding,
    }
}
const pt = function (padding) {
    return {
        paddingTop: padding,
    }
}
const button = function (color) {
    switch (color) {
        case 'warning':
            return {
                backgroundColor: '#fff',
                color: 'black'
            }
        case 'primary':
            return {
                backgroundColor: '#003399',
                color: '#fff',
                padding: 10,
                paddingRight: 30,
                paddingLeft: 30,
                margin: 10,
                alignItems: 'center',
                flexDirection: 'row-reverse',
                borderRadius: 10,
            }
        case 'success':
            return {
                backgroundColor: '#fff',
                color: 'black'
            }
        case 'danger':
            return {
                backgroundColor: '#fff',
                color: 'black'
            }
        case 'nini':
            return {
                backgroundColor: '#F4BBBB',
                color: '#062C30',
                padding: 10,
                paddingRight: 30,
                paddingLeft: 30,
                margin: 10,
                alignItems: 'center',
                flexDirection: 'row-reverse',
                borderRadius: 10,
            }

        default:
            return {
                backgroundColor: '#003399',
                color: 'white'
            }
    }
}
export default { Reusable, padding, pt, button };