import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { List } from "native-base";
import RaceDetails from "./components/RaceDetails";
import { colors } from "@neds/utils/theme";
import RaceDetailsModel from "@neds/models/RaceDetails";

const RaceList = ({ races, selectedCategory }) => {
  const [racesDisplayed, setRacesDisplayed] = useState([]);

  useEffect(() => {
    if (selectedCategory !== undefined) {
      const filteredRaces = races.filter(
        (item) => item.category === selectedCategory,
      );
      setRacesDisplayed(filteredRaces.slice(0, 5));
    } else {
      setRacesDisplayed(races.slice(0, 5));
    }
  }, [races, selectedCategory, setRacesDisplayed]);

  return (
    <List style={{ backgroundColor: colors.light, marginTop: 20 }}>
      {racesDisplayed.map((race) => (
        <RaceDetails
          key={race.id}
          raceNumber={race.raceNumber}
          meetingName={race.meetingName}
          category={race.category}
          startTime={race.startTime}
        />
      ))}
    </List>
  );
};

RaceList.propTypes = {
  races: PropTypes.arrayOf(RaceDetailsModel),
  selectedCategory: PropTypes.string,
};

RaceList.defaultProps = {
  races: [],
};

export default RaceList;
