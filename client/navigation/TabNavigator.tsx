import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackNavigator } from "./StackNavigator";
import { MaterialIcons } from "@expo/vector-icons";
import ResourcesScreen from "../screens/ResourcesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AlertScreen from "../screens/AlertScreen";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Resources"
        component={ResourcesScreen}
        options={{
          tabBarLabel: "Resources",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="library-books" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Alert"
        component={AlertScreen}
        options={{
          tabBarLabel: "Alert",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="add-alert" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
