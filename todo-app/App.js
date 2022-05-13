import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import 'react-native-get-random-values'; // Necessary for to nanoid. Has to be imported before it.
import { nanoid } from 'nanoid';
import Addtodo from './components/Addtodo';
import Header from './components/Header';
import TodoItem from './components/Todoitem';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'Buy cigarets', key: '1'},
    { text: 'Take a bath', key: '2'},
    { text: 'Clean inside the car', key: '3'},
    { text: 'Take the trash out', key: '4'},
    { text: 'Watch major', key: '5'},
    { text: 'Create a playlist', key: '6'},
    { text: 'Take Fuel', key: '7'},
    { text: 'Get high', key: '8'},
    { text: 'Get the highground', key: '9'},
    { text: 'Take a picture of sky', key: '10'},
    { text: 'Say goodbye', key: '11'},
  ])

  function deleteItem(key) {

    setTodos(prevTodos => {
      return prevTodos.filter(item => item.key != key)
    })

  }

  function sumbitHandler(val) {

    if (val.length > 2) {
      setTodos(prevTodos => {
        return [ {text: val, key: nanoid() }, ...prevTodos ]
      })
    } else {
      Alert.alert('Warning', 'The text must has contain at least 3 character!')
    }

  }

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <View style={styles.container}>

        {/* Header Elements */}
        <Header/>

        <View style={styles.content}>

          {/* Todo Elements */}
          <Addtodo sumbitHandler={sumbitHandler} />

          <View style={styles.list}>

            {/* Todo List Container */}
            <FlatList 
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={todos}
              renderItem={({ item }) => (
                <TodoItem 
                  todo={item} 
                  onPressHandler={deleteItem}
                />
              )}
            />

          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
  },

  content: {
    flex: 1,
    padding: 30,
  },

  list: {
    flex: 1,
    marginTop: 7,
  },

});