import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ todo, onPressHandler }) {
    return (
      <TouchableOpacity onPress={() => onPressHandler(todo.key)}>
          <View style={styles.items}>
            <MaterialIcons name="delete" size={24} color="black" />
            <Text style={styles.text}> {todo.text} </Text>
          </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    items: {
        backgroundColor: '#C09CFF',
        borderRadius: 10,
        marginTop: 20,
        padding: 15,
        flexDirection: 'row',
    },

    text: {
        fontSize: 18,
        fontWeight: 'bold',
    }
    
})