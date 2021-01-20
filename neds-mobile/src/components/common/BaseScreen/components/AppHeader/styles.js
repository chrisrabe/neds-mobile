import { StyleSheet } from "react-native";
import globalStyles from "@neds/utils/global.styles";

const styles = StyleSheet.create({
  container: {
    ...globalStyles.bgPrimary,
  },
  headerText: {
    ...globalStyles.textWhite,
    fontSize: 25,
    fontWeight: "bold",
  },
  subHeaderText: {
    ...globalStyles.textDark,
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default styles;
