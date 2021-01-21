import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { View, Button, Text } from "native-base";
import CategoryOption from "./components/CategoryOption";
import styles from "./styles";

const CategorySelect = ({ selectedCategory, setSelectedCategory }) => {
  const toggleCategory = useCallback(
    (category) => {
      return () => {
        if (selectedCategory === category) {
          setSelectedCategory(undefined);
        } else {
          setSelectedCategory(category);
        }
      };
    },
    [selectedCategory, setSelectedCategory],
  );

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
        onPress={toggleCategory("greyhound")}
      />
      <CategoryOption
        icon="horse"
        label="Horse"
        isSelected={selectedCategory === "horse"}
        onPress={toggleCategory("horse")}
      />
      <CategoryOption
        icon="harness"
        label="Harness"
        isSelected={selectedCategory === "harness"}
        onPress={toggleCategory("harness")}
      />
    </View>
  );
};

CategorySelect.propTypes = {
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func.isRequired,
};

export default CategorySelect;
