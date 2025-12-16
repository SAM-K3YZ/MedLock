import { StyleSheet, Text, View } from 'react-native';
import theme from '../constants/theme';

function AmbulanceRequestCard({}) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topLeft}>
          <Text style={styles.ambTitle}>Ambulance Requested</Text>
          <View style={styles.id}>
            <Text style={styles.grayText}>Request ID:</Text>
            <Text style={styles.grayText}>#EMG{}-1234</Text>
          </View>
        </View>
        <View style={styles.topRight}>
          <Text style={styles.statusBtn}>Active</Text>
        </View>
      </View>
    </View>
  );
}

export default AmbulanceRequestCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.SolidColor.RedError,
    //backgroundColor: theme.SolidColor.LightRed,
  },
  top: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ambTitle: {
    color: theme.SolidColor.DarkGray,
    fontFamily: theme.FONTS.semibold,
    fontSize: 18,
  },
  statusBtn: {
    color: theme.SolidColor.White,
    fontFamily: theme.FONTS.regular,
    fontSize: 14,
    padding: 5,
    borderRadius: 4,
    backgroundColor: theme.SolidColor.GreenSuccess,
  },
  id: {
    gap: 5,
    flexDirection: 'row',
  },
  grayText: {
    fontFamily: theme.FONTS.regular,
    fontSize: theme.FONT_SIZES.medium,
    color: theme.SolidColor.GrayText,
  },
});
