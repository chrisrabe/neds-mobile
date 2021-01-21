import PropTypes from "prop-types";

const RaceDetailsModel = PropTypes.shape({
  id: PropTypes.string.isRequired,
  meetingName: PropTypes.string.isRequired,
  startTime: PropTypes.object.isRequired, // dayjs object
  raceNumber: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
});

export default RaceDetailsModel;
