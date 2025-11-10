import { StyleSheet, Text, View } from "react-native";
import theme from "../constants/theme";

export default function CategotyCard({ img, text }) {
  return (
    <View style={styles.card}>
      <View style={styles.top}></View>
      <View style={styles.bottom}>
        <Text style={styles.title}>{categoryName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    height: theme.SIZES.large,
  },
  title: {
    fontWeight: theme.FONTS.regular,
    color: theme.SolidColor.DarkGray,
  },
});
