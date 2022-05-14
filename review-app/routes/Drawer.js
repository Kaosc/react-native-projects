import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './Homestack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{headerShown: false}}>
                <Drawer.Group>
                    <Drawer.Screen
                        name="Home" 
                        component={HomeStack}
                    />
                    <Drawer.Screen
                        name="About" 
                        component={AboutStack}
                    />
                </Drawer.Group>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}