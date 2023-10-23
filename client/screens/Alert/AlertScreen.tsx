import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const AlertScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.alertText}>You are safe!</Text>
      <Text style={styles.description}>No natural phenomena nearby.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  alertText: {
    fontSize: 28,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
  },
});

export default AlertScreen;
