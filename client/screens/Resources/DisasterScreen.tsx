import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import DisasterScreenHeader from "../../components/Resources/DisasterScreenHeader";
import EmergencyContactCard from "../../components/Resources/EmergencyContactCard";

const DisasterScreen: React.FC<{ route: any }> = ({ route }) => {
  const { disaster } = route.params;

  return (
    <View style={styles.container}>
      <DisasterScreenHeader
        disasterType={disaster.disasterType}
        description={disaster.description}
      />
      <Text style={styles.sectionTitle}>Causes:</Text>
      <Text style={styles.sectionText}>{disaster.causes}</Text>
      <Text style={styles.sectionTitle}>Safety Tips:</Text>
      <Text style={styles.sectionText}>{disaster.safetyTips}</Text>
      <Text style={styles.sectionTitle}>Emergency Contacts:</Text>
      <FlatList
        data={disaster.emergencyContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EmergencyContactCard
            type={item.type}
            number={item.number}
            disasterId={item.disasterId}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
  },
  sectionText: {
    fontSize: 16,
    marginVertical: 8,
  },
});

export default DisasterScreen;
