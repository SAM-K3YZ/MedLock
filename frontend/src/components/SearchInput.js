import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import theme from '../constants/theme';
export default function SearchInput() {
  return (
    <TouchableOpacity style={styles.searchButton} activeOpacity={0.7}>
      <MaterialIcons
        name="search"
        size={24}
        color={theme.SolidColor.GrayText}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: theme.SIZES.small,
    padding: 15,
    marginVertical: 15,
    gap: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  searchPlaceholder: {
    flex: 1,
    color: theme.SolidColor.GrayText,
    fontSize: theme.FONT_SIZES.medium,
    fontFamily: theme.FONTS.regular,
  },
});
