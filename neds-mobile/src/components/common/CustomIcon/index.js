import React from "react";
import PropTypes from "prop-types";
import GreyHoundSVG from "@neds/components/images/GreyHoundSVG";
import HarnessSVG from "@neds/components/images/HarnessSVG";
import HorseSVG from "@neds/components/images/HorseSVG";
import { View, Text } from "native-base";

const CustomIcon = ({ icon, width, height, color }) => {
  switch (icon) {
    case "horse":
      return <HorseSVG width={width} height={height} color={color} />;
    case "greyhound":
      return <GreyHoundSVG width={width} height={height} color={color} />;
    case "harness":
      return <HarnessSVG width={width} height={height} color={color} />;
    default:
      return (
        <View>
          <Text>?</Text>
        </View>
      );
  }
};

CustomIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default CustomIcon;
