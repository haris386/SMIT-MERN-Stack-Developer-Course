import React from "react";
// import { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
 
export default function Header() {
    return (
        <View style = {styles.header}>
            <Text style = {styles.title}>Welcome to TodoApp</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 25,
        backgroundColor: '#4044c9',
        marginTop: 40
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
});