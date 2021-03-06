import { StyleSheet } from "react-native";
import globalStyles from "@neds/utils/global.styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    ...globalStyles.bgPrimary,
  },
  headerText: {
    ...globalStyles.textWhite,
    fontSize: RFValue(25),
    fontWeight: "bold",
  },
  subHeaderText: {
    ...globalStyles.textDark,
    fontSize: RFValue(15),
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default styles;
