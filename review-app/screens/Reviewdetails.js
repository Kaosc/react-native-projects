import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Reviewdetails({ route }) {

    const item = route.params.item

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.text}>{item.title}</Text>
            <Text style={globalStyles.text}>{item.body}</Text>
            <Text style={globalStyles.text}>{item.rating}</Text>
        </View>
    )
}