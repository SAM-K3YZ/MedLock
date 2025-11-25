import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

import theme from '../constants/theme';
import { fetchVitals } from '../api/fetchVitalsApi';
import { fetchPatient } from '../api/fetchPatientApi'; // ← ADD THIS
import HealthVitalsCard from '../components/HealthVitalsCard';

const HomeScreen = ({ navigation }) => {
  const [vitals, setVitals] = useState([]);
  const [patientName, setPatientName] = useState('User');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  // === Load Patient Name ===
  const loadPatient = useCallback(async () => {
    try {
      const patient = await fetchPatient();
      if (patient?.firstname) {
        setPatientName(patient.firstname);
      }
    } catch (err) {
      console.error('loadPatient error:', err);
      // Keep default 'User'
    }
  }, []);

  // === Load Vitals ===
  const loadVitals = useCallback(async (isRefresh = false) => {
    try {
      if (!isRefresh) setLoading(true);
      setError(null);

      const data = await fetchVitals();
      setVitals(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('loadVitals error:', err);
      setError('Failed to load vitals');
      setVitals([]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  // === Initial Load (Patient + Vitals) ===
  useEffect(() => {
    loadPatient();
    loadVitals();
  }, []);

  // === Pull to Refresh ===
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await Promise.all([loadPatient(), loadVitals(true)]);
  }, [loadPatient, loadVitals]);

  // === Loading ===
  if (loading && !refreshing) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2e8b57" />
        <Text style={styles.loadingText}>Loading your data...</Text>
      </View>
    );
  }

  // === Error ===
  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
        <Text style={styles.retryText} onPress={onRefresh}>
          Tap to retry
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[theme.SolidColor.SecondaryBlue]}
            tintColor={theme.SolidColor.SecondaryBlue}
          />
        }
        showsVerticalScrollIndicator={false}
      >
        {/* === HEADER === */}
        <View style={styles.top}>
          <View style={styles.emergencyContainer}>
            <View style={styles.emergencyLeft}>
              <FontAwesome5
                name="ambulance"
                color={theme.SolidColor.White}
                size={theme.SIZES.medium}
              />
            </View>
            <View style={styles.emergencyRight}>
              <Text style={styles.emergencyText}>Emergency Services</Text>
              <Text style={styles.emergencySubtext}>
                24/7 Available - Call Now
              </Text>
            </View>
          </View>

          <View style={styles.greetingsContainer}>
            <View style={styles.greetingsLeft}>
              <Text style={styles.titleText}>Hello {patientName}!</Text>
              <Text style={styles.subtitleText}>How are you doing today?</Text>
            </View>

            <View style={styles.greetingsRight}>
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
        </View>

        {/* === VITALS CARD === */}
        <View style={styles.healthVitalsContainer}>
          <Text style={styles.healthVitalsText}>Vitals</Text>

          {vitals.length > 0 ? (
            <HealthVitalsCard key={vitals[0]._id} vital={vitals[0]} />
          ) : (
            <Text style={styles.empty}>
              No vitals recorded yet. Pull down to refresh.
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.SolidColor.White,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 12,
    color: '#666',
    fontSize: 16,
  },
  errorText: {
    color: theme.SolidColor.RedError,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  retryText: {
    color: theme.SolidColor.SecondaryBlue,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  top: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  emergencyContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.SIZES.medium,
    borderRadius: theme.SIZES.small,
    backgroundColor: theme.SolidColor.RedError,
  },
  emergencyLeft: {
    marginRight: theme.SIZES.medium,
  },
  emergencyRight: {
    alignItems: 'center',
  },
  emergencyText: {
    fontFamily: theme.FONTS.bold,
    fontSize: theme.FONT_SIZES.medium,
    color: theme.SolidColor.White,
  },
  emergencySubtext: {
    fontFamily: theme.FONTS.regular,
    color: theme.SolidColor.White,
    fontSize: theme.FONT_SIZES.medium,
  },
  greetingsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  greetingsLeft: {
    flex: 1,
  },
  greetingsRight: {
    flexDirection: 'row',
    gap: 12,
  },
  searchBg: {
    borderRadius: theme.SIZES.large,
    padding: theme.SIZES.base,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBg: {
    borderRadius: theme.SIZES.large,
    padding: theme.SIZES.base,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: theme.FONTS.semibold,
    fontSize: theme.FONT_SIZES.title,
    color: theme.SolidColor.DarkGray,
  },
  subtitleText: {
    fontSize: theme.FONT_SIZES.medium,
    color: theme.SolidColor.GrayText,
    marginTop: 4,
  },
  healthVitalsContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    borderColor: theme.GradientColor.BlueGradient,
    borderWidth: 1,
    padding: 15,
    borderRadius: theme.SIZES.small,
    backgroundColor: theme.SolidColor.White,
  },
  healthVitalsText: {
    fontFamily: theme.FONTS.semibold,
    fontSize: 18,
    color: theme.SolidColor.DarkGray,
    marginBottom: 12,
  },
  empty: {
    textAlign: 'center',
    color: '#999',
    fontStyle: 'italic',
    marginTop: 20,
    fontSize: 14,
  },
});

export default HomeScreen;
