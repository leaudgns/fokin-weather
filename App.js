import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}>
        <Text>Hello!</Text>
      </View>
      <View style={styles.blueView}>
        <Text>Nice to meet you</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "black",
    width: "100%",
    textAlign: "center",
  },
  yellowView: {
    flex: 2,
    backgroundColor: "yellow",
  },
  blueView: {
    flex: 4,
    backgroundColor: "blue",
  },
});
