import React from "react";
import PropTypes from "prop-types";
import { View, Text, Icon } from "native-base";
import styles from "./styles";

const ScreenHeading = ({ headingText }) => {
  return (
    <View style={styles.container}>
      <Icon
        type="FontAwesome5"
        name="stopwatch"
        style={{ ...styles.headerText, fontSize: 20 }}
      />
      <Text style={styles.headerText}>{headingText}</Text>
    </View>
  );
};

ScreenHeading.propTypes = {
  headingText: PropTypes.string,
};

export default ScreenHeading;
