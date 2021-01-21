import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  labelText: {
    marginLeft: 10,
    fontSize: RFValue(15),
  },
  timeText: {
    fontSize: RFValue(16),
    fontWeight: "bold",
  },
});

export default styles;
