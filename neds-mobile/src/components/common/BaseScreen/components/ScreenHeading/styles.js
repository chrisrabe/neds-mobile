import { StyleSheet } from "react-native";
import globalStyles from "@neds/utils/global.styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    ...globalStyles.bgDark,
    padding: RFValue(10),
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  headerText: {
    ...globalStyles.textWhite,
    fontSize: RFValue(12),
    fontWeight: "bold",
    textTransform: "uppercase",
    marginLeft: RFValue(10)
  },
});

export default styles;
