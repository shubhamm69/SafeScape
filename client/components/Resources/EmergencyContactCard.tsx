import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EmergencyContactCard = ({ type, number }: any) => {
  return (
    <View style={styles.card}>
      <Text style={styles.type}>{type}</Text>
      <Text style={styles.number}>{number}</Text>
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
    marginVertical: 8,
  },
  type: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  number: {
    fontSize: 16,
  },
});

export default EmergencyContactCard;
