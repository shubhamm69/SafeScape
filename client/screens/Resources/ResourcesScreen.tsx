// screens/ResourceScreen.tsx
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import axios from "axios";
import DisasterCard from "../../components/Resources/disasterCard";
import { NavigationProp } from "@react-navigation/native";

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
interface ResourcesScreenProps {
  navigation: NavigationProp<any>;
}
function ResourcesScreen({ navigation }: ResourcesScreenProps) {
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
  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                navigation.navigate("DisasterStackScreen", { disaster: item })
              }
            >
              <DisasterCard data={item} />
            </Pressable>
          )}
        />
      ) : (
        <Text>Loading...</Text>
      )}
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
