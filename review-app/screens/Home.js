import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Keyboard } from 'react-native';
import 'react-native-get-random-values'
import { nanoid } from 'nanoid'

import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons'
import ReviewForm from './Reviewform';
import Card from '../shared/Card';

export default function Home({ navigation }) {

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);

    const [modalOpen, setModelOpen] = useState(false)

    function deleteReview(id) {
        const newArr = reviews.filter((item) => item.key !== id)
        setReviews(newArr)
    }

    function addReview(review) {
        review.key = nanoid();
        setReviews(prevReviews => {
            return [review, ...prevReviews]
        })
        setModelOpen(false)
    }

    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons style={{...styles.modelToggle, ...styles.modelClose}} name='close' onPress={() => setModelOpen(false)}/>
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons name='add' size={24} style={styles.modelToggle} onPress={() => setModelOpen(true)}/>

            <FlatList
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity  onPress={() => {navigation.navigate('ReviewDetails', {item, delete: () => deleteReview(item.key)})}}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    
    modelToggle : {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#363636',
        padding: 10,
        borderRadius: 10,
        fontSize: 30,
        color: '#ddd',
        alignSelf: 'center',
        textAlign: 'center',
    },

    modelClose: {
        marginTop: 20,
        marginBottom: 0,
    },

    modalContent : {
        flex: 1,
        backgroundColor: '#1A1A1A'
    },

    modelText: {
        color: 'white',
    }
})