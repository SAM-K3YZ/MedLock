import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import theme from '../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchInput from '../components/SearchInput';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const SearchScreen = ({}) => {
  const [searchQuery, setSearchQuery] = useState();

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.navigationTab}>
            <View style={styles.navigationIcon}>
              <MaterialIcons
                name="keyboard-backspace"
                color={theme.SolidColor.DarkGray}
                size={24}
                onPress={navigation.goBack}
              />
            </View>
            <View style={styles.navigationText}>
              <Text style={styles.header}>Search</Text>
            </View>
          </View>
          <View>
            <SearchInput
              placeholder="Search doctors, medicine, drugs etc..."
              value={searchQuery}
              onChangeText={searchQuery}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: theme.SolidColor.White,
  },
  navigationTab: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  navigationIcon: {
    marginEnd: 20,
    alignItems: 'center',
  },
  navigationText: {
    alignItems: 'center',
  },
  header: {
    color: theme.SolidColor.DarkGray,
    fontFamily: theme.FONTS.semibold,
    fontSize: theme.FONT_SIZES.large,
  },
  searchInput: {
    // marginEnd: 10,
  },
});
