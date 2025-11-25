import { Text, View, StyleSheet } from 'react-native';

export default function QuickAccessCard({ qaData = [] }) {
  return (
    <View style={styles.qaGrid}>
      {qaData.map((item) => (
        <View key={item.id} style={styles.qaItem}>
          {item.icon}
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
    height: 90,
    borderRadius: 12,
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qaText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
  },
});
