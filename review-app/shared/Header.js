import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({ navigation, titleName }) {

  const openMenu = () => {
    navigation.openDrawer()
  }

  return (
      <View style={styles.header}>
        <View style={styles.header}>
          <MaterialIcons style={styles.icon} name="menu" onPress={openMenu}/>
          <Text style={styles.headerText}>{titleName}</Text>
        </View>
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
      letterSpacing: 1,
      paddingLeft: 45,
      paddingBottom: 2,
    },

    icon: {
      fontSize: 30,
      color:"black",
      position: 'absolute',
      zIndex: 3,
    }

  });