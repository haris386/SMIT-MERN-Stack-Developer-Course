import * as React from 'react';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ProfilePage from '../ProfilePage/ProfilePage';

const Drawer = createDrawerNavigator();

export default function Auth() {
    return (

        <Drawer.Navigator screenOptions={{ headerShown: false}}>
            <Drawer.Screen name="user123" component={ProfilePage} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="SignUp" component={SignUp} />
        </Drawer.Navigator>

    );
}