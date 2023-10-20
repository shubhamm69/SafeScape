import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ResourcesScreen from "../screens/ResourcesScreen";

const HomeResourcesStack = createStackNavigator();

export function StackNavigator() {
  return (
    <HomeResourcesStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeResourcesStack.Screen
        name="HomeStackScreen"
        component={HomeScreen}
      />
      <HomeResourcesStack.Screen
        name="ResourcesStackScreen"
        component={ResourcesScreen}
      />
    </HomeResourcesStack.Navigator>
  );
}
