import { connect } from "react-redux";
import { setSelectedCategory } from "@neds/redux/slices/racing.slice";
import CategorySelect from "../index";

const mapStateToProps = (state) => ({
  selectedCategory: state.racing.selectedCategory,
});

const mapDispatch = { setSelectedCategory };

export default connect(mapStateToProps, mapDispatch)(CategorySelect);
