// screens/HomeScreen.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { NavigationProp } from "@react-navigation/native";

interface HomeScreenProps {
  navigation: NavigationProp<any>;
}

function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Resources")}>
        <Text>Go to Resources</Text>
      </TouchableOpacity>
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

export default HomeScreen;
