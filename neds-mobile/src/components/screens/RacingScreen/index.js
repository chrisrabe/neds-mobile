import React, { useEffect } from "react";
import BaseScreen from "@neds/components/common/BaseScreen";
import CategorySelect from "./components/CategorySelect";
import RaceList from "./components/RaceList";
import { getNextRaces } from "@neds/api";

const RacingScreen = () => {
  useEffect(() => {
    getNextRaces().then((res) => console.log(res));
  }, []);

  return (
    <BaseScreen headingText="Next to go">
      <CategorySelect />
      <RaceList />
    </BaseScreen>
  );
};

export default RacingScreen;
