import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './Homestack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{
                headerShown: false, 
                swipeEnabled: false, 
                drawerActiveTintColor: 'white',
                drawerInactiveTintColor: '#363636',
                drawerStyle: {backgroundColor: 'black'}}}>
                    <Drawer.Screen 
                        name="Home" 
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