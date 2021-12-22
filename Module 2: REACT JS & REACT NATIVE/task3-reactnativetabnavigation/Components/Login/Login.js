import * as React from 'react';
import { Entypo} from '@expo/vector-icons';
import {
    NativeBaseProvider,
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    Input,
    Link,
    Button,
    Icon,
    IconButton,
    HStack,
    Divider,
    Image,
    Center,
    View
} from 'native-base';

export default function Login() {
    return (
        <NativeBaseProvider>
            <Box safeArea flex={1} p="2" py="8" w="90%" mx="auto" my = '10%'>
                <Text style = {{textAlign: 'center', color: 'gray', marginBottom: '30%'}}>English (United States)</Text>
                <Center><Image
                    source={{
                        uri: "https://clipart.info/images/ccovers/1522452762Instagram-logo-png-text.png",
                    }}
                    alt="Alternate Text"
                    size="sm"
                    style = {{width: '70%' }}
                /></Center>
                <VStack space={3} mt="5">
                    <FormControl>
                        <Input placeholder='Phone number, email or username' />
                    </FormControl>
                    <FormControl>
                        <Input type="password" placeholder='Password' />

                    </FormControl>
                    <Button mt="2" backgroundColor='#7ebdf3' _text={{ color: 'white', fontWeight: 'bold' }}>
                        Login
                    </Button>
                    <Text style={{ textAlign: 'center' }}>Forgot your login details? <Text style={{ fontWeight: 'bold' }}>Get help signing in.</Text></Text>
                    <Text style={{ fontWeight: 'bold', color: 'gray', textAlign: 'center' }}>OR</Text>
                    <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}><Entypo name="facebook" size={24} color="#3897f1" style = {{marginRight: '2%'}}/><Text style={{ fontWeight: 'bold', color: '#3897f1' }}>Log in with Facebook</Text></View>
                    <HStack mt="25%" justifyContent="center">
                        <Text fontSize="sm" fontWeight={400} style={{ color: 'gray' }}>
                            Don't have an account?{' '}
                        </Text>
                        <Link
                            _text={{
                                color: 'black',
                                fontWeight: 'medium',
                                fontSize: 'sm',
                                fontWeight: 'bold',
                                textDecorationLine: 'none',
                            }}
                            href="#">
                            Sign Up
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </NativeBaseProvider>
    );
}