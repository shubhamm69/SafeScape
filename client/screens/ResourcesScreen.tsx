import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import axios from "axios";
import DisasterCard from "../components/Resources/disasterCard";

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

function ResourcesScreen() {
  const [data, setData] = useState<DisasterData[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/disaster")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        setData([]);
      });
  }, []);

  console.log(data);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DisasterCard data={item} />}
      />
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
