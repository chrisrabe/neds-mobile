import PropTypes from "prop-types";

const RaceDetails = PropTypes.shape({
  meetingName: PropTypes.string.isRequired,
  startTime: PropTypes.object.isRequired, // dayjs object
  raceNumber: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
});

export default RaceDetails;
