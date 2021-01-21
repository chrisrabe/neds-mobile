import { connect } from "react-redux";
import { setRaces } from "@neds/redux/slices/racing.slice";
import RacingScreen from "../index";

const mapStateToProps = () => ({});

const mapDispatch = { setRaces };

export default connect(mapStateToProps, mapDispatch)(RacingScreen);
