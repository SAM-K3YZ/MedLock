import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../constants/theme';
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import WhatToDoCard from '../components/WhatToDo';
import AmbulanceRequestCard from '../components/AmbulanceRequestCard';

function EmergencyScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.top}>
            <View style={styles.backBtn}>
              <MaterialIcons
                name="keyboard-backspace"
                color={theme.SolidColor.DarkGray}
                size={24}
                onPress={navigation.goBack}
              />
            </View>

            {/* Header */}
            <View style={styles.headerText}>
              <View style={styles.headerIcon}>
                <FontAwesome6
                  name="triangle-exclamation"
                  color={theme.SolidColor.White}
                  size={24}
                  onPress={navigation.goBack}
                />
              </View>
              <View>
                <View>
                  <Text style={styles.header}>Emergency Services</Text>
                </View>
                <View>
                  <Text style={styles.headerSubtitle}>
                    Help is available 24/7
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/*What to do  */}
          <View>
            <WhatToDoCard />
          </View>

          <View>
            <AmbulanceRequestCard />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default EmergencyScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  top: {
    //flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 20,
  },
  backBtn: {
    marginEnd: 10,
  },
  header: {
    fontFamily: theme.FONTS.regular,
    fontSize: 18,
    color: theme.SolidColor.White,
  },
  headerText: {
    padding: 10,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 2,
    backgroundColor: theme.SolidColor.RedError,
  },
  headerIcon: {
    marginEnd: 10,
  },
  headerSubtitle: {
    color: theme.SolidColor.White,
    fontFamily: theme.FONTS.regular,
    fontSize: 13,
  },
});
