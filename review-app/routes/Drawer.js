import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './Homestack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();

const drawerStyles = {
    headerShown: false, 
    swipeEnabled: false, 
    drawerActiveTintColor: 'white',
    drawerInactiveTintColor: '#363636',
    drawerStyle: {backgroundColor: 'black'}
}

export default function DrawerNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={drawerStyles}>
                    <Drawer.Screen 
                        name="Default" 
                        component={HomeStack}
                    />
                    <Drawer.Screen
                        name="About" 
                        component={AboutStack}
                    />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}