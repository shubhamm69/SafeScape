// screens/HomeScreen.tsx
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";

interface MenuItem {
  id: number;
  title: string;
  subtitle: string;
  image: any;
}

interface HomeScreenProps {
  navigation: NavigationProp<any>;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "Discover",
    subtitle: "Explore the world",
    image: require("../images/discover.png"),
  },
  {
    id: 2,
    title: "Resources",
    subtitle: "Get helpful resources",
    image: require("../images/resources.png"),
  },
  // {
  //   id: 3,
  //   title: "Profile",
  //   subtitle: "Manage your profile",
  //   image: require("../images/profile.png"),
  // },
];

function HomeScreen({ navigation }: HomeScreenProps) {
  const renderItem = ({ item }: { item: MenuItem }) => (
    <Pressable
      style={styles.menuItem}
      onPress={() => navigation.navigate(item.title)}
    >
      <Image source={item.image} style={styles.menuItemImage} />
      <Text style={styles.menuItemTitle}>{item.title}</Text>
      <Text style={styles.menuItemSubtitle}>{item.subtitle}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to SafeScape</Text>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  menuItem: {
    width: 150,
    height: 230,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  menuItemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  menuItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  menuItemSubtitle: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default HomeScreen;
