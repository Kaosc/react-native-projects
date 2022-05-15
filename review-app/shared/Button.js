import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function FlatButton({ text, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.text}> { text } </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        shadowColor: 'white',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 2,
        shadowRadius: 1,
        borderStyle: 'solid',
        borderWidth: 1,
    },

    button: {
        borderRadius: 7,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#9E9E9E',
    },

    text: {
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 17,
        textAlign: 'center',
    }
    
})