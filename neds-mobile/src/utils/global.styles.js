import { StyleSheet } from "react-native";
import { colors } from "@neds/utils/theme";

const styles = StyleSheet.create({
  bgPrimary: {
    backgroundColor: colors.primary,
  },
  bgLightAccent: {
    backgroundColor: colors.lightAccent
  },
  textWhite: {
    color: colors.light,
  },
  textDark: {
    color: colors.dark,
  },
});

export default styles;
