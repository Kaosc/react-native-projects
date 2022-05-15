import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/Card';

export default function Reviewdetails({ route }) {

    const item = route.params.item

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.text}>{item.title}</Text>
                <Text style={globalStyles.text}>{item.body}</Text>
                <View style={styles.rating}>
                    <Text style={globalStyles.text}> Rating: </Text>
                    <Image source={images.ratings[item.rating]}/>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
})