import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import Auth from './Components/Drawer2/Dashboard'
import HomePage from './Components/HomePage/HomePage.js'
import ProfilePage from './Components/ProfilePage/ProfilePage.js'
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
// import Drawer2 from './Components/Drawer2/Drawer2.js'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false}} >
        <Tab.Screen options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity>
              <MaterialIcons name="home-filled" size={25} color="black" />
            </TouchableOpacity>
          )
        }} name="Home" component={HomePage} />
        <Tab.Screen options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity>
              <AntDesign name="search1" size={20} color="black" />
            </TouchableOpacity>
          )
        }} name="Search" component={ProfilePage} />
        <Tab.Screen options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity>
              <FontAwesome name="plus-square-o" size={24} color="black" />
            </TouchableOpacity>
          )
        }} name="addPost" component={ProfilePage} />
        <Tab.Screen options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity>
              <FontAwesome5 name="heart" size={20} color="black" />
            </TouchableOpacity>
          )
        }} name="Notifications" component={ProfilePage} />
        <Tab.Screen options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity>
              <FontAwesome name="user-circle-o" size={24} color="black" />
            </TouchableOpacity>
          )
        }} name="Auth" component={Auth} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icons: {
    width: 30,
    height: 30,
    marginRight: 10,
  }
})