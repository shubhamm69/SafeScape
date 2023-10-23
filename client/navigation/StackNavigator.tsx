import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ResourcesScreen from "../screens/Resources/ResourcesScreen";
import DisasterScreen from "../screens/Resources/DisasterScreen";

const HomeStack = createStackNavigator();
const ResourcesStack = createStackNavigator();

export function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeStackScreen" component={HomeScreen} />
      <HomeStack.Screen
        name="ResourcesStackScreen"
        component={ResourcesScreen}
      />
    </HomeStack.Navigator>
  );
}

export function ResourcesStackNavigator() {
  return (
    <ResourcesStack.Navigator screenOptions={{ headerShown: false }}>
      <ResourcesStack.Screen
        name="ResourcesStackScreen"
        component={ResourcesScreen}
      />
      <ResourcesStack.Screen
        name="DisasterStackScreen"
        component={DisasterScreen}
      />
    </ResourcesStack.Navigator>
  );
}
