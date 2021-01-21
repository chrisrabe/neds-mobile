import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ListItem, Text, Left, Right } from "native-base";
import CustomIcon from "@neds/components/common/CustomIcon";
import styles from "./styles";
import dayjs from "dayjs";

const RaceDetails = ({ meetingName, raceNumber, category, startTime }) => {
  const [displayTime, setDisplayTime] = useState("?");

  useEffect(() => {
    if (startTime) {
      // get minute difference between now and start time
      const minuteDiff = startTime.diff(dayjs(), "minutes");
      if (minuteDiff > 60) {
        // show hours, minutes
        const hours = Math.floor(minuteDiff / 60);
        const minutes = minuteDiff - hours * 60;
        const timeStr = `${hours}h ${minutes}m`;
        setDisplayTime(timeStr);
      } else {
        // show minutes, seconds
        const secsDiff = startTime.diff(dayjs(), "seconds");
        const absDiff = Math.abs(secsDiff);
        const minutes = Math.floor(absDiff / 60);
        const seconds = absDiff - minutes * 60;
        const timeStr = `${minutes}m ${seconds}s`;
        setDisplayTime(secsDiff > 0 ? timeStr : `-${timeStr}`);
      }
    }
  }, [setDisplayTime]);

  // calculate start time
  return (
    <ListItem>
      <Left style={styles.leftContainer}>
        <CustomIcon icon={category} width={40} />
        <Text
          style={styles.labelText}
        >{`${meetingName} - R${raceNumber}`}</Text>
      </Left>
      <Right>
        <Text style={styles.timeText}>{displayTime}</Text>
      </Right>
    </ListItem>
  );
};

RaceDetails.propTypes = {
  meetingName: PropTypes.string.isRequired,
  raceNumber: PropTypes.number.isRequired,
  category: PropTypes.string,
  startTime: PropTypes.object, // dayjs object
};

export default RaceDetails;
