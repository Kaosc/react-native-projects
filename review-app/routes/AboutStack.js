import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import About from '../screens/About';
import Header from '../shared/Header';

const Stack = createStackNavigator();

export default function AboutStack() {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen 
                    options={({ navigation }) => {
                        return {headerTitle: () => <Header navigation={navigation} titleName='About'/>}
                    }}
                    name="About" 
                    component={About}
                />
            </Stack.Group>
        </Stack.Navigator>
    )
}