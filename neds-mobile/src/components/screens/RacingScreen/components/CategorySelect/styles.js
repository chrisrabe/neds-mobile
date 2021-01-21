import { StyleSheet } from "react-native";
import { colors } from "@neds/utils/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: colors.dark,
    paddingBottom: 10,
  },
  button: { marginRight: 10, backgroundColor: colors.dark },
});

export default styles;
