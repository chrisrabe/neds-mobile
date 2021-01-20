import { StyleSheet } from "react-native";
import { colors } from "@neds/utils/theme";

const globalStyles = StyleSheet.create({
  bgPrimary: {
    backgroundColor: colors.primary,
  },
  bgLightAccent: {
    backgroundColor: colors.lightAccent,
  },
  bgDark: {
    backgroundColor: colors.dark,
  },
  textWhite: {
    color: colors.light,
  },
  textDark: {
    color: colors.dark,
  },
});

export default globalStyles;
