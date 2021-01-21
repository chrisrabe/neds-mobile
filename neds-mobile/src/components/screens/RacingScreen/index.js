import React, { useEffect } from "react";
import PropTypes from "prop-types";
import BaseScreen from "@neds/components/common/BaseScreen";
import CategorySelect from "./components/CategorySelect";
import RaceList from "./components/RaceList/container";
import { getNextRaces } from "@neds/api";

const RacingScreen = ({ setRaces }) => {
  useEffect(() => {
    (async () => {
      const races = await getNextRaces();
      setRaces(races);
    })();
  }, [setRaces]);

  // TODO add a timer here to retrieve races

  return (
    <BaseScreen headingText="Next to go">
      <CategorySelect />
      <RaceList />
    </BaseScreen>
  );
};

RacingScreen.propTypes = {
  setRaces: PropTypes.func.isRequired,
};

export default RacingScreen;
