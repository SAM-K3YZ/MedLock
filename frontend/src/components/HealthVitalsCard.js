// components/HealthVitalsCard.js
import { StyleSheet, Text, View } from 'react-native';
import theme from '../constants/theme';

export default function HealthVitalsCard({ vital }) {
  if (!vital) return null;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Latest Health Vitals</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Heart Rate:</Text>
        <Text style={styles.value}>
          {vital.heart_rate ?? 'N/A'} {vital.heart_rate ? 'bpm' : ''}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Blood Pressure:</Text>
        <Text style={styles.value}>{vital.blood_pressure ?? 'N/A'}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Temperature:</Text>
        <Text style={styles.value}>
          {vital.temperature ?? 'N/A'} {vital.temperature ? '°C' : ''}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Oxygen Level:</Text>
        <Text style={styles.value}>
          {vital.oxygen_saturation ?? 'N/A'}
          {vital.oxygen_saturation ? '%' : ''}
        </Text>
      </View>

      <Text style={styles.source}>
        Source: {vital.source === 'hospital' ? 'Hospital' : 'User App'}
      </Text>

      <Text style={styles.date}>
        {vital.recordedAt
          ? new Date(vital.recordedAt).toLocaleString()
          : 'Unknown time'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.SolidColor.White,
    padding: 16,
    borderRadius: 16,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    borderWidth: 1,
    borderColor: '#f2f2f2',
  },
  title: {
    fontFamily: theme.FONTS.semibold,
    fontSize: 16,
    marginBottom: 12,
    color: theme.SolidColor.DarkGray,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  label: {
    fontFamily: theme.FONTS.medium,
    color: theme.SolidColor.GrayText,
  },
  value: {
    fontFamily: theme.FONTS.semibold,
    color: theme.SolidColor.DarkGray,
  },
  source: {
    marginTop: 12,
    fontSize: 12,
    color: '#777',
    fontStyle: 'italic',
  },
  date: {
    marginTop: 4,
    fontSize: 11,
    color: '#999',
  },
});
