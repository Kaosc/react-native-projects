import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Constants from 'expo-constants'

import Home from "../screens/Home";
import ReviewDetails from "../screens/Reviewdetails";
import Header from '../shared/Header';

const Stack = createStackNavigator()

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Group >
                    <Stack.Screen 
                        options={({ navigation }) => {
                            return {headerTitle: () => <Header navigation={navigation} titleName='Home'/>}
                        }}
                        name='Home'
                        component={Home}
                    />
                    <Stack.Screen
                        options={{headerTitle: 'Review Details', headerStyle: {marginTop: 35 }}} 
                        name="ReviewDetails" 
                        component={ReviewDetails}
                    />
            </Stack.Group>
        </Stack.Navigator>
    )
}