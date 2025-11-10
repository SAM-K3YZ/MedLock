import React, { useEffect } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  SourceSansPro_400Regular,
  SourceSansPro_600SemiBold,
  SourceSansPro_700Bold,
} from "@expo-google-fonts/source-sans-pro";
import { FONTS } from "../constants/fonts";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const SplashScreenComponent = ({ navigation }) => {
  useEffect(() => {
    // useFonts hook below returns fontsLoaded; effect below will react to that.
    // Nothing to do here synchronously.
  }, []);

  // load fonts using the @expo-google-fonts hook
  const [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold,
    SourceSansPro_700Bold,
  });

  // when fonts are loaded, hide the splash and navigate
  useEffect(() => {
    let mounted = true;
    async function onLoaded() {
      if (!fontsLoaded) return;
      try {
        // small delay for smooth transition
        await new Promise((r) => setTimeout(r, 400));
        if (!mounted) return;
        await SplashScreen.hideAsync();
        navigation.replace("Main", { screen: "HomeTab" });
      } catch (e) {
        console.warn("Error during splash hide/navigation", e);
        try {
          await SplashScreen.hideAsync();
        } catch (_) {}
        navigation.replace("Main", { screen: "HomeTab" });
      }
    }
    onLoaded();
    return () => {
      mounted = false;
    };
  }, [fontsLoaded]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/medlock.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>MedLock</Text>
      <Text style={styles.subtitle}>Your Health, Your Way</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", // Customize your background color
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "50%",
    height: "50%",
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    // use the semibold font from the family we loaded
    fontFamily: FONTS.semibold,
    color: "#3B82F6",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#6B7280",
    fontFamily: FONTS.regular,
  },
});

export default SplashScreenComponent;
