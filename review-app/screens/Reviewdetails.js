import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import { globalStyles, images } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons'
import Card from '../shared/Card';

export default function Reviewdetails({ route, navigation }) {

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

            <MaterialIcons name='delete' style={styles.deleteBtn} onPress={() => {route.params.delete(item.key); navigation.goBack();}}/>
            
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
    },

    deleteBtn: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        padding: 7,
        fontSize: 46,
        borderStyle: 'solid',
        borderRadius: 30,
        backgroundColor: '#333'
    }

})