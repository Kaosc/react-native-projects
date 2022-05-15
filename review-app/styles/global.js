import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({

    container: {
        marginLeft: 0,
        marginRight: 0,
        flex: 1,
        padding: 21,
        backgroundColor: '#1A1A1A'
    },

    titleText : {
        fontFamily: 'source-bold',
        fontSize: 17,
        color: 'white',
    },

    text: {
        color: 'white',
    },

    paragraph: {
        marginVertical: 7,
        lineHeight: 21,
        fontSize: 15,
        color: 'white',
        fontFamily: 'source-regular',
    },

    input: {
        color:'white',
        marginBottom: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },

    errorText: {
        color: 'red', 
        marginBottom: 15,
    }
});

export const images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
}