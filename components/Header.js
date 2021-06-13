import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textColor}>Todo</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "#4ca1a3",
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  textColor: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});
