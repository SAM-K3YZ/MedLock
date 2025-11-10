import { SafeAreaView } from "react-native-safe-area-context";
import ProfileScreen from "./ProfileScreen";
import { Button, StyleSheet, Text, View } from "react-native";

const PregnancyScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pregnancy</Text>
      <Text style={styles.subtitle}>Placeholder for Pregnancy tab.</Text>
      <View style={styles.buttonRow}>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("HomeTab")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: { fontSize: 28, fontWeight: "700", marginBottom: 8 },
  subtitle: { fontSize: 16, color: "#444", marginBottom: 20 },
  buttonRow: { width: "80%", marginVertical: 8 },
});

export default PregnancyScreen;
