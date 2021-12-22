import React from "react"
import { Alert } from 'react-native';
import { Button, Center, NativeBaseProvider } from "native-base"
import * as Facebook from 'expo-facebook';


export default function App() {

  async function logIn() {
    try {
      await Facebook.initializeAsync({
        appId: '316891806621584',
      });
      const {
        type,
        token,
        expirationDate,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
      <Button onPress={logIn}>Login with Facebook</Button>
      </Center>
    </NativeBaseProvider>
  )
}
