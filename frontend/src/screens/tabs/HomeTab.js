import { View, Text, StyleSheet } from "react-native";

import HomeScreen from "../HomeScreen";
import theme from "../../constants/theme";

function HomeTab({ props }) {
  return <HomeScreen {...props} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: theme.SolidColor.White,
  },
});

export default HomeTab;
