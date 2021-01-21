import { connect } from "react-redux";
import { setRaces } from "@neds/redux/slices/racing.slice";
import RacingScreen from "../index";

const mapStateToProps = (state) => ({
  races: state.racing.races
});

const mapDispatch = { setRaces };

export default connect(mapStateToProps, mapDispatch)(RacingScreen)
