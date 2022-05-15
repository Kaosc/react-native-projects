import React from 'react';
import { StyleSheet, View } from "react-native";

export default function Card(props) {
    return (
        <View style={styles.card}> 
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 7,
        marginHorizontal: 2,
        padding: 10,
        borderRadius: 7,
        elevation: 3,
        backgroundColor: '#000',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#fff',
        shadowOpacity: 0.4,
        shadowRadius: 5,
    },

    cardContent: {
        marginHorizontal: 10,
        marginVertical: 4,
    }
})