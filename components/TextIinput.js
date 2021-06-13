import React from "react";
import { StyleSheet, TextInput, View, Pressable, Text } from "react-native";

export default function TextInputSec({AddTodo}) {
  const [title, setText] = React.useState("");
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => setText(text)}
        placeholder={"Add Todo..."}
        style={styles.textInput}
        placeholderTextColor={"#000"}
        value={title}
      />
      <Pressable
        style={styles.textBtn}
        onPress={() => {
            AddTodo(title);
            setText('');
        }}
      >
        <Text style={styles.txt}>Add</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: 14,
    borderWidth: 1,
    borderRadius: 12,
  },
  textInput: {
    height: 50,
    fontSize: 16,
    textAlign: "center",
    flex: 1,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  textBtn: {
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: "#3d84b8",
    textAlign: "center",
    width: 100,
  },
  txt: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
