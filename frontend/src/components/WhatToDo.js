import { Text } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';
import theme from '../constants/theme';

const emergencySteps = [
  'Stay calm and assess the situation',
  'Call emergency services immediately',
  'Do not move the patient unless necessary',
  'Apply first aid if you are trained',
  'Follow instructions from medical professionals',
];

function WhatToDoCard() {
  return (
    <View style={styles.whatToDoCard}>
      <Text style={styles.toDoHeaderText}>What to do in an Emergency</Text>

      <View style={styles.list}>
        {emergencySteps.map((step, index) => (
          <Text key={index} style={styles.listItem}>
            • {step}
          </Text>
        ))}
      </View>
    </View>
  );
}

export default WhatToDoCard;

const styles = StyleSheet.create({
  whatToDoCard: {
    marginTop: 20,
    backgroundColor: theme.SolidColor.LightBlue,
    padding: 20,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: theme.SolidColor.SecondaryBlue,
  },
  toDoHeaderText: {
    fontFamily: theme.FONTS.semibold,
    fontSize: 18,
    marginBottom: 10,
  },
  list: {
    gap: 6,
  },
  listItem: {
    fontSize: 14,
    color: theme.SolidColor.GrayText,
  },
});
