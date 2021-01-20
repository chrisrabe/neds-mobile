import { StyleSheet } from "react-native";
import globalStyles from "@neds/utils/global.styles";

const styles = StyleSheet.create({
  disabledTab: {
    ...globalStyles.bgLightAccent,
  },
  activeTab: {
    ...globalStyles.bgPrimary,
  },
  tabText: {
    ...globalStyles.textDark,
  },
  disabledText: {
    ...globalStyles.textDark,
    opacity: 0.3
  }
});

export default styles;
