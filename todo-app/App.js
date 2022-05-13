import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [name, setName] = useState('John')
  const [age, setAge] = useState('21')

  return (
    <View style={styles.container}>
      <Text>My name is {name} </Text>
      <Text>Type your name:</Text>
      <TextInput
        onChangeText={(val) => setName(val)}
        style={styles.input}
        placeholder='e.g Ted'/>

      <Text>My age is {age} </Text>
      <Text>Type your Age:</Text>
      <TextInput 
        onChangeText={(val) => setAge(val)}
        style={styles.input}
        placeholder='e.g 23'
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    width: 120,
  }
});
