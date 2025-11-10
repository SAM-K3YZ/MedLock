import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SolidColor } from "../constants/color";
import { SafeAreaView } from "react-native-safe-area-context";
import HealthMetricCard from "../components/HealthMetricCard";

const HealthScreen = ({ navigation }) => {
  <SafeAreaView>
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Health Dashboard</Text>
        <Text style={styles.subtitle}>Your daily health overview</Text>
      </View>

      <View style={styles.metricsContainer}>
        <HealthMetricCard
          title="Heart Rate"
          value="72"
          unit="bpm"
          icon="heart-outline"
        />
        <HealthMetricCard
          title="Blood Pressure"
          value="120/80"
          unit="mmHg"
          icon="fitness-outline"
        />
        <HealthMetricCard
          title="Temperature"
          value="36.6"
          unit="°C"
          icon="thermometer-outline"
        />
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons
            name="document-text-outline"
            size={24}
            color={SolidColor.White}
          />
          <Text style={styles.actionButtonText}>Health Records</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons
            name="calendar-outline"
            size={24}
            color={SolidColor.White}
          />
          <Text style={styles.actionButtonText}>Appointments</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="medical-outline" size={24} color={SolidColor.White} />
          <Text style={styles.actionButtonText}>Medications</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    padding: 20,
    backgroundColor: SolidColor.White,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: SolidColor.DarkGray,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: SolidColor.GrayText,
  },
  actionsContainer: {
    padding: 20,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: SolidColor.PrimaryBlue,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  actionButtonText: {
    color: SolidColor.White,
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 12,
  },
});

export default HealthScreen;
