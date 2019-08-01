import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Likes from "./src/components/Likes";
import Todo from "./src/components/Todo";
import Flex from "./src/components/Flex";
export default function App() {
  return (
    <View style={styles.container}>
      <Todo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#17859b"
  }
});
