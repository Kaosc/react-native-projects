import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Reviewdetails({ route }) {

    const item = route.params.item

    return (
        <View style={globalStyles.container}>
            <Text>{item.title}</Text>
            <Text>{item.body}</Text>
            <Text>{item.rating}</Text>
        </View>
    )
}