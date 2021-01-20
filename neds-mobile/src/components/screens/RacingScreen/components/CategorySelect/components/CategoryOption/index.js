import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import HorseSVG from "@neds/components/images/HorseSVG";
import { RFValue } from "react-native-responsive-fontsize";
import styles from "./styles";

const CategoryOption = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <TouchableOpacity style={styles.container}>
      <HorseSVG height={RFValue(25)} />
      <Text style={styles.text}>Horse</Text>
    </TouchableOpacity>
  );
};

export default CategoryOption;
