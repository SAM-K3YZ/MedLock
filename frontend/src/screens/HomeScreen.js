import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

import theme from "../constants/theme";

const HomeScreen = ({ navigation, username }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <View style={styles.leftSide}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Hello{username}👋</Text>
          </View>
          <View style={styles.subTitle}>
            <Text style={styles.subtitleText}>How are you doing today?</Text>
          </View>
        </View>

        <View style={styles.rightSide}>
          <View style={styles.searchBg}>
            <MaterialIcons
              name="search"
              size={theme.SIZES.xlarge}
              color={theme.SolidColor.SecondaryBlue}
            />
          </View>
          <View style={styles.notificationBg}>
            <MaterialIcons
              name="notifications"
              size={theme.SIZES.xlarge}
              color={theme.SolidColor.SecondaryBlue}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.SolidColor.White,
  },
  top: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //backgroundColor: theme.SolidColor.GreenSuccess,
  },
  leftSide: {
    justifyContent: "center",
  },
  rightSide: {
    flexDirection: "row",
    justifyContent: "center",
  },
  searchBg: {
    borderRadius: theme.SIZES.large,
    padding: theme.SIZES.base,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationBg: {
    borderRadius: theme.SIZES.large,
    padding: theme.SIZES.base,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontFamily: theme.FONTS.semibold,
    fontSize: theme.FONT_SIZES.title,
    color: theme.SolidColor.DarkGray,
  },
  subtitleText: {
    fontSize: theme.FONT_SIZES.medium,
    color: theme.SolidColor.GrayText,
    marginBottom: 20,
  },
  buttonRow: {
    width: "80%",
    marginVertical: 8,
  },
});

export default HomeScreen;
