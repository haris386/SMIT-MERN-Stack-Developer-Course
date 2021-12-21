import {Input, NativeBaseProvider, Button, Icon } from "native-base";
import { Ionicons, MaterialIcons} from '@expo/vector-icons';
import React from "react";
import { Text, ScrollView, ImageBackground, Dimensions, View, StyleSheet } from 'react-native'



const Login = ({ navigation }) => {
    return (
        <NativeBaseProvider>
            <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }}
                showsVerticalScrollIndicator={false}>
                <ImageBackground
                    source={require('../Login/bg.jpg')}
                    style={{ height: Dimensions.get('window').height / 3 }}>
                    <View style={styles.brandView}>
                        <Ionicons name="fast-food-outline" size={50} color="white" />
                        <Text style={styles.brandViewText}>Food Funday</Text>
                    </View>
                </ImageBackground>
                <View style={styles.bottomView}>
                    <View style={{ padding: 40 }}>
                        <Text style={{ color: '#4632A1', fontSize: 34, textAlign: 'center' }}>Welcome</Text>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 3 }}>Email</Text>
                            <Input
                                variant = "rounded"
                                w={{
                                    base: "100%",
                                    md: "25%",
                                }}
                                InputRightElement={
                                    <Icon
                                        as={<MaterialIcons name="account-circle" />}
                                        size={6}
                                        mr="2"
                                        color="muted.400"
                                    />
                                }
                                placeholder="abc@gmail.com"
                            />
                            <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 10, marginLeft: 3 }}>Password</Text>
                            <Input
                                variant = "rounded"
                                w={{
                                    base: "100%",
                                    md: "25%",
                                }}
                                InputRightElement={
                                    <Icon
                                        as={<MaterialIcons name="lock" />}
                                        size={6}
                                        mr="2"
                                        color="muted.400"
                                    />
                                }
                                placeholder="********"
                            />
                        </View>
                        <Text style={{ marginTop: 10 }}>
                            Not a member?
                            <Text style={{ color: 'red', fontStyle: 'italic' }}  onPress={() => navigation.navigate('SignUp')}>  Sign Up</Text>
                        </Text>
                        <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Button 
                                endIcon={<Icon as={Ionicons} name="checkmark-done-circle-outline" size="md" />} style = {styles.loginBtn}
                            ><Text style = {{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Login</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </NativeBaseProvider>
    );
};

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
        width: '80%',
        justifyContent: 'center',
        borderRadius: 50,
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

export default Login;