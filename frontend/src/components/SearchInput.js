import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import theme from '../constants/theme';
export default function SearchInput({
  placeholder,
  style,
  onChangeText,
  value,
}) {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.textInput}>
        <TextInput
          placeholder={placeholder}
          style={[style, styles.searchPlaceholder]}
          value={value}
          onChangeText={onChangeText}
          returnKeyType="search"
        />
      </View>
      {/* <TouchableOpacity style={styles.searchButton} activeOpacity={0.7}>
        <MaterialIcons name="search" size={24} color={theme.SolidColor.White} />
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 15,
    //justifyContent: 'space-between',
  },
  searchButton: {
    width: 'auto',
    alignItems: 'center',
    borderRadius: theme.SIZES.small,
    padding: 10,
    backgroundColor: theme.SolidColor.SecondaryBlue,
  },
  searchPlaceholder: {
    color: theme.SolidColor.GrayText,
    fontSize: theme.FONT_SIZES.medium,
    fontFamily: theme.FONTS.regular,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingStart: 15,
    gap: 10,
  },
  textInput: {
    width: '100%',
    marginEnd: 25,
    paddingStart: 10,
    //backgroundColor: theme.SolidColor.Gray,
  },
});
