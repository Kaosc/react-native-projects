import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({ navigation, titleName }) {

  const openMenu = () => {
    navigation.openDrawer()
  }

  return (
    <View style={styles.header}>
      <MaterialIcons style={styles.icon} name="menu" size={24} color="black" onPress={openMenu}/>
      <Text style={styles.headerText}>{titleName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    header: {
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },

    headerText: {
      fontWeight: 'bold',
      fontSize: 21,
      color: '#333',
      letterSpacing: 1,
      paddingLeft: 40,
      left: 0,
      paddingBottom: 2,
    },

    icon: {
      position: 'absolute',
      width: 60,
      zIndex: 3,
    }

  });