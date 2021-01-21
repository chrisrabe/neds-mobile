import React from "react";
import { List } from "native-base";
import RaceDetails from "./components/RaceDetails";
import { colors } from "@neds/utils/theme";

const RaceList = () => {
  return (
    <List style={{ backgroundColor: colors.light, marginTop: 20 }}>
      <RaceDetails
        category="horse"
        meetingName="LAUNCESTON"
        raceNumber={5}
        startTime="3m 58s"
      />
      <RaceDetails
        category="harness"
        meetingName="LAUNCESTON"
        raceNumber={4}
        startTime="3m 58s"
      />
      <RaceDetails
        category="greyhound"
        meetingName="LAUNCESTON"
        raceNumber={6}
        startTime="3m 58s"
      />
      <RaceDetails
        category="horse"
        meetingName="LAUNCESTON"
        raceNumber={10}
        startTime="3m 58s"
      />
      <RaceDetails
        category="horse"
        meetingName="LAUNCESTON"
        raceNumber={5}
        startTime="3m 58s"
      />
    </List>
  );
};

export default RaceList;
