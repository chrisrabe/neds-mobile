import { StyleSheet } from "react-native";
import { colors } from "@neds/utils/theme";
import globalStyles from "@neds/utils/global.styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    height: RFValue(50),
    backgroundColor: colors.light,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    ...globalStyles.textDark,
    marginTop: 2,
    textAlign: "center"
  },
});

export default styles;
