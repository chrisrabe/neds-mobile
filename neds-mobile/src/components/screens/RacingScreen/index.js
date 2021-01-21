import React, { useEffect } from "react";
import PropTypes from "prop-types";
import BaseScreen from "@neds/components/common/BaseScreen";
import CategorySelect from "./components/CategorySelect/container";
import RaceList from "./components/RaceList/container";
import useInterval from "@neds/hook/useInterval";
import RaceDetailsModel from "@neds/models/RaceDetails";
import dayjs from "dayjs";

const RacingScreen = ({ races, fetchRaces }) => {
  useEffect(() => {
    fetchRaces();
  }, [fetchRaces]);

  useInterval(() => {
    // update data if earliest race happened a minute ago
    const first = races[0];
    const secsDiff = first.startTime.diff(dayjs(), "seconds");
    if (secsDiff < -60) {
      fetchRaces();
    }
  }, 1000);

  return (
    <BaseScreen headingText="Next to go">
      <CategorySelect />
      <RaceList />
    </BaseScreen>
  );
};

RacingScreen.propTypes = {
  races: PropTypes.arrayOf(RaceDetailsModel).isRequired,
  fetchRaces: PropTypes.func.isRequired,
};

export default RacingScreen;
