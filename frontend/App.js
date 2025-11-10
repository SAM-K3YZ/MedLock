import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./src/navigation/AppNavigation";
import { FONTS } from "./src/constants/fonts";
import theme from "./src/constants/theme";

import { fetchCategories } from "./api";

export default function App() {
  useEffect(() => {
    fetchCategories();
  }, []);

  if (Text && Text.defaultProps == null) {
    Text.defaultProps = {};
  }
  if (Text && Text.defaultProps && Text.defaultProps.style == null) {
    Text.defaultProps.style = { fontFamily: FONTS.regular };
  }
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AppNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.SolidColor.White,
    alignItems: "center",
    justifyContent: "center",
  },
});
