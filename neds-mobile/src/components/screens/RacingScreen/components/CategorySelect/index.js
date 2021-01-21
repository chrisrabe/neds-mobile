import React from "react";
import PropTypes from "prop-types";
import { View, Button, Text } from "native-base";
import CategoryOption from "./components/CategoryOption";
import styles from "./styles";

const CategorySelect = ({ selectedCategory, setSelectedCategory }) => {
  // In future, can make defining category options more generic.
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        onPress={() => setSelectedCategory(undefined)}
      >
        <Text>All races</Text>
      </Button>
      <CategoryOption
        icon="greyhound"
        label="Greyhound"
        isSelected={selectedCategory === "greyhound"}
        onPress={() => setSelectedCategory("greyhound")}
      />
      <CategoryOption
        icon="horse"
        label="Horse"
        isSelected={selectedCategory === "horse"}
        onPress={() => setSelectedCategory("horse")}
      />
      <CategoryOption
        icon="harness"
        label="Harness"
        isSelected={selectedCategory === "harness"}
        onPress={() => setSelectedCategory("harness")}
      />
    </View>
  );
};

CategorySelect.propTypes = {
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func.isRequired,
};

export default CategorySelect;
