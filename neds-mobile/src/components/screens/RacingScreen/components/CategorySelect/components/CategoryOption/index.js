import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styles from "./styles";
import CustomIcon from "@neds/components/common/CustomIcon";
import { colors } from "@neds/utils/theme";

const CategoryOption = ({ icon, label, isSelected, onPress }) => {
  const contentColor = isSelected ? colors.primary : colors.dark;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <CustomIcon icon={icon} height={RFValue(25)} color={contentColor} />
      <Text
        style={{
          ...styles.text,
          color: contentColor,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

CategoryOption.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func,
};

export default CategoryOption;
