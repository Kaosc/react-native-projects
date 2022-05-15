import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/Reviewdetails";
import Header from '../shared/Header';

const Stack = createStackNavigator()

const tabStyle = {
    marginLeft: 0, 
    marginRight: 0, 
    maxWidth: '100%'
} 

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                options={({ navigation }) => {
                    return { 
                        headerTitleContainerStyle: tabStyle, 
                        headerTitle: () => <Header navigation={navigation} titleName='Home'/>,}
                }}
                name='Home'
                component={Home}
            />
            <Stack.Screen
                options={{headerTitle: 'Review Details', headerTintColor: 'white', headerStyle: {backgroundColor: 'black'}}} 
                name="ReviewDetails" 
                component={ReviewDetails}
            />
        </Stack.Navigator>
    )
}