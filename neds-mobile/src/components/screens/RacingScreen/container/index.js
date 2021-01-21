import { connect } from "react-redux";
import { fetchRaces } from "@neds/redux/slices/racing.slice";
import RacingScreen from "../index";

const mapStateToProps = (state) => ({ races: state.racing.races });

const mapDispatch = { fetchRaces };

export default connect(mapStateToProps, mapDispatch)(RacingScreen);
