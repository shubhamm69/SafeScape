import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackNavigator, ResourcesStackNavigator } from "./StackNavigator";
import { MaterialIcons } from "@expo/vector-icons";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import AlertScreen from "../screens/Alert/AlertScreen";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Resources"
        component={ResourcesStackNavigator}
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
