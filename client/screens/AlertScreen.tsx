// screens/AlertScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

function AlertScreen() {
  return (
    <View style={styles.container}>
      <Text>Alert Screen</Text>
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

export default AlertScreen;
