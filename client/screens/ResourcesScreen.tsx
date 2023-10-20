// screens/ResourcesScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

function ResourcesScreen() {
  return (
    <View style={styles.container}>
      <Text>Resources Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ResourcesScreen;
