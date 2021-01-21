import React from "react";
import { View, Button, Text } from "native-base";
import CategoryOption from "./components/CategoryOption";
import styles from "./styles";

const CategorySelect = () => {
  return (
    <View style={styles.container}>
      <Button style={styles.button}>
        <Text>All races</Text>
      </Button>
      <CategoryOption />
      <CategoryOption />
      <CategoryOption />
    </View>
  );
};

export default CategorySelect;
