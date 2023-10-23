import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DisasterScreenHeader = ({ disasterType, description }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{disasterType}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#3498db",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
  description: {
    fontSize: 16,
    color: "#ffffff",
  },
});

export default DisasterScreenHeader;
