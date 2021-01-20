import React from "react";
import { View } from "react-native";
import CategoryOption from "@neds/components/screens/RacingScreen/components/CategorySelect/components/CategoryOption";

const CategorySelect = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <CategoryOption />
      <CategoryOption />
      <CategoryOption />
    </View>
  );
};

export default CategorySelect;
