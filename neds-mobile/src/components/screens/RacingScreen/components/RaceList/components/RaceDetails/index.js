import React from "react";
import PropTypes from "prop-types";
import { ListItem, Text, Left, Right } from "native-base";
import CustomIcon from "@neds/components/common/CustomIcon";
import styles from "./styles";

const RaceDetails = ({ meetingName, raceNumber, category, startTime }) => {
  return (
    <ListItem>
      <Left style={styles.leftContainer}>
        <CustomIcon icon={category} width={40} />
        <Text
          style={styles.labelText}
        >{`${meetingName} - R${raceNumber}`}</Text>
      </Left>
      <Right>
        <Text style={styles.timeText}>{startTime}</Text>
      </Right>
    </ListItem>
  );
};

RaceDetails.propTypes = {
  meetingName: PropTypes.string.isRequired,
  raceNumber: PropTypes.number.isRequired,
  category: PropTypes.string,
  startTime: PropTypes.string, // TODO will be a number
};

export default RaceDetails;
