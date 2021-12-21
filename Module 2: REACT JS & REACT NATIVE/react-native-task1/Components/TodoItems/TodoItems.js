import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Animated } from "react-native";
import { Swipeable } from "react-native-gesture-handler";


export default function TodoItems({ item, pressHandler }) {


    const leftSwipe = () => {
        return (
          <TouchableOpacity onPress={() => pressHandler(item.key)} style={styles.item2}>
            <Animated.Text style = {{textAlign: "center", color: 'white', fontWeight: 'bold'}}>Delete</Animated.Text>
          </TouchableOpacity>
        )
      }

    return (
        <Swipeable renderLeftActions={leftSwipe}>
        <View onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>
                {item.text}
            </Text>
        </View>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    item: {
        // color: 'white',
        padding: 16,
        marginTop: 16,
        // borderColor: 'white',
        // backgroundColor: '#031956',
        backgroundColor: '#f2f2f2',
        // borderWidth: 1,
        // borderStyle: 'dashed',
        borderRadius: 10,
    },
    item2: {
        // color: 'white',
        padding: 16,
        marginTop: 16,
        marginRight: 5,
        borderRadius: 10,
        backgroundColor: 'red',
        justifyContent: 'center', 
        alignContent: 'center', 
        width: '30%', 
    },
})
