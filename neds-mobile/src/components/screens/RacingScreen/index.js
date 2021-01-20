import React from "react";
import { Text } from "native-base";
import BaseScreen from "@neds/components/common/BaseScreen";
import CategorySelect from "./components/CategorySelect";

const RacingScreen = () => {
  return (
    <BaseScreen headingText="Next to go">
      <CategorySelect />
      <Text>This is a racing screen</Text>
    </BaseScreen>
  );
};

export default RacingScreen;
