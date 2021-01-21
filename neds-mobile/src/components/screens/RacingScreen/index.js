import React from "react";
import BaseScreen from "@neds/components/common/BaseScreen";
import CategorySelect from "./components/CategorySelect";
import RaceList from "./components/RaceList";

const RacingScreen = () => {
  return (
    <BaseScreen headingText="Next to go">
      <CategorySelect />
      <RaceList />
    </BaseScreen>
  );
};

export default RacingScreen;
