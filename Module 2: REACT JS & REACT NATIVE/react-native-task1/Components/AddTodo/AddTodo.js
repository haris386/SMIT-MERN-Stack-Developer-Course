import React from 'react'
import { useState } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements'


export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('')
    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View style={styles.main}>
            <TextInput
                style={styles.input}
                placeholder='new todo...'
                onChangeText={(changeHandler)}
            />

            {/* <Button onPress={() => submitHandler(text)} title='add todo' color='#4044c9' /> */}
            <Icon
                // containerStyle= {{position: 'relative', right: 15}}
                size={25}
                reverse
                raised
                name='add-circle'
                type='ionicon'
                color='#3f4acf'
                onPress={() => submitHandler(text)} />
            {/* <TouchableOpacity onPress={() => submitHandler(text)} title='add todo' style={styles.loginBtn} >
                <Text style={styles.loginText}>Add Todo</Text>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        // flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 'auto'
    },
    input: {
        width: '70%',
        // marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#4044c9',
        marginTop: 5,
        marginRight: 10
    },
    // loginText: {
    //     color: 'white'
    // },
    // loginBtn: {
    //     width: "40%",
    //     borderRadius: 20,
    //     height: 50,
    //     alignItems: "center",
    //     justifyContent: "center",
    //     marginTop: 40,
    //     backgroundColor: "#5b71b4",
    // }
})
