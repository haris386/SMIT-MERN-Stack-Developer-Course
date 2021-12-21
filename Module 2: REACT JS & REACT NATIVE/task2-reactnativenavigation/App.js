import * as React from 'react';
import { Input, NativeBaseProvider, Button } from "native-base";
import { Text, ScrollView, ImageBackground, Dimensions, View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}


        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerBackVisible: false,
            }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  brandView: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  brandViewText: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  bottomView: {
    flex: 1.5,
    backgroundColor: '#ffffff',
    bottom: 90,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  loginBtn: {
    alignSelf: 'center',
    backgroundColor: '#4632A1',
    width: Dimensions.get('window').width / 2,
    justifyContent: 'center'
  },
  shadowbtn: {
    shadowColor: "aqua",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    borderRadius: 50,
    width: 100
  }
});

// // In App.js in a new project

// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Login from './Component/Login/Login';
// import SignUp from './Component/SignUp/SignUp';

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Signup" component={SignUp} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;