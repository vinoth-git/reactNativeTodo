import React from "react";
import "react-native-get-random-values";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid";
import ListItem from "./components/ListItems";
import TextInputSec from "./components/TextIinput";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState([
    { id: uuidv4(), text: "drink coffee", isCompleted: true },
    { id: uuidv4(), text: "Breakfast", isCompleted: false },
    { id: uuidv4(), text: "check mails", isCompleted: true },
  ]);
  const AddTodo = (title) => {
    if (title.length > 0) {
      let a = { id: uuidv4(), text: title, isCompleted: false };
      setValue([...value, a]);
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <TextInputSec AddTodo={AddTodo} />
      <ListItem value={value} setValue={setValue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
  },
});
