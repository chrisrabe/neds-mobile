import { connect } from "react-redux";
import RaceList from "../index";

const mapStateToProps = (state) => ({ ...state.racing });

export default connect(mapStateToProps)(RaceList);
