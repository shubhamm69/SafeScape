import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackNavigator } from "./StackNavigator";
import ResourcesScreen from "../screens/ResourcesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AlertScreen from "../screens/AlertScreen";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="Resources" component={ResourcesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Alert" component={AlertScreen} />
    </Tab.Navigator>
  );
}
