import { StyleSheet } from "react-native";
import { SolidColor } from "../constants/color";

const HealthMetricCard = ({ title, value, unit, icon }) => (
  <View style={styles.metricCard}>
    <Ionicons name={icon} size={24} color={SolidColor.PrimaryBlue} />
    <Text style={styles.metricTitle}>{title}</Text>
    <View style={styles.metricValueContainer}>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricUnit}>{unit}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  metricsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    justifyContent: "space-between",
  },
  metricCard: {
    backgroundColor: SolidColor.White,
    borderRadius: 12,
    padding: 16,
    margin: 5,
    width: "47%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  metricTitle: {
    fontSize: 14,
    color: SolidColor.GrayText,
    marginTop: 8,
  },
  metricValueContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 4,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: SolidColor.DarkGray,
  },
  metricUnit: {
    fontSize: 12,
    color: SolidColor.GrayText,
    marginLeft: 4,
  },
});

export default HealthMetricCard;
