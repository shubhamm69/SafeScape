import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DisasterCard: React.FC<{ data: DisasterData }> = ({ data }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.disasterType}>{data.disasterType}</Text>
      <Text style={styles.description}>{data.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    padding: 16,
    margin: 16,
  },
  disasterType: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  description: {
    fontSize: 16,
    color: "#666",
  },
});

export default DisasterCard;
