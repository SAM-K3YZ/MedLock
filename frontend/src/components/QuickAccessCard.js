import { Text, View, StyleSheet } from 'react-native';
import theme from '../constants/theme';

export default function QuickAccessCard({ qaData = [] }) {
  return (
    <View style={styles.qaGrid}>
      {qaData.map((item) => (
        <View key={item.id} style={styles.qaItem}>
          <View style={[styles.iconBg, { backgroundColor: item.bg }]}>
            {item.icon}
          </View>

          <Text style={styles.qaText}>{item.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  qaGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    padding: 10,
  },
  qaItem: {
    width: 90,
    height: 100,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderColor: theme.SolidColor.Gray,
    borderWidth: 0.6,
    padding: 10,
  },
  iconBg: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qaText: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 11,
    fontWeight: '600',
    padding: 5,
  },
});
