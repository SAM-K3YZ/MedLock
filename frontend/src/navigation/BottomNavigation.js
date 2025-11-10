import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SolidColor, GradientColor } from "../constants/Color";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import HomeTab from "../screens/tabs/HomeTab";
import WalletTab from "../screens/tabs/WalletTab";
import ProfileTab from "../screens/tabs/ProfileTab";

const Tab = createBottomTabNavigator();

function TabBarBackground() {
  // optional: use a gradient background behind the tab bar
  return (
    <LinearGradient
      colors={GradientColor.BackgroundGradient}
      start={[0, 0]}
      end={[1, 1]}
      style={{ flex: 1 }}
    />
  );
}

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: SolidColor.White,
        tabBarStyle: {
          height: 70,
          backgroundColor: SolidColor.PrimaryBlue, // fallback color
          borderTopWidth: 0,
        },
        tabBarBackground: () => <TabBarBackground />,
        tabBarIcon: ({ color, size }) => {
          // return icons based on route.name
          let name = "home";
          if (route.name === "Profile") name = "person";
          if (route.name === "Wallet") name = "wallet";
          return <Ionicons name={name} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Wallet" component={WalletTab} />
      <Tab.Screen name="Profile" component={ProfileTab} />
    </Tab.Navigator>
  );
}
