import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({ navigation, titleName }) {

  const openMenu = () => {
    navigation.openDrawer()
  }

  return (
      <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
        <View style={styles.header}>
          <MaterialIcons style={styles.icon} name="menu" onPress={openMenu}/>
          <View style={styles.headerContainer}>
            <Image style={styles.headerLogo} source={require('../assets/heart_logo.png')} />
            <Text style={styles.headerText}>{titleName}</Text>
          </View>
        </View>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      textAlign: 'center',
    },
    
    icon: {
      position: 'absolute',
      paddingLeft: 9,
      fontSize: 27,
      zIndex: 3,
      color: 'white'
    },

    headerContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center',
    },

    headerText: {
      paddingBottom: 2,
      fontWeight: 'bold',
      fontSize: 21,
      letterSpacing: 1,
      color: 'white'
    },

    headerLogo: {
      position: 'absolute',
      right: 20,
      width: 27,
      height: 27,
    },

  });