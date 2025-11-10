import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
// Import tab screens from a dedicated `screens/tabs` folder. This keeps
// tab-specific screens grouped and makes it easy to lazy-load or replace them.
import HomeTab from "../screens/tabs/HomeTab";
import ProfileTab from "../screens/tabs/ProfileTab";
import WalletTab from "../screens/tabs/WalletTab";
import HealthTab from "../screens/tabs/HealthTab";
import PregnancyTab from "../screens/tabs/PregnancyTab";
import { SolidColor, GradientColor } from "../constants/color";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

function TabBarBackground() {
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
    // `lazy` defers mounting a tab's component until the tab is first focused.
    // This reduces the initial JS work and speeds up app startup.
    <Tab.Navigator
      lazy={true}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: SolidColor.Primary_Blue,
        tabBarInactiveTintColor: SolidColor.Gray_Text,
        tabBarStyle: {
          height: 64,
          borderTopWidth: 0,
          backgroundColor: SolidColor.White,
          elevation: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        tabBarBackground: () => <TabBarBackground />,
        // tabBarIcon can be a function that returns different icons
        // depending on the route name. Keep it lightweight.
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HomeTab") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "ProfileTab") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "WalletTab") {
            iconName = focused ? "wallet" : "wallet-outline";
          } else if (route.name === "HealthTab") {
            iconName = focused ? "medical" : "medical-outline";
          } else if (route.name === "PregnancyTab") {
            iconName = focused ? "woman" : "woman-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      {/* Each screen references a tab-specific file under src/screens/tabs.
          Those files re-export the actual screen component and contain
          any tab-only wrappers or logic. */}
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="HealthTab"
        component={HealthTab}
        options={{ tabBarLabel: "Health" }}
      />
      <Tab.Screen
        name="PregnancyTab"
        component={PregnancyTab}
        options={{ tabBarLabel: "Pregnancy" }}
      />
      <Tab.Screen
        name="WalletTab"
        component={WalletTab}
        options={{ tabBarLabel: "Wallet" }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileTab}
        options={{ tabBarLabel: "Profile" }}
      />
    </Tab.Navigator>
  );
}
