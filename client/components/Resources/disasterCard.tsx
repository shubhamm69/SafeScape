import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface DisasterData {
  id: string;
  disasterType: string;
  description: string;
  causes: string;
  safetyTips: string[];
  emergencyContacts: {
    id: string;
    type: string;
    number: string;
    disasterId: string;
  }[];
}

const DisasterCard: React.FC<{ data: DisasterData }> = ({ data }) => {
  return (
    <View style={styles.card}>
      <Text>{data.disasterType}</Text>
      <Text style={styles.description}>{data.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 16,
    margin: 16,
  },
  disasterType: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
  },
});

export default DisasterCard;
