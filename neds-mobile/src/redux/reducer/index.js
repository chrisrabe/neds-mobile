import { combineReducers } from "@reduxjs/toolkit";

import racingReducer from "../slices/racing.slice";

export default combineReducers({
  racing: racingReducer,
});
