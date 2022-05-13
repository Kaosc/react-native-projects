import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

export default function Addtodo({ sumbitHandler }) {

    const [text, setText] = useState('')

    const changeHandler = (val) => {
        setText(val)
    }
    
    return (
        <View>
            <TextInput
                style={styles.item} 
                placeholder='type new todo here'
                onChangeText={changeHandler} // its automatically passes the value
            />
            <Button onPress={() => sumbitHandler(text)} title='Add' color='grey'/>
        </View>
    )
}

const styles = StyleSheet.create({
    
    item: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#fff',
        borderBottomColor: 'grey',
        marginBottom: 20,
        height: 50,
        paddingLeft: 20,
        fontSize: 19,
        fontWeight: 'bold',
    }

})