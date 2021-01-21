import PropTypes from "prop-types";

const RaceDetails = PropTypes.shape({
  meetingName: PropTypes.string.isRequired,
  startTime: PropTypes.number.isRequired,
  raceNumber: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
});

export default RaceDetails;