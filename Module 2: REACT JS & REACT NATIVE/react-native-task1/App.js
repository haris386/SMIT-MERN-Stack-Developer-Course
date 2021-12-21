import React from "react";
import { useState } from "react";
import { ImageBackground, View, StyleSheet, Text, FlatList } from "react-native";
import Header from "./Components/Header/Header";
import TodoItems from "./Components/TodoItems/TodoItems";
import AddTodo from "./Components/AddTodo/AddTodo";
function App() {
  const [todos, setTodos] = useState([
    { text: 'a', key: '1' },
    { text: 'b', key: '2' },
    { text: 'c', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos]
    })
  }

  return (
    <View style={styles.container}>
      {/* <ImageBackground source={require('./bg2.jpg')} style={styles.backgroundImage} > */}
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* to form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItems item={item} pressHandler={pressHandler} />
              )} />
          </View>
        </View>
      {/* </ImageBackground> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#344fa1',
    backgroundColor: 'white'
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
  backgroundImage: {
    flex: 1,
    marginTop: 40
  }
});

export default App;