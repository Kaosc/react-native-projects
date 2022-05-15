import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import About from '../screens/About';
import Header from '../shared/Header';

const Stack = createStackNavigator();

const tabStyle = {
    marginLeft: 0, 
    marginRight: 0, 
    maxWidth: '100%'
} 

export default function AboutStack() {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen 
                    options={({ navigation }) => {
                        return {
                            headerTitleContainerStyle: tabStyle, 
                            headerTitle: () => <Header navigation={navigation} titleName='About'/>}
                    }}
                    name="About" 
                    component={About}
                />
            </Stack.Group>
        </Stack.Navigator>
    )
}