import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}> Todos </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
    header: {
        height: 80,
        paddingTop: 22,
        backgroundColor: '#6D3B80',
    },

    title: {
        paddingLeft: 20,
        textAlign: 'left',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 1,
    }
    
})