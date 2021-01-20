import { StyleSheet } from "react-native";
import globalStyles from "@neds/utils/global.styles";

const styles = StyleSheet.create({
  content: {
    ...globalStyles.bgLightAccent,
    flex: 1,
    flexDirection: "column",
  },
});

export default styles;
